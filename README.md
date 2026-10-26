
# trackship@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Readex+Pro:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@500;600;700&display=swap');

/* Track Ship — شركة تراك سيستمز */
:root{
  --navy:#07111F;
  --navy-2:#10243F;
  --navy-3:#1B3658;
  --ink:#142033;
  --red:#E10600;
  --red-2:#B10500;
  --paper:#F4F7FB;
  --paper-2:#E6EEF6;
  --card:#FFFFFF;
  --muted:#5C6E82;
  --line:#D5E0EB;
  --gold:#A16207;
  --gold-bg:#FFF6E4;
  --gold-line:#E0A325;
  --pick:#1D4ED8;
  --pick-bg:#EEF3FF;
  --ice:#0F766E;
  --ice-bg:#E7F6F3;
  --sand:#9A3412;
  --sand-bg:#FFF3EB;
  --sudan:#065F46;
  --sudan-bg:#E5F6EF;
  --ok:#047857;
  --shadow:0 18px 40px -24px rgba(7,17,31,.45);
  --shadow-sm:0 8px 20px -14px rgba(7,17,31,.4);
  --radius:22px;
  --maxw:1140px;
  --font:"Readex Pro", sans-serif;
  --display:"Outfit", "Readex Pro", sans-serif;
}

*,*::before,*::after{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  background:
    radial-gradient(circle at 100% -10%, rgba(225,6,0,.06), transparent 32%),
    var(--paper);
  color:var(--ink);
  font-family:var(--font);
  font-size:16.5px;
  line-height:1.75;
  -webkit-font-smoothing:antialiased;
}
html[lang="ur"] body{ font-family:"Noto Nastaliq Urdu","Readex Pro",serif; line-height:2; }
img,svg{ display:block; max-width:100%; }
a{ color:inherit; text-decoration:none; }
button,input,select,textarea{ font:inherit; color:inherit; }
button{ cursor:pointer; }
ul{ margin:0; padding:0; list-style:none; }
h1,h2,h3,h4{ margin:0; font-weight:700; letter-spacing:-.02em; line-height:1.35; }
p{ margin:0; }
[hidden]{ display:none !important; }
::selection{ background:#F8C9C6; }
:focus-visible{ outline:3px solid var(--red); outline-offset:2px; }
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{ animation:none !important; transition:none !important; scroll-behavior:auto !important; }
}

.wrap{ width:min(var(--maxw), calc(100% - 40px)); margin-inline:auto; }
.section{ padding-block:76px; }
.section-tight{ padding-block:42px; }
.kicker{
  display:inline-block;
  color:var(--red);
  font-weight:700;
  font-size:13px;
  letter-spacing:.08em;
  text-transform:uppercase;
  margin-bottom:8px;
}
.sec-head{ max-width:680px; margin-bottom:32px; }
.sec-head.center{ margin-inline:auto; text-align:center; }
.sec-head h2{ font-size:clamp(28px, 3.4vw, 40px); color:var(--navy); margin-bottom:8px; }
.sec-head p{ color:var(--muted); }

.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  min-height:48px; padding:12px 22px; border-radius:999px;
  border:2px solid transparent; font-weight:700; font-size:15.5px;
  transition:transform .16s ease, background .16s ease, box-shadow .16s ease;
}
.btn:hover{ transform:translateY(-2px); }
.btn-primary{ background:var(--red); color:#fff; box-shadow:0 10px 20px -12px rgba(225,6,0,.8); }
.btn-primary:hover{ background:var(--red-2); }
.btn-navy{ background:var(--navy); color:#fff; }
.btn-navy:hover{ background:var(--navy-2); }
.btn-ghost{ background:transparent; color:#fff; border-color:rgba(255,255,255,.45); }
.btn-ghost:hover{ background:#fff; color:var(--navy); }
.btn-line{ background:#fff; color:var(--navy); border-color:var(--line); }
.btn-sm{ min-height:42px; padding:8px 16px; font-size:14px; }
.btn-block{ width:100%; }
.btn:disabled{ opacity:.55; cursor:not-allowed; transform:none; }

/* Header */
.site-header{
  position:sticky; top:0; z-index:40;
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(14px);
  border-bottom:1px solid var(--line);
}
.nav{ display:flex; align-items:center; justify-content:space-between; gap:16px; min-height:76px; }
.brand{ display:flex; align-items:center; gap:10px; }
.brand-mark{
  width:40px; height:40px; border-radius:12px; background:var(--navy);
  display:grid; place-items:center; flex:none;
  box-shadow:inset 0 0 0 1.5px rgba(225,6,0,.65);
}
.brand-mark svg{ width:26px; height:26px; }
.brand-en{ font-family:var(--display); font-weight:800; font-size:20px; letter-spacing:-.04em; color:var(--navy); line-height:1; }
.brand-en i{ font-style:normal; color:var(--red); }
.brand-sub{ display:block; font-size:11.5px; color:var(--muted); font-weight:600; margin-top:2px; }
.nav-links{ display:flex; align-items:center; gap:22px; }
.nav-links a{ font-weight:600; font-size:15px; color:var(--navy); position:relative; }
.nav-links a[aria-current="page"]{ color:var(--red); }
.nav-cart{ display:inline-flex; align-items:center; gap:6px; }
.nav-right{ display:flex; align-items:center; gap:10px; }
.lang-switch{ display:flex; padding:3px; border:1px solid var(--line); border-radius:999px; background:#fff; }
.lang-switch button{
  border:0; background:transparent; border-radius:999px;
  padding:6px 10px; font-family:var(--display); font-size:12px; font-weight:700; color:var(--muted);
}
.lang-switch button.active{ background:var(--navy); color:#fff; }
.cart-count{
  min-width:18px; height:18px; padding:0 5px; border-radius:99px;
  background:var(--red); color:#fff; font-family:var(--display);
  font-size:11px; font-weight:700; display:inline-grid; place-items:center;
}
.icon-cart{
  position:relative; width:42px; height:42px; border:1px solid var(--line); border-radius:12px;
  display:grid; place-items:center; background:#fff; color:var(--navy);
}
.icon-cart .cart-count{ position:absolute; top:-6px; inset-inline-end:-6px; }
.burger{ display:none; width:42px; height:42px; border:1px solid var(--line); border-radius:12px; background:#fff; }
.burger span{ display:block; width:18px; height:2px; background:var(--navy); margin:4px auto; border-radius:2px; }

/* Hero */
.hero{
  background:
    radial-gradient(circle at 85% 10%, rgba(225,6,0,.28), transparent 28%),
    linear-gradient(160deg, #07111F 0%, #10243F 58%, #16345A 100%);
  color:#fff;
  padding:64px 0 72px;
  position:relative;
  overflow:hidden;
}
.hero::after{
  content:"";
  position:absolute; inset-inline-end:-80px; bottom:-80px;
  width:280px; height:280px; border:28px solid rgba(225,6,0,.18); border-radius:50%;
}
.hero-grid{ position:relative; z-index:1; display:grid; grid-template-columns:1.15fr .85fr; gap:42px; align-items:center; }
.wordmark{
  font-family:var(--display); font-weight:800; letter-spacing:-.05em;
  font-size:clamp(46px, 6vw, 72px); line-height:.95; margin-bottom:12px;
}
.wordmark i{ font-style:normal; color:#FF3B30; }
.hero h1{ font-size:clamp(26px, 3vw, 36px); max-width:16ch; margin-bottom:12px; }
.lede{ color:rgba(255,255,255,.78); font-size:17.5px; max-width:46ch; }
.hero-actions{ display:flex; flex-wrap:wrap; gap:12px; margin-top:26px; }
.hero-stats{ display:flex; gap:22px; margin-top:28px; flex-wrap:wrap; }
.hero-stats b{ display:block; font-family:var(--display); font-size:26px; letter-spacing:-.04em; }
.hero-stats span{ color:rgba(255,255,255,.68); font-size:13px; }

.waybill{
  background:#fff; color:var(--ink); border-radius:18px; padding:22px;
  box-shadow:var(--shadow); transform:rotate(-1.5deg);
  border:1px solid rgba(255,255,255,.4);
}
.waybill-top{ display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
.pill{ font-size:12px; font-weight:700; background:var(--sand-bg); color:var(--sand); border-radius:999px; padding:4px 10px; }
.waybill-route{ display:flex; align-items:center; justify-content:space-between; gap:10px; font-weight:700; color:var(--navy); }
.waybill-route em{ font-style:normal; color:var(--red); font-family:var(--display); font-size:22px; }
.waybill-meta,.waybill-no{ margin-top:12px; color:var(--muted); font-size:13.5px; }
.waybill-no{ font-family:var(--display); letter-spacing:.08em; color:var(--navy); font-weight:700; }
.barcode{ display:flex; align-items:stretch; gap:2px; height:48px; margin-top:14px; }
.barcode i{ display:block; background:var(--navy); }

/* Services */
.services{ margin-top:-36px; position:relative; z-index:2; }
.svc-grid{ display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; }
.svc{
  background:#fff; border:1px solid var(--line); border-radius:var(--radius);
  padding:22px; min-height:250px; display:flex; flex-direction:column; gap:14px;
  box-shadow:var(--shadow-sm); border-top:5px solid var(--sand);
  transition:transform .18s ease, box-shadow .18s ease;
}
.svc:hover{ transform:translateY(-4px); box-shadow:var(--shadow); }
.svc-cold{ border-top-color:var(--ice); }
.svc-intl{ border-top-color:var(--red); }
.svc-icon{
  width:58px; height:58px; border-radius:16px; display:grid; place-items:center;
  background:var(--sand-bg); color:var(--sand);
}
.svc-cold .svc-icon{ background:var(--ice-bg); color:var(--ice); }
.svc-intl .svc-icon{ background:#FDECEC; color:var(--red); }
.svc-icon svg{ width:30px; height:30px; }
.svc h3{ font-size:22px; color:var(--navy); }
.svc p{ color:var(--muted); font-size:15px; flex:1; }
.svc-foot{ display:flex; justify-content:space-between; align-items:center; gap:8px; font-weight:700; }
.svc-foot b{ font-family:var(--display); color:var(--navy); font-size:16px; }
.svc-foot span{ color:var(--red); font-size:14px; }

.sudan-banner{
  margin-top:16px;
  display:grid; grid-template-columns:auto 1fr auto; gap:22px; align-items:center;
  background:linear-gradient(135deg, #064E3B, #0F766E 70%);
  color:#fff; border-radius:var(--radius); padding:26px 28px;
  box-shadow:var(--shadow);
  border:3px solid #34D399;
}
.sudan-banner .svc-icon{ background:rgba(255,255,255,.14); color:#fff; }
.sudan-banner h3{ font-size:26px; }
.sudan-banner p{ color:rgba(255,255,255,.84); margin-top:4px; }
.sudan-go{
  background:#fff; color:var(--sudan); border-radius:999px; padding:12px 18px;
  font-weight:800; white-space:nowrap;
}
.sudan-price{ display:block; margin-top:8px; font-family:var(--display); font-size:18px; }

.addon-showcase{ display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:16px; }
.addon-tile{
  border-radius:18px; padding:18px 20px; background:#fff;
  display:flex; gap:14px; align-items:flex-start;
  border:3px solid var(--gold-line); background:var(--gold-bg);
}
.addon-tile.pickup{ border-color:var(--pick); background:var(--pick-bg); }
.addon-tile h3{ font-size:18px; margin-bottom:4px; }
.addon-tile p{ color:var(--muted); font-size:14.5px; }
.addon-tile b{ display:block; margin-top:8px; font-family:var(--display); }
.addon-tile .mark{
  width:46px; height:46px; border-radius:14px; display:grid; place-items:center; flex:none;
  background:#fff; border:2px solid currentColor; font-size:20px;
}
.addon-tile.express{ color:var(--gold); }
.addon-tile.pickup{ color:var(--pick); }
.addon-tile.express h3,.addon-tile.pickup h3{ color:var(--navy); }
.addon-note{ margin-top:10px; color:var(--muted); font-size:13.5px; }

/* Steps, why, rates */
.steps{ display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; }
.step{
  background:#fff; border:1px solid var(--line); border-radius:18px; padding:18px;
}
.step i{
  font-style:normal; font-family:var(--display); font-weight:800; color:var(--red);
  display:block; font-size:22px; margin-bottom:8px;
}
.step h3{ font-size:17px; margin-bottom:6px; color:var(--navy); }
.step p{ color:var(--muted); font-size:14.5px; }
.why-grid{ display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; }
.why{
  background:#fff; border:1px solid var(--line); border-radius:18px; padding:20px;
}
.why h3{ color:var(--navy); font-size:18px; margin:8px 0; }
.why p{ color:var(--muted); font-size:14.5px; }

.tabs{ display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px; }
.tab-btn{
  border:1px solid var(--line); background:#fff; border-radius:999px;
  padding:10px 16px; font-weight:700; color:var(--muted);
}
.tab-btn.active{ background:var(--navy); color:#fff; border-color:var(--navy); }
.table-wrap{ overflow-x:auto; border:1px solid var(--line); border-radius:18px; background:#fff; }
table{ width:100%; border-collapse:collapse; min-width:640px; }
th,td{ padding:13px 16px; text-align:start; border-bottom:1px solid var(--line); }
th{ background:var(--navy); color:#fff; font-size:13.5px; }
td:last-child, th:last-child{ text-align:end; }
tbody tr:last-child td{ border-bottom:0; }
.num{ font-family:var(--display); font-weight:650; letter-spacing:-.02em; }
.price-note{ margin-top:12px; color:var(--muted); font-size:13.5px; }

.cta-band{
  background:var(--navy); color:#fff; border-radius:28px; padding:42px 28px; text-align:center;
  position:relative; overflow:hidden;
}
.cta-band::before{
  content:""; position:absolute; inset-inline-start:0; top:0; bottom:0; width:8px; background:var(--red);
}
.cta-band h2{ font-size:clamp(26px, 3vw, 36px); margin-bottom:8px; }
.cta-band p{ color:rgba(255,255,255,.75); margin-bottom:20px; }

/* Footer */
footer{ background:var(--navy); color:#fff; padding:48px 0 20px; margin-top:64px; }
.footer-grid{ display:grid; grid-template-columns:1.4fr .8fr .9fr 1.1fr; gap:28px; }
footer h3, footer h4{ font-size:15px; margin-bottom:12px; }
footer p, footer li, footer a{ color:rgba(255,255,255,.76); font-size:14px; }
footer li{ margin-bottom:8px; }
footer a:hover{ color:#fff; }
.footer-brand .brand-en{ color:#fff; }
.footer-bottom{
  margin-top:28px; padding-top:16px; border-top:1px solid rgba(255,255,255,.12);
  display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;
  color:rgba(255,255,255,.6); font-size:13px;
}
.social-row{ display:flex; gap:8px; margin-top:14px; }
.social-row a{
  width:36px; height:36px; border-radius:50%; display:grid; place-items:center;
  border:1px solid rgba(255,255,255,.2); color:#fff; font-size:13px;
}

/* Pages */
.page-hero{ padding:42px 0 10px; }
.page-hero h1{ font-size:clamp(30px, 4vw, 46px); color:var(--navy); }
.page-hero .lede{ color:var(--muted); margin-top:8px; }

.chooser{ display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.chooser a{
  background:#fff; border:1px solid var(--line); border-radius:18px; padding:20px;
  border-inline-start:6px solid var(--sand);
}
.chooser a.cold{ border-inline-start-color:var(--ice); }
.chooser a.intl{ border-inline-start-color:var(--red); }
.chooser a.sudan{ border-inline-start-color:var(--sudan); grid-column:1 / -1; }
.chooser h3{ color:var(--navy); margin-bottom:4px; }
.chooser p{ color:var(--muted); font-size:14.5px; }

.book-layout{ display:grid; grid-template-columns:1.15fr .85fr; gap:22px; align-items:start; }
.panel{ background:#fff; border:1px solid var(--line); border-radius:var(--radius); padding:22px; }
.panel h2{ font-size:18px; color:var(--navy); margin-bottom:14px; }
.service-banner{
  display:flex; justify-content:space-between; gap:12px; align-items:center;
  border-radius:16px; padding:14px 16px; margin-bottom:18px; color:#fff; background:var(--sand);
}
.service-banner.cold{ background:var(--ice); }
.service-banner.intl{ background:var(--red); }
.service-banner.sudan{ background:var(--sudan); }
.service-banner a{ color:#fff; font-weight:700; text-decoration:underline; font-size:14px; }
.field{ margin-bottom:14px; }
.field label,.lbl{ display:block; font-weight:700; font-size:14px; margin-bottom:6px; color:var(--navy); }
.hint{ color:var(--muted); font-size:12.5px; margin-top:5px; }
.input,select.input,textarea.input{
  width:100%; border:1.5px solid var(--line); background:var(--paper);
  border-radius:12px; padding:12px 14px; outline:none;
}
.input:focus{ border-color:var(--navy-3); background:#fff; }
.field.has-error .input{ border-color:var(--red); background:#FFF6F5; }
.field-error{ color:var(--red-2); font-size:12.5px; font-weight:700; margin-top:5px; }
.row2{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.row3{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
.block-title{
  margin:20px 0 12px; padding-top:8px; border-top:1px dashed var(--line);
  font-size:16px; color:var(--navy);
}

.addon-card{
  display:grid; grid-template-columns:auto 1fr auto; gap:12px; align-items:center;
  border:3px solid var(--gold-line); background:var(--gold-bg);
  border-radius:16px; padding:14px; margin-bottom:12px; cursor:pointer;
}
.addon-card.pickup{ border-color:#3B6EF5; background:var(--pick-bg); }
.addon-card input{ width:22px; height:22px; accent-color:var(--navy); }
.addon-card b{ display:block; color:var(--navy); }
.addon-card small{ color:var(--muted); display:block; font-size:12.5px; }
.addon-card .fee{ font-family:var(--display); font-weight:750; color:var(--navy); white-space:nowrap; }
.addon-card.express{ box-shadow:inset 6px 0 0 var(--gold-line); }
.addon-card.pickup{ box-shadow:inset 6px 0 0 #3B6EF5; }
html[dir="rtl"] .addon-card.express{ box-shadow:inset -6px 0 0 var(--gold-line); }
html[dir="rtl"] .addon-card.pickup{ box-shadow:inset -6px 0 0 #3B6EF5; }
details.extra{ margin-top:8px; }
details.extra summary{ cursor:pointer; font-weight:700; color:var(--navy); margin-bottom:10px; }

.receipt{
  position:sticky; top:96px;
  background:var(--navy); color:#fff; border-radius:22px; padding:22px;
}
.receipt h2{ color:#fff; font-size:18px; }
.receipt .amount{
  font-family:var(--display); font-weight:800; font-size:40px; letter-spacing:-.04em; margin:8px 0 4px; white-space:nowrap;
}
.receipt .muted{ color:rgba(255,255,255,.68); font-size:13.5px; }
.receipt-lines{ margin:14px 0; border-top:1px solid rgba(255,255,255,.14); }
.receipt-lines div{ display:flex; justify-content:space-between; gap:12px; padding:7px 0; font-size:14px; color:rgba(255,255,255,.8); }
.receipt-lines b{ color:#fff; font-weight:650; font-family:var(--display); }
.receipt-lines .grand{ border-top:1px solid rgba(255,255,255,.2); color:#fff; font-weight:800; }

/* Cart */
.cart-layout{ display:grid; grid-template-columns:1.2fr .8fr; gap:22px; align-items:start; }
.cart-item{
  background:#fff; border:1px solid var(--line); border-radius:18px; padding:16px 16px 16px 18px;
  margin-bottom:12px; border-inline-start:6px solid var(--sand);
}
.cart-item.cold{ border-inline-start-color:var(--ice); }
.cart-item.intl{ border-inline-start-color:var(--red); }
.cart-item.sudan{ border-inline-start-color:var(--sudan); }
.cart-item header{ display:flex; justify-content:space-between; gap:10px; align-items:flex-start; }
.cart-item h3{ font-size:18px; color:var(--navy); }
.cart-item .meta{ color:var(--muted); font-size:13.5px; margin-top:6px; }
.ghost-btn{ border:0; background:transparent; color:var(--red); font-weight:700; padding:0; }
.empty{
  background:#fff; border:1px dashed var(--line); border-radius:20px; padding:36px; text-align:center;
}
.totals{ background:#fff; border:1px solid var(--line); border-radius:22px; padding:20px; position:sticky; top:96px; }
.totals .amount{ font-family:var(--display); font-size:36px; font-weight:800; color:var(--navy); letter-spacing:-.03em; white-space:nowrap; line-height:1.1; margin:4px 0 12px; }
.totals .row{ display:flex; justify-content:space-between; gap:12px; margin:8px 0; color:var(--muted); }
.totals .row strong{ color:var(--ink); white-space:nowrap; }

/* Tracking + contact */
.track-form{
  display:flex; gap:8px; background:#fff; border:1px solid var(--line);
  padding:8px; border-radius:999px; max-width:640px; margin-top:18px;
}
.track-form input{ flex:1; border:0; background:transparent; padding:10px 16px; outline:none; font-family:var(--display); }
.route-map{
  display:flex; align-items:center; gap:12px; background:var(--paper); border-radius:14px; padding:16px; margin-bottom:12px;
}
.route-map .line{ flex:1; height:2px; background:linear-gradient(90deg, var(--red), var(--navy)); }
.t-item{ display:grid; grid-template-columns:32px 1fr; gap:12px; position:relative; padding-bottom:18px; }
.t-dot{
  width:32px; height:32px; border-radius:50%; border:3px solid var(--line); background:#fff;
  display:grid; place-items:center; z-index:1;
}
.t-item.done .t-dot{ background:var(--ok); border-color:var(--ok); color:#fff; }
.t-item.current .t-dot{ background:var(--red); border-color:var(--red); color:#fff; }
.t-item::before{
  content:""; position:absolute; inset-inline-start:15px; top:32px; bottom:0; width:2px; background:var(--line);
}
.t-item:last-child::before{ display:none; }
.t-item.done::before{ background:var(--ok); }
.contact-grid{ display:grid; grid-template-columns:1.1fr .9fr; gap:20px; }
.info-row{ display:flex; gap:10px; margin-top:14px; }
.info-row span{ color:var(--muted); display:block; font-size:14px; }
.faq-item{ border-bottom:1px solid var(--line); }
.faq-q{
  width:100%; text-align:start; background:none; border:0; padding:16px 0;
  display:flex; justify-content:space-between; gap:12px; font-weight:700; color:var(--navy);
}
.faq-a{ max-height:0; overflow:hidden; color:var(--muted); }
.faq-item.open .faq-a{ max-height:28rem; }
.faq-a-in{ padding-bottom:14px; }
.toast{
  position:fixed; bottom:18px; inset-inline-end:18px; background:var(--navy); color:#fff;
  padding:14px 16px; border-radius:14px; box-shadow:var(--shadow); z-index:70;
  transform:translateY(140%); transition:transform .25s ease;
}
.toast.show{ transform:translateY(0); }

@media (max-width:980px){
  .hero-grid,.book-layout,.cart-layout,.contact-grid,.footer-grid,.why-grid{ grid-template-columns:1fr; }
  .svc-grid,.steps{ grid-template-columns:1fr; }
  .addon-showcase{ grid-template-columns:1fr; }
  .sudan-banner{ grid-template-columns:1fr; }
  .receipt,.totals{ position:static; }
  .waybill{ transform:none; }
}
@media (max-width:720px){
  .wrap{ width:min(var(--maxw), calc(100% - 28px)); }
  .burger{ display:inline-block; }
  .nav-links{
    display:none; position:absolute; inset-inline:0; top:76px;
    background:#fff; border-bottom:1px solid var(--line); padding:12px 18px 18px;
    flex-direction:column; align-items:flex-start; gap:14px;
  }
  .nav-links.open{ display:flex; }
  .nav-right .btn{ display:none; }
  .row2,.row3{ grid-template-columns:1fr; }
  .hero{ padding-top:36px; }
  .track-form{ flex-direction:column; border-radius:18px; }
}

@media print{
  .site-header,.hero-actions,.btn,.social-row,.burger{ display:none !important; }
  body{ background:#fff; }
  .receipt,.totals,.cart-item,.panel{ break-inside:avoid; }
}

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#07111F">
<title>تتبع الشحنة | Track Ship</title>
<meta name="description" content="تتبع شحنة Track Ship برقم التتبع.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <div class="wrap nav">
    <a href="index.html" class="brand" aria-label="Track Ship">
      <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 23c4-7 8-10 12-9" stroke="#E10600" stroke-width="2.4" stroke-linecap="round"/><circle cx="22" cy="12" r="5" fill="#E10600"/><circle cx="22" cy="12" r="1.8" fill="#fff"/></svg></span>
      <span class="brand-text"><span class="brand-en">Track <i>Ship</i></span><span class="brand-sub" data-i18n="brand_sub">تراك سيستمز</span></span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" data-i18n="nav_home">الرئيسية</a>
      <a href="index.html#services" data-i18n="nav_services">الخدمات</a>
      <a href="tracking.html" aria-current="page" data-i18n="nav_track">تتبع الشحنة</a>
      <a href="cart.html" data-i18n="nav_cart">السلة</a>
      <a href="contact.html" data-i18n="nav_contact">تواصل معنا</a>
    </nav>
    <div class="nav-right">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="ar">AR</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ur">UR</button>
      </div>
      <a class="icon-cart" href="cart.html" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <span class="cart-count" data-cart-count hidden>0</span>
      </a>
      <a href="calculator.html" class="btn btn-primary btn-sm" data-i18n="nav_order">اطلب شحن</a>
      <button class="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main class="wrap section-tight">
  <div class="page-hero">
    <span class="kicker" data-i18n="track_eyebrow">التتبع</span>
    <h1 data-i18n="track_h1">أين وصلت الشحنة؟</h1>
    <p class="lede" data-i18n="track_lede">أدخل رقم التتبع لعرض مراحلها.</p>
    <form class="track-form" id="trackForm">
      <input id="trackInput" name="code" data-i18n-ph="track_placeholder" placeholder="مثال: TS-774213-SA" autocomplete="off">
      <button class="btn btn-primary" type="submit" data-i18n="track_btn">تتبع</button>
    </form>
    <p class="hint"><span data-i18n="track_try">جرّب رقمًا تجريبيًا:</span> <a href="#" id="sampleBtn">TS-774213-SA</a></p>
  </div>
  <div class="panel" id="emptyWrap"><p class="hint" data-i18n="track_notfound">أدخل رقم تتبع.</p></div>
  <div class="panel" id="resultWrap" hidden>
    <div class="route-map">
      <div><b id="fromLabel">Riyadh</b><div class="hint" data-i18n="track_from">الرياض، السعودية</div></div>
      <div class="line"></div>
      <div><b id="toLabel">—</b><div class="hint" data-i18n="track_to">الوجهة</div></div>
    </div>
    <div class="row" style="display:flex;justify-content:space-between;margin-bottom:8px"><span data-i18n="track_carrier">الناقل</span><b id="carrierName">Track Ship</b></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:18px"><span data-i18n="track_eta">الوصول المتوقع</span><b id="etaDate">—</b></div>
    <div id="timelineTrack"></div>
  </div>
</main>

<footer>
  <div class="wrap footer-bottom"><span data-i18n="foot_rights">© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.</span></div>
</footer>
<script src="i18n.js"></script>
<script src="tracking.js"></script>
<script>
(function(){
  const icons = ["1","2","3","4","5","6"];
  function render(record){
    const lang = masarGetLang();
    const dict = MASAR_DICT[lang];
    const labels = [dict.t1, dict.t2, dict.t3, dict.t4, dict.t5, dict.t6];
    document.getElementById("emptyWrap").hidden = true;
    document.getElementById("resultWrap").hidden = false;
    document.getElementById("toLabel").textContent = record.dest[lang] || record.dest.ar;
    document.getElementById("carrierName").textContent = record.carrier;
    document.getElementById("etaDate").textContent = record.eta.toLocaleDateString(lang === "ar" ? "ar-SA" : (lang === "ur" ? "ur-PK" : "en-US"), { year:"numeric", month:"long", day:"numeric" });
    const track = document.getElementById("timelineTrack");
    track.innerHTML = "";
    labels.forEach((label, i) => {
      const item = document.createElement("div");
      item.className = "t-item" + (i < record.stage ? " done" : (i === record.stage ? " current" : ""));
      item.innerHTML = `<div class="t-dot">${i <= record.stage ? icons[i] : ""}</div><div><b>${label}</b></div>`;
      track.appendChild(item);
    });
  }
  document.getElementById("trackForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const record = await masarResolveTracking(document.getElementById("trackInput").value);
    if(record) render(record);
  });
  document.getElementById("sampleBtn").addEventListener("click", async (event) => {
    event.preventDefault();
    document.getElementById("trackInput").value = "TS-774213-SA";
    const record = await masarResolveTracking("TS-774213-SA");
    if(record) render(record);
  });
  window.addEventListener("masar:langchange", async () => {
    const value = document.getElementById("trackInput").value;
    if(value && !document.getElementById("resultWrap").hidden){
      const record = await masarResolveTracking(value);
      if(record) render(record);
    }
  });
})();
</script>
</body>
</html>

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

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#07111F">
<title>طلب شحن | Track Ship</title>
<meta name="description" content="اطلب شحنًا جافًا أو مبردًا أو دوليًا أو إلى السودان، ثم أضفه إلى السلة.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <div class="wrap nav">
    <a href="index.html" class="brand" aria-label="Track Ship">
      <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 23c4-7 8-10 12-9" stroke="#E10600" stroke-width="2.4" stroke-linecap="round"/><circle cx="22" cy="12" r="5" fill="#E10600"/><circle cx="22" cy="12" r="1.8" fill="#fff"/></svg></span>
      <span class="brand-text"><span class="brand-en">Track <i>Ship</i></span><span class="brand-sub" data-i18n="brand_sub">تراك سيستمز</span></span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" data-i18n="nav_home">الرئيسية</a>
      <a href="index.html#services" data-i18n="nav_services">الخدمات</a>
      <a href="tracking.html" data-i18n="nav_track">تتبع الشحنة</a>
      <a href="cart.html" data-i18n="nav_cart">السلة</a>
      <a href="contact.html" data-i18n="nav_contact">تواصل معنا</a>
    </nav>
    <div class="nav-right">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="ar">AR</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ur">UR</button>
      </div>
      <a class="icon-cart" href="cart.html" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <span class="cart-count" data-cart-count hidden>0</span>
      </a>
      <a href="calculator.html" class="btn btn-primary btn-sm" aria-current="page" data-i18n="nav_order">اطلب شحن</a>
      <button class="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main class="wrap section-tight">
  <div id="serviceChooser">
    <div class="page-hero">
      <span class="kicker" data-i18n="calc_kicker">طلب شحن</span>
      <h1 data-i18n="choose_h">أي شحنة تريد؟</h1>
      <p class="lede" data-i18n="calc_lede">كل خدمة لها صفحتها: البيانات المطلوبة ثم السلة.</p>
    </div>
    <div class="chooser">
      <a href="calculator.html?service=dry"><h3 data-i18n="svc1_h">شحن جاف محلي</h3><p data-i18n="svc1_p">طرود عادية بين مدن المملكة. تحدد الوزن والوجهة وبيانات الطرفين.</p></a>
      <a class="cold" href="calculator.html?service=cold"><h3 data-i18n="svc2_h">شحن مبرّد</h3><p data-i18n="svc2_p">نفس بيانات الشحن المحلي، مع درجة الحرارة التي تحتاجها الشحنة.</p></a>
      <a class="intl" href="calculator.html?service=intl"><h3 data-i18n="svc3_h">شحن دولي</h3><p data-i18n="svc3_p">الوزن والمحتويات والدولة والمدينة وبيانات الطرفين. التوصيل السريع واستلام الباب خياران واضحان.</p></a>
      <a class="sudan" href="calculator.html?service=sudan"><h3 data-i18n="svc4_h">الشحن إلى السودان</h3><p data-i18n="svc4_p">مسار مستقل: الوزن، ومدينة من مدن السودان، والمحتويات، وبيانات المرسل والمستلم.</p></a>
    </div>
  </div>

  <div id="bookLayout" hidden>
    <form id="bookForm" class="book-layout" novalidate>
      <div class="panel">
        <div id="serviceBanner" class="service-banner"></div>

        <h2 data-i18n="f_shipment">بيانات الشحنة</h2>
        <div class="field">
          <label for="weight" data-i18n="f_weight">الوزن (كجم)</label>
          <input class="input" id="weight" name="weight" type="number" min="0.1" max="300" step="0.1" inputmode="decimal" required>
          <p class="field-error" data-error-for="weight" hidden></p>
        </div>

        <div class="field" data-show="dry cold">
          <label for="destSa" data-i18n="f_dest">الوجهة</label>
          <select class="input" id="destSa" name="destSa"></select>
          <p class="field-error" data-error-for="dest" hidden></p>
        </div>

        <div class="field" data-show="sudan">
          <label for="destSd" data-i18n="f_dest">الوجهة</label>
          <select class="input" id="destSd" name="destSd"></select>
          <p class="field-error" data-error-for="destSd" hidden></p>
        </div>

        <div data-show="intl">
          <div class="field">
            <label for="country" data-i18n="f_country">الدولة</label>
            <select class="input" id="country" name="country"></select>
            <p class="field-error" data-error-for="country" hidden></p>
          </div>
          <div class="field" id="countryOtherWrap" hidden>
            <label for="countryOther" data-i18n="f_country_other">اسم الدولة</label>
            <input class="input" id="countryOther" name="countryOther" type="text">
            <p class="field-error" data-error-for="countryOther" hidden></p>
          </div>
          <div class="field">
            <label for="destCityIntl" data-i18n="f_city_name">المدينة</label>
            <input class="input" id="destCityIntl" name="destCityIntl" type="text">
            <p class="field-error" data-error-for="destCity" hidden></p>
          </div>
        </div>

        <div class="field" data-show="intl sudan">
          <label for="contents" data-i18n="f_contents">المحتويات</label>
          <textarea class="input" id="contents" name="contents" rows="3"></textarea>
          <p class="field-error" data-error-for="contents" hidden></p>
        </div>

        <div data-show="cold">
          <div class="field">
            <label for="temperature" data-i18n="f_temp">درجة الحرارة</label>
            <select class="input" id="temperature" name="temperature">
              <option value="chill" data-i18n="temp_chill">مبرّد 2 إلى 8°م</option>
              <option value="cool" data-i18n="temp_cool">بارد 0 إلى 4°م</option>
              <option value="freeze" data-i18n="temp_freeze">مجمّد −18°م</option>
              <option value="deep" data-i18n="temp_deep">تجميد عميق −25°م أو أقل</option>
              <option value="custom" data-i18n="temp_custom">درجة أحددها</option>
            </select>
            <p class="field-error" data-error-for="temp" hidden></p>
          </div>
          <div class="field" id="tempCustomWrap" hidden>
            <label for="tempCustom" data-i18n="f_temp_custom">الدرجة المئوية</label>
            <input class="input" id="tempCustom" name="tempCustom" type="number" step="1" value="-18">
          </div>
        </div>

        <h2 class="block-title" data-i18n="f_sender">المرسل</h2>
        <div class="row2">
          <div class="field">
            <label for="senderName" data-i18n="f_name">الاسم</label>
            <input class="input" id="senderName" name="senderName" type="text" autocomplete="name">
            <p class="field-error" data-error-for="senderName" hidden></p>
          </div>
          <div class="field">
            <label for="senderPhone" data-i18n="f_phone">الجوال</label>
            <input class="input" id="senderPhone" name="senderPhone" type="tel" autocomplete="tel" dir="ltr">
            <p class="field-error" data-error-for="senderPhone" hidden></p>
          </div>
        </div>
        <div class="field">
          <label for="senderCity" data-i18n="f_city">المدينة</label>
          <select class="input" id="senderCity" name="senderCity"></select>
          <p class="field-error" data-error-for="senderCity" hidden></p>
        </div>
        <div class="field">
          <label for="senderAddress" data-i18n="f_address">العنوان التفصيلي</label>
          <input class="input" id="senderAddress" name="senderAddress" type="text" autocomplete="street-address">
          <p class="field-error" data-error-for="senderAddress" hidden></p>
        </div>

        <h2 class="block-title" data-i18n="f_recv">المستلم</h2>
        <div class="row2">
          <div class="field">
            <label for="recvName" data-i18n="f_name">الاسم</label>
            <input class="input" id="recvName" name="recvName" type="text">
            <p class="field-error" data-error-for="recvName" hidden></p>
          </div>
          <div class="field">
            <label for="recvPhone" data-i18n="f_phone">الجوال</label>
            <input class="input" id="recvPhone" name="recvPhone" type="tel" dir="ltr">
            <p class="field-error" data-error-for="recvPhone" hidden></p>
          </div>
        </div>
        <div class="field">
          <label for="recvAddress" data-i18n="f_address">العنوان التفصيلي</label>
          <input class="input" id="recvAddress" name="recvAddress" type="text">
          <p class="field-error" data-error-for="recvAddress" hidden></p>
        </div>

        <h2 class="block-title" data-i18n="addon_kicker">خدمات مقدمة</h2>
        <label class="addon-card express">
          <input type="checkbox" id="expressChk" name="expressChk">
          <span><b data-i18n="f_express">توصيل سريع</b><small data-i18n="f_express_hint">أولوية في الاستلام والنقل</small></span>
          <span class="fee" id="expressPrice"></span>
        </label>
        <label class="addon-card pickup">
          <input type="checkbox" id="pickupChk" name="pickupChk">
          <span><b data-i18n="f_pickup">استلام من الباب</b><small data-i18n="f_pickup_hint">نستلم الطرد من عنوان المرسل</small></span>
          <span class="fee" id="pickupPrice"></span>
        </label>

        <details class="extra">
          <summary data-i18n="f_extra_title">أبعاد وتأمين</summary>
          <p class="hint" data-i18n="f_dims">الأبعاد بالسنتيمتر، إن وُجدت</p>
          <div class="row3">
            <input class="input" id="dimL" name="dimL" type="number" min="0" data-i18n-ph="f_l" placeholder="الطول">
            <input class="input" id="dimW" name="dimW" type="number" min="0" data-i18n-ph="f_w" placeholder="العرض">
            <input class="input" id="dimH" name="dimH" type="number" min="0" data-i18n-ph="f_h" placeholder="الارتفاع">
          </div>
          <label class="addon-card" style="margin-top:12px;border-color:var(--line);background:#fff;box-shadow:none">
            <input type="checkbox" id="insureChk" name="insureChk">
            <span><b data-i18n="f_insure">تأمين الشحنة</b><small data-i18n="f_insure_hint">2٪ من القيمة، بحد أدنى 8 ر.س</small></span>
            <span></span>
          </label>
          <div class="field" id="valueWrap" hidden>
            <label for="declaredValue" data-i18n="f_value">القيمة المصرّح بها (ر.س)</label>
            <input class="input" id="declaredValue" name="declaredValue" type="number" min="0" step="1" value="0">
            <p class="field-error" data-error-for="declared" hidden></p>
          </div>
        </details>
      </div>

      <aside class="receipt">
        <h2 data-i18n="quote_title">سعر هذه الشحنة</h2>
        <div id="quoteBox" aria-live="polite">
          <p class="muted" data-i18n="quote_empty">أدخل الوزن والوجهة ليظهر السعر.</p>
        </div>
        <button class="btn btn-primary btn-block" type="submit" data-i18n="add_btn" style="margin-top:16px">أضف إلى السلة</button>
      </aside>
    </form>
  </div>
</main>

<footer>
  <div class="wrap footer-bottom"><span data-i18n="foot_rights">© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.</span><a href="https://stor.tracksystems.com.sa/">stor.tracksystems.com.sa</a></div>
</footer>
<script src="i18n.js"></script>
<script src="calculator.js"></script>
</body>
</html>

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

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#07111F">
<title>السلة | Track Ship</title>
<meta name="description" content="سلة شحنات Track Ship. بعد المراجعة يكتمل الطلب في متجر تراك سيستمز.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <div class="wrap nav">
    <a href="index.html" class="brand" aria-label="Track Ship">
      <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 23c4-7 8-10 12-9" stroke="#E10600" stroke-width="2.4" stroke-linecap="round"/><circle cx="22" cy="12" r="5" fill="#E10600"/><circle cx="22" cy="12" r="1.8" fill="#fff"/></svg></span>
      <span class="brand-text"><span class="brand-en">Track <i>Ship</i></span><span class="brand-sub" data-i18n="brand_sub">تراك سيستمز</span></span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" data-i18n="nav_home">الرئيسية</a>
      <a href="index.html#services" data-i18n="nav_services">الخدمات</a>
      <a href="tracking.html" data-i18n="nav_track">تتبع الشحنة</a>
      <a href="cart.html" aria-current="page" data-i18n="nav_cart">السلة</a>
      <a href="contact.html" data-i18n="nav_contact">تواصل معنا</a>
    </nav>
    <div class="nav-right">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="ar">AR</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ur">UR</button>
      </div>
      <a class="icon-cart" href="cart.html" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <span class="cart-count" data-cart-count hidden>0</span>
      </a>
      <a href="calculator.html" class="btn btn-primary btn-sm" data-i18n="nav_order">اطلب شحن</a>
      <button class="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main class="wrap section-tight">
  <div class="page-hero">
    <span class="kicker" data-i18n="cart_kicker">السلة</span>
    <h1 data-i18n="cart_h">شحناتك الجاهزة</h1>
  </div>
  <div class="empty" id="cartEmpty">
    <h2 data-i18n="cart_empty">السلة فارغة</h2>
    <p class="lede" data-i18n="cart_empty_p">ابدأ من أيقونة الخدمة في الرئيسية.</p>
    <p style="margin-top:16px"><a class="btn btn-primary" href="index.html#services" data-i18n="cart_go">اختيار خدمة</a></p>
  </div>
  <div class="cart-layout" id="cartLayout" hidden>
    <div>
      <div id="cartList"></div>
      <a class="btn btn-line" href="calculator.html" data-i18n="cart_add">إضافة شحنة أخرى</a>
    </div>
    <aside class="totals">
      <div class="row"><span data-i18n="cart_sub">قبل الضريبة</span><strong id="cartSubtotal">0</strong></div>
      <div class="row"><span data-i18n="cart_vat">ضريبة 15٪</span><strong id="cartVat">0</strong></div>
      <div class="row"><span data-i18n="cart_total">الإجمالي</span></div>
      <div class="amount" id="cartTotal">0</div>
      <p class="hint" data-i18n="cart_note">أكمل الدفع وتأكيد الطلب في متجر تراك سيستمز. احتفظ برقم الشحنة.</p>
      <a class="btn btn-primary btn-block" style="margin-top:14px" href="https://stor.tracksystems.com.sa/" data-i18n="cart_checkout">الانتقال إلى المتجر</a>
      <button class="btn btn-line btn-block" style="margin-top:8px" type="button" id="copyOrder" data-i18n="cart_copy">نسخ تفاصيل الطلب</button>
    </aside>
  </div>
</main>

<footer>
  <div class="wrap footer-bottom"><span data-i18n="foot_rights">© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.</span><a href="https://stor.tracksystems.com.sa/">stor.tracksystems.com.sa</a></div>
</footer>
<script src="i18n.js"></script>
<script src="calculator.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#07111F">
<title>تواصل معنا | Track Ship</title>
<meta name="description" content="عنوان شركة تراك سيستمز الوطني في الرياض، الهاتف والبريد والسجل التجاري.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <div class="wrap nav">
    <a href="index.html" class="brand" aria-label="Track Ship">
      <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 23c4-7 8-10 12-9" stroke="#E10600" stroke-width="2.4" stroke-linecap="round"/><circle cx="22" cy="12" r="5" fill="#E10600"/><circle cx="22" cy="12" r="1.8" fill="#fff"/></svg></span>
      <span class="brand-text"><span class="brand-en">Track <i>Ship</i></span><span class="brand-sub" data-i18n="brand_sub">تراك سيستمز</span></span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" data-i18n="nav_home">الرئيسية</a>
      <a href="index.html#services" data-i18n="nav_services">الخدمات</a>
      <a href="tracking.html" data-i18n="nav_track">تتبع الشحنة</a>
      <a href="cart.html" data-i18n="nav_cart">السلة</a>
      <a href="contact.html" aria-current="page" data-i18n="nav_contact">تواصل معنا</a>
    </nav>
    <div class="nav-right">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="ar">AR</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ur">UR</button>
      </div>
      <a class="icon-cart" href="cart.html" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <span class="cart-count" data-cart-count hidden>0</span>
      </a>
      <a href="calculator.html" class="btn btn-primary btn-sm" data-i18n="nav_order">اطلب شحن</a>
      <button class="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main class="wrap section-tight">
  <div class="page-hero">
    <span class="kicker" data-i18n="contact_eyebrow">التواصل</span>
    <h1 data-i18n="contact_h1">تواصل مع تراك سيستمز</h1>
    <p class="lede" data-i18n="contact_lede">للاستفسار عن شحنة أو سعر، أرسل الرسالة أو اتصل بنا.</p>
  </div>
  <div class="contact-grid">
    <form class="panel" id="contactForm">
      <div class="field">
        <label for="cName" data-i18n="c_name">الاسم</label>
        <input class="input" id="cName" name="name" required>
      </div>
      <div class="row2">
        <div class="field">
          <label for="cPhone" data-i18n="c_phone">الجوال</label>
          <input class="input" id="cPhone" name="phone" type="tel" required dir="ltr">
        </div>
        <div class="field">
          <label for="cEmail" data-i18n="c_email">البريد</label>
          <input class="input" id="cEmail" name="email" type="email" required dir="ltr">
        </div>
      </div>
      <div class="field">
        <label for="cMsg" data-i18n="c_msg">الرسالة</label>
        <textarea class="input" id="cMsg" name="message" rows="5" required></textarea>
      </div>
      <button class="btn btn-primary btn-block" type="submit" data-i18n="c_submit">إرسال</button>
    </form>
    <div>
      <div class="panel">
        <h2 data-i18n="c_info_h">بيانات الشركة</h2>
        <div class="info-row"><div><b>Track Systems Company</b><span data-i18n="c_addr_v">حي الدريهمية، شارع صيدا، مبنى 7036، الرقم الفرعي 2487، الرياض 12796. العنوان المختصر RBDA7036.</span></div></div>
        <div class="info-row"><div><b data-i18n="c_phone_h">الهاتف</b><a dir="ltr" href="tel:+966597281619">+966 59 728 1619</a></div></div>
        <div class="info-row"><div><b data-i18n="c_email_h">البريد</b><a href="mailto:info@tracksystems.com.sa">info@tracksystems.com.sa</a></div></div>
        <div class="info-row"><div><b data-i18n="c_cr_h">السجل التجاري</b><span>7055013747</span></div></div>
        <div class="info-row"><div><b data-i18n="c_vat_h">الرقم الضريبي</b><span>314968452300003</span></div></div>
        <div class="info-row"><div><b>المتجر</b><a href="https://stor.tracksystems.com.sa/">stor.tracksystems.com.sa</a></div></div>
      </div>
      <div class="panel" style="margin-top:16px;padding:0;overflow:hidden">
        <iframe title="Track Systems Riyadh" src="https://maps.google.com/maps?q=Al%20Duraihemyah%20Riyadh&z=14&output=embed" width="100%" height="220" style="border:0;display:block" loading="lazy"></iframe>
      </div>
    </div>
  </div>

  <section class="section-tight" style="max-width:760px">
    <h2 data-i18n="faq_h2">أسئلة شائعة</h2>
    <div class="faq-item"><button class="faq-q" type="button"><span data-i18n="faq_q1">هل السعر في السلة هو السعر النهائي؟</span><span>+</span></button><div class="faq-a"><div class="faq-a-in" data-i18n="faq_a1">نعم للبيانات التي أدخلتها، ويشمل ضريبة 15٪. قد يتعدل إذا اختلف الوزن أو القياس عند الاستلام.</div></div></div>
    <div class="faq-item"><button class="faq-q" type="button"><span data-i18n="faq_q2">كيف أطلب شحنًا مبردًا؟</span><span>+</span></button><div class="faq-a"><div class="faq-a-in" data-i18n="faq_a2">من أيقونة الشحن المبرد. ستجد الوزن والوجهة وبيانات الطرفين ودرجة الحرارة.</div></div></div>
    <div class="faq-item"><button class="faq-q" type="button"><span data-i18n="faq_q3">هل شحن السودان منفصل؟</span><span>+</span></button><div class="faq-a"><div class="faq-a-in" data-i18n="faq_a3">نعم. له صفحة خاصة تختار فيها مدينة سودانية وتكتب المحتويات.</div></div></div>
    <div class="faq-item"><button class="faq-q" type="button"><span data-i18n="faq_q4">أين أدفع؟</span><span>+</span></button><div class="faq-a"><div class="faq-a-in" data-i18n="faq_a4">بعد السلة تنتقل إلى متجر الشركة على stor.tracksystems.com.sa لإتمام الطلب.</div></div></div>
  </section>
</main>

<footer>
  <div class="wrap footer-bottom"><span data-i18n="foot_rights">© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.</span></div>
</footer>
<script src="i18n.js"></script>
<script>
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    masarToast(MASAR_DICT[masarGetLang()].c_toast);
    event.target.reset();
  });
</script>
</body>
</html>

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

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#07111F">
<title>Track Ship | تراك سيستمز للشحن</title>
<meta name="description" content="Track Ship من شركة تراك سيستمز: شحن جاف ومبرّد داخل السعودية، شحن دولي، ومسار مستقل إلى السودان.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <div class="wrap nav">
    <a href="index.html" class="brand" aria-label="Track Ship">
      <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 23c4-7 8-10 12-9" stroke="#E10600" stroke-width="2.4" stroke-linecap="round"/><circle cx="22" cy="12" r="5" fill="#E10600"/><circle cx="22" cy="12" r="1.8" fill="#fff"/></svg></span>
      <span class="brand-text"><span class="brand-en">Track <i>Ship</i></span><span class="brand-sub" data-i18n="brand_sub">تراك سيستمز</span></span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" aria-current="page" data-i18n="nav_home">الرئيسية</a>
      <a href="index.html#services" data-i18n="nav_services">الخدمات</a>
      <a href="tracking.html" data-i18n="nav_track">تتبع الشحنة</a>
      <a href="cart.html" data-i18n="nav_cart">السلة</a>
      <a href="contact.html" data-i18n="nav_contact">تواصل معنا</a>
    </nav>
    <div class="nav-right">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="ar">AR</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ur">UR</button>
      </div>
      <a class="icon-cart" href="cart.html" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <span class="cart-count" data-cart-count hidden>0</span>
      </a>
      <a href="calculator.html" class="btn btn-primary btn-sm" data-i18n="nav_order">اطلب شحن</a>
      <button class="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="kicker" style="color:#ffb4ae" data-i18n="hero_eyebrow">شركة تراك سيستمز للخدمات اللوجستية</span>
        <p class="wordmark">Track <i>Ship</i></p>
        <h1 data-i18n="hero_h1">من بابك إلى وجهتك، بسعر واضح.</h1>
        <p class="lede" data-i18n="hero_lede">Track Ship تنقل الطرود الجافة والمبرّدة داخل المملكة، والشحن الدولي إلى أي دولة ومدينة، وفي مسار مستقل إلى مدن السودان.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#services" data-i18n="hero_cta1">اختر خدمة الشحن</a>
          <a class="btn btn-ghost" href="tracking.html" data-i18n="hero_cta2">تتبع شحنة</a>
        </div>
        <div class="hero-stats">
          <div><b data-i18n="hero_stat1_n">4</b><span data-i18n="hero_stat1_l">مسارات شحن</span></div>
          <div><b data-i18n="hero_stat2_n">15%</b><span data-i18n="hero_stat2_l">ضريبة ظاهرة</span></div>
          <div><b data-i18n="hero_stat3_n">0</b><span data-i18n="hero_stat3_l">اشتراك شهري</span></div>
        </div>
      </div>
      <div class="waybill">
        <div class="waybill-top">
          <strong class="brand-en" style="font-size:18px">Track <i>Ship</i></strong>
          <span class="pill" data-i18n="waybill_tag">بوليصة</span>
        </div>
        <div class="waybill-route"><span data-i18n="waybill_from">من الرياض</span><em>→</em><span data-i18n="waybill_to">إلى جدة</span></div>
        <div class="waybill-meta" data-i18n="waybill_meta">شحن جاف · 3.4 كجم</div>
        <div class="waybill-no" data-i18n="waybill_no">TS-774213-SA</div>
        <div class="barcode" id="heroBarcode"></div>
      </div>
    </div>
  </section>

  <section class="wrap services" id="services">
    <div class="sec-head">
      <span class="kicker" data-i18n="services_kicker">الخدمات</span>
      <h2 data-i18n="services_h2">أربع طرق للشحن</h2>
      <p data-i18n="services_p">كل أيقونة تفتح صفحة الطلب: الوزن والوجهة وبيانات المرسل والمستلم، ثم السلة.</p>
    </div>
    <div class="svc-grid">
      <a class="svc svc-dry" href="calculator.html?service=dry">
        <span class="svc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z"/><path d="M3 7.5V16.5L12 21l9-4.5V7.5"/><path d="M12 12v9"/></svg></span>
        <div>
          <h3 data-i18n="svc1_h">شحن جاف محلي</h3>
          <p data-i18n="svc1_p">طرود عادية بين مدن المملكة. تحدد الوزن والوجهة وبيانات الطرفين.</p>
        </div>
        <div class="svc-foot"><b data-from="dry">من 25.30 ر.س</b><span data-i18n="svc_go">ابدأ الطلب</span></div>
      </a>
      <a class="svc svc-cold" href="calculator.html?service=cold">
        <span class="svc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"/><path d="M7 4.2 12 7.2 17 4.2M7 19.8 12 16.8 17 19.8M3.2 12h4.2M16.6 12h4.2"/></svg></span>
        <div>
          <h3 data-i18n="svc2_h">شحن مبرّد</h3>
          <p data-i18n="svc2_p">نفس بيانات الشحن المحلي، مع درجة الحرارة التي تحتاجها الشحنة.</p>
        </div>
        <div class="svc-foot"><b data-from="cold">من 48.30 ر.س</b><span data-i18n="svc_go">ابدأ الطلب</span></div>
      </a>
      <a class="svc svc-intl" href="calculator.html?service=intl">
        <span class="svc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-6-3.8-9s1.3-6.2 3.8-9Z"/></svg></span>
        <div>
          <h3 data-i18n="svc3_h">شحن دولي</h3>
          <p data-i18n="svc3_p">الوزن والمحتويات والدولة والمدينة وبيانات الطرفين. التوصيل السريع واستلام الباب خياران واضحان.</p>
        </div>
        <div class="svc-foot"><b data-from="intl">من 109.25 ر.س</b><span data-i18n="svc_go">ابدأ الطلب</span></div>
      </a>
    </div>

    <a class="sudan-banner" href="calculator.html?service=sudan">
      <span class="svc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg></span>
      <div>
        <span class="kicker" style="color:#A7F3D0" data-i18n="svc4_note">خدمة قائمة بذاتها</span>
        <h3 data-i18n="svc4_h">الشحن إلى السودان</h3>
        <p data-i18n="svc4_p">مسار مستقل: الوزن، ومدينة من مدن السودان، والمحتويات، وبيانات المرسل والمستلم.</p>
      </div>
      <div>
        <span class="sudan-go" data-i18n="svc_go">ابدأ الطلب</span>
        <span class="sudan-price" data-from="sudan">من 71.30 ر.س</span>
      </div>
    </a>

    <div class="sec-head" style="margin-top:36px">
      <span class="kicker" data-i18n="addon_kicker">خدمات مقدمة</span>
    </div>
    <div class="addon-showcase">
      <a class="addon-tile express" href="calculator.html?service=intl&express=1">
        <span class="mark" aria-hidden="true">⚡</span>
        <span>
          <h3 data-i18n="addon_express_h">توصيل سريع</h3>
          <p data-i18n="addon_express_p">شحنتك تأخذ أولوية في الاستلام والنقل. خط ذهبي، وتختارها داخل الطلب.</p>
          <b data-from="express">من 17.25 ر.س</b>
        </span>
      </a>
      <a class="addon-tile pickup" href="calculator.html?service=intl&pickup=1">
        <span class="mark" aria-hidden="true">🚪</span>
        <span>
          <h3 data-i18n="addon_pickup_h">استلام من الباب</h3>
          <p data-i18n="addon_pickup_p">نستلم الطرد من عنوان المرسل. خط أزرق، وخدمة مختلفة عن سعر الشحن.</p>
          <b data-from="pickup">من 41.40 ر.س</b>
        </span>
      </a>
    </div>
    <p class="addon-note" data-i18n="addon_note">الخدمتان اختياريتان وتظهران داخل الطلب بحد واضح ولون مختلف.</p>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="sec-head">
        <span class="kicker" data-i18n="how_kicker">الطلب</span>
        <h2 data-i18n="how_h2">من الأيقونة إلى السلة</h2>
      </div>
      <div class="steps">
        <article class="step"><i>01</i><h3 data-i18n="how1_h">تختار الخدمة</h3><p data-i18n="how1_p">جاف، مبرّد، دولي، أو السودان.</p></article>
        <article class="step"><i>02</i><h3 data-i18n="how2_h">تكتب البيانات</h3><p data-i18n="how2_p">الوزن والوجهة وبيانات المرسل والمستلم.</p></article>
        <article class="step"><i>03</i><h3 data-i18n="how3_h">تراجع السلة</h3><p data-i18n="how3_p">السعر قبل الضريبة ثم ضريبة 15٪.</p></article>
        <article class="step"><i>04</i><h3 data-i18n="how4_h">تكمل في المتجر</h3><p data-i18n="how4_p">الانتقال إلى متجر تراك سيستمز لإتمام الطلب.</p></article>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="sec-head">
        <span class="kicker" data-i18n="why_kicker">لماذا Track Ship</span>
        <h2 data-i18n="why_h2">شحن مباشر وواضح</h2>
      </div>
      <div class="why-grid">
        <article class="why"><h3 data-i18n="why1_h">سعر قبل الدفع</h3><p data-i18n="why1_p">ترى تفصيل الوزن والإضافات والضريبة في السلة.</p></article>
        <article class="why"><h3 data-i18n="why2_h">تبريد بدرجة تحددها</h3><p data-i18n="why2_p">من التبريد العادي حتى التجميد العميق.</p></article>
        <article class="why"><h3 data-i18n="why3_h">السودان مسار مستقل</h3><p data-i18n="why3_p">مدن السودان لها صفحة وأسعار خاصة.</p></article>
        <article class="why"><h3 data-i18n="why4_h">تتبع برقم الشحنة</h3><p data-i18n="why4_p">تابع الحالة من صفحة التتبع في أي وقت.</p></article>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="sec-head">
        <span class="kicker" data-i18n="price_kicker">الأسعار</span>
        <h2 data-i18n="price_h2">التعرفة قبل الضريبة</h2>
        <p data-i18n="price_p">الحد الأدنى يشمل حتى 5 كجم. بعدها يُحسب كل كيلوغرام بدأ.</p>
      </div>
      <div class="tabs" id="rateTabs">
        <button type="button" class="tab-btn active" data-rate-tab="local" data-i18n="tab_local">جاف</button>
        <button type="button" class="tab-btn" data-rate-tab="cold" data-i18n="tab_cold">مبرّد</button>
        <button type="button" class="tab-btn" data-rate-tab="intl" data-i18n="tab_intl">دولي</button>
        <button type="button" class="tab-btn" data-rate-tab="sudan" data-i18n="tab_sudan">السودان</button>
        <button type="button" class="tab-btn" data-rate-tab="extra" data-i18n="tab_extra">إضافات</button>
      </div>
      <div id="rateMount"></div>
      <p class="price-note" data-i18n="price_note">الأرقام في عمود «شامل الضريبة» هي الحد الأدنى بعد إضافة 15٪. التوصيل السريع واستلام الباب يُضافان عند اختيارهما.</p>
    </div>
  </section>

  <section class="wrap section-tight">
    <div class="cta-band">
      <h2 data-i18n="cta_h2">جهّز شحنتك</h2>
      <p data-i18n="cta_p">اختر المسار، راجع السلة، ثم أكمل الطلب في المتجر.</p>
      <a class="btn btn-primary" href="calculator.html" data-i18n="cta_btn">ابدأ الطلب</a>
    </div>
  </section>
</main>

<footer>
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <span class="brand-en">Track <i>Ship</i></span>
      <p data-i18n="foot_about">Track Ship علامة شركة تراك سيستمز للخدمات اللوجستية. شحن من الباب إلى الباب داخل المملكة وإلى الخارج.</p>
      <div class="social-row">
        <a href="https://x.com/tracksystems56" aria-label="X">𝕏</a>
        <a href="https://www.facebook.com/profile.php?id=61594882976986" aria-label="Facebook">f</a>
        <a href="https://stor.tracksystems.com.sa/" aria-label="Store">▣</a>
      </div>
    </div>
    <div>
      <h3 data-i18n="foot_links">الصفحات</h3>
      <ul>
        <li><a href="index.html" data-i18n="nav_home">الرئيسية</a></li>
        <li><a href="tracking.html" data-i18n="nav_track">تتبع الشحنة</a></li>
        <li><a href="cart.html" data-i18n="nav_cart">السلة</a></li>
        <li><a href="contact.html" data-i18n="nav_contact">تواصل معنا</a></li>
        <li><a href="https://stor.tracksystems.com.sa/">stor.tracksystems.com.sa</a></li>
      </ul>
    </div>
    <div>
      <h3 data-i18n="foot_services">الخدمات</h3>
      <ul>
        <li><a href="calculator.html?service=dry" data-i18n="svc1_h">شحن جاف محلي</a></li>
        <li><a href="calculator.html?service=cold" data-i18n="svc2_h">شحن مبرّد</a></li>
        <li><a href="calculator.html?service=intl" data-i18n="svc3_h">شحن دولي</a></li>
        <li><a href="calculator.html?service=sudan" data-i18n="svc4_h">الشحن إلى السودان</a></li>
      </ul>
    </div>
    <div>
      <h3 data-i18n="foot_company">الشركة</h3>
      <ul>
        <li data-i18n="foot_addr">حي الدريهمية، شارع صيدا، مبنى 7036، الرياض 12796</li>
        <li><span data-i18n="foot_short">العنوان الوطني</span>: RBDA7036</li>
        <li><span data-i18n="foot_cr">السجل التجاري</span>: 7055013747</li>
        <li><span data-i18n="foot_vat">الرقم الضريبي</span>: 314968452300003</li>
        <li><a dir="ltr" href="tel:+966597281619">+966 59 728 1619</a></li>
        <li><a href="mailto:info@tracksystems.com.sa">info@tracksystems.com.sa</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-bottom"><span data-i18n="foot_rights">© 2026 شركة تراك سيستمز. جميع الحقوق محفوظة.</span></div>
</footer>
<script src="i18n.js"></script>
<script src="calculator.js"></script>
<script>
  const bars = document.getElementById("heroBarcode");
  [2,1,3,1,4,2,1,3,1,2,4,1,3,2,1,4,1,2,3,1,2].forEach((w) => {
    const bar = document.createElement("i");
    bar.style.width = (w + 1) + "px";
    bars.appendChild(bar);
  });
</script>
</body>
</html>
