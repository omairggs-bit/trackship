/* Track Ship pricing
   Net rates were raised above the previous tariff so the retained
   revenue is higher. VAT is 15% because Track Systems Company is
   registered (314968452300003) with effect from 1 September 2026.
   Extra kilograms are billed per started kilogram. */

const TRACKSHIP_STORE = "https://stor.tracksystems.com.sa/";
const TRACKSHIP_CART_KEY = "trackship_cart_v1";

const TS_RATES = {
  vat: 0.15,
  minBillable: 0.5,
  insuranceRate: 0.02,
  insuranceMin: 8,
  pickup: 36,
  express: { dry: 15, cold: 22, intl: 35, sudan: 45 },
  temp: { chill: 0, cool: 10, freeze: 22, deep: 36 },
  dry: {
    same:    { base: 22, includedKg: 5, perKg: 5 },
    between: { base: 29, includedKg: 5, perKg: 7 },
  },
  cold: {
    same:    { base: 42, includedKg: 5, perKg: 8 },
    between: { base: 54, includedKg: 5, perKg: 11 },
  },
  intl: {
    gulf:     { base: 95,  includedKg: 5, perKg: 17 },
    mena:     { base: 115, includedKg: 5, perKg: 20 },
    asia:     { base: 149, includedKg: 5, perKg: 25 },
    europe:   { base: 199, includedKg: 5, perKg: 31 },
    americas: { base: 249, includedKg: 5, perKg: 39 },
    africa:   { base: 169, includedKg: 5, perKg: 27 },
    oceania:  { base: 279, includedKg: 5, perKg: 42 },
    other:    { base: 219, includedKg: 5, perKg: 33 },
  },
  sudan: {
    capital: { base: 62, includedKg: 5, perKg: 12 },
    port:    { base: 72, includedKg: 5, perKg: 14 },
    other:   { base: 84, includedKg: 5, perKg: 16 },
  },
};

const TS_ETA = {
  dry: {
    same: { ar: "خلال 24 ساعة", en: "Within 24 hours", ur: "24 گھنٹوں کے اندر" },
    between: { ar: "1–3 أيام", en: "1–3 days", ur: "1–3 دن" },
    sameFast: { ar: "خلال ساعات اليوم", en: "Within a few hours today", ur: "آج چند گھنٹوں میں" },
    betweenFast: { ar: "اليوم التالي", en: "Next day", ur: "اگلا دن" },
  },
  cold: {
    same: { ar: "12–24 ساعة", en: "12–24 hours", ur: "12–24 گھنٹے" },
    between: { ar: "1–2 أيام", en: "1–2 days", ur: "1–2 دن" },
    sameFast: { ar: "خلال 12 ساعة", en: "Within 12 hours", ur: "12 گھنٹوں میں" },
    betweenFast: { ar: "اليوم التالي", en: "Next day", ur: "اگلا دن" },
  },
  intl: {
    gulf: { ar: "2–4 أيام", en: "2–4 days", ur: "2–4 دن" },
    mena: { ar: "3–6 أيام", en: "3–6 days", ur: "3–6 دن" },
    asia: { ar: "4–8 أيام", en: "4–8 days", ur: "4–8 دن" },
    europe: { ar: "5–9 أيام", en: "5–9 days", ur: "5–9 دن" },
    americas: { ar: "6–12 يومًا", en: "6–12 days", ur: "6–12 دن" },
    africa: { ar: "5–10 أيام", en: "5–10 days", ur: "5–10 دن" },
    oceania: { ar: "7–14 يومًا", en: "7–14 days", ur: "7–14 دن" },
    other: { ar: "6–14 يومًا", en: "6–14 days", ur: "6–14 دن" },
  },
  sudan: {
    capital: { ar: "5–9 أيام", en: "5–9 days", ur: "5–9 دن" },
    port: { ar: "6–10 أيام", en: "6–10 days", ur: "6–10 دن" },
    other: { ar: "7–12 يومًا", en: "7–12 days", ur: "7–12 دن" },
  },
};

const TS_SA = [
  ["RUH","الرياض","Riyadh","ریاض"],
  ["JED","جدة","Jeddah","جدہ"],
  ["MEC","مكة المكرمة","Makkah","مکہ"],
  ["MED","المدينة المنورة","Madinah","مدینہ"],
  ["TIF","الطائف","Taif","طائف"],
  ["DMM","الدمام","Dammam","دمام"],
  ["KHO","الخبر","Khobar","خبر"],
  ["DHA","الظهران","Dhahran","ظہران"],
  ["HOF","الهفوف","Hofuf","ہفوف"],
  ["QAT","القطيف","Qatif","قطیف"],
  ["JUB","الجبيل","Jubail","جبیل"],
  ["YNB","ينبع","Yanbu","ینبع"],
  ["BRD","بريدة","Buraydah","بریدہ"],
  ["UNZ","عنيزة","Unaizah","عنیزہ"],
  ["HAS","حائل","Hail","حائل"],
  ["TUU","تبوك","Tabuk","تبوک"],
  ["AHB","أبها","Abha","ابہا"],
  ["KMX","خميس مشيط","Khamis Mushait","خمیس مشیط"],
  ["GIZ","جازان","Jazan","جازان"],
  ["EAM","نجران","Najran","نجران"],
  ["BHH","الباحة","Al Baha","باہا"],
  ["AJF","سكاكا","Sakaka","سکاکا"],
  ["RAE","عرعر","Arar","عرعر"],
  ["HBT","حفر الباطن","Hafar Al Batin","حفر الباطن"],
  ["URY","القريات","Qurayyat","قریات"],
  ["AKJ","الخرج","Al Kharj","خرج"],
  ["WAE","وادي الدواسر","Wadi Al Dawasir","وادی الدواسر"],
  ["ULH","العلا","Al Ula","العلا"],
  ["BSH","بيشة","Bisha","بیشہ"],
  ["ABQ","أبقيق","Abqaiq","بقیق"],
];

const TS_SUDAN = [
  ["KRT","capital","الخرطوم","Khartoum","خرطوم"],
  ["OMD","capital","أم درمان","Omdurman","ام درمان"],
  ["KHB","capital","الخرطوم بحري","Khartoum North","خرطوم بحری"],
  ["PZU","port","بورتسودان","Port Sudan","پورٹ سوڈان"],
  ["WMD","other","ود مدني","Wad Madani","ود مدنی"],
  ["EBD","other","الأبيض","El Obeid","الابیض"],
  ["KSL","other","كسلا","Kassala","کسلا"],
  ["GDS","other","القضارف","Gedaref","القضارف"],
  ["ELF","other","الفاشر","El Fasher","الفاشر"],
  ["UYL","other","نيالا","Nyala","نیالا"],
  ["GEN","other","الجنينة","Geneina","الجنینہ"],
  ["ATB","other","عطبرة","Atbara","عطبرہ"],
  ["DOG","other","دنقلا","Dongola","دنقلا"],
  ["KST","other","كوستي","Kosti","کوستی"],
  ["SNR","other","سنار","Sennar","سنار"],
  ["DAM","other","الدمازين","Ad Damazin","الدمازین"],
  ["RBK","other","ربك","Rabak","ربک"],
  ["SHN","other","شندي","Shendi","شندی"],
  ["KDX","other","كادوقلي","Kadugli","کادقلی"],
  ["NHU","other","حلفا الجديدة","New Halfa","حلفا جدید"],
  ["KRM","other","كريمة","Karima","کریمہ"],
];

const TS_COUNTRIES = [
  ["AE","gulf","الإمارات","United Arab Emirates","متحدہ عرب امارات"],
  ["KW","gulf","الكويت","Kuwait","کویت"],
  ["BH","gulf","البحرين","Bahrain","بحرین"],
  ["OM","gulf","عُمان","Oman","عمان"],
  ["QA","gulf","قطر","Qatar","قطر"],
  ["EG","mena","مصر","Egypt","مصر"],
  ["JO","mena","الأردن","Jordan","اردن"],
  ["LB","mena","لبنان","Lebanon","لبنان"],
  ["IQ","mena","العراق","Iraq","عراق"],
  ["YE","mena","اليمن","Yemen","یمن"],
  ["SY","mena","سوريا","Syria","شام"],
  ["PS","mena","فلسطين","Palestine","فلسطین"],
  ["TR","mena","تركيا","Turkey","ترکی"],
  ["MA","mena","المغرب","Morocco","مراکش"],
  ["TN","mena","تونس","Tunisia","تونس"],
  ["DZ","mena","الجزائر","Algeria","الجزائر"],
  ["LY","mena","ليبيا","Libya","لیبیا"],
  ["IN","asia","الهند","India","بھارت"],
  ["PK","asia","باكستان","Pakistan","پاکستان"],
  ["BD","asia","بنغلاديش","Bangladesh","بنگلہ دیش"],
  ["CN","asia","الصين","China","چین"],
  ["HK","asia","هونغ كونغ","Hong Kong","ہانگ کانگ"],
  ["JP","asia","اليابان","Japan","جاپان"],
  ["KR","asia","كوريا الجنوبية","South Korea","جنوبی کوریا"],
  ["SG","asia","سنغافورة","Singapore","سنگاپور"],
  ["MY","asia","ماليزيا","Malaysia","ملائیشیا"],
  ["ID","asia","إندونيسيا","Indonesia","انڈونیشیا"],
  ["TH","asia","تايلاند","Thailand","تھائی لینڈ"],
  ["PH","asia","الفلبين","Philippines","فلپائن"],
  ["VN","asia","فيتنام","Vietnam","ویتنام"],
  ["LK","asia","سريلانكا","Sri Lanka","سری لنکا"],
  ["NP","asia","نيبال","Nepal","نیپال"],
  ["GB","europe","بريطانيا","United Kingdom","برطانیہ"],
  ["DE","europe","ألمانيا","Germany","جرمنی"],
  ["FR","europe","فرنسا","France","فرانس"],
  ["IT","europe","إيطاليا","Italy","اٹلی"],
  ["ES","europe","إسبانيا","Spain","سپین"],
  ["NL","europe","هولندا","Netherlands","نیدرلینڈز"],
  ["BE","europe","بلجيكا","Belgium","بیلجیم"],
  ["CH","europe","سويسرا","Switzerland","سوئٹزرلینڈ"],
  ["AT","europe","النمسا","Austria","آسٹریا"],
  ["SE","europe","السويد","Sweden","سویڈن"],
  ["NO","europe","النرويج","Norway","ناروے"],
  ["DK","europe","الدنمارك","Denmark","ڈنمارک"],
  ["IE","europe","أيرلندا","Ireland","آئرلینڈ"],
  ["PL","europe","بولندا","Poland","پولینڈ"],
  ["GR","europe","اليونان","Greece","یونان"],
  ["PT","europe","البرتغال","Portugal","پرتگال"],
  ["US","americas","الولايات المتحدة","United States","ریاستہائے متحدہ"],
  ["CA","americas","كندا","Canada","کینیڈا"],
  ["MX","americas","المكسيك","Mexico","میکسیکو"],
  ["BR","americas","البرازيل","Brazil","برازیل"],
  ["AR","americas","الأرجنتين","Argentina","ارجنٹائن"],
  ["AU","oceania","أستراليا","Australia","آسٹریلیا"],
  ["NZ","oceania","نيوزيلندا","New Zealand","نیوزی لینڈ"],
  ["ET","africa","إثيوبيا","Ethiopia","ایتھوپیا"],
  ["KE","africa","كينيا","Kenya","کینیا"],
  ["NG","africa","نيجيريا","Nigeria","نائجیریا"],
  ["ZA","africa","جنوب أفريقيا","South Africa","جنوبی افریقہ"],
  ["GH","africa","غانا","Ghana","گھانا"],
  ["UG","africa","أوغندا","Uganda","یوگنڈا"],
  ["TZ","africa","تنزانيا","Tanzania","تنزانیہ"],
  ["XX","other","دولة أخرى","Other country","کوئی اور ملک"],
];

function tsLang(){
  return (typeof masarGetLang === "function" && masarGetLang()) || "ar";
}
function tsDict(){
  const lang = tsLang();
  return (typeof MASAR_DICT !== "undefined" && MASAR_DICT[lang]) || {};
}
function tsL(ar, en, ur){
  const lang = tsLang();
  return lang === "en" ? en : lang === "ur" ? ur : ar;
}
function tsPick(row){
  const lang = tsLang();
  if(lang === "en") return row[2];
  if(lang === "ur") return row[3];
  return row[1];
}
function tsRound2(n){ return Math.round((Number(n) + Number.EPSILON) * 100) / 100; }
function tsMoney(n, lang){
  const value = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(tsRound2(n));
  if((lang || tsLang()) === "en") return "SAR " + value;
  return value + " ر.س";
}
function tsEsc(s){
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
}
function tsVolumetric(l, w, h){
  l = Number(l) || 0; w = Number(w) || 0; h = Number(h) || 0;
  if(l <= 0 || w <= 0 || h <= 0) return 0;
  return (l * w * h) / 5000;
}
function tsExtraUnits(billable, included){
  const extra = billable - included;
  if(extra <= 0.0001) return 0;
  return Math.ceil(extra - 1e-9);
}
function tsResolveTemp(temperature, customTemp){
  if(temperature === "custom"){
    const t = Number(customTemp);
    if(!Number.isFinite(t)) return null;
    if(t <= -25) return "deep";
    if(t <= -1) return "freeze";
    if(t <= 4) return "cool";
    return "chill";
  }
  if(TS_RATES.temp[temperature] === undefined) return null;
  return temperature;
}
function tsEta(service, zone, express){
  const table = TS_ETA[service];
  if(!table) return { ar:"—", en:"—", ur:"—" };
  if((service === "dry" || service === "cold") && express){
    return table[zone === "same" ? "sameFast" : "betweenFast"];
  }
  const base = table[zone] || table.other || table.between;
  if(express){
    return {
      ar: base.ar + " · أولوية",
      en: base.en + " · priority",
      ur: base.ur + " · ترجیح",
    };
  }
  return base;
}
function tsServiceName(service){
  const names = {
    dry: ["شحن جاف محلي","Local dry shipping","مقامی خشک شپنگ"],
    cold: ["شحن مبرّد","Cold-chain shipping","کولڈ چین شپنگ"],
    intl: ["شحن دولي","International shipping","بین الاقوامی شپنگ"],
    sudan: ["الشحن إلى السودان","Shipping to Sudan","سوڈان شپنگ"],
  };
  const row = names[service] || names.dry;
  return tsL(row[0], row[1], row[2]);
}
function tsTempLabel(key, custom){
  const labels = {
    chill: ["مبرّد 2 إلى 8°م","Chilled 2 to 8°C","ٹھنڈا 2 تا 8°C"],
    cool: ["بارد 0 إلى 4°م","Cool 0 to 4°C","سرد 0 تا 4°C"],
    freeze: ["مجمّد −18°م","Frozen −18°C","منجمد −18°C"],
    deep: ["تجميد عميق −25°م أو أقل","Deep freeze −25°C or below","گہری منجمد −25°C"],
  };
  if(key === "custom") return tsTempLabel(tsResolveTemp("custom", custom), custom);
  const row = labels[key];
  if(!row) return "—";
  const name = tsL(row[0], row[1], row[2]);
  if(custom !== undefined && custom !== "" && custom !== null && key) return name;
  return name;
}
function tsSaName(code){
  const row = TS_SA.find((item) => item[0] === code);
  if(!row) return "—";
  const lang = tsLang();
  if(lang === "en") return row[2];
  if(lang === "ur") return row[3];
  return row[1];
}
function tsSdName(code){
  const row = TS_SUDAN.find((item) => item[0] === code);
  if(!row) return "—";
  const lang = tsLang();
  if(lang === "en") return row[3];
  if(lang === "ur") return row[4];
  return row[2];
}
function tsCountry(code){
  return TS_COUNTRIES.find((row) => row[0] === code) || null;
}
function tsCountryName(code){
  const row = tsCountry(code);
  if(!row) return code || "—";
  const lang = tsLang();
  if(lang === "en") return row[3];
  if(lang === "ur") return row[4];
  return row[2];
}

function trackshipQuote(input){
  const service = input.service;
  const weight = Number(input.weight);
  if(!(weight > 0)) return { ok:false, reason:"weight" };

  let rate = null;
  let zone = "";
  if(service === "dry" || service === "cold"){
    if(!input.destCity) return { ok:false, reason:"dest" };
    zone = input.senderCity && input.senderCity === input.destCity ? "same" : "between";
    rate = TS_RATES[service][zone];
  } else if(service === "intl"){
    const country = tsCountry(input.country);
    if(!country) return { ok:false, reason:"dest" };
    zone = country[1];
    rate = TS_RATES.intl[zone];
  } else if(service === "sudan"){
    const city = TS_SUDAN.find((row) => row[0] === input.destCity);
    if(!city) return { ok:false, reason:"dest" };
    zone = city[1];
    rate = TS_RATES.sudan[zone];
  } else {
    return { ok:false, reason:"service" };
  }

  let tempKey = null;
  let tempFee = 0;
  if(service === "cold"){
    tempKey = tsResolveTemp(input.temperature, input.customTemp);
    if(!tempKey) return { ok:false, reason:"temp" };
    tempFee = TS_RATES.temp[tempKey];
  }

  const volumetric = tsVolumetric(input.length, input.width, input.height);
  const billable = Math.max(weight, volumetric, TS_RATES.minBillable);
  const extraUnits = tsExtraUnits(billable, rate.includedKg);
  const extraWeightFee = tsRound2(extraUnits * rate.perKg);
  const expressFee = input.express ? TS_RATES.express[service] : 0;
  const pickupFee = input.pickup ? TS_RATES.pickup : 0;
  let insuranceFee = 0;
  const declared = Number(input.declaredValue) || 0;
  if(input.insure && declared > 0){
    insuranceFee = tsRound2(Math.max(declared * TS_RATES.insuranceRate, TS_RATES.insuranceMin));
  }
  const subtotal = tsRound2(rate.base + extraWeightFee + tempFee + expressFee + pickupFee + insuranceFee);
  const vat = tsRound2(subtotal * TS_RATES.vat);
  const total = tsRound2(subtotal + vat);

  return {
    ok:true, service, zone, includedKg: rate.includedKg,
    actual: tsRound2(weight),
    volumetric: tsRound2(volumetric),
    billable: tsRound2(billable),
    extraUnits, base: rate.base, extraWeightFee, tempFee, tempKey,
    expressFee, pickupFee, insuranceFee, subtotal, vat, total,
    eta: tsEta(service, zone, !!input.express),
    perKg: rate.perKg,
  };
}

let _tsWasm = null;
let _tsWasmTried = false;
async function tsLoadWasm(){
  if(_tsWasmTried) return _tsWasm;
  _tsWasmTried = true;
  if(typeof fetch !== "function" || typeof WebAssembly === "undefined") return null;
  try{
    const resp = await fetch("masar_calc.wasm");
    if(!resp.ok) throw new Error("wasm missing");
    const { instance } = await WebAssembly.instantiate(await resp.arrayBuffer());
    _tsWasm = instance.exports;
  }catch(err){
    _tsWasm = null;
  }
  return _tsWasm;
}

async function trackshipQuoteAsync(input){
  const quote = trackshipQuote(input);
  const wasm = await tsLoadWasm();
  if(!wasm || !quote.ok) return quote;
  const volumetric = wasm.volumetric_weight(Number(input.length)||0, Number(input.width)||0, Number(input.height)||0);
  const billable = Math.max(Number(input.weight)||0, volumetric, TS_RATES.minBillable);
  const extraUnits = tsExtraUnits(billable, quote.includedKg);
  const billed = quote.includedKg + extraUnits;
  const shippingExact = wasm.tiered_price(quote.base, quote.includedKg, quote.perKg, billed, quote.tempFee, quote.expressFee);
  let insuranceFee = 0;
  const declared = Number(input.declaredValue) || 0;
  if(input.insure && declared > 0){
    insuranceFee = wasm.round2(wasm.insurance_fee(declared, TS_RATES.insuranceRate, TS_RATES.insuranceMin));
  }
  const subtotal = wasm.round2(shippingExact + quote.pickupFee + insuranceFee);
  const vat = wasm.round2(subtotal * TS_RATES.vat);
  const total = wasm.round2(subtotal + vat);
  const extraWeightFee = wasm.round2(Math.max(0, shippingExact - quote.base - quote.tempFee - quote.expressFee));
  return {
    ...quote,
    volumetric: wasm.round2(volumetric),
    billable: wasm.round2(billable),
    extraUnits,
    extraWeightFee,
    insuranceFee: wasm.round2(insuranceFee),
    subtotal, vat, total,
    engine: "wasm",
  };
}

function trackshipLoadCart(){
  try{
    const data = JSON.parse(localStorage.getItem(TRACKSHIP_CART_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  }catch(err){
    return [];
  }
}
function trackshipSaveCart(items){
  localStorage.setItem(TRACKSHIP_CART_KEY, JSON.stringify(items));
  if(typeof trackshipPaintCartCount === "function") trackshipPaintCartCount();
}
function trackshipNewId(){
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `TS-${p(d.getFullYear() % 100)}${p(d.getMonth()+1)}${p(d.getDate())}-${rand}`;
}

function trackshipRouteText(item){
  const input = item.input;
  if(input.service === "intl"){
    const country = input.country === "XX" && input.countryOther ? input.countryOther : tsCountryName(input.country);
    return country + " — " + (input.destCityText || "");
  }
  if(input.service === "sudan") return tsSdName(input.destCity);
  return tsSaName(input.destCity);
}

function trackshipFromNet(key){
  if(key === "dry") return TS_RATES.dry.same.base;
  if(key === "cold") return TS_RATES.cold.same.base;
  if(key === "intl") return TS_RATES.intl.gulf.base;
  if(key === "sudan") return TS_RATES.sudan.capital.base;
  if(key === "express") return TS_RATES.express.dry;
  if(key === "pickup") return TS_RATES.pickup;
  return 0;
}

function trackshipPaintFromPrices(){
  const lang = tsLang();
  const prefix = tsDict().price_from || "من";
  document.querySelectorAll("[data-from]").forEach((el) => {
    const net = trackshipFromNet(el.getAttribute("data-from"));
    el.textContent = prefix + " " + tsMoney(net * (1 + TS_RATES.vat), lang);
  });
}

function trackshipRateRows(tab){
  const vat = 1 + TS_RATES.vat;
  const row = (name, net, extra) => ({
    name,
    net: tsMoney(net),
    extra: extra === null || extra === undefined ? "—" : tsMoney(extra),
    incl: tsMoney(net * vat),
  });
  const L = tsL;
  if(tab === "cold"){
    return [
      row(L("مبرّد داخل المدينة (2–8°م)","Cold, same city (2–8°C)","کولڈ، اسی شہر میں"), TS_RATES.cold.same.base, TS_RATES.cold.same.perKg),
      row(L("مبرّد بين المدن","Cold, between cities","کولڈ، شہروں کے درمیان"), TS_RATES.cold.between.base, TS_RATES.cold.between.perKg),
      row(L("إضافة بارد 0–4°م","Cool add-on 0–4°C","سرد اضافہ"), TS_RATES.temp.cool, null),
      row(L("إضافة مجمّد −18°م","Frozen add-on −18°C","منجمد اضافہ"), TS_RATES.temp.freeze, null),
      row(L("إضافة تجميد عميق","Deep-freeze add-on","گہری منجمد اضافہ"), TS_RATES.temp.deep, null),
    ];
  }
  if(tab === "intl"){
    const zones = [
      ["gulf","الخليج","Gulf","خلیج"],
      ["mena","الشرق الأوسط وشمال أفريقيا","MENA","مشرق وسطیٰ"],
      ["asia","آسيا","Asia","ایشیا"],
      ["europe","أوروبا","Europe","یورپ"],
      ["americas","أمريكا","Americas","امریکہ"],
      ["africa","أفريقيا","Africa","افریقہ"],
      ["oceania","أوقيانوسيا","Oceania","اوشینیا"],
      ["other","وجهة أخرى","Other destination","دیگر"],
    ];
    return zones.map(([key, ar, en, ur]) => row(L(ar, en, ur), TS_RATES.intl[key].base, TS_RATES.intl[key].perKg));
  }
  if(tab === "sudan"){
    return [
      row(L("الخرطوم وأم درمان وبحري","Khartoum metro","خرطوم میٹرو"), TS_RATES.sudan.capital.base, TS_RATES.sudan.capital.perKg),
      row(L("بورتسودان","Port Sudan","پورٹ سوڈان"), TS_RATES.sudan.port.base, TS_RATES.sudan.port.perKg),
      row(L("بقية مدن السودان","Other Sudanese cities","دیگر سوڈانی شہر"), TS_RATES.sudan.other.base, TS_RATES.sudan.other.perKg),
    ];
  }
  if(tab === "extra"){
    return [
      row(L("توصيل سريع — جاف","Express — dry","ایکسپریس — خشک"), TS_RATES.express.dry, null),
      row(L("توصيل سريع — مبرّد","Express — cold","ایکسپریس — کولڈ"), TS_RATES.express.cold, null),
      row(L("توصيل سريع — دولي","Express — international","ایکسپریس — بین الاقوامی"), TS_RATES.express.intl, null),
      row(L("توصيل سريع — السودان","Express — Sudan","ایکسپریس — سوڈان"), TS_RATES.express.sudan, null),
      row(L("استلام من الباب","Door pickup","دروازے سے پک اپ"), TS_RATES.pickup, null),
    ];
  }
  return [
    row(L("جاف داخل المدينة","Dry, same city","خشک، اسی شہر میں"), TS_RATES.dry.same.base, TS_RATES.dry.same.perKg),
    row(L("جاف بين المدن","Dry, between cities","خشک، شہروں کے درمیان"), TS_RATES.dry.between.base, TS_RATES.dry.between.perKg),
  ];
}

function trackshipPaintRateTable(){
  const mount = document.getElementById("rateMount");
  if(!mount) return;
  const active = document.querySelector(".tab-btn.active");
  const tab = active ? active.getAttribute("data-rate-tab") : "local";
  const d = tsDict();
  const rows = trackshipRateRows(tab).map((item) =>
    `<tr><td>${tsEsc(item.name)}</td><td class="num">${tsEsc(item.net)}</td><td class="num">${tsEsc(item.extra)}</td><td class="num">${tsEsc(item.incl)}</td></tr>`
  ).join("");
  mount.innerHTML = `<div class="table-wrap"><table>
    <thead><tr><th>${tsEsc(d.th_service || "الخدمة")}</th><th>${tsEsc(d.th_base || "حتى 5 كجم")}</th><th>${tsEsc(d.th_extra || "كل كجم إضافي")}</th><th>${tsEsc(d.th_incl || "شامل الضريبة")}</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function tsFillSelect(el, options, placeholder){
  const current = el.value;
  el.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = placeholder;
  el.appendChild(first);
  options.forEach((opt) => {
    const node = document.createElement("option");
    node.value = opt.value;
    node.textContent = opt.label;
    if(opt.value === current) node.selected = true;
    el.appendChild(node);
  });
}

function tsSaOptions(){
  return TS_SA.map((row) => ({ value: row[0], label: tsSaName(row[0]) }));
}
function tsSdOptions(){
  return TS_SUDAN.map((row) => ({ value: row[0], label: tsSdName(row[0]) }));
}

function trackshipInitBooking(){
  const form = document.getElementById("bookForm");
  if(!form) return;

  const params = new URLSearchParams(location.search);
  const service = params.get("service");
  const chooser = document.getElementById("serviceChooser");
  const layout = document.getElementById("bookLayout");
  const known = ["dry","cold","intl","sudan"];
  if(!known.includes(service)){
    if(chooser) chooser.hidden = false;
    if(layout) layout.hidden = true;
    return;
  }
  if(chooser) chooser.hidden = true;
  if(layout) layout.hidden = false;
  if(form.dataset.bound !== "1"){
    if(params.get("express") === "1") form.expressChk.checked = true;
    if(params.get("pickup") === "1") form.pickupChk.checked = true;
  }

  const banner = document.getElementById("serviceBanner");
  banner.className = "service-banner " + service;
  banner.innerHTML = `<strong>${tsEsc(tsServiceName(service))}</strong><a href="calculator.html">${tsEsc(tsDict().change_service || "تغيير الخدمة")}</a>`;
  document.title = tsServiceName(service) + " | Track Ship";

  document.querySelectorAll("[data-show]").forEach((el) => {
    el.hidden = !el.getAttribute("data-show").split(/\s+/).includes(service);
  });

  const d = tsDict();
  tsFillSelect(form.senderCity, tsSaOptions(), d.ph_city || "اختر المدينة");
  if(form.destSa) tsFillSelect(form.destSa, tsSaOptions(), d.ph_dest || "اختر الوجهة");
  if(form.destSd) tsFillSelect(form.destSd, tsSdOptions(), d.ph_sudan || "اختر مدينة في السودان");
  const country = form.country;
  if(country){
    const current = country.value;
    country.innerHTML = "";
    const ph = document.createElement("option");
    ph.value = "";
    ph.textContent = d.ph_country || "اختر الدولة";
    country.appendChild(ph);
    const zones = ["gulf","mena","asia","europe","americas","africa","oceania","other"];
    const zoneNames = {
      gulf: tsL("الخليج","Gulf","خلیج"),
      mena: tsL("الشرق الأوسط وشمال أفريقيا","MENA","مشرق وسطیٰ"),
      asia: tsL("آسيا","Asia","ایشیا"),
      europe: tsL("أوروبا","Europe","یورپ"),
      americas: tsL("الأمريكتان","Americas","امریکہ"),
      africa: tsL("أفريقيا","Africa","افریقہ"),
      oceania: tsL("أوقيانوسيا","Oceania","اوشینیا"),
      other: tsL("أخرى","Other","دیگر"),
    };
    zones.forEach((zone) => {
      const group = document.createElement("optgroup");
      group.label = zoneNames[zone];
      TS_COUNTRIES.filter((row) => row[1] === zone).forEach((row) => {
        const opt = document.createElement("option");
        opt.value = row[0];
        opt.textContent = tsCountryName(row[0]);
        if(opt.value === current) opt.selected = true;
        group.appendChild(opt);
      });
      country.appendChild(group);
    });
  }

  const expressPrice = document.getElementById("expressPrice");
  const pickupPrice = document.getElementById("pickupPrice");
  if(expressPrice) expressPrice.textContent = "+ " + tsMoney(TS_RATES.express[service]);
  if(pickupPrice) pickupPrice.textContent = "+ " + tsMoney(TS_RATES.pickup);

  const quoteBox = document.getElementById("quoteBox");

  function readInput(){
    const temperature = form.temperature ? form.temperature.value : "";
    return {
      service,
      weight: form.weight.value,
      length: form.dimL.value,
      width: form.dimW.value,
      height: form.dimH.value,
      senderCity: form.senderCity.value,
      destCity: service === "sudan" ? form.destSd.value : form.destSa.value,
      destCityText: form.destCityIntl ? form.destCityIntl.value.trim() : "",
      country: form.country ? form.country.value : "",
      countryOther: form.countryOther ? form.countryOther.value.trim() : "",
      contents: form.contents ? form.contents.value.trim() : "",
      temperature,
      customTemp: form.tempCustom ? form.tempCustom.value : "",
      express: form.expressChk.checked,
      pickup: form.pickupChk.checked,
      insure: form.insureChk.checked,
      declaredValue: form.declaredValue.value,
      senderName: form.senderName.value.trim(),
      senderPhone: form.senderPhone.value.trim(),
      senderAddress: form.senderAddress.value.trim(),
      recvName: form.recvName.value.trim(),
      recvPhone: form.recvPhone.value.trim(),
      recvAddress: form.recvAddress.value.trim(),
    };
  }

  function showErrors(errors){
    form.querySelectorAll("[data-error-for]").forEach((el) => {
      const key = el.getAttribute("data-error-for");
      const msg = errors[key];
      el.hidden = !msg;
      el.textContent = msg || "";
      const field = el.closest(".field");
      if(field) field.classList.toggle("has-error", !!msg);
    });
  }

  function validate(input, quote){
    const dict = tsDict();
    const errors = {};
    const phoneOk = (value) => (value.replace(/\D/g, "").length >= 8);
    if(!(Number(input.weight) > 0)) errors.weight = dict.err_weight;
    else if(Number(input.weight) > 300 || (quote && quote.ok && quote.billable > 300)) errors.weight = dict.err_heavy;
    if(service === "dry" || service === "cold"){
      if(!input.destCity) errors.dest = dict.err_dest;
    }
    if(service === "sudan" && !input.destCity) errors.destSd = dict.err_sudan;
    if(service === "intl"){
      if(!input.country) errors.country = dict.err_country;
      if(input.country === "XX" && input.countryOther.length < 2) errors.countryOther = dict.err_country;
      if(input.destCityText.length < 2) errors.destCity = dict.err_city;
      if(input.contents.length < 3) errors.contents = dict.err_contents;
    }
    if(service === "sudan" && input.contents.length < 3) errors.contents = dict.err_contents;
    if(service === "cold" && !tsResolveTemp(input.temperature, input.customTemp)) errors.temp = dict.err_temp;
    if(input.senderName.length < 2) errors.senderName = dict.err_name;
    if(!phoneOk(input.senderPhone)) errors.senderPhone = dict.err_phone;
    if(!input.senderCity) errors.senderCity = dict.err_city;
    if(input.senderAddress.length < 4) errors.senderAddress = dict.err_address;
    if(input.recvName.length < 2) errors.recvName = dict.err_name;
    if(!phoneOk(input.recvPhone)) errors.recvPhone = dict.err_phone;
    if(input.recvAddress.length < 4) errors.recvAddress = dict.err_address;
    if(input.insure && !(Number(input.declaredValue) > 0)) errors.declared = dict.err_value;
    return errors;
  }

  async function paintQuote(){
    const input = readInput();
    const otherWrap = document.getElementById("countryOtherWrap");
    const customWrap = document.getElementById("tempCustomWrap");
    const valueWrap = document.getElementById("valueWrap");
    if(otherWrap) otherWrap.hidden = input.country !== "XX";
    if(customWrap) customWrap.hidden = input.temperature !== "custom";
    if(valueWrap) valueWrap.hidden = !input.insure;
    const quote = await trackshipQuoteAsync(input);
    const dict = tsDict();
    if(!quote.ok){
      quoteBox.innerHTML = `<p class="muted">${tsEsc(dict.quote_empty || "")}</p>`;
      return;
    }
    const lines = [
      [dict.quote_base, quote.base],
      [dict.quote_extra, quote.extraWeightFee],
    ];
    if(quote.tempFee) lines.push([dict.quote_temp, quote.tempFee]);
    if(quote.expressFee) lines.push([dict.quote_express, quote.expressFee]);
    if(quote.pickupFee) lines.push([dict.quote_pickup, quote.pickupFee]);
    if(quote.insuranceFee) lines.push([dict.quote_ins, quote.insuranceFee]);
    const lang = tsLang();
    const rows = lines.map(([label, amount]) => `<div><span>${tsEsc(label || "")}</span><b>${tsEsc(tsMoney(amount, lang))}</b></div>`).join("");
    const vol = quote.volumetric > 0 ? `<p class="muted">${tsEsc(dict.quote_vol || "")}: ${quote.volumetric.toFixed(2)} kg · ${tsEsc(dict.quote_bill || "")}: ${quote.billable.toFixed(2)} kg</p>` : "";
    quoteBox.innerHTML = `
      <p class="muted">${tsEsc(tsServiceName(service))} · ${tsEsc(trackshipRouteText({ input }))}</p>
      <div class="amount">${tsEsc(tsMoney(quote.total, lang))}</div>
      <p class="muted">${tsEsc(dict.quote_eta || "")}: ${tsEsc(quote.eta[lang] || quote.eta.ar)}</p>
      ${vol}
      <div class="receipt-lines">
        ${rows}
        <div><span>${tsEsc(dict.quote_sub || "")}</span><b>${tsEsc(tsMoney(quote.subtotal, lang))}</b></div>
        <div><span>${tsEsc(dict.quote_vat || "")}</span><b>${tsEsc(tsMoney(quote.vat, lang))}</b></div>
        <div class="grand"><span>${tsEsc(dict.quote_total || "")}</span><b>${tsEsc(tsMoney(quote.total, lang))}</b></div>
      </div>
      <p class="muted">${tsEsc(dict.quote_note || "")}</p>`;
  }

  if(form.dataset.bound !== "1"){
    form.dataset.bound = "1";
    form.addEventListener("input", () => { paintQuote(); });
    form.addEventListener("change", () => { paintQuote(); });
    form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = readInput();
    const quote = await trackshipQuoteAsync(input);
    const errors = validate(input, quote);
    showErrors(errors);
    if(Object.keys(errors).length){
      const first = form.querySelector(".field.has-error");
      if(first) first.scrollIntoView({ behavior:"smooth", block:"center" });
      return;
    }
    const items = trackshipLoadCart();
    items.push({ id: trackshipNewId(), createdAt: new Date().toISOString(), input });
    trackshipSaveCart(items);
    location.href = "cart.html";
    });
  }

  paintQuote();
}

function trackshipOrderText(items){
  const lang = tsLang();
  return items.map((item) => {
    const q = trackshipQuote(item.input);
    const lines = [
      item.id + " — " + tsServiceName(item.input.service),
      tsL("الوجهة: ","Destination: ","منزل: ") + trackshipRouteText(item),
      tsL("الوزن: ","Weight: ","وزن: ") + item.input.weight + " kg",
    ];
    if(item.input.contents) lines.push(tsL("المحتويات: ","Contents: ","مواد: ") + item.input.contents);
    if(item.input.service === "cold") lines.push(tsL("الحرارة: ","Temperature: ","درجہ حرارت: ") + tsTempLabel(tsResolveTemp(item.input.temperature, item.input.customTemp)));
    lines.push(tsL("المرسل: ","Sender: ","بھیجنے والا: ") + item.input.senderName + " / " + item.input.senderPhone);
    lines.push(tsL("المستلم: ","Recipient: ","وصول کنندہ: ") + item.input.recvName + " / " + item.input.recvPhone);
    if(item.input.express) lines.push(tsL("توصيل سريع","Express","ایکسپریس"));
    if(item.input.pickup) lines.push(tsL("استلام من الباب","Door pickup","دروازے سے پک اپ"));
    if(q.ok) lines.push(tsL("الإجمالي شامل الضريبة: ","Total incl. VAT: ","ٹیکس سمیت کل: ") + tsMoney(q.total, lang));
    return lines.join("\n");
  }).join("\n\n");
}

let _cartGen = 0;
async function trackshipInitCart(){
  const root = document.getElementById("cartList");
  if(!root) return;
  const gen = ++_cartGen;
  const items = trackshipLoadCart();
  const empty = document.getElementById("cartEmpty");
  const layout = document.getElementById("cartLayout");
  const d = tsDict();
  if(!items.length){
    if(empty) empty.hidden = false;
    if(layout) layout.hidden = true;
    return;
  }
  if(empty) empty.hidden = true;
  if(layout) layout.hidden = false;

  const rendered = [];
  for(const item of items){
    const quote = await trackshipQuoteAsync(item.input);
    rendered.push({ item, quote });
  }
  if(gen !== _cartGen) return;
  const lang = tsLang();
  root.innerHTML = rendered.map(({ item, quote }) => {
    const input = item.input;
    const bits = [
      tsL("الوزن ","Weight ","وزن ") + input.weight + " kg",
      tsL("إلى ","To ","تا ") + trackshipRouteText(item),
    ];
    if(input.contents) bits.push(input.contents);
    if(input.express) bits.push(d.f_express || "توصيل سريع");
    if(input.pickup) bits.push(d.f_pickup || "استلام من الباب");
    if(input.service === "cold") bits.push(tsTempLabel(tsResolveTemp(input.temperature, input.customTemp)));
    return `<article class="cart-item ${tsEsc(input.service)}">
      <header>
        <div>
          <h3>${tsEsc(tsServiceName(input.service))}</h3>
          <div class="meta">${tsEsc(item.id)} · ${tsEsc(bits.join(" · "))}</div>
          <div class="meta">${tsEsc(input.senderName)} → ${tsEsc(input.recvName)}</div>
        </div>
        <div>
          <strong class="num">${quote.ok ? tsEsc(tsMoney(quote.total, lang)) : "—"}</strong>
          <div><button type="button" class="ghost-btn" data-remove="${tsEsc(item.id)}">${tsEsc(d.cart_remove || "حذف")}</button></div>
        </div>
      </header>
    </article>`;
  }).join("");

  root.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      trackshipSaveCart(trackshipLoadCart().filter((item) => item.id !== btn.getAttribute("data-remove")));
      trackshipInitCart();
    });
  });

  const ok = rendered.filter((row) => row.quote.ok);
  const subtotal = tsRound2(ok.reduce((sum, row) => sum + row.quote.subtotal, 0));
  const vat = tsRound2(ok.reduce((sum, row) => sum + row.quote.vat, 0));
  const total = tsRound2(ok.reduce((sum, row) => sum + row.quote.total, 0));
  document.getElementById("cartSubtotal").textContent = tsMoney(subtotal, lang);
  document.getElementById("cartVat").textContent = tsMoney(vat, lang);
  document.getElementById("cartTotal").textContent = tsMoney(total, lang);

  const copyBtn = document.getElementById("copyOrder");
  if(copyBtn && !copyBtn.dataset.bound){
    copyBtn.dataset.bound = "1";
    copyBtn.addEventListener("click", async () => {
      const text = trackshipOrderText(trackshipLoadCart());
      try{ await navigator.clipboard.writeText(text); }catch(err){ /* clipboard may be blocked */ }
      if(typeof masarToast === "function") masarToast(tsDict().cart_copied || "تم النسخ");
    });
  }
}

function trackshipBoot(){
  trackshipPaintFromPrices();
  trackshipPaintRateTable();
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    if(btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((other) => other.classList.remove("active"));
      btn.classList.add("active");
      trackshipPaintRateTable();
    });
  });
  trackshipInitBooking();
  trackshipInitCart();
}

if(typeof document !== "undefined"){
  document.addEventListener("DOMContentLoaded", trackshipBoot);
  window.addEventListener("masar:langchange", () => {
    trackshipPaintFromPrices();
    trackshipPaintRateTable();
  if(document.getElementById("bookForm")) trackshipInitBooking();
    if(document.getElementById("cartList")) trackshipInitCart();
  });
}

if(typeof module !== "undefined" && module.exports){
  module.exports = { trackshipQuote, TS_RATES, tsRound2, tsExtraUnits };
}
