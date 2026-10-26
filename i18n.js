/* Track Ship — AR / EN / UR */
const MASAR_DICT = {
  ar: {
    dir: "rtl",
    brand_sub: "تراك سيستمز",
    nav_home: "الرئيسية", nav_services: "الخدمات", nav_track: "تتبع الشحنة", nav_cart: "السلة", nav_contact: "تواصل معنا", nav_order: "اطلب شحن",
    hero_eyebrow: "شركة تراك سيستمز للخدمات اللوجستية",
    hero_h1: "من بابك إلى وجهتك، بسعر واضح.",
    hero_lede: "Track Ship تنقل الطرود الجافة والمبرّدة داخل المملكة، والشحن الدولي إلى أي دولة ومدينة، وفي مسار مستقل إلى مدن السودان.",
    hero_cta1: "اختر خدمة الشحن", hero_cta2: "تتبع شحنة",
    hero_stat1_n: "4", hero_stat1_l: "مسارات شحن",
    hero_stat2_n: "15%", hero_stat2_l: "ضريبة ظاهرة",
    hero_stat3_n: "0", hero_stat3_l: "اشتراك شهري",
    waybill_tag: "بوليصة", waybill_from: "من الرياض", waybill_to: "إلى جدة",
    waybill_meta: "شحن جاف · 3.4 كجم", waybill_no: "TS-774213-SA",
    services_kicker: "الخدمات", services_h2: "أربع طرق للشحن",
    services_p: "كل أيقونة تفتح صفحة الطلب: الوزن والوجهة وبيانات المرسل والمستلم، ثم السلة.",
    svc1_h: "شحن جاف محلي", svc1_p: "طرود عادية بين مدن المملكة. تحدد الوزن والوجهة وبيانات الطرفين.",
    svc2_h: "شحن مبرّد", svc2_p: "نفس بيانات الشحن المحلي، مع درجة الحرارة التي تحتاجها الشحنة.",
    svc3_h: "شحن دولي", svc3_p: "الوزن والمحتويات والدولة والمدينة وبيانات الطرفين. التوصيل السريع واستلام الباب خياران واضحان.",
    svc4_h: "الشحن إلى السودان", svc4_p: "مسار مستقل: الوزن، ومدينة من مدن السودان، والمحتويات، وبيانات المرسل والمستلم.",
    svc4_note: "خدمة قائمة بذاتها", svc_go: "ابدأ الطلب",
    addon_kicker: "خدمات مقدمة",
    addon_express_h: "توصيل سريع", addon_express_p: "شحنتك تأخذ أولوية في الاستلام والنقل. خط ذهبي، وتختارها داخل الطلب.",
    addon_pickup_h: "استلام من الباب", addon_pickup_p: "نستلم الطرد من عنوان المرسل. خط أزرق، وخدمة مختلفة عن سعر الشحن.",
    addon_note: "الخدمتان اختياريتان وتظهران داخل الطلب بحد واضح ولون مختلف.",
    how_kicker: "الطلب", how_h2: "من الأيقونة إلى السلة",
    how1_h: "تختار الخدمة", how1_p: "جاف، مبرّد، دولي، أو السودان.",
    how2_h: "تكتب البيانات", how2_p: "الوزن والوجهة وبيانات المرسل والمستلم.",
    how3_h: "تراجع السلة", how3_p: "السعر قبل الضريبة ثم ضريبة 15٪.",
    how4_h: "تكمل في المتجر", how4_p: "الانتقال إلى متجر تراك سيستمز لإتمام الطلب.",
    why_kicker: "لماذا Track Ship", why_h2: "شحن مباشر وواضح",
    why1_h: "سعر قبل الدفع", why1_p: "ترى تفصيل الوزن والإضافات والضريبة في السلة.",
    why2_h: "تبريد بدرجة تحددها", why2_p: "من التبريد العادي حتى التجميد العميق.",
    why3_h: "السودان مسار مستقل", why3_p: "مدن السودان لها صفحة وأسعار خاصة.",
    why4_h: "تتبع برقم الشحنة", why4_p: "تابع الحالة من صفحة التتبع في أي وقت.",
    price_kicker: "الأسعار", price_h2: "التعرفة قبل الضريبة",
    price_p: "الحد الأدنى يشمل حتى 5 كجم. بعدها يُحسب كل كيلوغرام بدأ.",
    price_note: "الأرقام في عمود «شامل الضريبة» هي الحد الأدنى بعد إضافة 15٪. التوصيل السريع واستلام الباب يُضافان عند اختيارهما.",
    price_from: "من",
    tab_local: "جاف", tab_cold: "مبرّد", tab_intl: "دولي", tab_sudan: "السودان", tab_extra: "إضافات",
    th_service: "الخدمة", th_base: "حتى 5 كجم", th_extra: "كل كجم إضافي", th_incl: "شامل الضريبة",
    cta_h2: "جهّز شحنتك", cta_p: "اختر المسار، راجع السلة، ثم أكمل الطلب في المتجر.",
    cta_btn: "ابدأ الطلب",
    foot_about: "Track Ship علامة شركة تراك سيستمز للخدمات اللوجستية. شحن من الباب إلى الباب داخل المملكة وإلى الخارج.",
    foot_links: "الصفحات", foot_services: "الخدمات", foot_company: "الشركة", foot_contact: "التواصل",
    foot_cr: "السجل التجاري", foot_vat: "الرقم الضريبي",
    foot_addr: "حي الدريهمية، شارع صيدا، مبنى 7036، الرياض 12796",
    foot_short: "العنوان الوطني",
    foot_rights: "© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.",
    calc_kicker: "طلب شحن", calc_h: "اختر المسار",
    calc_lede: "كل خدمة لها صفحتها: البيانات المطلوبة ثم السلة.",
    choose_h: "أي شحنة تريد؟",
    change_service: "تغيير الخدمة",
    f_shipment: "بيانات الشحنة", f_weight: "الوزن (كجم)", f_dest: "الوجهة",
    f_sender: "المرسل", f_recv: "المستلم",
    f_name: "الاسم", f_phone: "الجوال", f_city: "المدينة", f_address: "العنوان التفصيلي",
    f_contents: "المحتويات", f_country: "الدولة", f_city_name: "المدينة",
    f_country_other: "اسم الدولة", f_temp: "درجة الحرارة", f_temp_custom: "الدرجة المئوية",
    f_express: "توصيل سريع", f_express_hint: "أولوية في الاستلام والنقل",
    f_pickup: "استلام من الباب", f_pickup_hint: "نستلم الطرد من عنوان المرسل",
    f_extra_title: "أبعاد وتأمين", f_dims: "الأبعاد بالسنتيمتر، إن وُجدت",
    f_l: "الطول", f_w: "العرض", f_h: "الارتفاع",
    f_insure: "تأمين الشحنة", f_insure_hint: "2٪ من القيمة، بحد أدنى 8 ر.س",
    f_value: "القيمة المصرّح بها (ر.س)",
    add_btn: "أضف إلى السلة",
    ph_city: "اختر المدينة", ph_dest: "اختر الوجهة", ph_sudan: "اختر مدينة في السودان", ph_country: "اختر الدولة",
    temp_chill: "مبرّد 2 إلى 8°م", temp_cool: "بارد 0 إلى 4°م", temp_freeze: "مجمّد −18°م", temp_deep: "تجميد عميق −25°م أو أقل", temp_custom: "درجة أحددها",
    quote_title: "سعر هذه الشحنة", quote_empty: "أدخل الوزن والوجهة ليظهر السعر.",
    quote_base: "السعر الأساسي", quote_extra: "وزن إضافي", quote_temp: "درجة الحرارة",
    quote_express: "توصيل سريع", quote_pickup: "استلام من الباب", quote_ins: "تأمين",
    quote_sub: "المجموع قبل الضريبة", quote_vat: "ضريبة القيمة المضافة 15٪", quote_total: "الإجمالي",
    quote_eta: "المدة المتوقعة", quote_vol: "الوزن الحجمي", quote_bill: "الوزن المحتسب",
    quote_note: "الإجمالي شامل الضريبة. الكيلو الإضافي يُحتسب لكل كيلو بدأ.",
    err_weight: "أدخل وزنًا أكبر من صفر.", err_heavy: "للأوزان فوق 300 كجم تواصل معنا مباشرة.",
    err_dest: "اختر المدينة الوجهة.", err_sudan: "اختر مدينة سودانية.",
    err_country: "حدد الدولة.", err_city: "أدخل المدينة.", err_contents: "صف محتويات الشحنة.",
    err_temp: "حدد درجة الحرارة.", err_name: "أدخل الاسم.", err_phone: "أدخل رقم جوال صحيحًا.",
    err_address: "أدخل العنوان التفصيلي.", err_value: "أدخل قيمة الشحنة للتأمين.",
    cart_kicker: "السلة", cart_h: "شحناتك الجاهزة",
    cart_empty: "السلة فارغة", cart_empty_p: "ابدأ من أيقونة الخدمة في الرئيسية.",
    cart_go: "اختيار خدمة", cart_add: "إضافة شحنة أخرى",
    cart_checkout: "الانتقال إلى المتجر", cart_copy: "نسخ تفاصيل الطلب", cart_copied: "تم نسخ تفاصيل الطلب.",
    cart_remove: "حذف", cart_sub: "قبل الضريبة", cart_vat: "ضريبة 15٪", cart_total: "الإجمالي",
    cart_note: "أكمل الدفع وتأكيد الطلب في متجر تراك سيستمز. احتفظ برقم الشحنة.",
    track_eyebrow: "التتبع", track_h1: "أين وصلت الشحنة؟",
    track_lede: "أدخل رقم التتبع لعرض مراحلها.",
    track_placeholder: "مثال: TS-774213-SA", track_btn: "تتبع", track_try: "جرّب رقمًا تجريبيًا:",
    track_from: "الرياض، السعودية", track_to: "الوجهة",
    t1: "تم إنشاء الشحنة", t2: "تم الاستلام", t3: "في مركز الفرز",
    t4: "في الطريق", t5: "خرجت للتسليم", t6: "تم التسليم",
    track_eta: "الوصول المتوقع", track_carrier: "الناقل", track_notfound: "أدخل رقم تتبع.",
    contact_eyebrow: "التواصل", contact_h1: "تواصل مع تراك سيستمز",
    contact_lede: "للاستفسار عن شحنة أو سعر، أرسل الرسالة أو اتصل بنا.",
    c_name: "الاسم", c_phone: "الجوال", c_email: "البريد", c_msg: "الرسالة",
    c_submit: "إرسال", c_toast: "وصلت رسالتك. سنرد عليك.",
    c_info_h: "بيانات الشركة", c_addr_h: "العنوان الوطني",
    c_addr_v: "حي الدريهمية، شارع صيدا، مبنى 7036، الرقم الفرعي 2487، الرياض 12796. العنوان المختصر RBDA7036.",
    c_phone_h: "الهاتف", c_email_h: "البريد", c_cr_h: "السجل التجاري", c_vat_h: "الرقم الضريبي",
    faq_h2: "أسئلة شائعة",
    faq_q1: "هل السعر في السلة هو السعر النهائي؟",
    faq_a1: "نعم للبيانات التي أدخلتها، ويشمل ضريبة 15٪. قد يتعدل إذا اختلف الوزن أو القياس عند الاستلام.",
    faq_q2: "كيف أطلب شحنًا مبردًا؟",
    faq_a2: "من أيقونة الشحن المبرد. ستجد الوزن والوجهة وبيانات الطرفين ودرجة الحرارة.",
    faq_q3: "هل شحن السودان منفصل؟",
    faq_a3: "نعم. له صفحة خاصة تختار فيها مدينة سودانية وتكتب المحتويات.",
    faq_q4: "أين أدفع؟",
    faq_a4: "بعد السلة تنتقل إلى متجر الشركة على stor.tracksystems.com.sa لإتمام الطلب.",
  },
  en: {
    dir: "ltr",
    brand_sub: "Track Systems",
    nav_home: "Home", nav_services: "Services", nav_track: "Track", nav_cart: "Cart", nav_contact: "Contact", nav_order: "Ship now",
    hero_eyebrow: "Track Systems Logistics",
    hero_h1: "From your door to the destination, at a clear price.",
    hero_lede: "Track Ship moves dry and chilled parcels across Saudi Arabia, ships internationally to any country and city, and keeps Sudan on its own route.",
    hero_cta1: "Choose a service", hero_cta2: "Track a shipment",
    hero_stat1_n: "4", hero_stat1_l: "shipping routes",
    hero_stat2_n: "15%", hero_stat2_l: "VAT shown",
    hero_stat3_n: "0", hero_stat3_l: "monthly fee",
    waybill_tag: "Waybill", waybill_from: "From Riyadh", waybill_to: "To Jeddah",
    waybill_meta: "Dry freight · 3.4 kg", waybill_no: "TS-774213-SA",
    services_kicker: "Services", services_h2: "Four ways to ship",
    services_p: "Each icon opens an order page: weight, destination, sender and recipient, then the cart.",
    svc1_h: "Local dry shipping", svc1_p: "Ordinary parcels between Saudi cities. Weight, destination, and both parties.",
    svc2_h: "Cold-chain shipping", svc2_p: "The same local details, plus the temperature the shipment needs.",
    svc3_h: "International shipping", svc3_p: "Weight, contents, any country and city, and both parties. Express and door pickup are marked options.",
    svc4_h: "Shipping to Sudan", svc4_p: "Its own route: weight, a Sudanese city, contents, and both parties.",
    svc4_note: "A standalone service", svc_go: "Start order",
    addon_kicker: "Add-on services",
    addon_express_h: "Express", addon_express_p: "Your shipment is handled first. Gold border, chosen inside the order.",
    addon_pickup_h: "Door pickup", addon_pickup_p: "We collect the parcel from the sender. Blue border, priced apart from the freight.",
    addon_note: "Both are optional and shown inside the order with a clear rule and a different color.",
    how_kicker: "Ordering", how_h2: "From the icon to the cart",
    how1_h: "Choose the service", how1_p: "Dry, cold, international, or Sudan.",
    how2_h: "Enter the details", how2_p: "Weight, destination, sender and recipient.",
    how3_h: "Review the cart", how3_p: "Price before tax, then 15% VAT.",
    how4_h: "Finish in the store", how4_p: "Continue to the Track Systems store.",
    why_kicker: "Why Track Ship", why_h2: "Direct shipping, clear price",
    why1_h: "Price before you pay", why1_p: "Weight, add-ons and VAT are listed in the cart.",
    why2_h: "Temperature you set", why2_p: "From a standard chill to a deep freeze.",
    why3_h: "Sudan stands alone", why3_p: "Sudanese cities have their own page and tariff.",
    why4_h: "Track by number", why4_p: "Follow the shipment from the tracking page.",
    price_kicker: "Rates", price_h2: "Tariff before VAT",
    price_p: "The base covers up to 5 kg. Each started kilogram after that is billed in full.",
    price_note: "The tax-inclusive column is the minimum after 15% VAT. Express and door pickup are added only if you select them.",
    price_from: "From",
    tab_local: "Dry", tab_cold: "Cold", tab_intl: "International", tab_sudan: "Sudan", tab_extra: "Add-ons",
    th_service: "Service", th_base: "Up to 5 kg", th_extra: "Each extra kg", th_incl: "Incl. VAT",
    cta_h2: "Prepare your shipment", cta_p: "Choose a route, review the cart, then finish in the store.",
    cta_btn: "Start an order",
    foot_about: "Track Ship is the brand of Track Systems Logistics. Door-to-door shipping inside Saudi Arabia and abroad.",
    foot_links: "Pages", foot_services: "Services", foot_company: "Company", foot_contact: "Contact",
    foot_cr: "Commercial register", foot_vat: "VAT number",
    foot_addr: "Al Duraihemyah, Saiydah Street, Building 7036, Riyadh 12796",
    foot_short: "National address",
    foot_rights: "© 2026 Track Systems Company. All rights reserved.",
    calc_kicker: "Shipment order", calc_h: "Choose a route",
    calc_lede: "Each service has its own page, then the cart.",
    choose_h: "What are you shipping?",
    change_service: "Change service",
    f_shipment: "Shipment", f_weight: "Weight (kg)", f_dest: "Destination",
    f_sender: "Sender", f_recv: "Recipient",
    f_name: "Name", f_phone: "Mobile", f_city: "City", f_address: "Street address",
    f_contents: "Contents", f_country: "Country", f_city_name: "City",
    f_country_other: "Country name", f_temp: "Temperature", f_temp_custom: "Degrees Celsius",
    f_express: "Express delivery", f_express_hint: "Priority collection and movement",
    f_pickup: "Door pickup", f_pickup_hint: "We collect from the sender’s address",
    f_extra_title: "Dimensions and insurance", f_dims: "Dimensions in centimeters, if you have them",
    f_l: "Length", f_w: "Width", f_h: "Height",
    f_insure: "Shipment insurance", f_insure_hint: "2% of value, minimum SAR 8",
    f_value: "Declared value (SAR)",
    add_btn: "Add to cart",
    ph_city: "Choose a city", ph_dest: "Choose a destination", ph_sudan: "Choose a city in Sudan", ph_country: "Choose a country",
    temp_chill: "Chilled 2 to 8°C", temp_cool: "Cool 0 to 4°C", temp_freeze: "Frozen −18°C", temp_deep: "Deep freeze −25°C or below", temp_custom: "I’ll set the degree",
    quote_title: "Price of this shipment", quote_empty: "Enter the weight and destination to see the price.",
    quote_base: "Base price", quote_extra: "Extra weight", quote_temp: "Temperature",
    quote_express: "Express", quote_pickup: "Door pickup", quote_ins: "Insurance",
    quote_sub: "Subtotal before VAT", quote_vat: "VAT 15%", quote_total: "Total",
    quote_eta: "Estimated time", quote_vol: "Volumetric weight", quote_bill: "Billable weight",
    quote_note: "The total includes VAT. Each started extra kilogram is billed in full.",
    err_weight: "Enter a weight above zero.", err_heavy: "For more than 300 kg, contact us directly.",
    err_dest: "Choose the destination city.", err_sudan: "Choose a Sudanese city.",
    err_country: "Choose the country.", err_city: "Enter the city.", err_contents: "Describe the contents.",
    err_temp: "Set the temperature.", err_name: "Enter the name.", err_phone: "Enter a valid mobile number.",
    err_address: "Enter the street address.", err_value: "Enter the value to insure.",
    cart_kicker: "Cart", cart_h: "Shipments ready to go",
    cart_empty: "The cart is empty", cart_empty_p: "Start from a service icon on the home page.",
    cart_go: "Choose a service", cart_add: "Add another shipment",
    cart_checkout: "Continue to the store", cart_copy: "Copy order details", cart_copied: "Order details copied.",
    cart_remove: "Remove", cart_sub: "Before VAT", cart_vat: "VAT 15%", cart_total: "Total",
    cart_note: "Finish payment in the Track Systems store. Keep the shipment number.",
    track_eyebrow: "Tracking", track_h1: "Where is the shipment?",
    track_lede: "Enter a tracking number to see its stages.",
    track_placeholder: "e.g. TS-774213-SA", track_btn: "Track", track_try: "Try a sample number:",
    track_from: "Riyadh, Saudi Arabia", track_to: "Destination",
    t1: "Shipment created", t2: "Collected", t3: "At the sorting center",
    t4: "In transit", t5: "Out for delivery", t6: "Delivered",
    track_eta: "Expected arrival", track_carrier: "Carrier", track_notfound: "Enter a tracking number.",
    contact_eyebrow: "Contact", contact_h1: "Talk to Track Systems",
    contact_lede: "For a shipment or a rate, send a message or call.",
    c_name: "Name", c_phone: "Mobile", c_email: "Email", c_msg: "Message",
    c_submit: "Send", c_toast: "Your message arrived. We will reply.",
    c_info_h: "Company details", c_addr_h: "National address",
    c_addr_v: "Al Duraihemyah, Saiydah Street, Building 7036, secondary 2487, Riyadh 12796. Short address RBDA7036.",
    c_phone_h: "Phone", c_email_h: "Email", c_cr_h: "Commercial register", c_vat_h: "VAT number",
    faq_h2: "Common questions",
    faq_q1: "Is the cart price final?",
    faq_a1: "Yes for the details you entered, including 15% VAT. It can change if the weight or measure differs at collection.",
    faq_q2: "How do I book cold-chain?",
    faq_a2: "Use the cold-chain icon. You will enter weight, destination, both parties, and temperature.",
    faq_q3: "Is Sudan separate?",
    faq_a3: "Yes. It has its own page where you pick a Sudanese city and describe the contents.",
    faq_q4: "Where do I pay?",
    faq_a4: "After the cart you continue to the company store at stor.tracksystems.com.sa.",
  },
  ur: {
    dir: "rtl",
    brand_sub: "ٹریک سسٹمز",
    nav_home: "ہوم", nav_services: "خدمات", nav_track: "ٹریکنگ", nav_cart: "ٹوکری", nav_contact: "رابطہ", nav_order: "شپمنٹ بھیجیں",
    hero_eyebrow: "ٹریک سسٹمز لاجسٹکس",
    hero_h1: "آپ کے دروازے سے منزل تک، واضح قیمت پر۔",
    hero_lede: "Track Ship سعودی عرب میں خشک اور ٹھنڈی شپمنٹ، کسی بھی ملک اور شہر تک بین الاقوامی شپنگ، اور سوڈان کا الگ راستہ فراہم کرتا ہے۔",
    hero_cta1: "خدمت منتخب کریں", hero_cta2: "شپمنٹ ٹریک کریں",
    hero_stat1_n: "4", hero_stat1_l: "شپنگ راستے",
    hero_stat2_n: "15%", hero_stat2_l: "ظاہر ٹیکس",
    hero_stat3_n: "0", hero_stat3_l: "ماہانہ فیس",
    waybill_tag: "وے بل", waybill_from: "ریاض سے", waybill_to: "جدہ تک",
    waybill_meta: "خشک شپنگ · 3.4 کلو", waybill_no: "TS-774213-SA",
    services_kicker: "خدمات", services_h2: "شپنگ کے چار راستے",
    services_p: "ہر آئیکن آرڈر کا صفحہ کھولتی ہے: وزن، منزل، بھیجنے والا اور وصول کنندہ، پھر ٹوکری۔",
    svc1_h: "مقامی خشک شپنگ", svc1_p: "سعودی شہروں کے درمیان عام پارسل۔ وزن، منزل اور دونوں فریق۔",
    svc2_h: "کولڈ چین", svc2_p: "وہی مقامی تفصیل، اور وہ درجہ حرارت جو شپمنٹ کو چاہیے۔",
    svc3_h: "بین الاقوامی شپنگ", svc3_p: "وزن، مواد، کوئی بھی ملک اور شہر، اور دونوں فریق۔ ایکسپریس اور دروازے سے پک اپ واضح آپشن ہیں۔",
    svc4_h: "سوڈان شپنگ", svc4_p: "الگ راستہ: وزن، سوڈان کا شہر، مواد، اور دونوں فریق۔",
    svc4_note: "الگ خدمت", svc_go: "آرڈر شروع کریں",
    addon_kicker: "اضافی خدمات",
    addon_express_h: "فوری ترسیل", addon_express_p: "شپمنٹ کو ترجیح ملتی ہے۔ سنہری لائن، آرڈر کے اندر منتخب ہوتی ہے۔",
    addon_pickup_h: "دروازے سے پک اپ", addon_pickup_p: "ہم پارسل بھیجنے والے کے پتے سے لیتے ہیں۔ نیلی لائن، شپنگ سے الگ قیمت۔",
    addon_note: "دونوں اختیاری ہیں اور آرڈر میں واضح لائن اور مختلف رنگ کے ساتھ دکھائی دیتی ہیں۔",
    how_kicker: "آرڈر", how_h2: "آئیکن سے ٹوکری تک",
    how1_h: "خدمت چنیں", how1_p: "خشک، کولڈ، بین الاقوامی، یا سوڈان۔",
    how2_h: "تفصیل لکھیں", how2_p: "وزن، منزل، بھیجنے والا اور وصول کنندہ۔",
    how3_h: "ٹوکری دیکھیں", how3_p: "ٹیکس سے پہلے قیمت، پھر 15٪۔",
    how4_h: "اسٹور میں مکمل کریں", how4_p: "ٹریک سسٹمز کے اسٹور پر جائیں۔",
    why_kicker: "Track Ship کیوں", why_h2: "براہ راست اور واضح شپنگ",
    why1_h: "ادائیگی سے پہلے قیمت", why1_p: "وزن، اضافے اور ٹیکس ٹوکری میں لکھا ہوتا ہے۔",
    why2_h: "درجہ حرارت آپ طے کریں", why2_p: "عام ٹھنڈک سے گہری منجمد تک۔",
    why3_h: "سوڈان الگ ہے", why3_p: "سوڈانی شہروں کا اپنا صفحہ اور نرخ ہے۔",
    why4_h: "نمبر سے ٹریکنگ", why4_p: "ٹریکنگ صفحے سے حالت دیکھیں۔",
    price_kicker: "قیمتیں", price_h2: "ٹیکس سے پہلے نرخ",
    price_p: "بنیاد 5 کلو تک ہے۔ اس کے بعد ہر شروع ہونے والا کلو پورا شمار ہوتا ہے۔",
    price_note: "ٹیکس والا کالم 15٪ کے بعد کم از کم قیمت ہے۔ ایکسپریس اور پک اپ تب شامل ہوتے ہیں جب آپ انہیں چنیں۔",
    price_from: "سے",
    tab_local: "خشک", tab_cold: "کولڈ", tab_intl: "بین الاقوامی", tab_sudan: "سوڈان", tab_extra: "اضافے",
    th_service: "خدمت", th_base: "5 کلو تک", th_extra: "ہر اضافی کلو", th_incl: "ٹیکس سمیت",
    cta_h2: "شپمنٹ تیار کریں", cta_p: "راستہ چنیں، ٹوکری دیکھیں، پھر اسٹور میں مکمل کریں۔",
    cta_btn: "آرڈر شروع کریں",
    foot_about: "Track Ship، ٹریک سسٹمز لاجسٹکس کا نام ہے۔ دروازے سے دروازے تک شپنگ۔",
    foot_links: "صفحات", foot_services: "خدمات", foot_company: "کمپنی", foot_contact: "رابطہ",
    foot_cr: "تجارتی رجسٹر", foot_vat: "ٹیکس نمبر",
    foot_addr: "الدریہمیہ، صیدا اسٹریٹ، عمارت 7036، ریاض 12796",
    foot_short: "قومی پتہ",
    foot_rights: "© 2026 ٹریک سسٹمز کمپنی۔ جملہ حقوق محفوظ ہیں۔",
    calc_kicker: "شپمنٹ آرڈر", calc_h: "راستہ چنیں",
    calc_lede: "ہر خدمت کا اپنا صفحہ ہے، پھر ٹوکری۔",
    choose_h: "آپ کیا بھیج رہے ہیں؟",
    change_service: "خدمت بدلیں",
    f_shipment: "شپمنٹ", f_weight: "وزن (کلو)", f_dest: "منزل",
    f_sender: "بھیجنے والا", f_recv: "وصول کنندہ",
    f_name: "نام", f_phone: "موبائل", f_city: "شہر", f_address: "مکمل پتہ",
    f_contents: "مواد", f_country: "ملک", f_city_name: "شہر",
    f_country_other: "ملک کا نام", f_temp: "درجہ حرارت", f_temp_custom: "ڈگری سینٹی گریڈ",
    f_express: "فوری ترسیل", f_express_hint: "پک اپ اور نقل و حمل میں ترجیح",
    f_pickup: "دروازے سے پک اپ", f_pickup_hint: "ہم بھیجنے والے کے پتے سے لیتے ہیں",
    f_extra_title: "ناپ اور انشورنس", f_dims: "سینٹی میٹر میں ناپ، اگر ہو",
    f_l: "لمبائی", f_w: "چوڑائی", f_h: "اونچائی",
    f_insure: "شپمنٹ انشورنس", f_insure_hint: "قیمت کا 2٪، کم از کم 8 ریال",
    f_value: "اعلان شدہ قیمت (ریال)",
    add_btn: "ٹوکری میں ڈالیں",
    ph_city: "شہر چنیں", ph_dest: "منزل چنیں", ph_sudan: "سوڈان کا شہر چنیں", ph_country: "ملک چنیں",
    temp_chill: "ٹھنڈا 2 تا 8°C", temp_cool: "سرد 0 تا 4°C", temp_freeze: "منجمد −18°C", temp_deep: "گہری منجمد −25°C یا کم", temp_custom: "میں درجہ طے کروں گا",
    quote_title: "اس شپمنٹ کی قیمت", quote_empty: "قیمت کے لیے وزن اور منزل درج کریں۔",
    quote_base: "بنیادی قیمت", quote_extra: "اضافی وزن", quote_temp: "درجہ حرارت",
    quote_express: "فوری ترسیل", quote_pickup: "دروازے سے پک اپ", quote_ins: "انشورنس",
    quote_sub: "ٹیکس سے پہلے", quote_vat: "ٹیکس 15٪", quote_total: "کل",
    quote_eta: "متوقع مدت", quote_vol: "حجمی وزن", quote_bill: "قابلِ بل وزن",
    quote_note: "کل میں ٹیکس شامل ہے۔ ہر شروع ہونے والا اضافی کلو پورا شمار ہوتا ہے۔",
    err_weight: "صفر سے زیادہ وزن لکھیں۔", err_heavy: "300 کلو سے زیادہ کے لیے براہ راست رابطہ کریں۔",
    err_dest: "منزل کا شہر چنیں۔", err_sudan: "سوڈانی شہر چنیں۔",
    err_country: "ملک چنیں۔", err_city: "شہر لکھیں۔", err_contents: "مواد لکھیں۔",
    err_temp: "درجہ حرارت چنیں۔", err_name: "نام لکھیں۔", err_phone: "درست موبائل نمبر لکھیں۔",
    err_address: "مکمل پتہ لکھیں۔", err_value: "انشورنس کے لیے قیمت لکھیں۔",
    cart_kicker: "ٹوکری", cart_h: "تیار شپمنٹس",
    cart_empty: "ٹوکری خالی ہے", cart_empty_p: "ہوم پیج کی خدمت سے شروع کریں۔",
    cart_go: "خدمت چنیں", cart_add: "ایک اور شپمنٹ",
    cart_checkout: "اسٹور پر جائیں", cart_copy: "آرڈر کی تفصیل نقل کریں", cart_copied: "تفصیل نقل ہوگئی۔",
    cart_remove: "حذف", cart_sub: "ٹیکس سے پہلے", cart_vat: "ٹیکس 15٪", cart_total: "کل",
    cart_note: "ادائیگی ٹریک سسٹمز کے اسٹور پر مکمل کریں۔ شپمنٹ نمبر رکھیں۔",
    track_eyebrow: "ٹریکنگ", track_h1: "شپمنٹ کہاں ہے؟",
    track_lede: "مراحل دیکھنے کے لیے ٹریکنگ نمبر لکھیں۔",
    track_placeholder: "مثال: TS-774213-SA", track_btn: "ٹریک", track_try: "نمونہ نمبر آزمائیں:",
    track_from: "ریاض، سعودی عرب", track_to: "منزل",
    t1: "شپمنٹ بن گئی", t2: "وصول ہوگئی", t3: "سارٹنگ سینٹر",
    t4: "راستے میں", t5: "ترسیل کے لیے نکلی", t6: "پہنچ گئی",
    track_eta: "متوقع آمد", track_carrier: "کیریئر", track_notfound: "ٹریکنگ نمبر لکھیں۔",
    contact_eyebrow: "رابطہ", contact_h1: "ٹریک سسٹمز سے بات کریں",
    contact_lede: "شپمنٹ یا قیمت کے لیے پیغام بھیجیں یا کال کریں۔",
    c_name: "نام", c_phone: "موبائل", c_email: "ای میل", c_msg: "پیغام",
    c_submit: "بھیجیں", c_toast: "پیغام مل گیا۔ ہم جواب دیں گے۔",
    c_info_h: "کمپنی کی تفصیل", c_addr_h: "قومی پتہ",
    c_addr_v: "الدریہمیہ، صیدا اسٹریٹ، عمارت 7036، ثانوی 2487، ریاض 12796۔ مختصر پتہ RBDA7036۔",
    c_phone_h: "فون", c_email_h: "ای میل", c_cr_h: "تجارتی رجسٹر", c_vat_h: "ٹیکس نمبر",
    faq_h2: "عام سوالات",
    faq_q1: "کیا ٹوکری کی قیمت حتمی ہے؟",
    faq_a1: "آپ کی درج کردہ تفصیل کے لیے ہاں، 15٪ ٹیکس سمیت۔ وصولی پر وزن مختلف ہو تو قیمت بدل سکتی ہے۔",
    faq_q2: "کولڈ شپنگ کیسے بک کروں؟",
    faq_a2: "کولڈ آئیکن سے۔ وزن، منزل، دونوں فریق اور درجہ حرارت درج ہوگا۔",
    faq_q3: "کیا سوڈان الگ ہے؟",
    faq_a3: "ہاں۔ اس کا اپنا صفحہ ہے جس میں سوڈانی شہر اور مواد لکھا جاتا ہے۔",
    faq_q4: "ادائیگی کہاں ہوگی؟",
    faq_a4: "ٹوکری کے بعد کمپنی کے اسٹور stor.tracksystems.com.sa پر آرڈر مکمل ہوتا ہے۔",
  },
};

function masarGetLang(){
  return localStorage.getItem("trackship_lang") || localStorage.getItem("masar_lang") || "ar";
}
function masarApplyLang(lang){
  const dict = MASAR_DICT[lang] || MASAR_DICT.ar;
  document.documentElement.lang = lang === "ur" ? "ur" : lang;
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
  localStorage.setItem("trackship_lang", lang);
  window.dispatchEvent(new CustomEvent("masar:langchange", { detail: { lang, dict } }));
}
function masarInitLang(){
  masarApplyLang(masarGetLang());
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => masarApplyLang(btn.dataset.lang));
  });
  trackshipPaintCartCount();
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
    const a = item.querySelector(".faq-a");
    if(!q || !a) return;
    q.addEventListener("click", () => {
      const open = item.classList.toggle("open");
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
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._tsToast);
  window._tsToast = setTimeout(() => toast.classList.remove("show"), 2800);
}
function trackshipPaintCartCount(){
  let count = 0;
  try { count = JSON.parse(localStorage.getItem("trackship_cart_v1") || "[]").length; } catch(err) { count = 0; }
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = String(count);
    el.hidden = count === 0;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  masarInitLang();
  masarWireNav();
  masarWireFaq();
});
