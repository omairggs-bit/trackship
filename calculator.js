/* Track System pricing and WhatsApp ordering
   Net rates are before VAT. VAT is 15% because Track Systems Company is
   registered (314968452300003) with effect from 1 September 2026.
   Extra kilograms are billed per started kilogram. */

const TS_RATES = {
  vat: 0.15,
  minBillable: 0.5,
  maxKg: 300,
  insuranceRate: 0.02,
  insuranceMin: 8,
  pickup: 36,
  pack: 15,
  fragile: 10,
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
    same: ["خلال 24 ساعة", "Within 24 hours"],
    between: ["1–3 أيام", "1–3 days"],
    sameFast: ["خلال ساعات اليوم", "Within a few hours today"],
    betweenFast: ["اليوم التالي", "Next day"],
  },
  cold: {
    same: ["12–24 ساعة", "12–24 hours"],
    between: ["1–2 أيام", "1–2 days"],
    sameFast: ["خلال 12 ساعة", "Within 12 hours"],
    betweenFast: ["اليوم التالي", "Next day"],
  },
  intl: {
    gulf: ["2–4 أيام", "2–4 days"],
    mena: ["3–6 أيام", "3–6 days"],
    asia: ["4–8 أيام", "4–8 days"],
    europe: ["5–9 أيام", "5–9 days"],
    americas: ["6–12 يومًا", "6–12 days"],
    africa: ["5–10 أيام", "5–10 days"],
    oceania: ["7–14 يومًا", "7–14 days"],
    other: ["6–14 يومًا", "6–14 days"],
  },
  sudan: {
    capital: ["5–9 أيام", "5–9 days"],
    port: ["6–10 أيام", "6–10 days"],
    other: ["7–12 يومًا", "7–12 days"],
  },
};

/* [code, arabic, english] */
const TS_SA = [
  ["RUH","الرياض","Riyadh"], ["JED","جدة","Jeddah"], ["MEC","مكة المكرمة","Makkah"],
  ["MED","المدينة المنورة","Madinah"], ["TIF","الطائف","Taif"], ["DMM","الدمام","Dammam"],
  ["KHO","الخبر","Khobar"], ["DHA","الظهران","Dhahran"], ["HOF","الهفوف","Hofuf"],
  ["QAT","القطيف","Qatif"], ["JUB","الجبيل","Jubail"], ["YNB","ينبع","Yanbu"],
  ["BRD","بريدة","Buraydah"], ["UNZ","عنيزة","Unaizah"], ["HAS","حائل","Hail"],
  ["TUU","تبوك","Tabuk"], ["AHB","أبها","Abha"], ["KMX","خميس مشيط","Khamis Mushait"],
  ["GIZ","جازان","Jazan"], ["EAM","نجران","Najran"], ["BHH","الباحة","Al Baha"],
  ["AJF","سكاكا","Sakaka"], ["RAE","عرعر","Arar"], ["HBT","حفر الباطن","Hafar Al Batin"],
  ["URY","القريات","Qurayyat"], ["AKJ","الخرج","Al Kharj"], ["WAE","وادي الدواسر","Wadi Al Dawasir"],
  ["ULH","العلا","Al Ula"], ["BSH","بيشة","Bisha"], ["ABQ","أبقيق","Abqaiq"],
];

/* [code, tier, arabic, english] */
const TS_SUDAN = [
  ["KRT","capital","الخرطوم","Khartoum"], ["OMD","capital","أم درمان","Omdurman"],
  ["KHB","capital","الخرطوم بحري","Khartoum North"], ["PZU","port","بورتسودان","Port Sudan"],
  ["WMD","other","ود مدني","Wad Madani"], ["EBD","other","الأبيض","El Obeid"],
  ["KSL","other","كسلا","Kassala"], ["GDS","other","القضارف","Gedaref"],
  ["ELF","other","الفاشر","El Fasher"], ["UYL","other","نيالا","Nyala"],
  ["GEN","other","الجنينة","Geneina"], ["ATB","other","عطبرة","Atbara"],
  ["DOG","other","دنقلا","Dongola"], ["KST","other","كوستي","Kosti"],
  ["SNR","other","سنار","Sennar"], ["DAM","other","الدمازين","Ad Damazin"],
  ["RBK","other","ربك","Rabak"], ["SHN","other","شندي","Shendi"],
  ["KDX","other","كادوقلي","Kadugli"], ["NHU","other","حلفا الجديدة","New Halfa"],
  ["KRM","other","كريمة","Karima"],
];

/* [code, zone, arabic, english] */
const TS_COUNTRIES = [
  ["AE","gulf","الإمارات","United Arab Emirates"], ["KW","gulf","الكويت","Kuwait"],
  ["BH","gulf","البحرين","Bahrain"], ["OM","gulf","عُمان","Oman"], ["QA","gulf","قطر","Qatar"],
  ["EG","mena","مصر","Egypt"], ["JO","mena","الأردن","Jordan"], ["LB","mena","لبنان","Lebanon"],
  ["IQ","mena","العراق","Iraq"], ["YE","mena","اليمن","Yemen"], ["SY","mena","سوريا","Syria"],
  ["PS","mena","فلسطين","Palestine"], ["TR","mena","تركيا","Turkey"], ["MA","mena","المغرب","Morocco"],
  ["TN","mena","تونس","Tunisia"], ["DZ","mena","الجزائر","Algeria"], ["LY","mena","ليبيا","Libya"],
  ["IN","asia","الهند","India"], ["PK","asia","باكستان","Pakistan"], ["BD","asia","بنغلاديش","Bangladesh"],
  ["CN","asia","الصين","China"], ["HK","asia","هونغ كونغ","Hong Kong"], ["JP","asia","اليابان","Japan"],
  ["KR","asia","كوريا الجنوبية","South Korea"], ["SG","asia","سنغافورة","Singapore"],
  ["MY","asia","ماليزيا","Malaysia"], ["ID","asia","إندونيسيا","Indonesia"], ["TH","asia","تايلاند","Thailand"],
  ["PH","asia","الفلبين","Philippines"], ["VN","asia","فيتنام","Vietnam"], ["LK","asia","سريلانكا","Sri Lanka"],
  ["NP","asia","نيبال","Nepal"],
  ["GB","europe","بريطانيا","United Kingdom"], ["DE","europe","ألمانيا","Germany"], ["FR","europe","فرنسا","France"],
  ["IT","europe","إيطاليا","Italy"], ["ES","europe","إسبانيا","Spain"], ["NL","europe","هولندا","Netherlands"],
  ["BE","europe","بلجيكا","Belgium"], ["CH","europe","سويسرا","Switzerland"], ["AT","europe","النمسا","Austria"],
  ["SE","europe","السويد","Sweden"], ["NO","europe","النرويج","Norway"], ["DK","europe","الدنمارك","Denmark"],
  ["IE","europe","أيرلندا","Ireland"], ["PL","europe","بولندا","Poland"], ["GR","europe","اليونان","Greece"],
  ["PT","europe","البرتغال","Portugal"],
  ["US","americas","الولايات المتحدة","United States"], ["CA","americas","كندا","Canada"],
  ["MX","americas","المكسيك","Mexico"], ["BR","americas","البرازيل","Brazil"], ["AR","americas","الأرجنتين","Argentina"],
  ["AU","oceania","أستراليا","Australia"], ["NZ","oceania","نيوزيلندا","New Zealand"],
  ["ET","africa","إثيوبيا","Ethiopia"], ["KE","africa","كينيا","Kenya"], ["NG","africa","نيجيريا","Nigeria"],
  ["ZA","africa","جنوب أفريقيا","South Africa"], ["GH","africa","غانا","Ghana"], ["UG","africa","أوغندا","Uganda"],
  ["TZ","africa","تنزانيا","Tanzania"],
  ["XX","other","دولة أخرى","Other country"],
];

const TS_ZONES = {
  gulf: ["الخليج","Gulf"], mena: ["الشرق الأوسط وشمال أفريقيا","Middle East & North Africa"],
  asia: ["آسيا","Asia"], europe: ["أوروبا","Europe"], americas: ["الأمريكتان","Americas"],
  africa: ["أفريقيا","Africa"], oceania: ["أوقيانوسيا","Oceania"], other: ["وجهات أخرى","Other destinations"],
};

const TS_SERVICES = {
  dry: ["شحن جاف محلي","Local dry shipping"],
  cold: ["شحن مبرّد","Cold-chain shipping"],
  intl: ["شحن دولي","International shipping"],
  sudan: ["الشحن إلى السودان","Shipping to Sudan"],
};

const TS_TEMPS = {
  chill: ["مبرّد 2 إلى 8°م","Chilled 2 to 8°C"],
  cool: ["بارد 0 إلى 4°م","Cool 0 to 4°C"],
  freeze: ["مجمّد −18°م","Frozen −18°C"],
  deep: ["تجميد عميق −25°م أو أقل","Deep freeze −25°C or below"],
};

const TS_ADDONS = ["express", "pickup", "pack", "fragile"];

function tsLang(){
  return (typeof masarGetLang === "function" && masarGetLang()) || "ar";
}
function tsDict(){
  return (typeof MASAR_DICT !== "undefined" && MASAR_DICT[tsLang()]) || {};
}
function tsL(pair){ return tsLang() === "en" ? pair[1] : pair[0]; }
function tsRound2(n){ return Math.round((Number(n) + Number.EPSILON) * 100) / 100; }
function tsMoney(n){
  const value = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(tsRound2(n));
  return tsLang() === "en" ? "SAR " + value : value + " ر.س";
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
    if(customTemp === "" || customTemp === null || customTemp === undefined) return null;
    const t = Number(customTemp);
    if(!Number.isFinite(t)) return null;
    if(t <= -25) return "deep";
    if(t <= -1) return "freeze";
    if(t <= 4) return "cool";
    return "chill";
  }
  return TS_RATES.temp[temperature] === undefined ? null : temperature;
}
function tsEta(service, zone, express){
  const table = TS_ETA[service];
  if(!table) return "—";
  if((service === "dry" || service === "cold") && express){
    return tsL(table[zone === "same" ? "sameFast" : "betweenFast"]);
  }
  const base = tsL(table[zone] || table.other || table.between);
  return express ? base + tsL([" · أولوية", " · priority"]) : base;
}
function tsSaName(code){
  const row = TS_SA.find((item) => item[0] === code);
  return row ? tsL([row[1], row[2]]) : "—";
}
function tsSdName(code){
  const row = TS_SUDAN.find((item) => item[0] === code);
  return row ? tsL([row[2], row[3]]) : "—";
}
function tsCountry(code){
  return TS_COUNTRIES.find((row) => row[0] === code) || null;
}
function tsCountryName(code){
  const row = tsCountry(code);
  return row ? tsL([row[2], row[3]]) : (code || "—");
}
function tsServiceName(service){ return tsL(TS_SERVICES[service] || TS_SERVICES.dry); }
function tsTempLabel(key){ return TS_TEMPS[key] ? tsL(TS_TEMPS[key]) : "—"; }

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
  const packFee = input.pack ? TS_RATES.pack : 0;
  const fragileFee = input.fragile ? TS_RATES.fragile : 0;
  let insuranceFee = 0;
  const declared = Number(input.declaredValue) || 0;
  if(input.insure && declared > 0){
    insuranceFee = tsRound2(Math.max(declared * TS_RATES.insuranceRate, TS_RATES.insuranceMin));
  }
  const subtotal = tsRound2(rate.base + extraWeightFee + tempFee + expressFee + pickupFee + packFee + fragileFee + insuranceFee);
  const vat = tsRound2(subtotal * TS_RATES.vat);
  const total = tsRound2(subtotal + vat);

  return {
    ok:true, service, zone, includedKg: rate.includedKg, perKg: rate.perKg,
    actual: tsRound2(weight),
    volumetric: tsRound2(volumetric),
    billable: tsRound2(billable),
    extraUnits, base: rate.base, extraWeightFee, tempFee, tempKey,
    expressFee, pickupFee, packFee, fragileFee, insuranceFee, subtotal, vat, total,
  };
}

function trackshipNewId(){
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `TS-${p(d.getFullYear() % 100)}${p(d.getMonth()+1)}${p(d.getDate())}-${rand}`;
}

function trackshipRouteText(input){
  if(input.service === "intl"){
    const country = input.country === "XX" && input.countryOther ? input.countryOther : tsCountryName(input.country);
    return input.destCityText ? country + " — " + input.destCityText : country;
  }
  if(input.service === "sudan") return tsSdName(input.destCity) + tsL(["، السودان", ", Sudan"]);
  return tsSaName(input.destCity);
}

function trackshipOrderMessage(id, input, quote){
  const d = tsDict();
  const kg = d.kg || "kg";
  const sep = tsLang() === "en" ? ", " : "، ";
  const lines = [d.msg_title, `${d.msg_order}: ${id}`, `${d.msg_service}: ${tsServiceName(input.service)}`];
  let weightLine = `${d.msg_weight}: ${input.weight} ${kg}`;
  if(quote.ok && Math.abs(quote.billable - quote.actual) > 0.001) weightLine += ` (${d.msg_billable} ${quote.billable} ${kg})`;
  lines.push(weightLine);
  lines.push(`${d.msg_from}: ${tsSaName(input.senderCity)}`);
  lines.push(`${d.msg_to}: ${trackshipRouteText(input)}`);
  if(input.service === "cold") lines.push(`${d.msg_temp}: ${tsTempLabel(tsResolveTemp(input.temperature, input.customTemp))}${input.temperature === "custom" ? ` (${input.customTemp}°)` : ""}`);
  if(input.contents) lines.push(`${d.msg_contents}: ${input.contents}`);

  lines.push("", `— ${d.msg_sender} —`, input.senderName, input.senderPhone, tsSaName(input.senderCity) + sep + input.senderAddress);
  lines.push("", `— ${d.msg_recv} —`, input.recvName, input.recvPhone, input.recvAddress);

  const addons = [];
  if(input.express) addons.push(d.f_express);
  if(input.pickup) addons.push(d.f_pickup + (input.pickupDate ? ` (${d.msg_pickup_on} ${input.pickupDate})` : ""));
  if(input.pack) addons.push(d.f_pack);
  if(input.fragile) addons.push(d.f_fragile);
  if(input.insure && Number(input.declaredValue) > 0) addons.push(`${d.msg_insured} ${tsMoney(input.declaredValue)}`);
  lines.push("", `${d.msg_addons}: ${addons.length ? addons.join(sep) : d.msg_none}`);
  if(Number(input.length) > 0 && Number(input.width) > 0 && Number(input.height) > 0){
    lines.push(`${d.msg_dims}: ${input.length}×${input.width}×${input.height} cm`);
  }
  if(input.notes) lines.push(`${d.msg_notes}: ${input.notes}`);

  if(quote.ok){
    lines.push("", `${d.msg_price}:`,
      `${d.quote_sub}: ${tsMoney(quote.subtotal)}`,
      `${d.quote_vat}: ${tsMoney(quote.vat)}`,
      `${d.quote_total}: ${tsMoney(quote.total)}`);
  }
  return lines.join("\n");
}

function trackshipFromNet(key){
  if(key === "dry") return TS_RATES.dry.same.base;
  if(key === "cold") return TS_RATES.cold.same.base;
  if(key === "intl") return TS_RATES.intl.gulf.base;
  if(key === "sudan") return TS_RATES.sudan.capital.base;
  if(key === "express") return TS_RATES.express.dry;
  if(key === "pickup") return TS_RATES.pickup;
  if(key === "pack") return TS_RATES.pack;
  if(key === "fragile") return TS_RATES.fragile;
  return 0;
}

function trackshipPaintFromPrices(){
  const prefix = tsDict().price_from || "من";
  document.querySelectorAll("[data-from]").forEach((el) => {
    const net = trackshipFromNet(el.getAttribute("data-from"));
    el.textContent = prefix + " " + tsMoney(net * (1 + TS_RATES.vat));
  });
}

function trackshipRateRows(tab){
  const row = (name, net, extra) => ({
    name,
    net: tsMoney(net),
    extra: extra === null || extra === undefined ? "—" : tsMoney(extra),
    incl: tsMoney(net * (1 + TS_RATES.vat)),
  });
  if(tab === "cold"){
    return [
      row(tsL(["مبرّد داخل المدينة (2–8°م)","Cold, same city (2–8°C)"]), TS_RATES.cold.same.base, TS_RATES.cold.same.perKg),
      row(tsL(["مبرّد بين المدن","Cold, between cities"]), TS_RATES.cold.between.base, TS_RATES.cold.between.perKg),
      row(tsL(["إضافة بارد 0–4°م","Cool add-on 0–4°C"]), TS_RATES.temp.cool, null),
      row(tsL(["إضافة مجمّد −18°م","Frozen add-on −18°C"]), TS_RATES.temp.freeze, null),
      row(tsL(["إضافة تجميد عميق","Deep-freeze add-on"]), TS_RATES.temp.deep, null),
    ];
  }
  if(tab === "intl"){
    return Object.keys(TS_ZONES).map((key) => row(tsL(TS_ZONES[key]), TS_RATES.intl[key].base, TS_RATES.intl[key].perKg));
  }
  if(tab === "sudan"){
    return [
      row(tsL(["الخرطوم وأم درمان وبحري","Khartoum, Omdurman, Bahri"]), TS_RATES.sudan.capital.base, TS_RATES.sudan.capital.perKg),
      row(tsL(["بورتسودان","Port Sudan"]), TS_RATES.sudan.port.base, TS_RATES.sudan.port.perKg),
      row(tsL(["بقية مدن السودان","Other Sudanese cities"]), TS_RATES.sudan.other.base, TS_RATES.sudan.other.perKg),
    ];
  }
  if(tab === "extra"){
    return [
      row(tsL(["توصيل سريع — جاف","Express — dry"]), TS_RATES.express.dry, null),
      row(tsL(["توصيل سريع — مبرّد","Express — cold"]), TS_RATES.express.cold, null),
      row(tsL(["توصيل سريع — دولي","Express — international"]), TS_RATES.express.intl, null),
      row(tsL(["توصيل سريع — السودان","Express — Sudan"]), TS_RATES.express.sudan, null),
      row(tsL(["استلام من الباب","Door pickup"]), TS_RATES.pickup, null),
      row(tsL(["تغليف احترافي","Professional packing"]), TS_RATES.pack, null),
      row(tsL(["مناولة القابل للكسر","Fragile handling"]), TS_RATES.fragile, null),
    ];
  }
  return [
    row(tsL(["جاف داخل المدينة","Dry, same city"]), TS_RATES.dry.same.base, TS_RATES.dry.same.perKg),
    row(tsL(["جاف بين المدن","Dry, between cities"]), TS_RATES.dry.between.base, TS_RATES.dry.between.perKg),
  ];
}

function trackshipPaintRateTable(){
  const mount = document.getElementById("rateMount");
  if(!mount) return;
  const active = document.querySelector(".tab-btn.active");
  const tab = active ? active.getAttribute("data-rate-tab") : "local";
  const d = tsDict();
  const rows = trackshipRateRows(tab).map((item) =>
    `<tr><td>${tsEsc(item.name)}</td><td class="num">${tsEsc(item.net)}</td><td class="num">${tsEsc(item.extra)}</td><td class="num strong">${tsEsc(item.incl)}</td></tr>`
  ).join("");
  mount.innerHTML = `<div class="table-wrap"><table>
    <thead><tr><th>${tsEsc(d.th_service)}</th><th>${tsEsc(d.th_base)}</th><th>${tsEsc(d.th_extra)}</th><th>${tsEsc(d.th_incl)}</th></tr></thead>
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

function tsFillCountries(el, placeholder){
  const current = el.value;
  el.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = placeholder;
  el.appendChild(ph);
  Object.keys(TS_ZONES).forEach((zone) => {
    const group = document.createElement("optgroup");
    group.label = tsL(TS_ZONES[zone]);
    TS_COUNTRIES.filter((row) => row[1] === zone).forEach((row) => {
      const opt = document.createElement("option");
      opt.value = row[0];
      opt.textContent = tsCountryName(row[0]);
      if(opt.value === current) opt.selected = true;
      group.appendChild(opt);
    });
    el.appendChild(group);
  });
}

function trackshipInitBooking(){
  const form = document.getElementById("bookForm");
  if(!form) return;

  const params = new URLSearchParams(location.search);
  const service = params.get("service");
  const chooser = document.getElementById("serviceChooser");
  const layout = document.getElementById("bookLayout");
  if(!TS_SERVICES[service]){
    chooser.hidden = false;
    layout.hidden = true;
    const carry = TS_ADDONS.filter((key) => params.get(key) === "1").map((key) => "&" + key + "=1").join("");
    chooser.querySelectorAll("a[data-service]").forEach((a) => {
      a.href = "calculator.html?service=" + a.getAttribute("data-service") + carry;
    });
    return;
  }
  chooser.hidden = true;
  layout.hidden = false;
  if(form.dataset.bound !== "1"){
    TS_ADDONS.forEach((key) => { if(params.get(key) === "1") form[key + "Chk"].checked = true; });
  }

  const d = tsDict();
  const banner = document.getElementById("serviceBanner");
  banner.className = "service-banner " + service;
  banner.innerHTML = `<span class="sb-icon" aria-hidden="true">${document.querySelector(`[data-icon="${service}"]`)?.innerHTML || ""}</span><strong>${tsEsc(tsServiceName(service))}</strong><a href="calculator.html">${tsEsc(d.change_service)}</a>`;
  document.title = tsServiceName(service) + " | Track System";

  document.querySelectorAll("[data-show]").forEach((el) => {
    el.hidden = !el.getAttribute("data-show").split(/\s+/).includes(service);
  });

  const saOptions = TS_SA.map((row) => ({ value: row[0], label: tsSaName(row[0]) }));
  tsFillSelect(form.senderCity, saOptions, d.ph_city);
  tsFillSelect(form.destSa, saOptions, d.ph_dest);
  tsFillSelect(form.destSd, TS_SUDAN.map((row) => ({ value: row[0], label: tsSdName(row[0]) })), d.ph_sudan);
  tsFillCountries(form.country, d.ph_country);

  const fees = { express: TS_RATES.express[service], pickup: TS_RATES.pickup, pack: TS_RATES.pack, fragile: TS_RATES.fragile };
  Object.keys(fees).forEach((key) => {
    const el = document.getElementById(key + "Price");
    if(el) el.textContent = "+ " + tsMoney(fees[key] * (1 + TS_RATES.vat));
  });
  if(form.pickupDate && !form.pickupDate.min){
    form.pickupDate.min = new Date().toISOString().slice(0, 10);
  }

  const quoteBox = document.getElementById("quoteBox");
  const sentBox = document.getElementById("sentBox");

  function readInput(){
    const val = (name) => (form[name] ? form[name].value.trim() : "");
    return {
      service,
      weight: val("weight"),
      length: val("dimL"), width: val("dimW"), height: val("dimH"),
      senderCity: val("senderCity"),
      destCity: service === "sudan" ? val("destSd") : val("destSa"),
      destCityText: val("destCityIntl"),
      country: val("country"),
      countryOther: val("countryOther"),
      contents: (service === "intl" || service === "sudan") ? val("contents") : "",
      temperature: val("temperature"),
      customTemp: val("tempCustom"),
      express: form.expressChk.checked,
      pickup: form.pickupChk.checked,
      pickupDate: form.pickupChk.checked ? val("pickupDate") : "",
      pack: form.packChk.checked,
      fragile: form.fragileChk.checked,
      insure: form.insureChk.checked,
      declaredValue: val("declaredValue"),
      notes: val("notes"),
      senderName: val("senderName"), senderPhone: val("senderPhone"), senderAddress: val("senderAddress"),
      recvName: val("recvName"), recvPhone: val("recvPhone"), recvAddress: val("recvAddress"),
    };
  }

  function showErrors(errors){
    form.querySelectorAll("[data-error-for]").forEach((el) => {
      const msg = errors[el.getAttribute("data-error-for")];
      el.hidden = !msg;
      el.textContent = msg || "";
      const field = el.closest(".field");
      if(field) field.classList.toggle("has-error", !!msg);
    });
  }

  function validate(input, quote){
    const dict = tsDict();
    const errors = {};
    const phoneOk = (value) => value.replace(/\D/g, "").length >= 8;
    if(!(Number(input.weight) > 0)) errors.weight = dict.err_weight;
    else if(Number(input.weight) > TS_RATES.maxKg || (quote.ok && quote.billable > TS_RATES.maxKg)) errors.weight = dict.err_heavy;
    if((service === "dry" || service === "cold") && !input.destCity) errors.dest = dict.err_dest;
    if(service === "sudan" && !input.destCity) errors.destSd = dict.err_sudan;
    if(service === "intl"){
      if(!input.country) errors.country = dict.err_country;
      if(input.country === "XX" && input.countryOther.length < 2) errors.countryOther = dict.err_country;
      if(input.destCityText.length < 2) errors.destCity = dict.err_city;
    }
    if((service === "intl" || service === "sudan") && input.contents.length < 3) errors.contents = dict.err_contents;
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

  function paintQuote(){
    const input = readInput();
    document.getElementById("countryOtherWrap").hidden = input.country !== "XX";
    document.getElementById("tempCustomWrap").hidden = input.temperature !== "custom";
    document.getElementById("valueWrap").hidden = !input.insure;
    document.getElementById("pickupDateWrap").hidden = !input.pickup;
    const quote = trackshipQuote(input);
    const dict = tsDict();
    if(!quote.ok){
      quoteBox.innerHTML = `<p class="muted">${tsEsc(dict.quote_empty)}</p>`;
      return;
    }
    const lines = [[dict.quote_base, quote.base]];
    if(quote.extraWeightFee) lines.push([dict.quote_extra, quote.extraWeightFee]);
    if(quote.tempFee) lines.push([dict.quote_temp, quote.tempFee]);
    if(quote.expressFee) lines.push([dict.quote_express, quote.expressFee]);
    if(quote.pickupFee) lines.push([dict.quote_pickup, quote.pickupFee]);
    if(quote.packFee) lines.push([dict.quote_pack, quote.packFee]);
    if(quote.fragileFee) lines.push([dict.quote_fragile, quote.fragileFee]);
    if(quote.insuranceFee) lines.push([dict.quote_ins, quote.insuranceFee]);
    const rows = lines.map(([label, amount]) => `<div><span>${tsEsc(label)}</span><b>${tsEsc(tsMoney(amount))}</b></div>`).join("");
    const vol = quote.volumetric > 0
      ? `<p class="muted">${tsEsc(dict.quote_vol)}: ${quote.volumetric.toFixed(2)} ${tsEsc(dict.kg)} · ${tsEsc(dict.quote_bill)}: ${quote.billable.toFixed(2)} ${tsEsc(dict.kg)}</p>`
      : "";
    quoteBox.innerHTML = `
      <p class="muted">${tsEsc(tsServiceName(service))} · ${tsEsc(trackshipRouteText(input))}</p>
      <div class="amount">${tsEsc(tsMoney(quote.total))}</div>
      <p class="muted">${tsEsc(dict.quote_eta)}: ${tsEsc(tsEta(service, quote.zone, input.express))}</p>
      ${vol}
      <div class="receipt-lines">
        ${rows}
        <div><span>${tsEsc(dict.quote_sub)}</span><b>${tsEsc(tsMoney(quote.subtotal))}</b></div>
        <div><span>${tsEsc(dict.quote_vat)}</span><b>${tsEsc(tsMoney(quote.vat))}</b></div>
        <div class="grand"><span>${tsEsc(dict.quote_total)}</span><b>${tsEsc(tsMoney(quote.total))}</b></div>
      </div>
      <p class="muted">${tsEsc(dict.quote_note)}</p>`;
  }

  if(form.dataset.bound !== "1"){
    form.dataset.bound = "1";
    form.addEventListener("input", paintQuote);
    form.addEventListener("change", paintQuote);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = readInput();
      const quote = trackshipQuote(input);
      const errors = validate(input, quote);
      showErrors(errors);
      if(Object.keys(errors).length){
        const first = form.querySelector(".field.has-error");
        if(first) first.scrollIntoView({ behavior:"smooth", block:"center" });
        return;
      }
      const id = trackshipNewId();
      const message = trackshipOrderMessage(id, input, quote);
      const url = tsWaLink(message);
      window.open(url, "_blank", "noopener");
      const dict = tsDict();
      sentBox.hidden = false;
      sentBox.innerHTML = `
        <h3>${tsEsc(dict.sent_h)}</h3>
        <p>${tsEsc(dict.sent_order)}: <b class="num" dir="ltr">${tsEsc(id)}</b></p>
        <p class="muted">${tsEsc(dict.sent_p)} <a dir="ltr" href="tel:+${TS_WA_NUMBER}">+966 59 728 1619</a></p>
        <div class="sent-actions">
          <a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="${tsEsc(url)}">${tsEsc(dict.sent_open)}</a>
          <button type="button" class="btn btn-line btn-block" id="copyMsg">${tsEsc(dict.sent_copy)}</button>
        </div>`;
      document.getElementById("copyMsg").addEventListener("click", async () => {
        try{ await navigator.clipboard.writeText(message); }catch(err){ /* clipboard can be blocked */ }
        masarToast(tsDict().sent_copied);
      });
      sentBox.scrollIntoView({ behavior:"smooth", block:"center" });
    });
  }

  paintQuote();
}

function trackshipBoot(){
  trackshipPaintFromPrices();
  trackshipPaintRateTable();
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    if(btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((other) => {
        other.classList.toggle("active", other === btn);
        other.setAttribute("aria-selected", other === btn ? "true" : "false");
      });
      trackshipPaintRateTable();
    });
  });
  trackshipInitBooking();
}

if(typeof document !== "undefined"){
  document.addEventListener("DOMContentLoaded", trackshipBoot);
  window.addEventListener("masar:langchange", () => {
    trackshipPaintFromPrices();
    trackshipPaintRateTable();
    if(document.getElementById("bookForm")) trackshipInitBooking();
  });
}

if(typeof module !== "undefined" && module.exports){
  module.exports = { trackshipQuote, TS_RATES, tsRound2, tsExtraUnits };
}
