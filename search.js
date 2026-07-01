(() => {
  const root = document.querySelector("[data-search-results]");
  const heading = document.querySelector("[data-search-heading]");
  if (!root || !heading) return;

  const pages = [
    ["協会概要", "about.html", "理念 設立目的 活動方針 非営利 教育支援団体"],
    ["事業内容", "services.html", "特定技能 日本語 技能 安全教育 MOU 制度構築 外国人管理教育"],
    ["海外ネットワーク", "network.html", "バングラデシュ ネパール インドネシア カンボジア 国際連携"],
    ["会員名簿", "members.html", "正会員 賛助会員 特別会員 海外パートナー会員"],
    ["会員制度", "membership.html", "入会 会員 メリット 活動 申込"],
    ["お知らせ", "news.html", "ニュース 活動報告 セミナー MOU"],
    ["お問い合わせ", "contact.html", "相談 資料請求 連携"],
    ["個人情報保護方針", "privacy.html", "個人情報 取得 利用 安全管理"],
    ["サイト利用規約", "terms.html", "利用条件 著作権 免責事項"],
    ["情報公開方針", "disclosure.html", "透明性 公開 MOU 会員情報"]
  ];

  const query = new URLSearchParams(location.search).get("q")?.trim() || "";
  heading.textContent = query ? `「${query}」の検索結果` : "検索キーワードを入力してください";

  if (!query) {
    root.innerHTML = '<p class="notice">画面上部の検索欄にキーワードを入力してください。</p>';
    return;
  }

  const normalized = query.toLocaleLowerCase();
  const results = pages.filter(([title, , keywords]) =>
    `${title} ${keywords}`.toLocaleLowerCase().includes(normalized)
  );

  root.innerHTML = results.length
    ? `<ul class="search-results">${results.map(([title, href, keywords]) => `
        <li><a href="${href}">${title}</a><p>${keywords}</p></li>
      `).join("")}</ul>`
    : '<p class="notice">該当するページが見つかりませんでした。別のキーワードで検索してください。</p>';
})();
