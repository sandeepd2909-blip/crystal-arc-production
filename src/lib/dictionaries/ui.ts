import { Locale } from "@/lib/i18n";

/**
 * Site chrome — nav, footer, and the CTA labels that recur on every page.
 * Page body copy lives in per-page dictionaries alongside this one.
 *
 * The Arabic here is a first pass written to be reviewed by a native speaker
 * before the domain cutover. Where a term is a proper noun or an established
 * borrowing (Crystal Arc, WhatsApp) it is deliberately left in Latin script.
 */

export type UiDict = {
  nav: {
    home: string;
    products: string;
    trophies: string;
    gifts: string;
    boxes: string;
    homeDecor: string;
    craft: string;
    ourWork: string;
    about: string;
    aboutUs: string;
    contact: string;
    quote: string;
    menu: string;
    close: string;
  };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    offices: string;
    dubai: string;
    abuDhabi: string;
    riyadh: string;
    privacy: string;
    terms: string;
    sitemap: string;
    rights: string;
    hours: string;
    getInTouch: string;
    requestProposal: string;
    showroom: string;
    industries: string;
    careers: string;
  };
  cta: {
    whatsapp: string;
    requestProposal: string;
    requestPiece: string;
    /** Prefilled into the WhatsApp compose box. Was a hardcoded English
     *  literal in Nav and WaFloat, so /ar opened WhatsApp in English. */
    waMessage: string;
  };
  home: { cycleWords: string[]; testimonials: Array<{ quote: string; name: string; role: string; img: string }> };
  industries: { eyebrow: string; items: string[] };
  brochure: { name: string; email: string; company: string; submit: string; sending: string; note: string; done: string };
  a11y: { toggleMenu: string; toggleSubmenu: string; whatsapp: string; goToTestimonial: string; clientWork: string; language: string };
  blog: string;
  testimonial: { prev: string; next: string };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    interest: string;
    selectCategory: string;
    products: string[];
    brief: string;
    briefPlaceholder: string;
    send: string;
    sending: string;
    respond: string;
    noSpam: string;
    sentTitle: string;
    sentBody: string;
  };
};

const en: UiDict = {
  nav: {
    home: "Home",
    products: "Products",
    trophies: "Trophies & Awards",
    gifts: "Corporate Gifts",
    boxes: "Presentation Boxes",
    homeDecor: "Home & Décor",
    craft: "The Craft",
    ourWork: "Our Work",
    about: "About",
    aboutUs: "About Us",
    contact: "Contact",
    quote: "Get a Quote",
    menu: "Menu",
    close: "Close",
  },
  footer: {
    tagline: "Dubai's specialist manufacturer of custom trophies, awards, corporate gifts, and luxury packaging. Trusted by governments, sports federations, and Fortune 500 companies across the GCC since 2000.",
    explore: "Explore",
    company: "Company",
    offices: "Offices",
    dubai: "Dubai",
    abuDhabi: "Abu Dhabi",
    riyadh: "Riyadh",
    privacy: "Privacy",
    terms: "Terms",
    sitemap: "Sitemap",
    rights: "All rights reserved. Dubai, United Arab Emirates.",
    hours: "Mon–Sat, 9am–6pm GST",
    getInTouch: "Get in Touch",
    requestProposal: "Request a Proposal",
    showroom: "Dubai Showroom",
    industries: "Industries",
    careers: "Careers",
  },
  cta: {
    whatsapp: "WhatsApp Us",
    requestProposal: "Request a Proposal",
    requestPiece: "Request a Custom Piece",
    waMessage: "Hi Crystal Arc, I'd like to discuss a project.",
  },
  brochure: {
    name: "Full Name", email: "Work Email", company: "Company",
    submit: "Request the Catalogue →", sending: "Sending…",
    note: "We will send it over, usually the same working day.",
    done: "Request received. We will send the catalogue shortly.",
  },
  home: {
    cycleWords: ["Governments", "Champions", "Royalty", "Icons", "Corporations"],
    testimonials: [
      {
        quote: "Crystal Arc didn't just deliver trophies. They delivered the centrepiece of our entire ceremony, pieces that felt genuinely worthy of the achievement they represented.",
        name: "VP Corporate Affairs",
        role: "Emirates Group",
        img: "/testi-emirates.webp",
      },
    ],
  },
  industries: {
    eyebrow: "Who We Serve",
    items: ["Government & Sovereign", "Corporate & MNCs", "Sports & Entertainment", "Luxury Retail & Events", "Advertising & Media"],
  },
  a11y: { toggleMenu: "Toggle menu", toggleSubmenu: "Toggle submenu", whatsapp: "Chat on WhatsApp", goToTestimonial: "Go to testimonial", clientWork: "Crystal Arc client work", language: "Language" },
  blog: "Blog",
  testimonial: { prev: "Previous testimonial", next: "Next testimonial" },
  form: {
    name: "Full Name",
    namePlaceholder: "Ahmed Al Mansoori",
    email: "Work Email",
    emailPlaceholder: "ahmed@company.ae",
    phone: "Phone",
    phonePlaceholder: "+971 50 000 0000",
    interest: "Product Interest",
    selectCategory: "Select a category",
    products: [
      "Crystal Trophies",
      "Trophies & Awards",
      "Corporate Gifts",
      "Presentation Boxes",
      "Home & Décor",
      "Other / Not Sure",
    ],
    brief: "Project Brief",
    briefPlaceholder: "Tell us about your event, occasion, quantity, timeline, any references or inspiration…",
    send: "Send Enquiry",
    sending: "Sending…",
    respond: "We respond within 2 hours.",
    noSpam: "No spam. No follow-up calls. Just a proposal.",
    sentTitle: "Message received.",
    sentBody: "We respond within 2 hours during business hours.",
  },
};

const ar: UiDict = {
  nav: {
    home: "الرئيسية",
    products: "المنتجات",
    trophies: "الجوائز والكؤوس",
    gifts: "الهدايا المؤسسية",
    boxes: "علب التقديم",
    homeDecor: "المقتنيات والديكور",
    craft: "الحرفة",
    ourWork: "أعمالنا",
    about: "من نحن",
    aboutUs: "نبذة عنا",
    contact: "اتصل بنا",
    quote: "اطلب عرض سعر",
    menu: "القائمة",
    close: "إغلاق",
  },
  footer: {
    tagline: "مصنّع متخصص في دبي للجوائز والدروع والهدايا المؤسسية والتغليف الفاخر. موضع ثقة الجهات الحكومية والاتحادات الرياضية وكبرى الشركات في الخليج منذ عام ٢٠٠٠.",
    explore: "تصفَّح",
    company: "الشركة",
    offices: "مكاتبنا",
    dubai: "دبي",
    abuDhabi: "أبوظبي",
    riyadh: "الرياض",
    privacy: "الخصوصية",
    terms: "الشروط",
    sitemap: "خريطة الموقع",
    rights: "جميع الحقوق محفوظة. دبي، الإمارات العربية المتحدة.",
    hours: "الاثنين–السبت، ٩ صباحًا–٦ مساءً بتوقيت الخليج",
    getInTouch: "تواصلوا معنا",
    requestProposal: "اطلب عرضًا",
    showroom: "صالة عرض دبي",
    industries: "القطاعات",
    careers: "الوظائف",
  },
  cta: {
    whatsapp: "راسلنا على واتساب",
    requestProposal: "اطلب عرضًا",
    requestPiece: "اطلب قطعة خاصة",
    waMessage: "مرحبًا كريستال آرك، أودّ مناقشة مشروع.",
  },
  brochure: {
    name: "الاسم الكامل", email: "البريد الإلكتروني", company: "جهة العمل",
    submit: "اطلب الكتالوج ←", sending: "جارٍ الإرسال…",
    note: "سنرسله إليكم، عادةً في يوم العمل نفسه.",
    done: "وصلنا طلبكم. سنرسل الكتالوج قريبًا.",
  },
  home: {
    cycleWords: ["الحكومات", "الأبطال", "الأُسر الحاكمة", "الشخصيات", "الشركات"],
    testimonials: [
      {
        quote: "لم تسلّمنا كريستال آرك جوائز فحسب، بل سلّمتنا القطعة المحورية في حفلنا كلّه, قطعًا بدت جديرة فعلًا بالإنجاز الذي تمثّله.",
        name: "نائب رئيس الشؤون المؤسسية",
        role: "مجموعة الإمارات",
        img: "/testi-emirates.webp",
      },
    ],
  },
  industries: {
    eyebrow: "من نخدم",
    items: ["الجهات الحكومية والسيادية", "الشركات والمؤسسات متعددة الجنسيات", "الرياضة والترفيه", "التجزئة الفاخرة والفعاليات", "الإعلان والإعلام"],
  },
  a11y: { toggleMenu: "فتح القائمة", toggleSubmenu: "فتح القائمة الفرعية", whatsapp: "تواصل عبر واتساب", goToTestimonial: "اذهب إلى الشهادة", clientWork: "من أعمال Crystal Arc", language: "اللغة" },
  blog: "المدونة",
  testimonial: { prev: "الشهادة السابقة", next: "الشهادة التالية" },
  form: {
    name: "الاسم الكامل",
    namePlaceholder: "أحمد المنصوري",
    email: "البريد الإلكتروني",
    emailPlaceholder: "ahmed@company.sa",
    phone: "رقم الهاتف",
    phonePlaceholder: "+966 5X XXX XXXX",
    interest: "المنتج المطلوب",
    selectCategory: "اختر الفئة",
    products: [
      "جوائز الكريستال",
      "الجوائز والكؤوس",
      "الهدايا المؤسسية",
      "علب التقديم",
      "المقتنيات والديكور",
      "أخرى / غير محدد",
    ],
    brief: "تفاصيل المشروع",
    briefPlaceholder: "أخبرنا عن مناسبتكم, نوعها، الكمية المطلوبة، الموعد النهائي، وأي نماذج تودّون الاسترشاد بها…",
    send: "أرسل الطلب",
    sending: "جارٍ الإرسال…",
    respond: "نردّ خلال ساعتين.",
    noSpam: "بلا رسائل مزعجة ولا مكالمات متابعة. عرض سعر فقط.",
    sentTitle: "وصلتنا رسالتكم.",
    sentBody: "نردّ خلال ساعتين في أوقات العمل.",
  },
};

const DICTS: Record<Locale, UiDict> = { en, ar };

export function ui(locale: Locale): UiDict {
  return DICTS[locale];
}
