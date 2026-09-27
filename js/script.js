/**
 * Aurelia — Fine Gold & Haute Joaillerie
 * JavaScript i18n & UI Controller
 *
 * OWNER NOTE:
 * All copy and text contents for English and Arabic versions are organized
 * in the translations object below. You can easily edit any text here.
 */

'use strict';

/* ==========================================================================
   1. TRANSLATION DICTIONARY (BILINGUAL DATA STORE)
   ========================================================================== */
const translations = {
  en: {
    meta: {
      title: "Aurelia — Fine Gold & Haute Joaillerie",
      langName: "العربية",
      langCodeLabel: "AR",
      ariaToggle: "Switch language to Arabic"
    },
    nav: {
      collections: "Collections",
      quality: "Heritage & Quality",
      connect: "Connect"
    },
    hero: {
      subhead: "HAUTE JOAILLERIE & FINE GOLD",
      title: "AURELIA",
      tagline: "Pure gold, timeless artistry, and enduring elegance crafted for generations.",
      cta: "Explore Collections"
    },
    collections: {
      eyebrow: "CURATED SELECTION",
      title: "Signature Collections",
      description: "Discover our masterfully wrought gold jewelry, investment bullion, and bespoke bridal creations."
    },
    categories: {
      rings: {
        title: "Rings & Bands",
        desc: "Hand-finished solitaire rings, diamond-cut bands, and statement signets forged in pure 18K and 21K gold.",
        badge: "21K & 18K Gold"
      },
      necklaces: {
        title: "Necklaces & Chains",
        desc: "Intricate gold chokers, layered chains, and gemstone pendants tailored for timeless daily elegance.",
        badge: "Handcrafted"
      },
      bracelets: {
        title: "Bracelets & Bangles",
        desc: "Sculptural solid gold bangles, delicate charm chain bracelets, and diamond-accented cuffs.",
        badge: "Bespoke"
      },
      earrings: {
        title: "Earrings & Drops",
        desc: "Radiant gold hoops, chandelier drops, and minimal studs crafted with unmatched precision.",
        badge: "Signature"
      },
      bullion: {
        title: "Investment Bullion & Bars",
        desc: "Certified 24K 999.9 pure gold bars and minted coins with guaranteed purity seals and instant buyback options.",
        badge: "24K 999.9 Fine Gold"
      }
    },
    quality: {
      eyebrow: "OUR HERITAGE",
      title: "Uncompromising Trust & Artisan Mastery",
      p1: "At Aurelia, gold is more than an adornment — it is an enduring store of legacy and craftsmanship. Every piece that leaves our atelier carries official hallmark certification and rigorous purity testing.",
      p2: "Our master goldsmiths combine centuries-old techniques with modern precision casting, ensuring each piece retains its lustre, structural integrity, and heirloom value across generations."
    },
    stats: {
      s1: { val: "24K / 21K / 18K", label: "Guaranteed Certified Purity" },
      s2: { val: "35+", label: "Years of Master Craftsmanship" },
      s3: { val: "100%", label: "Official Hallmark & Buyback Guarantee" },
      s4: { val: "Bespoke", label: "Custom Design & Restoration Services" }
    },
    connect: {
      eyebrow: "STAY CONNECTED",
      title: "Join The World of Aurelia",
      desc: "Follow our daily gold market updates, new high-jewelry arrivals, and private consultation bookings."
    },
    footer: {
      tagline: "Certified Gold & High Jewelry Atelier.",
      rights: "All rights reserved.",
      credit: "Made by Mahmoud Web"
    },
    common: {
      inquire: "Inquire Details"
    }
  },

  ar: {
    meta: {
      title: "أوريليا — الذهب الخالص والمجوهرات الرفيعة",
      langName: "English",
      langCodeLabel: "EN",
      ariaToggle: "تغيير اللغة إلى الإنجليزية"
    },
    nav: {
      collections: "التشكيلات",
      quality: "الجودة والجذور",
      connect: "تواصل معنا"
    },
    hero: {
      subhead: "مجوهرات فاخرة وذهب خالص",
      title: "أوريليا",
      tagline: "ذهب خالص، وإتقان يتخطى الزمن، وأناقة راقية صُممت لتتوارثها الأجيال.",
      cta: "استكشف التشكيلات"
    },
    collections: {
      eyebrow: "تشكيلة مختارة",
      title: "التشكيلات الأيقونية",
      description: "اكتشف إبداعاتنا الصيغة من الذهب الخالص، وسبائك الاستثمار، والتصاميم الخاصة."
    },
    categories: {
      rings: {
        title: "الخواتم والدبل",
        desc: "خواتم سوليتير مصقولة يدوياً، ودبل مرصعة بأعلى درجات الدقة صُممت من ذهب عيار 18 و 21.",
        badge: "ذهب عيار 21 و 18"
      },
      necklaces: {
        title: "العقود والسلاسل",
        desc: "سلاسل ذهبية متدرجة وعقود فاخرة تمنحك حضوراً واثقاً وأناقة يومية خالدة.",
        badge: "صياغة يدوية"
      },
      bracelets: {
        title: "الأساور والأغواش",
        desc: "أساور ذهبية صلبة وتصاميم انسيابية مرصعة بالأحجار الكريمة لإطلالة ساحرة.",
        badge: "تصاميم خاصة"
      },
      earrings: {
        title: "الأقراط والأقراط الدائرية",
        desc: "أقراط متدلية مشعة وأشكال ناعمة صُممت بعناية فائقة لتبرز جمال التفاصيل.",
        badge: "بصمة أوريليا"
      },
      bullion: {
        title: "سبائك وجنيهات الاستثمار",
        desc: "سبائك وجنيهات من الذهب الخالص عيار 24 بنقاء 999.9 مع ختم الضمان وسهولة إعادة الشراء.",
        badge: "ذهب خالص عيار 24 (999.9)"
      }
    },
    quality: {
      eyebrow: "عراقتنا",
      title: "ثقة مطلقة وإتقان لا يضاهى",
      p1: "في أوريليا، الذهب ليس مجرد زينة، بل هو إرث متجدد واستثمار دائم. كل قطعة تخرج من ورشنا تحمل ختماً رسمياً وشهادة نقاء معتمدة.",
      p2: "يجمع حرفيونا بين تقاليد الصياغة العريقة والتقنيات الحديثة، لضمان بريق دائم وجودة متينة تحفظ قيمتها عبر الأجيال."
    },
    stats: {
      s1: { val: "24K / 21K / 18K", label: "نقاء معتمد ومضمون" },
      s2: { val: "+35", label: "عاماً من خبرة الصياغة" },
      s3: { val: "100%", label: "ختم رسمي وضمان إعادة الشراء" },
      s4: { val: "تصميم خاص", label: "خدمات الصياغة والتفصيل حسب الطلب" }
    },
    connect: {
      eyebrow: "كن على تواصل",
      title: "انضم إلى عالم أوريليا",
      desc: "تابع التحديثات اليومية لأسعار الذهب، وأحدث التشكيلات، واحجز استشارتك الخاصة."
    },
    footer: {
      tagline: "دار الذهب والمجوهرات الفاخرة المعتمدة.",
      rights: "جميع الحقوق محفوظة.",
      credit: "بواسطة محمود ويب"
    },
    common: {
      inquire: "تفاصيل الاستفسار"
    }
  }
};

/* ==========================================================================
   2. APPLICATION STATE & CONTROLLER
   ========================================================================== */
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize current year in footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear().toString();
  }

  // Language Toggle Handler
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  // Header Scroll Shadow Logic
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Navigation Drawer Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
      mobileNavToggle.setAttribute('aria-expanded', (!isExpanded).toString());
      mainNav.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Handle Video Autoplay Fallback (browsers blocking autoplay)
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented or restricted by browser settings:", error);
      });
    }
  }
});

/* ==========================================================================
   3. LANGUAGE SWITCHING FUNCTION
   ========================================================================== */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const langData = translations[currentLang];

  // Update HTML tag attributes (dir, lang)
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Update document title
  document.title = langData.meta.title;

  // Update Language Button Labels
  const langCodeLabel = document.getElementById('langCodeLabel');
  const langNameLabel = document.getElementById('langNameLabel');
  const langToggleBtn = document.getElementById('langToggleBtn');

  if (langCodeLabel) langCodeLabel.textContent = langData.meta.langCodeLabel;
  if (langNameLabel) langNameLabel.textContent = langData.meta.langName;
  if (langToggleBtn) langToggleBtn.setAttribute('aria-label', langData.meta.ariaToggle);

  // Update elements with data-i18n attributes
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const translationValue = getNestedProperty(langData, keyPath);
    if (translationValue !== undefined) {
      el.textContent = translationValue;
    }
  });

  // Specifically update Footer Credit Line (Required)
  const creditLine = document.getElementById('creditLine');
  if (creditLine) {
    creditLine.textContent = langData.footer.credit;
  }
}

/**
 * Helper to retrieve nested object value by dot-notation path
 */
function getNestedProperty(obj, path) {
  return path.split('.').reduce((prev, curr) => {
    return prev && prev[curr] !== undefined ? prev[curr] : undefined;
  }, obj);
}
