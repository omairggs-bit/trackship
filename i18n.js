/* Track System — Arabic / English */
const TS_WA_NUMBER = "966597281619";

const MASAR_DICT = {
  ar: {
    dir: "rtl",
    brand_sub: "تراك سيستم",
    nav_home: "الرئيسية", nav_services: "الخدمات", nav_rates: "الأسعار", nav_track: "تتبع الشحنة", nav_contact: "تواصل معنا", nav_order: "اطلب شحن",
    wa_label: "واتساب",
    wa_hello: "مرحبًا Track System، أريد الاستفسار عن خدمة شحن.",

    hero_eyebrow: "شركة تراك سيستمز للخدمات اللوجستية",
    hero_h1: "شحنتك من الباب إلى وجهتها، بطلب واحد على واتساب.",
    hero_lede: "اختر الخدمة، واكتب الوزن والوجهة وبيانات المرسل والمستلم. يصلنا طلبك كاملًا على واتساب، ونؤكده معك مباشرة.",
    hero_cta1: "اختر خدمة الشحن", hero_cta2: "تحدث معنا على واتساب",
    hero_stat1_n: "4", hero_stat1_l: "خدمات شحن",
    hero_stat2_n: "+60", hero_stat2_l: "دولة للشحن الدولي",
    hero_stat3_n: "15٪", hero_stat3_l: "ضريبة ظاهرة في السعر",
    chat_title: "Track System", chat_status: "متصل الآن",
    chat_msg: "طلب شحن جديد\nالخدمة: شحن مبرّد\nالوزن: 4 كجم\nمن الرياض إلى جدة\nالحرارة: مجمّد −18°م\nإضافات: توصيل سريع، استلام من الباب\nالإجمالي التقديري: 154.10 ر.س",
    chat_reply: "وصل طلبك. نؤكد موعد الاستلام الآن.",

    services_kicker: "الخدمات", services_h2: "اختر نوع الشحنة",
    services_p: "كل أيقونة تفتح صفحة طلب خاصة بها. بعد تعبئة البيانات يُرسل طلبك إلى رقم التواصل مع كل خياراتك.",
    svc1_h: "شحن جاف محلي", svc1_p: "طرود عادية بين مدن المملكة. الوزن والوجهة وبيانات المرسل والمستلم.",
    svc2_h: "شحن مبرّد", svc2_p: "نفس بيانات الشحن المحلي، مع درجة الحرارة التي تحتاجها شحنتك.",
    svc3_h: "شحن دولي", svc3_p: "إلى أي دولة ومدينة. الوزن والمحتويات وبيانات الطرفين، مع التوصيل السريع والاستلام من الباب.",
    svc4_h: "الشحن إلى السودان", svc4_p: "خدمة مستقلة: الوزن، ومدينة من مدن السودان، والمحتويات، وبيانات المرسل والمستلم.",
    svc4_note: "خدمة قائمة بذاتها", svc_go: "ابدأ الطلب",

    addon_kicker: "خدمات مقدمة", addon_h2: "أضفها إلى أي شحنة",
    addon_p: "كل خدمة لها لون وإطار واضح داخل صفحة الطلب، وتظهر في رسالة واتساب عند اختيارها.",
    addon_express_h: "توصيل سريع", addon_express_p: "أولوية في الاستلام والنقل والتسليم.",
    addon_pickup_h: "استلام من الباب", addon_pickup_p: "نستلم الطرد من عنوان المرسل في الموعد الذي تختاره.",
    addon_pack_h: "تغليف احترافي", addon_pack_p: "كرتون وحماية داخلية مناسبة لحجم الشحنة.",
    addon_fragile_h: "مناولة القابل للكسر", addon_fragile_p: "ملصق تحذير ومعاملة خاصة في كل مراحل النقل.",

    how_kicker: "طريقة الطلب", how_h2: "أربع خطوات وطلبك عندنا",
    how1_h: "اختر الخدمة", how1_p: "جاف، مبرّد، دولي، أو السودان.",
    how2_h: "اكتب البيانات", how2_p: "الوزن والوجهة وبيانات المرسل والمستلم.",
    how3_h: "راجع السعر", how3_p: "تفصيل كامل قبل الضريبة وبعدها.",
    how4_h: "أرسل على واتساب", how4_p: "يصلنا الطلب بكل خياراتك ونؤكده معك.",

    why_kicker: "لماذا Track System", why_h2: "شحن واضح من أول رسالة",
    why1_h: "سعر قبل الإرسال", why1_p: "ترى الوزن والإضافات والضريبة قبل أن تطلب.",
    why2_h: "تبريد بدرجة تحددها", why2_p: "من التبريد العادي حتى التجميد العميق.",
    why3_h: "السودان خدمة مستقلة", why3_p: "مدن السودان لها صفحة وأسعار خاصة.",
    why4_h: "رد مباشر", why4_p: "طلبك يصل إلى فريقنا على واتساب، لا إلى نموذج منسي.",

    price_kicker: "الأسعار", price_h2: "التعرفة",
    price_p: "السعر الأساسي يشمل حتى 5 كجم. بعدها يُحتسب كل كيلوغرام بدأ.",
    price_note: "عمود «شامل الضريبة» هو أقل سعر بعد إضافة 15٪. الخدمات المقدمة تُضاف عند اختيارها.",
    price_from: "من",
    tab_local: "جاف", tab_cold: "مبرّد", tab_intl: "دولي", tab_sudan: "السودان", tab_extra: "خدمات مقدمة",
    th_service: "الخدمة", th_base: "حتى 5 كجم", th_extra: "كل كجم إضافي", th_incl: "شامل الضريبة",

    cta_h2: "جاهز ترسل شحنتك؟", cta_p: "اختر الخدمة، وخلال دقيقة يصلنا طلبك على واتساب.",
    cta_btn: "ابدأ الطلب",

    foot_about: "Track System علامة شركة تراك سيستمز للخدمات اللوجستية. شحن من الباب إلى الباب داخل المملكة وإلى الخارج.",
    foot_links: "الصفحات", foot_services: "الخدمات", foot_company: "الشركة",
    foot_cr: "السجل التجاري", foot_vat: "الرقم الضريبي",
    foot_addr: "حي الدريهمية، شارع صيدا، مبنى 7036، الرياض 12796",
    foot_short: "العنوان الوطني", foot_store: "المتجر",
    foot_rights: "© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.",

    calc_kicker: "طلب شحن", choose_h: "أي شحنة تريد؟",
    calc_lede: "كل خدمة لها صفحتها. بعد البيانات يُرسل طلبك إلى واتساب.",
    change_service: "تغيير الخدمة",
    f_shipment: "بيانات الشحنة", f_weight: "الوزن (كجم)", f_dest: "الوجهة",
    f_sender: "المرسل", f_recv: "المستلم",
    f_name: "الاسم", f_phone: "الجوال", f_city: "المدينة", f_address: "العنوان التفصيلي",
    f_contents: "المحتويات", f_country: "الدولة", f_city_name: "المدينة",
    f_country_other: "اسم الدولة", f_temp: "درجة الحرارة", f_temp_custom: "الدرجة المئوية",
    f_express: "توصيل سريع", f_express_hint: "أولوية في الاستلام والنقل والتسليم",
    f_pickup: "استلام من الباب", f_pickup_hint: "نستلم الطرد من عنوان المرسل",
    f_pickup_date: "اليوم المفضل للاستلام",
    f_pack: "تغليف احترافي", f_pack_hint: "كرتون وحماية داخلية",
    f_fragile: "قابل للكسر", f_fragile_hint: "ملصق تحذير ومناولة خاصة",
    f_extra_title: "الأبعاد والتأمين والملاحظات", f_dims: "الأبعاد بالسنتيمتر، إن وُجدت",
    f_l: "الطول", f_w: "العرض", f_h: "الارتفاع",
    f_insure: "تأمين الشحنة", f_insure_hint: "2٪ من القيمة، بحد أدنى 8 ر.س",
    f_value: "القيمة المصرّح بها (ر.س)", f_notes: "ملاحظات للفريق",
    ph_city: "اختر المدينة", ph_dest: "اختر الوجهة", ph_sudan: "اختر مدينة في السودان", ph_country: "اختر الدولة",
    temp_chill: "مبرّد 2 إلى 8°م", temp_cool: "بارد 0 إلى 4°م", temp_freeze: "مجمّد −18°م", temp_deep: "تجميد عميق −25°م أو أقل", temp_custom: "درجة أحددها",

    quote_title: "سعر هذه الشحنة", quote_empty: "أدخل الوزن والوجهة ليظهر السعر.",
    quote_base: "السعر الأساسي", quote_extra: "وزن إضافي", quote_temp: "درجة الحرارة",
    quote_express: "توصيل سريع", quote_pickup: "استلام من الباب", quote_pack: "تغليف احترافي",
    quote_fragile: "مناولة القابل للكسر", quote_ins: "تأمين",
    quote_sub: "المجموع قبل الضريبة", quote_vat: "ضريبة القيمة المضافة 15٪", quote_total: "الإجمالي",
    quote_eta: "المدة المتوقعة", quote_vol: "الوزن الحجمي", quote_bill: "الوزن المحتسب",
    quote_note: "سعر تقديري شامل الضريبة. نؤكده معك على واتساب بعد مطابقة الوزن.",
    send_btn: "أرسل الطلب على واتساب",
    send_hint: "يفتح واتساب برسالة جاهزة فيها كل بياناتك وخياراتك.",
    sent_h: "جهّزنا رسالة طلبك",
    sent_p: "إذا لم يفتح واتساب تلقائيًا، اضغط الزر أدناه أو انسخ الرسالة وأرسلها إلى",
    sent_open: "فتح واتساب", sent_copy: "نسخ الرسالة", sent_copied: "تم نسخ الرسالة.",
    sent_order: "رقم الطلب",

    err_weight: "أدخل وزنًا أكبر من صفر.", err_heavy: "للأوزان فوق 300 كجم تواصل معنا مباشرة.",
    err_dest: "اختر المدينة الوجهة.", err_sudan: "اختر مدينة سودانية.",
    err_country: "حدد الدولة.", err_city: "أدخل المدينة.", err_contents: "صف محتويات الشحنة.",
    err_temp: "حدد درجة الحرارة.", err_name: "أدخل الاسم.", err_phone: "أدخل رقم جوال صحيحًا.",
    err_address: "أدخل العنوان التفصيلي.", err_value: "أدخل قيمة الشحنة للتأمين.",

    msg_title: "طلب شحن جديد — Track System",
    msg_order: "رقم الطلب", msg_service: "الخدمة", msg_weight: "الوزن", msg_billable: "المحتسب",
    msg_from: "من", msg_to: "إلى", msg_temp: "درجة الحرارة", msg_contents: "المحتويات",
    msg_sender: "المرسل", msg_recv: "المستلم", msg_addons: "الخدمات المقدمة", msg_none: "لا يوجد",
    msg_dims: "الأبعاد", msg_insured: "تأمين بقيمة", msg_notes: "ملاحظات",
    msg_price: "السعر التقديري", msg_pickup_on: "الاستلام يوم",
    kg: "كجم",

    track_eyebrow: "التتبع", track_h1: "أين وصلت شحنتك؟",
    track_lede: "اكتب رقم الطلب أو رقم الشحنة، ونرسل لك حالتها على واتساب.",
    track_placeholder: "مثال: TS-261027-4821", track_phone: "جوالك (اختياري)", track_btn: "اسأل على واتساب",
    track_msg: "أريد معرفة حالة الشحنة رقم", track_msg_phone: "جوالي",
    track_err: "اكتب رقم الطلب أو الشحنة.",
    track_note: "رقم الطلب يبدأ بـ TS ويظهر في رسالة واتساب التي أرسلتها عند الطلب.",

    contact_eyebrow: "التواصل", contact_h1: "تحدث مع Track System",
    contact_lede: "للاستفسار عن شحنة أو سعر، اكتب رسالتك وتصلنا على واتساب، أو اتصل بنا.",
    c_name: "الاسم", c_phone: "الجوال", c_msg: "الرسالة",
    c_submit: "أرسل على واتساب", c_msg_title: "رسالة من موقع Track System",
    c_err: "اكتب اسمك ورسالتك.",
    c_info_h: "بيانات الشركة", c_addr_h: "العنوان الوطني",
    c_addr_v: "حي الدريهمية، شارع صيدا، مبنى 7036، الرقم الفرعي 2487، الرياض 12796. العنوان المختصر RBDA7036.",
    c_phone_h: "الهاتف وواتساب", c_email_h: "البريد", c_cr_h: "السجل التجاري", c_vat_h: "الرقم الضريبي", c_store_h: "المتجر",
    faq_h2: "أسئلة شائعة",
    faq_q1: "هل السعر في الصفحة نهائي؟",
    faq_a1: "هو سعر تقديري شامل ضريبة 15٪ للبيانات التي أدخلتها. نؤكده معك على واتساب، وقد يتعدل إذا اختلف الوزن أو المقاس عند الاستلام.",
    faq_q2: "ماذا يحدث بعد الضغط على «أرسل الطلب على واتساب»؟",
    faq_a2: "يفتح واتساب برسالة جاهزة فيها الخدمة والوزن والوجهة وبيانات الطرفين وكل الإضافات. ترسلها، ونرد عليك لتأكيد الطلب وموعد الاستلام وطريقة الدفع.",
    faq_q3: "هل شحن السودان منفصل؟",
    faq_a3: "نعم. له صفحة خاصة تختار فيها مدينة سودانية وتكتب المحتويات.",
    faq_q4: "كيف أطلب شحنًا مبردًا؟",
    faq_a4: "من أيقونة الشحن المبرد. تكتب الوزن والوجهة وبيانات الطرفين وتختار درجة الحرارة.",
  },
  en: {
    dir: "ltr",
    brand_sub: "Track Systems",
    nav_home: "Home", nav_services: "Services", nav_rates: "Rates", nav_track: "Track", nav_contact: "Contact", nav_order: "Ship now",
    wa_label: "WhatsApp",
    wa_hello: "Hello Track System, I have a question about shipping.",

    hero_eyebrow: "Track Systems Logistics",
    hero_h1: "Door to destination, with one order on WhatsApp.",
    hero_lede: "Choose a service and enter the weight, destination, sender and recipient. Your full order reaches us on WhatsApp and we confirm it with you directly.",
    hero_cta1: "Choose a service", hero_cta2: "Chat on WhatsApp",
    hero_stat1_n: "4", hero_stat1_l: "shipping services",
    hero_stat2_n: "60+", hero_stat2_l: "countries abroad",
    hero_stat3_n: "15%", hero_stat3_l: "VAT shown in the price",
    chat_title: "Track System", chat_status: "Online",
    chat_msg: "New shipment order\nService: Cold-chain\nWeight: 4 kg\nRiyadh to Jeddah\nTemperature: Frozen −18°C\nAdd-ons: Express, Door pickup\nEstimated total: SAR 154.10",
    chat_reply: "Order received. We're confirming the pickup time now.",

    services_kicker: "Services", services_h2: "Choose your shipment",
    services_p: "Each icon opens its own order page. Once the details are in, your order goes to our contact number with every option you picked.",
    svc1_h: "Local dry shipping", svc1_p: "Ordinary parcels between Saudi cities. Weight, destination, sender and recipient.",
    svc2_h: "Cold-chain shipping", svc2_p: "The same local details, plus the temperature your shipment needs.",
    svc3_h: "International shipping", svc3_p: "To any country and city. Weight, contents and both parties, with express and door pickup.",
    svc4_h: "Shipping to Sudan", svc4_p: "A standalone service: weight, a Sudanese city, contents, sender and recipient.",
    svc4_note: "A standalone service", svc_go: "Start order",

    addon_kicker: "Add-on services", addon_h2: "Add them to any shipment",
    addon_p: "Each one has its own color and border on the order page, and appears in the WhatsApp message when selected.",
    addon_express_h: "Express delivery", addon_express_p: "Priority collection, transport and delivery.",
    addon_pickup_h: "Door pickup", addon_pickup_p: "We collect from the sender's address on the day you choose.",
    addon_pack_h: "Professional packing", addon_pack_p: "A box and inner protection sized to the shipment.",
    addon_fragile_h: "Fragile handling", addon_fragile_p: "Warning label and careful handling at every stage.",

    how_kicker: "How to order", how_h2: "Four steps and we have it",
    how1_h: "Choose the service", how1_p: "Dry, cold, international, or Sudan.",
    how2_h: "Enter the details", how2_p: "Weight, destination, sender and recipient.",
    how3_h: "Review the price", how3_p: "Full breakdown before and after VAT.",
    how4_h: "Send on WhatsApp", how4_p: "We receive every option and confirm with you.",

    why_kicker: "Why Track System", why_h2: "Clear shipping from the first message",
    why1_h: "Price before you send", why1_p: "Weight, add-ons and VAT are shown before you order.",
    why2_h: "Temperature you set", why2_p: "From a standard chill to a deep freeze.",
    why3_h: "Sudan stands alone", why3_p: "Sudanese cities have their own page and tariff.",
    why4_h: "A direct reply", why4_p: "Your order reaches our team on WhatsApp, not a forgotten form.",

    price_kicker: "Rates", price_h2: "Tariff",
    price_p: "The base covers up to 5 kg. Each started kilogram after that is billed in full.",
    price_note: "The VAT-inclusive column is the lowest price after 15% VAT. Add-ons are added only if you select them.",
    price_from: "From",
    tab_local: "Dry", tab_cold: "Cold", tab_intl: "International", tab_sudan: "Sudan", tab_extra: "Add-ons",
    th_service: "Service", th_base: "Up to 5 kg", th_extra: "Each extra kg", th_incl: "Incl. VAT",

    cta_h2: "Ready to ship?", cta_p: "Pick a service and your order reaches us on WhatsApp within a minute.",
    cta_btn: "Start an order",

    foot_about: "Track System is the brand of Track Systems Logistics. Door-to-door shipping inside Saudi Arabia and abroad.",
    foot_links: "Pages", foot_services: "Services", foot_company: "Company",
    foot_cr: "Commercial register", foot_vat: "VAT number",
    foot_addr: "Al Duraihemyah, Saiydah Street, Building 7036, Riyadh 12796",
    foot_short: "National address", foot_store: "Store",
    foot_rights: "© 2026 Track Systems Company. All rights reserved.",

    calc_kicker: "Shipment order", choose_h: "What are you shipping?",
    calc_lede: "Each service has its own page. After the details, your order goes to WhatsApp.",
    change_service: "Change service",
    f_shipment: "Shipment", f_weight: "Weight (kg)", f_dest: "Destination",
    f_sender: "Sender", f_recv: "Recipient",
    f_name: "Name", f_phone: "Mobile", f_city: "City", f_address: "Street address",
    f_contents: "Contents", f_country: "Country", f_city_name: "City",
    f_country_other: "Country name", f_temp: "Temperature", f_temp_custom: "Degrees Celsius",
    f_express: "Express delivery", f_express_hint: "Priority collection, transport and delivery",
    f_pickup: "Door pickup", f_pickup_hint: "We collect from the sender's address",
    f_pickup_date: "Preferred pickup day",
    f_pack: "Professional packing", f_pack_hint: "Box and inner protection",
    f_fragile: "Fragile", f_fragile_hint: "Warning label and careful handling",
    f_extra_title: "Dimensions, insurance and notes", f_dims: "Dimensions in centimeters, if you have them",
    f_l: "Length", f_w: "Width", f_h: "Height",
    f_insure: "Shipment insurance", f_insure_hint: "2% of value, minimum SAR 8",
    f_value: "Declared value (SAR)", f_notes: "Notes for the team",
    ph_city: "Choose a city", ph_dest: "Choose a destination", ph_sudan: "Choose a city in Sudan", ph_country: "Choose a country",
    temp_chill: "Chilled 2 to 8°C", temp_cool: "Cool 0 to 4°C", temp_freeze: "Frozen −18°C", temp_deep: "Deep freeze −25°C or below", temp_custom: "I'll set the degree",

    quote_title: "Price of this shipment", quote_empty: "Enter the weight and destination to see the price.",
    quote_base: "Base price", quote_extra: "Extra weight", quote_temp: "Temperature",
    quote_express: "Express", quote_pickup: "Door pickup", quote_pack: "Professional packing",
    quote_fragile: "Fragile handling", quote_ins: "Insurance",
    quote_sub: "Subtotal before VAT", quote_vat: "VAT 15%", quote_total: "Total",
    quote_eta: "Estimated time", quote_vol: "Volumetric weight", quote_bill: "Billable weight",
    quote_note: "Estimate including VAT. We confirm it on WhatsApp once the weight is checked.",
    send_btn: "Send order on WhatsApp",
    send_hint: "Opens WhatsApp with a ready message containing all your details and options.",
    sent_h: "Your order message is ready",
    sent_p: "If WhatsApp did not open, press the button below or copy the message and send it to",
    sent_open: "Open WhatsApp", sent_copy: "Copy message", sent_copied: "Message copied.",
    sent_order: "Order number",

    err_weight: "Enter a weight above zero.", err_heavy: "For more than 300 kg, contact us directly.",
    err_dest: "Choose the destination city.", err_sudan: "Choose a Sudanese city.",
    err_country: "Choose the country.", err_city: "Enter the city.", err_contents: "Describe the contents.",
    err_temp: "Set the temperature.", err_name: "Enter the name.", err_phone: "Enter a valid mobile number.",
    err_address: "Enter the street address.", err_value: "Enter the value to insure.",

    msg_title: "New shipment order — Track System",
    msg_order: "Order", msg_service: "Service", msg_weight: "Weight", msg_billable: "billable",
    msg_from: "From", msg_to: "To", msg_temp: "Temperature", msg_contents: "Contents",
    msg_sender: "Sender", msg_recv: "Recipient", msg_addons: "Add-on services", msg_none: "None",
    msg_dims: "Dimensions", msg_insured: "Insured for", msg_notes: "Notes",
    msg_price: "Estimated price", msg_pickup_on: "Pickup on",
    kg: "kg",

    track_eyebrow: "Tracking", track_h1: "Where is your shipment?",
    track_lede: "Enter the order or shipment number and we'll send you its status on WhatsApp.",
    track_placeholder: "e.g. TS-261027-4821", track_phone: "Your mobile (optional)", track_btn: "Ask on WhatsApp",
    track_msg: "I'd like the status of shipment", track_msg_phone: "My mobile",
    track_err: "Enter the order or shipment number.",
    track_note: "Order numbers start with TS and appear in the WhatsApp message you sent when ordering.",

    contact_eyebrow: "Contact", contact_h1: "Talk to Track System",
    contact_lede: "For a shipment or a rate, write your message and it reaches us on WhatsApp, or call us.",
    c_name: "Name", c_phone: "Mobile", c_msg: "Message",
    c_submit: "Send on WhatsApp", c_msg_title: "Message from the Track System website",
    c_err: "Enter your name and message.",
    c_info_h: "Company details", c_addr_h: "National address",
    c_addr_v: "Al Duraihemyah, Saiydah Street, Building 7036, secondary 2487, Riyadh 12796. Short address RBDA7036.",
    c_phone_h: "Phone and WhatsApp", c_email_h: "Email", c_cr_h: "Commercial register", c_vat_h: "VAT number", c_store_h: "Store",
    faq_h2: "Common questions",
    faq_q1: "Is the price on the page final?",
    faq_a1: "It is an estimate including 15% VAT for the details you entered. We confirm it on WhatsApp, and it can change if the weight or size differs at pickup.",
    faq_q2: "What happens after “Send order on WhatsApp”?",
    faq_a2: "WhatsApp opens with a ready message listing the service, weight, destination, both parties and every add-on. You send it, and we reply to confirm the order, pickup time and payment.",
    faq_q3: "Is Sudan separate?",
    faq_a3: "Yes. It has its own page where you pick a Sudanese city and describe the contents.",
    faq_q4: "How do I book cold-chain?",
    faq_a4: "Use the cold-chain icon. Enter weight, destination, both parties, and choose the temperature.",
  },
};

function masarGetLang(){
  const saved = localStorage.getItem("trackship_lang");
  return saved === "en" ? "en" : "ar";
}
function tsWaLink(text){
  return "https://wa.me/" + TS_WA_NUMBER + (text ? "?text=" + encodeURIComponent(text) : "");
}
function masarApplyLang(lang){
  if(!MASAR_DICT[lang]) lang = "ar";
  const dict = MASAR_DICT[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if(dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.querySelectorAll("[data-wa-hello]").forEach((el) => {
    el.setAttribute("href", tsWaLink(dict.wa_hello));
  });
  localStorage.setItem("trackship_lang", lang);
  window.dispatchEvent(new CustomEvent("masar:langchange", { detail: { lang, dict } }));
}
function masarInitLang(){
  masarApplyLang(masarGetLang());
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => masarApplyLang(btn.dataset.lang));
  });
}
function masarWireNav(){
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if(!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => links.classList.remove("open")));
}
function masarWireFaq(){
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if(!q) return;
    q.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      if(!open) return;
      document.querySelectorAll(".faq-item.open").forEach((other) => {
        if(other !== item) other.classList.remove("open");
      });
    });
  });
}
function masarToast(msg){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._tsToast);
  window._tsToast = setTimeout(() => toast.classList.remove("show"), 2800);
}
document.addEventListener("DOMContentLoaded", () => {
  masarInitLang();
  masarWireNav();
  masarWireFaq();
});
