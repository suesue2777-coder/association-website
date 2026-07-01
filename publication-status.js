(() => {
  const config = window.SITE_CONFIG || {};
  const unset = config.unsetLabel || "正式情報未設定";
  const organization = config.organization || {};
  const contact = config.contact || {};
  const legal = config.legal || {};
  const publication = config.publication || {};

  const isSet = (value) => Boolean(value && value !== unset);
  const contactReady =
    (contact.deliveryMode === "api" && isSet(contact.api?.endpoint)) ||
    (contact.deliveryMode === "mailto" && isSet(contact.email));

  const checks = [
    ["団体名", isSet(organization.name), organization.name],
    ["英語名", isSet(organization.nameEn), organization.nameEn],
    ["代表者", isSet(organization.representative), organization.representative],
    ["代表者役職", isSet(organization.representativeTitle), organization.representativeTitle],
    ["設立年月日", isSet(organization.established), organization.established],
    ["法人番号", isSet(organization.corporateNumber), organization.corporateNumber],
    ["所在地", isSet(organization.address), organization.address],
    ["電話番号", isSet(contact.phone), contact.phone || unset],
    ["メールアドレス", isSet(contact.email), contact.email || unset],
    ["問い合わせ送信", contactReady, contact.deliveryMode || "disabled"],
    ["仮お知らせ", config.content?.publicationNoticeEnabled !== true, config.content?.publicationNoticeEnabled ? "表示中" : "非表示"],
    ["個人情報保護方針 制定日", isSet(legal.privacyEffectiveDate), legal.privacyEffectiveDate],
    ["サイト利用規約 制定日", isSet(legal.termsEffectiveDate), legal.termsEffectiveDate],
    ["情報公開方針 制定日", isSet(legal.disclosureEffectiveDate), legal.disclosureEffectiveDate],
    ["公開ドメイン承認", publication.domainConfirmed === true, config.publicDomain],
    ["法人情報承認", publication.organizationApproved === true, publication.organizationApproved ? "承認済み" : "未承認"],
    ["法務承認", publication.legalApproved === true, publication.legalApproved ? "承認済み" : "未承認"],
    ["翻訳確認", publication.translationsReviewed === true, publication.translationsReviewed ? "確認済み" : "未確認"],
    ["404設定", publication.custom404Configured === true, publication.custom404Configured ? "設定済み" : "未設定"],
    ["公開前バックアップ", publication.backupCreated === true, publication.backupCreated ? "作成済み" : "未作成"]
  ];

  const passed = checks.filter(([, result]) => result).length;
  const score = Math.round((passed / checks.length) * 100);
  const ready = checks.every(([, result]) => result);

  const summary = document.querySelector("[data-publication-summary]");
  const checkRoot = document.querySelector("[data-publication-checks]");
  const copyButton = document.querySelector("[data-copy-report]");
  const copyStatus = document.querySelector("[data-copy-status]");

  if (summary) {
    summary.innerHTML = `
      <p class="eyebrow">Publication Readiness</p>
      <h2>${ready ? "公開可能" : "公開保留"}</h2>
      <p class="lead">設定完了 ${passed} / ${checks.length}項目（${score}点）</p>
      <p>${ready ? "必須設定が完了しています。最終責任者の承認後に公開できます。" : "未設定又は未承認の項目を確認してください。"}</p>
    `;
  }

  if (checkRoot) {
    checkRoot.innerHTML = checks.map(([label, result, value]) => `
      <div class="table-row">
        <dt>${label}</dt>
        <dd><strong>${result ? "合格" : "未完了"}</strong><br>${value || unset}</dd>
      </div>
    `).join("");
  }

  const reportText = [
    "協会公式サイト 公開判定",
    `判定: ${ready ? "公開可能" : "公開保留"}`,
    `設定完了率: ${score}点`,
    "",
    ...checks.map(([label, result, value]) => `- ${result ? "合格" : "未完了"}: ${label} (${value || unset})`)
  ].join("\n");

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(reportText);
      if (copyStatus) {
        copyStatus.textContent = "判定結果をコピーしました。";
        copyStatus.hidden = false;
      }
    } catch {
      if (copyStatus) {
        copyStatus.textContent = "コピーできませんでした。ブラウザの権限設定をご確認ください。";
        copyStatus.hidden = false;
      }
    }
  });
})();
