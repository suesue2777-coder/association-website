import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const root = path.dirname(fileURLToPath(import.meta.url));
const configSource = await readFile(path.join(root, "site-config.js"), "utf8");
const configContext = { window: {} };
vm.runInNewContext(configSource, configContext);
const siteConfig = configContext.window.SITE_CONFIG;
const baseUrl = siteConfig.publicDomain.replace(/\/+$/, "");
const organizationName = siteConfig.organization.name;
const organizationNameShort = siteConfig.organization.nameShort;
const organizationNameEn = siteConfig.organization.nameEn;
const ogImage = `${baseUrl}/assets/og-image.jpg`;
const googleSiteVerification = "uXpjpRMVkI3V3PcSwJP3xcd8gUJDxBpQJUgBcAtQjWY";

const japanesePageTitles = {
  "index.html": organizationName,
  "about.html": `協会概要 | ${organizationNameShort}`,
  "services.html": `事業内容 | ${organizationNameShort}`,
  "network.html": `海外ネットワーク | ${organizationNameShort}`,
  "members.html": `会員名簿 | ${organizationNameShort}`,
  "membership.html": `会員制度 | ${organizationNameShort}`,
  "news.html": `お知らせ | ${organizationNameShort}`,
  "contact.html": `お問い合わせ | ${organizationNameShort}`,
  "contact-complete.html": `お問い合わせ完了 | ${organizationNameShort}`,
  "404.html": `ページが見つかりません | ${organizationNameShort}`,
  "privacy.html": `個人情報保護方針 | ${organizationNameShort}`,
  "terms.html": `サイト利用規約 | ${organizationNameShort}`,
  "disclosure.html": `情報公開方針 | ${organizationNameShort}`,
  "search.html": `サイト内検索 | ${organizationNameShort}`,
  "publication-status.html": `公開前最終チェック | ${organizationNameShort}`,
  "index-en.html": organizationNameEn,
  "index-id.html": organizationNameEn
};

const descriptions = {
  "index.html": "特定技能制度の適正な運用に資する海外人材教育、育成体制整備、制度構築及び国際連携を支援する非営利の教育支援団体です。",
  "about.html": "一般社団法人日本特定技能教育支援協会の理念、設立目的、活動方針及び団体の位置づけをご案内します。",
  "services.html": "特定技能教育、日本語・技能・安全教育、外国人管理教育、制度構築及び海外機関連携に関する支援事業をご紹介します。",
  "network.html": "バングラデシュ、ネパール、インドネシア、カンボジアを中心とする教育支援及び国際連携の方針をご紹介します。",
  "members.html": "一般社団法人日本特定技能教育支援協会の公開承諾済み会員情報をご案内します。",
  "membership.html": "正会員、賛助会員、特別会員及び海外パートナー会員の制度、対象者、活動内容をご案内します。",
  "news.html": "一般社団法人日本特定技能教育支援協会からのお知らせ、活動報告、セミナー及び国際連携情報を掲載します。",
  "contact.html": "教育支援、制度構築、会員制度、海外連携及び資料請求に関するお問い合わせを受け付けています。",
  "contact-complete.html": "一般社団法人日本特定技能教育支援協会へのお問い合わせを受け付けました。",
  "404.html": "お探しのページは見つかりませんでした。",
  "privacy.html": "一般社団法人日本特定技能教育支援協会の個人情報保護方針です。",
  "terms.html": "一般社団法人日本特定技能教育支援協会公式サイトの利用規約です。",
  "disclosure.html": "一般社団法人日本特定技能教育支援協会の情報公開方針です。",
  "search.html": "一般社団法人日本特定技能教育支援協会公式サイトのサイト内検索です。",
  "publication-status.html": "協会公式サイトの正式情報、問い合わせ、法務及び公開設定を確認する管理用ページです。",
  "index-en.html": "Official English information on education support, institutional development and international cooperation for the Specified Skilled Worker system.",
  "index-bn.html": "Specified Skilled Worker ব্যবস্থার জন্য শিক্ষা সহায়তা, প্রাতিষ্ঠানিক উন্নয়ন ও আন্তর্জাতিক সহযোগিতা সম্পর্কিত তথ্য।",
  "index-ne.html": "Specified Skilled Worker प्रणालीका लागि शिक्षा सहयोग, संस्थागत विकास र अन्तर्राष्ट्रिय सहकार्यसम्बन्धी जानकारी।",
  "index-id.html": "Informasi dukungan pendidikan, pengembangan kelembagaan, dan kerja sama internasional untuk sistem Specified Skilled Worker.",
  "index-vi.html": "Thông tin về hỗ trợ giáo dục, phát triển thể chế và hợp tác quốc tế cho chế độ Specified Skilled Worker.",
  "index-km.html": "ព័ត៌មានអំពីការគាំទ្រអប់រំ ការអភិវឌ្ឍស្ថាប័ន និងកិច្ចសហប្រតិបត្តិការអន្តរជាតិ។"
};

const localeHomes = {
  ja: "index.html",
  en: "index-en.html",
  bn: "index-bn.html",
  ne: "index-ne.html",
  id: "index-id.html",
  vi: "index-vi.html",
  km: "index-km.html"
};

const skipLinkLabels = {
  ja: "本文へ移動",
  en: "Skip to main content",
  bn: "মূল বিষয়বস্তুতে যান",
  ne: "मुख्य सामग्रीमा जानुहोस्",
  id: "Lewati ke konten utama",
  vi: "Chuyển đến nội dung chính",
  km: "រំលងទៅមាតិកាចម្បង"
};

for (const file of (await readdir(root)).filter((name) => name.endsWith(".html"))) {
  let html = await readFile(path.join(root, file), "utf8");
  const existingTitle = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() || organizationNameShort;
  const title = japanesePageTitles[file] || existingTitle;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  const description = descriptions[file] || descriptions["index.html"];
  const canonicalPath = file === "index.html" ? "/" : `/${file}`;
  const canonical = `${baseUrl}${canonicalPath}`;
  const lang = html.match(/<html lang="([^"]+)"/)?.[1] || "ja";
  const robots = ["search.html", "contact-complete.html", "404.html", "publication-status.html"].includes(file)
    ? (file === "publication-status.html" ? "noindex,nofollow" : "noindex,follow")
    : "index,follow";
  const alternates = Object.entries(localeHomes)
    .map(([code, href]) => `  <link rel="alternate" hreflang="${code}" href="${baseUrl}/${href === "index.html" ? "" : href}">`)
    .concat(`  <link rel="alternate" hreflang="x-default" href="${baseUrl}/">`)
    .join("\n");

  html = html
    .replace(/\n\s*<meta name="description"[^>]*>/g, "")
    .replace(/\n\s*<meta name="google-site-verification"[^>]*>/g, "")
    .replace(/\n\s*<meta name="robots"[^>]*>/g, "")
    .replace(/\n\s*<link rel="canonical"[^>]*>/g, "")
    .replace(/\n\s*<meta property="og:[^>]*>/g, "")
    .replace(/\n\s*<meta name="twitter:[^>]*>/g, "")
    .replace(/\n\s*<link rel="alternate" hreflang="[^"]+"[^>]*>/g, "")
    .replace(/\n\s*<link rel="(?:icon|apple-touch-icon)"[^>]*>/g, "");

  const metadata = [
    `  <meta name="description" content="${description}">`,
    `  <meta name="google-site-verification" content="${googleSiteVerification}">`,
    `  <meta name="robots" content="${robots}">`,
    `  <link rel="canonical" href="${canonical}">`,
    `  <meta property="og:type" content="website">`,
    `  <meta property="og:site_name" content="${organizationName}">`,
    `  <meta property="og:title" content="${title}">`,
    `  <meta property="og:description" content="${description}">`,
    `  <meta property="og:url" content="${canonical}">`,
    `  <meta property="og:image" content="${ogImage}">`,
    `  <meta property="og:image:width" content="1200">`,
    `  <meta property="og:image:height" content="630">`,
    `  <meta property="og:locale" content="${lang === "ja" ? "ja_JP" : lang}">`,
    `  <meta name="twitter:card" content="summary_large_image">`,
    `  <meta name="twitter:title" content="${title}">`,
    `  <meta name="twitter:description" content="${description}">`,
    `  <meta name="twitter:image" content="${ogImage}">`,
    `  <link rel="icon" href="assets/favicon.png" type="image/png" sizes="256x256">`,
    `  <link rel="apple-touch-icon" href="assets/favicon.png">`
  ].join("\n");

  html = html.replace(/(<title>.*?<\/title>)/s, `$1\n${metadata}`);
  if (Object.values(localeHomes).includes(file)) {
    html = html.replace(metadata, `${metadata}\n${alternates}`);
  }

  html = html
    .replace(/styles\.css\?v=\d+/g, "styles.css?v=15")
    .replace(
      /<a class="skip-link" href="#main-content">.*?<\/a>/,
      `<a class="skip-link" href="#main-content">${skipLinkLabels[lang] || skipLinkLabels.ja}</a>`
    )
    .replace(
      /<body([^>]*)>\s*(?!\s*<a class="skip-link")/,
      `<body$1>\n  <a class="skip-link" href="#main-content">${skipLinkLabels[lang] || skipLinkLabels.ja}</a>\n`
    )
    .replace(/<main(?![^>]*\bid=)([^>]*)>/, '<main id="main-content"$1>')
    .replace(/<div class="breadcrumb">(.*?)<\/div>/gs, '<nav class="breadcrumb" aria-label="パンくず">$1</nav>')
    .replace(/site-config\.js\?v=\d+/g, "site-config.js?v=6")
    .replace(/<script src="app\.js\?v=\d+"><\/script>/g, '<script src="app.js?v=20"></script>')
    .replace(/home-i18n\.js\?v=\d+/g, "home-i18n.js?v=6")
    .replace(/contact\.js\?v=\d+/g, "contact.js?v=5");

  if (file === "index.html") {
    html = html
      .replace(/"name":\s*"[^"]*"/, `"name": "${organizationName}"`)
      .replace(/"alternateName":\s*"[^"]*"/, `"alternateName": "${organizationNameEn}"`)
      .replace(/"url":\s*"[^"]*"/, `"url": "${baseUrl}/"`)
      .replace(/"logo":\s*"[^"]*"/, `"logo": "${baseUrl}/assets/official-logo-full-optimized.jpg"`);
  }

  await writeFile(path.join(root, file), html);
}

const sitemapPath = path.join(root, "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
await writeFile(
  sitemapPath,
  sitemap.replace(/(<loc>)https?:\/\/[^/<]+/g, `$1${baseUrl}`)
);

const robotsPath = path.join(root, "robots.txt");
const robots = await readFile(robotsPath, "utf8");
await writeFile(
  robotsPath,
  robots.replace(/(^Sitemap:\s*)https?:\/\/[^/\s]+/m, `$1${baseUrl}`)
);

console.log("Metadata and accessibility shell updated.");
