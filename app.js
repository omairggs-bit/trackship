(function () {
  "use strict";

  const CITIES = ["riyadh", "jeddah", "dammam", "makkah", "madinah", "abha", "tabuk"];
  const RATES = {
    domestic: { base: 18, perKg: 7, etaAr: "محلي · 1–3 أيام", etaEn: "Domestic · 1–3 days" },
    gcc: { base: 45, perKg: 14, etaAr: "جوي دولي · 5–8 أيام", etaEn: "International air · 5–8 days" },
    asia: { base: 65, perKg: 18, etaAr: "جوي دولي · 5–8 أيام", etaEn: "International air · 5–8 days" },
    europe: { base: 85, perKg: 22, etaAr: "جوي دولي · 5–8 أيام", etaEn: "International air · 5–8 days" },
    na: { base: 110, perKg: 28, etaAr: "جوي دولي · 5–8 أيام", etaEn: "International air · 5–8 days" }
  };
  const TYPE_MULT = { documents: 0.85, parcels: 1, refrigerated: 1.35 };
  const VIEWS = ["home", "calculator", "pickup", "about"];

  const I18N = {
    ar: {
      "meta.title": "FalconShip — شريكك للشحن من الباب إلى الباب",
      "meta.desc": "فالكون شيب — شريكك للشحن من الباب إلى الباب. شحن محلي ودولي من الرياض.",
      skip: "تخطي إلى المحتوى",
      "logo.sub": "لوجستيات سعودية",
      "nav.home": "الرئيسية",
      "nav.calc": "حاسبة السعر",
      "nav.pickup": "جدولة استلام",
      "nav.about": "عن الشركة",
      "cta.quote": "حسب السعر",
      "cta.pickup": "جدولة استلام",
      "aria.lang": "اللغة",
      "aria.menu": "فتح القائمة",
      "aria.menuClose": "إغلاق القائمة",
      "hero.eyebrow": "لوجستيات فاخرة في المملكة",
      "hero.title1": "نصل بسرعة.",
      "hero.title2": "ننفذ بكفاءة.",
      "hero.lead": "شريكك للشحن من الباب إلى الباب. تغطية داخل المملكة وإلى الخليج وآسيا وأوروبا وأمريكا الشمالية، مع تتبع حتى التسليم.",
      "hero.meta": "تغطية وطنية · أداء احترافي · التزام بالمواعيد",
      "map.title": "خريطة تغطية المملكة",
      "hero.chip1": "الرياض ↔ جدة",
      "hero.chip2": "الرياض ↔ الدمام",
      "hero.chip3": "جدة ↔ أبها",
      "hero.chip1t": "1–2 أيام",
      "hero.chip2t": "1–2 أيام",
      "hero.chip3t": "2–3 أيام",
      "hero.chipMeta": "مدة التوصيل",
      "city.riyadh": "الرياض",
      "city.jeddah": "جدة",
      "city.dammam": "الدمام",
      "city.makkah": "مكة",
      "city.madinah": "المدينة",
      "city.abha": "أبها",
      "city.tabuk": "تبوك",
      "region.gcc": "دول الخليج",
      "region.asia": "آسيا",
      "region.europe": "أوروبا",
      "region.na": "أمريكا الشمالية",
      "trust.kicker": "شركاء التوصيل",
      "trust.title": "نعتمد شبكات موثوقة داخل المملكة وخارجها",
      "split.kicker": "الخدمات",
      "split.title": "محلي بسرعة. دولي بوضوح.",
      "split.domTag": "داخل المملكة",
      "split.domTitle": "شحن محلي من الباب إلى الباب",
      "split.domBody": "استلام من مدينتك وتسليم إلى أي مدينة رئيسية خلال 1–3 أيام عمل. مسار واحد، رقم تتبّع واحد، بدون تحويلات غامضة.",
      "split.domStat": "أيام عمل",
      "split.intTag": "دولي",
      "split.intTitle": "شحن جوي إلى أهم الأسواق",
      "split.intBody": "الخليج وآسيا وأوروبا وأمريكا الشمالية عبر الجو خلال 5–8 أيام. سعر يُحسب قبل الإرسال، وتتبع حتى التسليم.",
      "split.intStat": "أيام للشحن الجوي",
      "why.kicker": "لماذا فالكون شيب",
      "why.title": "طبقة تشغيل أوضح فوق شبكات الشحن",
      "why.c1t": "تغطية وطنية",
      "why.c1b": "من الرياض إلى جدة والدمام ومكة والمدينة وأبها وتبوك — شبكة تصل المدن الرئيسية دون تأخير غير مبرر.",
      "why.c2t": "تتبّع لحظي",
      "why.c2b": "رقم شحنة واحد ومسار واضح عند كل مرحلة: الاستلام، النقل، الخروج للتوصيل، ثم التسليم.",
      "why.c3t": "أسعار شفافة",
      "why.c3b": "احسب سعرك قبل أن تغادر الشحنة بابك. المعادلة ظاهرة، والرقم الذي تراه هو الرقم الذي يُفوتر.",
      "why.c4t": "دعم عبر واتساب",
      "why.c4b": "فريق العمليات في الرياض يرد على واتساب خلال ساعات العمل. بلا قوائم انتظار وبلا تحويلات بين الأقسام.",
      "track.kicker": "التتبّع",
      "track.title": "شحنة واحدة. مسار واضح.",
      "track.lead": "كل شحنة تحمل رقم فالكون شيب، وتظهر مرحلتها الحالية لحظة بلحظة — من الاستلام في الرياض حتى الباب في جدة أو أي مدينة أخرى.",
      "track.idLabel": "رقم الشحنة",
      "track.status": "خرج للتوصيل",
      "track.s1": "تم الاستلام",
      "track.s2": "في الطريق",
      "track.s3": "خرج للتوصيل",
      "track.s4": "تم التسليم",
      "track.note": "نموذج تتبّع تفاعلي",
      "rev.kicker": "آراء العملاء",
      "rev.title": "يثق بنا تجّار يشحنون كل أسبوع",
      "rev.1q": "التسليم إلى جدة خلال يومين، والتتبّع واضح من الاستلام حتى الباب. صرنا نعتمد عليهم لكل شحناتنا الأسبوعية.",
      "rev.1n": "نورة العتيبي",
      "rev.1r": "مديرة العمليات، متاجر نجد",
      "rev.2q": "حاسبة السعر وفّرت علينا الوقت. الرقم الذي يظهر هو الرقم الذي يُفوتر — وهذا نادر في قطاع الشحن.",
      "rev.2n": "فهد القحطاني",
      "rev.2r": "مؤسس، متجر سدرة",
      "rev.3q": "الشحن المبرّد إلى الدمام وصل بدرجة حرارة مستقرة. التعامل احترافي من جدولة الاستلام حتى التسليم.",
      "rev.3n": "لمى الشهري",
      "rev.3r": "مسؤولة اللوجستيات، مزارع طيبة",
      "cta.title": "جاهز تشحن؟",
      "cta.lead": "احسب سعرك خلال ثوانٍ، أو اطلب استلامًا من بابك اليوم.",
      "calc.kicker": "التسعير",
      "calc.title": "حاسبة سعر الشحن",
      "calc.lead": "أدخل المسار والوزن ونوع الشحنة. يظهر السعر بالريال مع تفصيل الأساس والوزن وأي تعديل حسب النوع.",
      "calc.from": "من",
      "calc.to": "إلى",
      "calc.weight": "الوزن (كجم)",
      "calc.type": "نوع الشحنة",
      "calc.documents": "مستندات",
      "calc.parcels": "طرود",
      "calc.refrigerated": "مبرّد",
      "calc.documentsHint": "× 0.85",
      "calc.parcelsHint": "سعر أساسي",
      "calc.refrigeratedHint": "× 1.35",
      "calc.service": "الخدمة",
      "calc.quote": "عرض السعر",
      "calc.copy": "نسخ ملخص العرض",
      "calc.copied": "تم نسخ الملخص",
      "calc.groupKsa": "المملكة",
      "calc.groupInt": "دولي",
      "calc.base": "الأساس",
      "calc.weightFee": "رسوم الوزن",
      "calc.subtotal": "المجموع الفرعي",
      "calc.adjustDoc": "خصم المستندات (15%)",
      "calc.adjustCold": "رسوم التبريد (35%)",
      "calc.total": "الإجمالي",
      "calc.sameCity": "مدينة الانطلاق والوصول يجب أن تختلفا.",
      "calc.currency": "ر.س",
      "pickup.kicker": "الاستلام",
      "pickup.title": "جدولة استلام من الباب",
      "pickup.lead": "أدخل بياناتك ونافذة الوقت. نؤكد الموعد عبر واتساب ونرسل رقم مرجع فور تسجيل الطلب.",
      "pickup.name": "الاسم الكامل",
      "pickup.phone": "الجوال",
      "pickup.phonePh": "05xxxxxxxx",
      "pickup.phoneHint": "رقم سعودي يبدأ بـ 05 أو +9665",
      "pickup.city": "المدينة",
      "pickup.cityPh": "اختر المدينة",
      "pickup.date": "التاريخ",
      "pickup.window": "نافذة الوقت",
      "pickup.windowPh": "اختر النافذة",
      "pickup.w1": "صباحًا 08:00–12:00",
      "pickup.w2": "ظهرًا 12:00–16:00",
      "pickup.w3": "مساءً 16:00–20:00",
      "pickup.notes": "ملاحظات الشحنة",
      "pickup.notesPh": "عدد الطرود، محتويات حسّاسة، تعليمات البوابة…",
      "pickup.submit": "تأكيد جدولة الاستلام",
      "pickup.successKicker": "تم تسجيل الطلب",
      "pickup.successTitle": "استلامك مجدول",
      "pickup.successBody": "سنؤكد النافذة عبر واتساب. احتفظ برقم المرجع عند التواصل معنا.",
      "pickup.ref": "رقم المرجع",
      "pickup.another": "جدولة شحنة أخرى",
      "pickup.errName": "أدخل اسمًا كاملًا من حرفين على الأقل.",
      "pickup.errPhone": "أدخل رقم جوال سعودي صحيح.",
      "pickup.errCity": "اختر مدينة الاستلام.",
      "pickup.errDate": "اختر تاريخًا اليوم أو بعده، خلال 21 يومًا.",
      "pickup.errWindow": "اختر نافذة الوقت.",
      "about.kicker": "الشركة",
      "about.title": "نبني شبكة شحن تثق بها الأعمال السعودية",
      "about.p1": "فالكون شيب شركة لوجستيات مقرها الرياض، متخصصة في الشحن من الباب إلى الباب داخل المملكة وإلى أهم الأسواق العالمية.",
      "about.p2": "نعمل بوصفنا طبقة تنسيق فوق شبكات البريد السعودي وأرامكس وDHL وFedEx: نستلم من بابك، نختار المسار الأنسب، ونسلّم مع تتبع واضح حتى الاستلام.",
      "about.p3": "الرياض مركز التوزيع الطبيعي للمملكة — ومنها نصل جدة والدمام والجنوب والشمال خلال أيام معدودة، ونربط الشحنات الدولية جوًا خلال أسبوع.",
      "about.hq": "المقر",
      "about.hqCity": "الرياض، المملكة العربية السعودية",
      "about.hoursVal": "الأحد–الخميس · 09:00–18:00",
      "about.support": "دعم واتساب أولاً",
      "about.supportBody": "عملاؤنا يفضّلون الرد السريع على المكالمات الطويلة. راسل العمليات مباشرة.",
      "footer.tag": "شريكك للشحن من الباب إلى الباب",
      "footer.services": "الخدمات",
      "footer.company": "الشركة",
      "footer.contact": "تواصل",
      "footer.int": "شحن جوي دولي",
      "footer.copy": "© 2026 FalconShip Logistics. الرياض."
    },
    en: {
      "meta.title": "FalconShip — Your Door-to-Door Shipping Partner",
      "meta.desc": "FalconShip — your door-to-door shipping partner. Domestic and international shipping from Riyadh.",
      skip: "Skip to content",
      "logo.sub": "Saudi Logistics",
      "nav.home": "Home",
      "nav.calc": "Price Calculator",
      "nav.pickup": "Schedule Pickup",
      "nav.about": "About",
      "cta.quote": "Get a quote",
      "cta.pickup": "Schedule pickup",
      "aria.lang": "Language",
      "aria.menu": "Open menu",
      "aria.menuClose": "Close menu",
      "hero.eyebrow": "Premium logistics in Saudi Arabia",
      "hero.title1": "We arrive fast.",
      "hero.title2": "We execute with precision.",
      "hero.lead": "Your door-to-door shipping partner. Coverage across the Kingdom and onward to the GCC, Asia, Europe, and North America — tracked until delivery.",
      "hero.meta": "National coverage · Professional execution · On-time delivery",
      "map.title": "Saudi coverage map",
      "hero.chip1": "Riyadh ↔ Jeddah",
      "hero.chip2": "Riyadh ↔ Dammam",
      "hero.chip3": "Jeddah ↔ Abha",
      "hero.chip1t": "1–2 days",
      "hero.chip2t": "1–2 days",
      "hero.chip3t": "2–3 days",
      "hero.chipMeta": "Delivery time",
      "city.riyadh": "Riyadh",
      "city.jeddah": "Jeddah",
      "city.dammam": "Dammam",
      "city.makkah": "Makkah",
      "city.madinah": "Madinah",
      "city.abha": "Abha",
      "city.tabuk": "Tabuk",
      "region.gcc": "GCC",
      "region.asia": "Asia",
      "region.europe": "Europe",
      "region.na": "North America",
      "trust.kicker": "Carrier partners",
      "trust.title": "We run on trusted networks in the Kingdom and beyond",
      "split.kicker": "Services",
      "split.title": "Domestic at speed. International with clarity.",
      "split.domTag": "Inside the Kingdom",
      "split.domTitle": "Door-to-door domestic shipping",
      "split.domBody": "Pickup from your city and delivery to any major city within 1–3 business days. One route, one tracking number, no opaque handoffs.",
      "split.domStat": "business days",
      "split.intTag": "International",
      "split.intTitle": "Air freight to key markets",
      "split.intBody": "GCC, Asia, Europe, and North America by air in 5–8 days. Price calculated before dispatch, tracked through delivery.",
      "split.intStat": "days for air freight",
      "why.kicker": "Why FalconShip",
      "why.title": "A clearer operating layer on top of carrier networks",
      "why.c1t": "National coverage",
      "why.c1b": "From Riyadh to Jeddah, Dammam, Makkah, Madinah, Abha, and Tabuk — a network that reaches major cities without unexplained delays.",
      "why.c2t": "Live tracking",
      "why.c2b": "One shipment number and a clear path at every stage: pickup, in transit, out for delivery, then delivered.",
      "why.c3t": "Transparent pricing",
      "why.c3b": "Calculate your rate before the parcel leaves your door. The formula is visible, and the number you see is the number billed.",
      "why.c4t": "WhatsApp-first support",
      "why.c4b": "Operations in Riyadh replies on WhatsApp during business hours. No hold queues and no transfers between departments.",
      "track.kicker": "Tracking",
      "track.title": "One shipment. A clear path.",
      "track.lead": "Every shipment carries a FalconShip number and shows its live stage — from pickup in Riyadh to the door in Jeddah or any other city.",
      "track.idLabel": "Tracking number",
      "track.status": "Out for delivery",
      "track.s1": "Picked up",
      "track.s2": "In transit",
      "track.s3": "Out for delivery",
      "track.s4": "Delivered",
      "track.note": "Interactive tracking preview",
      "rev.kicker": "Client voices",
      "rev.title": "Trusted by merchants who ship every week",
      "rev.1q": "Delivery to Jeddah in two days, and tracking was clear from pickup to the door. We now rely on them for every weekly shipment.",
      "rev.1n": "Noura Al-Otaibi",
      "rev.1r": "Operations manager, Najd Stores",
      "rev.2q": "The price calculator saved us time. The number on screen is the number billed — rare in shipping.",
      "rev.2n": "Fahad Al-Qahtani",
      "rev.2r": "Founder, Sidra Shop",
      "rev.3q": "The refrigerated shipment to Dammam arrived at a stable temperature. Professional from pickup scheduling through delivery.",
      "rev.3n": "Lama Al-Shehri",
      "rev.3r": "Logistics lead, Taiba Farms",
      "cta.title": "Ready to ship?",
      "cta.lead": "Get a quote in seconds, or request a pickup from your door today.",
      "calc.kicker": "Pricing",
      "calc.title": "Shipping price calculator",
      "calc.lead": "Enter the route, weight, and shipment type. The rate appears in SAR with a breakdown of base, weight, and any type adjustment.",
      "calc.from": "From",
      "calc.to": "To",
      "calc.weight": "Weight (kg)",
      "calc.type": "Shipment type",
      "calc.documents": "Documents",
      "calc.parcels": "Parcels",
      "calc.refrigerated": "Refrigerated",
      "calc.documentsHint": "× 0.85",
      "calc.parcelsHint": "Base rate",
      "calc.refrigeratedHint": "× 1.35",
      "calc.service": "Service",
      "calc.quote": "Quote",
      "calc.copy": "Copy quote summary",
      "calc.copied": "Summary copied",
      "calc.groupKsa": "Saudi Arabia",
      "calc.groupInt": "International",
      "calc.base": "Base",
      "calc.weightFee": "Weight charge",
      "calc.subtotal": "Subtotal",
      "calc.adjustDoc": "Documents discount (15%)",
      "calc.adjustCold": "Refrigeration surcharge (35%)",
      "calc.total": "Total",
      "calc.sameCity": "Origin and destination cities must be different.",
      "calc.currency": "SAR",
      "pickup.kicker": "Pickup",
      "pickup.title": "Schedule a door pickup",
      "pickup.lead": "Enter your details and a time window. We confirm on WhatsApp and send a reference number as soon as the request is logged.",
      "pickup.name": "Full name",
      "pickup.phone": "Mobile",
      "pickup.phonePh": "05xxxxxxxx",
      "pickup.phoneHint": "Saudi number starting with 05 or +9665",
      "pickup.city": "City",
      "pickup.cityPh": "Select a city",
      "pickup.date": "Date",
      "pickup.window": "Time window",
      "pickup.windowPh": "Select a window",
      "pickup.w1": "Morning 08:00–12:00",
      "pickup.w2": "Afternoon 12:00–16:00",
      "pickup.w3": "Evening 16:00–20:00",
      "pickup.notes": "Parcel notes",
      "pickup.notesPh": "Parcel count, sensitive contents, gate instructions…",
      "pickup.submit": "Confirm pickup",
      "pickup.successKicker": "Request logged",
      "pickup.successTitle": "Your pickup is scheduled",
      "pickup.successBody": "We will confirm the window on WhatsApp. Keep the reference number when you contact us.",
      "pickup.ref": "Reference number",
      "pickup.another": "Schedule another shipment",
      "pickup.errName": "Enter a full name of at least two characters.",
      "pickup.errPhone": "Enter a valid Saudi mobile number.",
      "pickup.errCity": "Select a pickup city.",
      "pickup.errDate": "Choose today or a later date within 21 days.",
      "pickup.errWindow": "Select a time window.",
      "about.kicker": "Company",
      "about.title": "A shipping network Saudi businesses can trust",
      "about.p1": "FalconShip is a logistics company based in Riyadh, specialized in door-to-door shipping inside the Kingdom and to key global markets.",
      "about.p2": "We operate as a coordination layer on top of Saudi Post, Aramex, DHL, and FedEx: we pick up at your door, choose the right lane, and deliver with clear tracking through handover.",
      "about.p3": "Riyadh is the Kingdom’s natural distribution hub — from here we reach Jeddah, Dammam, the south, and the north within a few days, and connect international shipments by air within a week.",
      "about.hq": "Headquarters",
      "about.hqCity": "Riyadh, Saudi Arabia",
      "about.hoursVal": "Sunday–Thursday · 09:00–18:00",
      "about.support": "WhatsApp-first support",
      "about.supportBody": "Our clients prefer a fast reply over long calls. Message operations directly.",
      "footer.tag": "Your door-to-door shipping partner",
      "footer.services": "Services",
      "footer.company": "Company",
      "footer.contact": "Contact",
      "footer.int": "International air freight",
      "footer.copy": "© 2026 FalconShip Logistics. Riyadh."
    }
  };

  let lang = "ar";
  let lastQuote = null;
  let copyTimer = 0;

  const header = document.getElementById("site-header");
  const nav = document.getElementById("site-nav");
  const menuToggle = document.getElementById("menu-toggle");
  const calcForm = document.getElementById("calc-form");
  const pickupForm = document.getElementById("pickup-form");
  const pickupSuccess = document.getElementById("pickup-success");

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || key;
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.desc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const value = t(el.getAttribute("data-i18n"));
      if (el.tagName === "OPTION" || el.tagName === "TITLE") {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (el.id === "menu-toggle") {
        el.setAttribute("aria-label", el.getAttribute("aria-expanded") === "true" ? t("aria.menuClose") : t("aria.menu"));
      } else {
        el.setAttribute("aria-label", t(key));
      }
    });

    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      el.setAttribute("label", t(el.getAttribute("data-i18n-label")));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateCalculator();
  }

  function setLang(next) {
    lang = next === "en" ? "en" : "ar";
    try {
      localStorage.setItem("falconship-lang", lang);
    } catch (e) {}
    applyI18n();
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", t("aria.menu"));
    document.body.classList.remove("is-locked");
  }

  function toggleMenu() {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? t("aria.menuClose") : t("aria.menu"));
    document.body.classList.toggle("is-locked", open);
  }

  function showView(name) {
    const view = VIEWS.indexOf(name) >= 0 ? name : "home";
    document.querySelectorAll("[data-view-panel]").forEach(function (panel) {
      panel.classList.toggle("is-active", panel.getAttribute("data-view-panel") === view);
    });
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-nav") === view);
    });
    if (location.hash.replace("#", "") !== view) {
      history.replaceState(null, "", "#" + view);
    }
    closeMenu();
    window.scrollTo(0, 0);
    const bar = document.querySelector(".track-bar-fill");
    if (bar && view === "home") {
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "";
    }
  }

  function currentViewFromHash() {
    const hash = (location.hash || "#home").replace("#", "");
    return VIEWS.indexOf(hash) >= 0 ? hash : "home";
  }

  function formatMoney(n) {
    const rounded = Math.round(n * 100) / 100;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
  }

  function placeName(code) {
    if (CITIES.indexOf(code) >= 0) return t("city." + code);
    return t("region." + code);
  }

  function getQuote() {
    const from = document.getElementById("calc-from").value;
    const to = document.getElementById("calc-to").value;
    const weight = Math.min(50, Math.max(0.5, Number(document.getElementById("calc-weight").value) || 0.5));
    const typeInput = document.querySelector('input[name="type"]:checked');
    const type = typeInput ? typeInput.value : "parcels";
    const domestic = CITIES.indexOf(to) >= 0;
    const rateKey = domestic ? "domestic" : to;
    const rate = RATES[rateKey];
    const multiplier = TYPE_MULT[type] || 1;
    const sameCity = domestic && from === to;
    const base = rate.base;
    const weightFee = rate.perKg * weight;
    const subtotal = base + weightFee;
    const total = subtotal * multiplier;
    return {
      from: from,
      to: to,
      weight: weight,
      type: type,
      domestic: domestic,
      sameCity: sameCity,
      base: base,
      perKg: rate.perKg,
      weightFee: weightFee,
      subtotal: subtotal,
      multiplier: multiplier,
      total: total,
      eta: lang === "ar" ? rate.etaAr : rate.etaEn
    };
  }

  function updateCalculator() {
    if (!calcForm) return;
    const quote = getQuote();
    lastQuote = quote;
    const weightValue = document.getElementById("weight-value");
    const service = document.getElementById("calc-service");
    const route = document.getElementById("quote-route");
    const totalEl = document.getElementById("quote-total");
    const currencyEl = document.getElementById("quote-currency");
    const etaEl = document.getElementById("quote-eta");
    const breakdown = document.getElementById("quote-breakdown");
    const errorEl = document.getElementById("quote-error");
    const copyBtn = document.getElementById("copy-quote");

    weightValue.textContent = String(quote.weight);
    service.value = quote.eta;
    route.textContent =
      lang === "ar"
        ? "من " + placeName(quote.from) + " إلى " + placeName(quote.to)
        : placeName(quote.from) + " → " + placeName(quote.to);
    currencyEl.textContent = t("calc.currency");
    etaEl.textContent = quote.eta;

    if (quote.sameCity) {
      errorEl.hidden = false;
      errorEl.textContent = t("calc.sameCity");
      totalEl.textContent = "—";
      breakdown.innerHTML = "";
      copyBtn.disabled = true;
      return;
    }

    errorEl.hidden = true;
    copyBtn.disabled = false;
    totalEl.textContent = formatMoney(quote.total);

    const rows = [
      [t("calc.base"), formatMoney(quote.base) + " " + t("calc.currency")],
      [t("calc.weightFee") + " (" + quote.perKg + " × " + quote.weight + ")", formatMoney(quote.weightFee) + " " + t("calc.currency")],
      [t("calc.subtotal"), formatMoney(quote.subtotal) + " " + t("calc.currency")]
    ];

    if (quote.type === "documents") {
      rows.push([t("calc.adjustDoc"), "−" + formatMoney(quote.subtotal * 0.15) + " " + t("calc.currency")]);
    } else if (quote.type === "refrigerated") {
      rows.push([t("calc.adjustCold"), "+" + formatMoney(quote.subtotal * 0.35) + " " + t("calc.currency")]);
    }

    rows.push([t("calc.total"), formatMoney(quote.total) + " " + t("calc.currency")]);

    breakdown.innerHTML = rows
      .map(function (row, i) {
        const last = i === rows.length - 1;
        return "<div" + (last ? ' class="is-total"' : "") + "><dt>" + row[0] + "</dt><dd>" + row[1] + "</dd></div>";
      })
      .join("");
  }

  function copyQuote() {
    const quote = lastQuote || getQuote();
    if (quote.sameCity) return;
    const typeLabel = t("calc." + quote.type);
    const lines = [
      lang === "ar" ? "عرض سعر فالكون شيب" : "FalconShip Quote",
      lang === "ar"
        ? "من " + placeName(quote.from) + " إلى " + placeName(quote.to)
        : placeName(quote.from) + " → " + placeName(quote.to),
      (lang === "ar" ? "الوزن: " : "Weight: ") + quote.weight + " kg · " + typeLabel + " · " + quote.eta,
      t("calc.base") + ": " + formatMoney(quote.base) + " " + t("calc.currency"),
      t("calc.weightFee") + ": " + formatMoney(quote.weightFee) + " " + t("calc.currency")
    ];
    if (quote.type === "documents") {
      lines.push(t("calc.adjustDoc") + ": −" + formatMoney(quote.subtotal * 0.15) + " " + t("calc.currency"));
    } else if (quote.type === "refrigerated") {
      lines.push(t("calc.adjustCold") + ": +" + formatMoney(quote.subtotal * 0.35) + " " + t("calc.currency"));
    }
    lines.push(t("calc.total") + ": " + formatMoney(quote.total) + " " + t("calc.currency"));
    const text = lines.join("\n");
    const done = function () {
      const label = document.querySelector("#copy-quote span");
      label.textContent = t("calc.copied");
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () {
        label.textContent = t("calc.copy");
      }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        window.prompt(t("calc.copy"), text);
      });
    } else {
      window.prompt(t("calc.copy"), text);
    }
  }

  function todayISO() {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + month + "-" + day;
  }

  function addDaysISO(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + month + "-" + day;
  }

  function setPickupDateBounds() {
    const date = document.getElementById("pickup-date");
    if (!date) return;
    date.min = todayISO();
    date.max = addDaysISO(21);
  }

  function showError(id, message, invalid) {
    const el = document.getElementById(id);
    const fields = {
      "err-name": "pickup-name",
      "err-phone": "pickup-phone",
      "err-city": "pickup-city",
      "err-date": "pickup-date",
      "err-window": "pickup-window"
    };
    if (!el) return invalid;
    el.hidden = !invalid;
    el.textContent = invalid ? message : "";
    const input = fields[id] && document.getElementById(fields[id]);
    if (input) input.setAttribute("aria-invalid", invalid ? "true" : "false");
    return invalid;
  }

  function validName(value) {
    return /^[\u0600-\u06FFa-zA-Z][\u0600-\u06FFa-zA-Z\s.'-]{1,79}$/.test(value.trim());
  }

  function validPhone(value) {
    const digits = value.replace(/[\s-]/g, "");
    return /^(05\d{8}|\+9665\d{8}|009665\d{8}|9665\d{8})$/.test(digits);
  }

  function validDate(value) {
    if (!value) return false;
    return value >= todayISO() && value <= addDaysISO(21);
  }

  function makeRef() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let out = "FS-";
    for (let i = 0; i < 4; i += 1) {
      out += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return out;
  }

  function handlePickup(event) {
    event.preventDefault();
    const name = document.getElementById("pickup-name").value;
    const phone = document.getElementById("pickup-phone").value;
    const city = document.getElementById("pickup-city").value;
    const date = document.getElementById("pickup-date").value;
    const windowValue = document.getElementById("pickup-window").value;

    const badName = showError("err-name", t("pickup.errName"), !validName(name));
    const badPhone = showError("err-phone", t("pickup.errPhone"), !validPhone(phone));
    const badCity = showError("err-city", t("pickup.errCity"), !city);
    const badDate = showError("err-date", t("pickup.errDate"), !validDate(date));
    const badWindow = showError("err-window", t("pickup.errWindow"), !windowValue);

    if (badName || badPhone || badCity || badDate || badWindow) {
      const focusMap = {
        "err-name": "pickup-name",
        "err-phone": "pickup-phone",
        "err-city": "pickup-city",
        "err-date": "pickup-date",
        "err-window": "pickup-window"
      };
      const first = document.querySelector(".field-error:not([hidden])");
      if (first && focusMap[first.id]) document.getElementById(focusMap[first.id]).focus();
      return;
    }

    document.getElementById("pickup-ref").textContent = makeRef();
    pickupForm.hidden = true;
    pickupSuccess.hidden = false;
  }

  function resetPickup() {
    pickupForm.reset();
    pickupForm.hidden = false;
    pickupSuccess.hidden = true;
    ["err-name", "err-phone", "err-city", "err-date", "err-window"].forEach(function (id) {
      const el = document.getElementById(id);
      el.hidden = true;
      el.textContent = "";
    });
    setPickupDateBounds();
  }

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  menuToggle.addEventListener("click", toggleMenu);

  document.querySelectorAll("[data-nav]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      const view = link.getAttribute("data-nav");
      if (!view) return;
      event.preventDefault();
      showView(view);
    });
  });

  window.addEventListener("hashchange", function () {
    showView(currentViewFromHash());
  });

  window.addEventListener("scroll", onScroll, { passive: true });

  calcForm.addEventListener("input", updateCalculator);
  calcForm.addEventListener("change", updateCalculator);
  calcForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  document.getElementById("copy-quote").addEventListener("click", copyQuote);

  pickupForm.addEventListener("submit", handlePickup);
  document.getElementById("pickup-reset").addEventListener("click", resetPickup);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  try {
    const stored = localStorage.getItem("falconship-lang");
    if (stored === "en" || stored === "ar") lang = stored;
  } catch (e) {}

  setPickupDateBounds();
  applyI18n();
  showView(currentViewFromHash());
  onScroll();
})();
