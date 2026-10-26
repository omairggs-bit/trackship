/* =========================================================
   MASAR — Tracking simulator
   Deterministically derives a shipment "state" from the
   tracking number string itself. The hashing runs in a small
   freestanding C++ module compiled straight to WebAssembly
   (masar_tracking.wasm, no emscripten/libc). Falls back to an
   identical JS hash if the .wasm can't be fetched (e.g. opened
   via file://).
   ========================================================= */

const MASAR_CARRIERS = ["Track Ship"];
const MASAR_DESTS = [
  {ar:"جدة، السعودية", en:"Jeddah, Saudi Arabia", ur:"جدہ، سعودی عرب"},
  {ar:"دبي، الإمارات", en:"Dubai, UAE", ur:"دبئی، متحدہ عرب امارات"},
  {ar:"القاهرة، مصر", en:"Cairo, Egypt", ur:"قاہرہ، مصر"},
  {ar:"الخرطوم، السودان", en:"Khartoum, Sudan", ur:"خرطوم، سوڈان"},
  {ar:"لاهور، باكستان", en:"Lahore, Pakistan", ur:"لاہور، پاکستان"},
  {ar:"لندن، بريطانيا", en:"London, UK", ur:"لندن، برطانیہ"},
];

let _masarTrackWasm = null;
let _masarTrackWasmTried = false;

async function masarLoadTrackWasm(){
  if(_masarTrackWasmTried) return _masarTrackWasm;
  _masarTrackWasmTried = true;
  try{
    const resp = await fetch('masar_tracking.wasm');
    if(!resp.ok) throw new Error('fetch failed');
    const bytes = await resp.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes);
    _masarTrackWasm = instance.exports;
  }catch(e){
    console.warn('Masar: WASM tracking engine unavailable, using JS fallback.', e);
    _masarTrackWasm = null;
  }
  return _masarTrackWasm;
}

function masarHashJS(str){
  let h = 2166136261;
  for(let i=0;i<str.length;i++){
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Returns a deterministic pseudo-shipment record for any tracking string.
 * stage: 0-5 index into the 6 timeline steps (t1..t6 in the i18n dict)
 */
async function masarResolveTracking(code){
  const clean = (code || '').trim().toUpperCase();
  if(!clean) return null;

  const wasm = await masarLoadTrackWasm();
  let h, stage, carrierIdx, destIdx, etaDays;

  if(wasm){
    const mem = new Uint16Array(wasm.memory.buffer);
    const ptr = wasm.masar_buffer_ptr() / 2;
    for(let i=0;i<clean.length && i<256;i++) mem[ptr+i] = clean.charCodeAt(i);
    h = wasm.masar_hash(Math.min(clean.length, 256));
    stage = wasm.masar_stage(h);
    carrierIdx = wasm.masar_carrier_index(h, MASAR_CARRIERS.length);
    destIdx = wasm.masar_dest_index(h, MASAR_DESTS.length);
    etaDays = wasm.masar_eta_days(h, stage);
  } else {
    h = masarHashJS(clean);
    stage = h % 6;
    carrierIdx = h % MASAR_CARRIERS.length;
    destIdx = Math.floor(h / 7) % MASAR_DESTS.length;
    const remaining = Math.max(0, 5 - stage);
    etaDays = remaining + (h % 3);
  }

  const eta = new Date();
  eta.setDate(eta.getDate() + etaDays);

  return {
    code: clean,
    stage,
    carrier: MASAR_CARRIERS[carrierIdx],
    dest: MASAR_DESTS[destIdx],
    eta,
    engine: wasm ? 'wasm' : 'js',
  };
}
