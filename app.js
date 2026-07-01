const langPages = {
  jp: "index.html",
  en: "index-en.html",
  bn: "index-bn.html",
  ne: "index-ne.html",
  id: "index-id.html",
  vi: "index-vi.html",
  km: "index-km.html"
};

const siteConfig = window.SITE_CONFIG || {
  unsetLabel: "正式情報未設定",
  organization: {
    name: "一般社団法人 日本特定技能教育支援協会",
    nameShort: "日本特定技能教育支援協会",
    nameEn: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION"
  },
  contact: {},
  legal: {},
  social: {}
};

const i18n = {
  jp: {
    htmlLang: "ja",
    brand: "日本特定技能教育支援協会",
    brandSub: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    nav: ["トップ", "協会概要", "事業内容", "海外ネットワーク", "会員名簿", "会員制度", "お知らせ", "お問い合わせ"],
    utility: ["組織概要", "お知らせ", "サイトマップ"],
    search: "検索",
    searchPlaceholder: "サイト内検索",
    fontSize: "文字サイズ",
    small: "縮小",
    normal: "標準",
    large: "拡大",
    color: "色合い",
    blue: "青",
    yellow: "黄",
    black: "黒",
    contact: "お問い合わせ",
    footerTitle: "一般社団法人 日本特定技能教育支援協会",
    footerBody: "海外人材の教育・育成、制度構築及び国際連携を通じて、特定技能制度の適正な運用に資する教育支援体制の整備を支援します。",
    footerSite: "サイト",
    footerParticipation: "参加・連携",
    membership: "会員制度",
    documents: "資料のご請求",
    partner: "パートナー相談",
    news: [["2026.06.30", "お知らせ", "協会公式サイトの正式公開に向けて準備を進めています。"]]
  },
  en: {
    htmlLang: "en",
    brand: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    brandSub: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    nav: ["Home", "About", "Activities", "International Network", "Member Directory", "Membership", "News", "Contact"],
    utility: ["Organization", "News", "Site Map"],
    search: "Search",
    searchPlaceholder: "Search this site",
    fontSize: "Text size",
    small: "Small",
    normal: "Normal",
    large: "Large",
    color: "Color",
    blue: "Blue",
    yellow: "Yellow",
    black: "Black",
    contact: "Contact",
    footerTitle: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    footerBody: "We support the development of education systems that contribute to the proper operation of the Specified Skilled Worker system through overseas human resource education, institutional development, and international cooperation.",
    footerSite: "Site",
    footerParticipation: "Participation",
    membership: "Membership",
    documents: "Request Materials",
    partner: "Partner Consultation",
    news: [["2026.06.30", "Notice", "We are preparing the association's official website for publication."]]
  },
  bn: {
    htmlLang: "bn",
    brand: "জাপান স্পেসিফাইড স্কিলড এডুকেশন সাপোর্ট অ্যাসোসিয়েশন",
    brandSub: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    nav: ["প্রথম পাতা", "সংগঠন", "কার্যক্রম", "আন্তর্জাতিক নেটওয়ার্ক", "সদস্য তালিকা", "সদস্যপদ", "সংবাদ", "যোগাযোগ"],
    utility: ["সংগঠন পরিচিতি", "সংবাদ", "সাইটম্যাপ"],
    search: "অনুসন্ধান",
    searchPlaceholder: "সাইটে অনুসন্ধান",
    fontSize: "লেখার আকার",
    small: "ছোট",
    normal: "সাধারণ",
    large: "বড়",
    color: "রং",
    blue: "নীল",
    yellow: "হলুদ",
    black: "কালো",
    contact: "যোগাযোগ",
    footerTitle: "জাপান স্পেসিফাইড স্কিলড এডুকেশন সাপোর্ট অ্যাসোসিয়েশন",
    footerBody: "বিদেশি মানবসম্পদের শিক্ষা, প্রশিক্ষণ, প্রাতিষ্ঠানিক কাঠামো ও আন্তর্জাতিক সহযোগিতার মাধ্যমে Specified Skilled Worker ব্যবস্থার যথাযথ পরিচালনায় সহায়ক শিক্ষা সহায়তা কাঠামো গড়ে তুলতে আমরা সহায়তা করি।",
    footerSite: "সাইট",
    footerParticipation: "অংশগ্রহণ",
    membership: "সদস্যপদ",
    documents: "তথ্যপত্র অনুরোধ",
    partner: "পার্টনার পরামর্শ",
    news: [["2026.06.30", "বিজ্ঞপ্তি", "সমিতির আনুষ্ঠানিক ওয়েবসাইট প্রকাশের প্রস্তুতি চলছে।"]]
  },
  ne: {
    htmlLang: "ne",
    brand: "जापान स्पेसिफाइड स्किल्ड एजुकेशन सपोर्ट एसोसिएसन",
    brandSub: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    nav: ["गृहपृष्ठ", "संस्था परिचय", "कार्यहरू", "अन्तर्राष्ट्रिय नेटवर्क", "सदस्य सूची", "सदस्यता", "समाचार", "सम्पर्क"],
    utility: ["संस्था परिचय", "समाचार", "साइटम्याप"],
    search: "खोज",
    searchPlaceholder: "साइटभित्र खोज्नुहोस्",
    fontSize: "अक्षर आकार",
    small: "सानो",
    normal: "सामान्य",
    large: "ठूलो",
    color: "रङ",
    blue: "निलो",
    yellow: "पहेंलो",
    black: "कालो",
    contact: "सम्पर्क",
    footerTitle: "जापान स्पेसिफाइड स्किल्ड एजुकेशन सपोर्ट एसोसिएसन",
    footerBody: "विदेशी मानव संसाधनको शिक्षा, तालिम, संस्थागत संरचना र अन्तर्राष्ट्रिय सहकार्य मार्फत Specified Skilled Worker प्रणालीको उचित सञ्चालनमा योगदान गर्ने शिक्षा सहयोग संरचना विकासमा सहयोग गर्छौं।",
    footerSite: "साइट",
    footerParticipation: "सहभागिता",
    membership: "सदस्यता",
    documents: "सामग्री अनुरोध",
    partner: "साझेदार परामर्श",
    news: [["2026.06.30", "सूचना", "संस्थाको आधिकारिक वेबसाइट प्रकाशनको तयारी भइरहेको छ।"]]
  },
  id: {
    htmlLang: "id",
    brand: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    brandSub: "Dukungan Pendidikan Pekerja Berketerampilan Khusus",
    nav: ["Beranda", "Tentang", "Kegiatan", "Jaringan Internasional", "Direktori Anggota", "Keanggotaan", "Berita", "Kontak"],
    utility: ["Profil Organisasi", "Berita", "Peta Situs"],
    search: "Cari",
    searchPlaceholder: "Cari di situs",
    fontSize: "Ukuran teks",
    small: "Kecil",
    normal: "Normal",
    large: "Besar",
    color: "Warna",
    blue: "Biru",
    yellow: "Kuning",
    black: "Hitam",
    contact: "Kontak",
    footerTitle: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    footerBody: "Kami mendukung pengembangan sistem pendidikan yang berkontribusi pada pengoperasian yang tepat dari sistem Specified Skilled Worker melalui pendidikan SDM luar negeri, pengembangan kelembagaan, dan kerja sama internasional.",
    footerSite: "Situs",
    footerParticipation: "Partisipasi",
    membership: "Keanggotaan",
    documents: "Permintaan Materi",
    partner: "Konsultasi Mitra",
    news: [["2026.06.30", "Pemberitahuan", "Situs web resmi asosiasi sedang dipersiapkan untuk publikasi."]]
  },
  vi: {
    htmlLang: "vi",
    brand: "Hiệp hội Hỗ trợ Giáo dục Kỹ năng Đặc định Nhật Bản",
    brandSub: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    nav: ["Trang chủ", "Giới thiệu", "Hoạt động", "Mạng lưới quốc tế", "Danh bạ hội viên", "Hội viên", "Tin tức", "Liên hệ"],
    utility: ["Tổ chức", "Tin tức", "Sơ đồ trang"],
    search: "Tìm kiếm",
    searchPlaceholder: "Tìm trong trang",
    fontSize: "Cỡ chữ",
    small: "Nhỏ",
    normal: "Chuẩn",
    large: "Lớn",
    color: "Màu sắc",
    blue: "Xanh",
    yellow: "Vàng",
    black: "Đen",
    contact: "Liên hệ",
    footerTitle: "Hiệp hội Hỗ trợ Giáo dục Kỹ năng Đặc định Nhật Bản",
    footerBody: "Chúng tôi hỗ trợ xây dựng hệ thống giáo dục góp phần vận hành đúng đắn chế độ Specified Skilled Worker thông qua giáo dục nhân lực nước ngoài, phát triển thể chế và hợp tác quốc tế.",
    footerSite: "Trang",
    footerParticipation: "Tham gia",
    membership: "Hội viên",
    documents: "Yêu cầu tài liệu",
    partner: "Tư vấn đối tác",
    news: [["2026.06.30", "Thông báo", "Trang web chính thức của hiệp hội đang được chuẩn bị để công bố."]]
  },
  km: {
    htmlLang: "km",
    brand: "សមាគមគាំទ្រអប់រំជំនាញពិសេសជប៉ុន",
    brandSub: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    nav: ["ទំព័រដើម", "អំពីសមាគម", "សកម្មភាព", "បណ្តាញអន្តរជាតិ", "បញ្ជីសមាជិក", "សមាជិកភាព", "ព័ត៌មាន", "ទំនាក់ទំនង"],
    utility: ["អង្គការ", "ព័ត៌មាន", "ផែនទីគេហទំព័រ"],
    search: "ស្វែងរក",
    searchPlaceholder: "ស្វែងរកក្នុងគេហទំព័រ",
    fontSize: "ទំហំអក្សរ",
    small: "តូច",
    normal: "ធម្មតា",
    large: "ធំ",
    color: "ពណ៌",
    blue: "ខៀវ",
    yellow: "លឿង",
    black: "ខ្មៅ",
    contact: "ទំនាក់ទំនង",
    footerTitle: "សមាគមគាំទ្រអប់រំជំនាញពិសេសជប៉ុន",
    footerBody: "យើងគាំទ្រការរៀបចំប្រព័ន្ធអប់រំដែលរួមចំណែកដល់ការអនុវត្តត្រឹមត្រូវនៃប្រព័ន្ធ Specified Skilled Worker តាមរយៈការអប់រំធនធានមនុស្សក្រៅប្រទេស ការអភិវឌ្ឍស្ថាប័ន និងកិច្ចសហប្រតិបត្តិការអន្តរជាតិ។",
    footerSite: "គេហទំព័រ",
    footerParticipation: "ការចូលរួម",
    membership: "សមាជិកភាព",
    documents: "ស្នើសុំឯកសារ",
    partner: "ពិគ្រោះយោបល់ដៃគូ",
    news: [["2026.06.30", "សេចក្តីជូនដំណឹង", "គេហទំព័រផ្លូវការរបស់សមាគមកំពុងត្រូវបានរៀបចំសម្រាប់ការផ្សព្វផ្សាយ។"]]
  }
};

const languageLabels = {
  jp: "JP",
  en: "EN",
  bn: "বাংলা",
  ne: "नेपाली",
  id: "ID",
  vi: "VI",
  km: "ខ្មែរ"
};

const officialOrganization = siteConfig.organization || {};
const officialContact = siteConfig.contact || {};
const unsetLabel = siteConfig.unsetLabel || "正式情報未設定";

i18n.jp.brand = officialOrganization.nameShort || i18n.jp.brand;
i18n.jp.brandSub = officialOrganization.nameEn || i18n.jp.brandSub;
i18n.jp.footerTitle = officialOrganization.name || i18n.jp.footerTitle;
Object.values(i18n).forEach((translations) => {
  translations.brandSub = officialOrganization.nameEn || translations.brandSub;
});

const navHrefs = ["index.html", "about.html", "services.html", "network.html", "members.html", "membership.html", "news.html", "contact.html"];

function currentPage() {
  const page = location.pathname.split("/").pop();
  return page || "index.html";
}

function currentLang() {
  const page = currentPage();
  const found = Object.entries(langPages).find(([, href]) => href === page);
  return found ? found[0] : "jp";
}

function renderHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const page = currentPage();
  const lang = currentLang();
  const t = i18n[lang];
  document.documentElement.lang = t.htmlLang;
  header.innerHTML = `
    <div class="utility-bar" aria-label="補助メニュー">
      <div class="utility-inner">
        <div class="utility-links">
          <a href="about.html">${t.utility[0]}</a>
          <a href="news.html">${t.utility[1]}</a>
          <a href="disclosure.html">${lang === "jp" ? "情報公開方針" : t.utility[2]}</a>
        </div>
        <div class="utility-tools">
          <label class="site-search">
            <span>${t.search}</span>
            <input type="search" placeholder="${t.searchPlaceholder}" data-site-search autocomplete="off">
          </label>
          <div class="font-tools" aria-label="文字サイズ">
            <span>${t.fontSize}</span>
            <button type="button" data-font="small">${t.small}</button>
            <button type="button" data-font="normal" class="active">${t.normal}</button>
            <button type="button" data-font="large">${t.large}</button>
          </div>
          <div class="theme-tools" aria-label="色合い">
            <span>${t.color}</span>
            <button type="button" data-theme="default" class="theme-default active">${t.normal}</button>
            <button type="button" data-theme="blue" class="theme-blue">${t.blue}</button>
            <button type="button" data-theme="yellow" class="theme-yellow">${t.yellow}</button>
            <button type="button" data-theme="black" class="theme-black">${t.black}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="${officialOrganization.name || i18n.jp.footerTitle} トップページ">
        <span class="brand-logo">
          <img src="assets/official-logo-mark-optimized.png" alt="${officialOrganization.nameShort || i18n.jp.brand} ロゴ" width="240" height="188" decoding="async">
        </span>
        <span>
          <span class="brand-name">${t.brand}</span>
          <span class="brand-sub">${t.brandSub}</span>
        </span>
      </a>
      <nav class="nav" id="site-nav" aria-label="主なナビゲーション">
        ${navHrefs.map((href, index) => {
          const isActive = href === page || (index === 0 && langPages[lang] === page);
          return `<a href="${index === 0 ? langPages[lang] : href}" class="${isActive ? "active" : ""}"${isActive ? ' aria-current="page"' : ""}>${t.nav[index]}</a>`;
        }).join("")}
      </nav>
      <div class="header-actions">
        <div class="lang-switch" aria-label="言語切替">
          ${Object.entries(languageLabels).map(([code, label]) => `<button type="button" data-lang="${code}" class="${code === lang ? "active" : ""}" aria-pressed="${code === lang}">${label}</button>`).join("")}
        </div>
        <a class="button" href="contact.html">${t.contact}</a>
        <button class="menu-toggle" type="button" aria-label="メニューを開く" aria-controls="site-nav" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-footer]");
  if (!footer) return;
  const t = i18n[currentLang()];

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="assets/official-logo-full-optimized.jpg" alt="${officialOrganization.nameEn || i18n.jp.brandSub} ロゴ" width="640" height="640" loading="lazy" decoding="async">
          <p class="footer-title">${t.footerTitle}</p>
          <p>${t.footerBody}</p>
          <p data-footer-address></p>
        </div>
        <div>
          <p class="footer-title">${t.footerSite}</p>
          <ul class="footer-links">
            <li><a href="about.html">${t.nav[1]}</a></li>
            <li><a href="services.html">${t.nav[2]}</a></li>
            <li><a href="network.html">${t.nav[3]}</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-title">${t.footerParticipation}</p>
          <ul class="footer-links">
            <li><a href="membership.html">${t.membership}</a></li>
            <li><a href="contact.html">${t.documents}</a></li>
            <li><a href="contact.html">${t.partner}</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-title">SNS</p>
          <ul class="footer-links" data-social-links></ul>
        </div>
      </div>
      <nav class="footer-policy-links" aria-label="方針・規約">
        <a href="privacy.html">個人情報保護方針</a>
        <a href="terms.html">サイト利用規約</a>
        <a href="disclosure.html">情報公開方針</a>
      </nav>
      <div class="gov-links" aria-label="関係機関リンク">
        <p class="footer-title">関係機関リンク</p>
        <div class="gov-link-grid">
          <a class="gov-link-card" href="https://www.moj.go.jp/isa/" target="_blank" rel="noopener noreferrer">
            <img src="assets/gov-logo-isa.png" alt="出入国在留管理庁 Immigration Services Agency of Japan" loading="lazy" decoding="async">
            <span>出入国在留管理庁</span>
          </a>
          <a class="gov-link-card" href="https://www.mofa.go.jp/mofaj/" target="_blank" rel="noopener noreferrer">
            <img src="assets/gov-logo-mofa.svg" alt="外務省 Ministry of Foreign Affairs of Japan" loading="lazy" decoding="async">
            <span>外務省</span>
          </a>
          <a class="gov-link-card" href="https://www.mhlw.go.jp/" target="_blank" rel="noopener noreferrer">
            <img src="assets/gov-logo-mhlw.png" alt="厚生労働省 Ministry of Health, Labour and Welfare" loading="lazy" decoding="async">
            <span>厚生労働省</span>
          </a>
          <a class="gov-link-card" href="https://www.env.go.jp/" target="_blank" rel="noopener noreferrer">
            <img src="assets/gov-logo-env.svg" alt="環境省 Ministry of the Environment" loading="lazy" decoding="async">
            <span>環境省</span>
          </a>
          <a class="gov-link-card" href="https://www.maff.go.jp/" target="_blank" rel="noopener noreferrer">
            <img src="assets/gov-logo-maff.gif" alt="農林水産省 Ministry of Agriculture, Forestry and Fisheries" loading="lazy" decoding="async">
            <span>農林水産省</span>
          </a>
          <a class="gov-link-card" href="https://www.mlit.go.jp/" target="_blank" rel="noopener noreferrer">
            <img src="assets/gov-logo-mlit.gif" alt="国土交通省 Ministry of Land, Infrastructure, Transport and Tourism" loading="lazy" decoding="async">
            <span>国土交通省</span>
          </a>
        </div>
      </div>
      <div class="footer-bottom">© 2026 ${officialOrganization.nameEn || i18n.jp.brandSub}. All Rights Reserved.</div>
    </div>
  `;

  const organization = siteConfig.organization || {};
  const contact = siteConfig.contact || {};
  const address = organization.address || unsetLabel;
  const postalCode = organization.postalCode || "";
  const email = contact.email || "";
  const phone = contact.phone || "";
  const addressRoot = footer.querySelector("[data-footer-address]");
  addressRoot.innerHTML = [
    `所在地：${postalCode ? `〒${postalCode} ` : ""}${address}`,
    phone ? `電話：<a href="tel:${phone.replace(/[^+\d]/g, "")}">${phone}</a>` : "",
    email ? `メール：<a href="mailto:${email}">${email}</a>` : ""
  ].filter(Boolean).join("<br>");

  const socialRoot = footer.querySelector("[data-social-links]");
  const socialLinks = [
    ["Facebook", siteConfig.social?.facebook],
    ["LinkedIn", siteConfig.social?.linkedin],
    ["YouTube", siteConfig.social?.youtube]
  ].filter(([, url]) => url);
  socialRoot.innerHTML = socialLinks.length
    ? socialLinks.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join("")
    : (siteConfig.content?.showSocialPendingMessage ? "<li>公式アカウント準備中</li>" : "");
}

function renderNews(selector = "[data-news-list]", limit) {
  const root = document.querySelector(selector);
  if (!root) return;
  const lang = currentLang();
  const configuredNotice = siteConfig.content?.publicationNotice?.[lang];
  const sourceItems = siteConfig.content?.publicationNoticeEnabled && configuredNotice
    ? [[siteConfig.content.publicationNoticeDate, ...configuredNotice]]
    : i18n[lang].news;
  const newsItems = sourceItems.map(([date, category, title]) => ({ date, category, title }));

  root.innerHTML = newsItems.slice(0, limit || newsItems.length).map((item) => `
    <article class="news-item">
      <time class="news-date">${item.date}</time>
      <span class="tag">${item.category}</span>
      <a class="news-title" href="news.html">${item.title}</a>
    </article>
  `).join("");
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !document.body.classList.contains("menu-open")) return;
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
    toggle.focus();
  });
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = langPages[button.dataset.lang || "jp"] || "index.html";
      window.location.href = nextPage;
    });
  });
}

function setupDisplayTools() {
  document.querySelectorAll("[data-font]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-font]").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      const value = button.dataset.font || "normal";
      document.documentElement.dataset.font = value;
      localStorage.setItem("site-font", value);
    });
  });

  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-theme]").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      const value = button.dataset.theme || "default";
      document.documentElement.dataset.theme = value;
      localStorage.setItem("site-theme", value);
    });
  });
}

function restoreDisplayTools() {
  const font = localStorage.getItem("site-font");
  const theme = localStorage.getItem("site-theme");
  if (font) document.documentElement.dataset.font = font;
  if (theme) document.documentElement.dataset.theme = theme;

  document.querySelectorAll("[data-font]").forEach((button) => {
    button.classList.toggle("active", button.dataset.font === (font || "normal"));
    button.setAttribute("aria-pressed", String(button.dataset.font === (font || "normal")));
  });
  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === (theme || "default"));
    button.setAttribute("aria-pressed", String(button.dataset.theme === (theme || "default")));
  });
}

function setupSiteSearch() {
  const input = document.querySelector("[data-site-search]");
  if (!input) return;

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const query = input.value.trim();
    if (query) window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  });
}

function hydrateOrganizationData() {
  const organization = siteConfig.organization || {};
  const contact = siteConfig.contact || {};
  const address = [
    organization.postalCode ? `〒${organization.postalCode}` : "",
    organization.address || ""
  ].filter(Boolean).join(" ");
  const values = {
    "[data-org-name]": organization.name,
    "[data-org-name-en]": organization.nameEn,
    "[data-org-representative]": organization.representative,
    "[data-org-representative-title]": organization.representativeTitle,
    "[data-org-established]": organization.established,
    "[data-org-corporate-number]": organization.corporateNumber,
    "[data-org-address]": address,
    "[data-org-phone]": contact.phone,
    "[data-org-email]": contact.email,
    "[data-legal-privacy-date]": siteConfig.legal?.privacyEffectiveDate,
    "[data-legal-terms-date]": siteConfig.legal?.termsEffectiveDate,
    "[data-legal-disclosure-date]": siteConfig.legal?.disclosureEffectiveDate
  };

  Object.entries(values).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value || unsetLabel;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderNews("[data-news-list]", 3);
  renderNews("[data-news-all]");
  setupMenu();
  setupLanguageSwitch();
  setupDisplayTools();
  restoreDisplayTools();
  setupSiteSearch();
  hydrateOrganizationData();
});
