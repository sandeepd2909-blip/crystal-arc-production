/**
 * Hall of Fame reel.
 *
 * ORDER IS DELIBERATE — do not sort this list.
 *
 * Every consumer renders it as `[...HOF_PHOTOS, ...HOF_PHOTOS]` in order, so the
 * array order IS the on-screen order. Grouped by subject it read badly: five
 * football entries ran back to back and the strip looked like a sports reel.
 *
 * The list is interleaved across four subjects — statecraft, sport, corporate
 * work and entertainment — so no two neighbours share a subject and any five
 * visible at once show a spread. The last entry and the first are also from
 * different subjects, because the doubled array makes them neighbours at the
 * loop point.
 *
 * Adding one? Drop it next to a same-subject entry and shuffle the run, rather
 * than appending to the end, or the tail will re-cluster.
 */
export const HOF_PHOTOS = [
  { src: "/hof-mag-17.webp",                        label: "President Donald J. Trump · USA", arLabel: "الرئيس دونالد ترامب · الولايات المتحدة" },
  { src: "/hof-mag-06.webp",                        label: "Cristiano Ronaldo · Al-Nassr, Saudi Arabia", arLabel: "كريستيانو رونالدو · النصر، السعودية" },
  { src: "/hof-arabab.webp",                        label: "Expo 2020 Dubai · Award Ceremony", arLabel: "إكسبو ٢٠٢٠ دبي · حفل الجوائز" },
  { src: "/hof-jackie-chan-new.webp",               label: "Jackie Chan · Entertainment", arLabel: "جاكي شان · ترفيه" },
  { src: "/hof-al-sharqi-fujairah.webp",            label: "H.H. Sheikh Mohammed bin Hamad Al Sharqi · Fujairah", arLabel: "سموّ الشيخ محمد بن حمد الشرقي · الفجيرة" },

  { src: "/hof-fazza.webp",                         label: "H.H. Sheikh Hamdan bin Mohammed · Dubai", arLabel: "سمو الشيخ حمدان بن محمد · دبي" },
  { src: "/hof-mag-08.webp",                        label: "João Félix · Football, UAE", arLabel: "جواو فيليكس · كرة قدم، الإمارات" },
  { src: "/hof-best-corporate-awards.webp",         label: "Corporate Excellence Awards · UAE", arLabel: "جوائز التميّز المؤسسي · الإمارات" },
  { src: "/hof-mag-14.webp",                        label: "Disney+ · 1 Billion Milestone", arLabel: "Disney+ · مليار مشاهدة" },

  { src: "/hof-rak-half-marathon.webp",             label: "RAK Half Marathon 2026 · Ras Al Khaimah", arLabel: "نصف ماراثون رأس الخيمة ٢٠٢٦ · رأس الخيمة" },
  { src: "/hof-pope-gifting.webp",                  label: "His Holiness Pope Francis · Vatican", arLabel: "قداسة البابا فرنسيس · الفاتيكان" },
  { src: "/hof-mag-10.webp",                        label: "Gianni Infantino · FIFA President, UAE", arLabel: "جياني إنفانتينو · رئيس الفيفا، الإمارات" },
  { src: "/hof-custom-metal-awards.webp",           label: "Custom Metal Awards · UAE", arLabel: "جوائز معدنية مخصصة · الإمارات" },
  { src: "/hof-amitabh-bachchan.webp",              label: "Amitabh Bachchan · Entertainment, India", arLabel: "أميتاب باتشان · ترفيه، الهند" },

  { src: "/hof-mag-12.webp",                        label: "Saudi State Ceremony · Government", arLabel: "مراسم رسمية سعودية · حكومي" },
  { src: "/hof-mag-04.webp",                        label: "Novak Djokovic & H.H. Sheikh Hamdan · Dubai", arLabel: "نوفاك ديوكوفيتش وسمو الشيخ حمدان · دبي" },
  { src: "/hof-mag-03.webp",                        label: "Esports Championship Award · UAE", arLabel: "جائزة بطولة الرياضات الإلكترونية · الإمارات" },
  { src: "/hof-mag-07.webp",                        label: "Trevor Noah · Entertainment", arLabel: "تريفور نوا · ترفيه" },

  { src: "/hof-king-charles-new.webp",              label: "H.M. King Charles III · Royal Household, UK", arLabel: "جلالة الملك تشارلز الثالث · الديوان الملكي، المملكة المتحدة" },
  { src: "/hof-mag-11.webp",                        label: "Al-Hilal FC · Saudi Pro League", arLabel: "نادي الهلال · دوري روشن السعودي" },
  { src: "/hof-customised-plaque.webp",             label: "Bespoke Recognition Plaque · UAE", arLabel: "درع تكريم خاص · الإمارات" },

  { src: "/hof-al-zarooni-ilt20.webp",              label: "Mr. Khalid Al Zarooni · DP World ILT20, UAE", arLabel: "السيد خالد الزرعوني · دي بي ورلد ILT20، الإمارات" },
  { src: "/hof-mag-05.webp",                        label: "State Award Presentation · UAE", arLabel: "تقديم جائزة رسمية · الإمارات" },
  { src: "/hof-vip-gift-new.webp",                  label: "Mohamed Salah & H.H. Sheikh Hamdan · UAE", arLabel: "محمد صلاح وسمو الشيخ حمدان · الإمارات" },
  { src: "/hof-best-custom-awards-ksa.webp",        label: "Custom Awards · Saudi Arabia", arLabel: "جوائز مخصصة · السعودية" },

  { src: "/hof-mag-09.webp",                        label: "H.H. Sultan Al-Qasimi · Ruler of Sharjah", arLabel: "صاحب السمو الشيخ سلطان القاسمي · حاكم الشارقة" },
  { src: "/hof-mag-16.webp",                        label: "João Félix · Football, Saudi Arabia", arLabel: "جواو فيليكس · كرة قدم، السعودية" },
  { src: "/hof-customized-corporate-gift.webp",     label: "Customised Corporate Gift · GCC", arLabel: "هدية مؤسسية مخصصة · الخليج" },

  { src: "/hof-mag-02.webp",                        label: "UAE Sustainability Award · Government", arLabel: "جائزة الإمارات للاستدامة · حكومي" },
  { src: "/hof-al-balushi.webp",                    label: "Eng. Suhaib Al-Balushi · Award Presentation", arLabel: "م. صهيب البلوشي · حفل تكريم" },
  { src: "/hof-fcb.webp",                           label: "FC Barcelona · Sports, Spain", arLabel: "نادي برشلونة · رياضة، إسبانيا" },
  { src: "/hof-best-custom-corporate-trophies.webp",label: "Bespoke Corporate Trophies · UAE", arLabel: "جوائز مؤسسية خاصة · الإمارات" },

  { src: "/hof-mag-15.webp",                        label: "H.H. Sheikh Hamdan bin Mohammed · UAE", arLabel: "سمو الشيخ حمدان بن محمد · الإمارات" },
  { src: "/hof-mag-13.webp",                        label: "Simone Inzaghi · Football Manager, Italy", arLabel: "سيموني إنزاغي · مدرب كرة قدم، إيطاليا" },
  { src: "/hof-customised-corporate-awards.webp",   label: "Customised Corporate Awards · GCC", arLabel: "جوائز مؤسسية مخصصة · الخليج" },

  { src: "/hof-mag-01.webp",                        label: "State Gift Presentation · GCC", arLabel: "تقديم هدية رسمية · الخليج" },
  { src: "/hof-corporate-trophies.webp",            label: "Corporate Trophy Collection · UAE", arLabel: "مجموعة الجوائز المؤسسية · الإمارات" },
];
