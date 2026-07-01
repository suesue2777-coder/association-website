import { readFile, writeFile, readdir, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const siteRoot = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = siteRoot;
const configSource = await readFile(path.join(siteRoot, "site-config.js"), "utf8");
const context = { window: {} };
vm.runInNewContext(configSource, context);

const config = context.window.SITE_CONFIG;
const unset = config.unsetLabel;
const organization = config.organization;
const contact = config.contact;
const legal = config.legal;
const publication = config.publication;
const isSet = (value) => Boolean(value && value !== unset);

const htmlFiles = (await readdir(siteRoot)).filter((name) => name.endsWith(".html"));
const htmlContents = await Promise.all(
  htmlFiles.map(async (name) => [name, await readFile(path.join(siteRoot, name), "utf8")])
);

const allHtml = htmlContents.map(([, html]) => html).join("\n");
const hasFile = async (name) => {
  try {
    await access(path.join(siteRoot, name));
    return true;
  } catch {
    return false;
  }
};

const contactReady =
  (contact.deliveryMode === "api" && isSet(contact.api?.endpoint)) ||
  (contact.deliveryMode === "mailto" && isSet(contact.email));

const checks = [
  ["代表者", isSet(organization.representative), 3],
  ["代表者役職", isSet(organization.representativeTitle), 3],
  ["設立年月日", isSet(organization.established), 5],
  ["法人番号", isSet(organization.corporateNumber), 5],
  ["所在地", isSet(organization.address), 6],
  ["電話番号", isSet(contact.phone), 4],
  ["メールアドレス", isSet(contact.email), 4],
  ["法人情報承認", publication.organizationApproved === true, 5],
  ["問い合わせ送信", contactReady, 12],
  ["仮お知らせ差し替え", config.content?.publicationNoticeEnabled !== true, 3],
  ["個人情報保護方針 制定日", isSet(legal.privacyEffectiveDate), 3],
  ["サイト利用規約 制定日", isSet(legal.termsEffectiveDate), 3],
  ["情報公開方針 制定日", isSet(legal.disclosureEffectiveDate), 3],
  ["法務承認", publication.legalApproved === true, 6],
  ["公開ドメイン承認", publication.domainConfirmed === true, 5],
  ["sitemap.xml", await hasFile("sitemap.xml"), 3],
  ["robots.txt", await hasFile("robots.txt"), 3],
  ["OGP画像", await hasFile("assets/og-image.jpg"), 3],
  ["favicon", await hasFile("assets/favicon.png"), 2],
  ["404ページ", await hasFile("404.html"), 2],
  ["404ホスティング設定", publication.custom404Configured === true, 4],
  ["AHDF非掲載", !/AHDF|Asia Human Development Foundation/i.test(allHtml), 3],
  ["翻訳確認", publication.translationsReviewed === true, 3],
  ["官公庁ロゴ確認", publication.governmentLogoUsageReviewed === true, 2],
  ["会員情報公開承諾", publication.memberConsentReviewed === true, 2],
  ["公開前バックアップ", publication.backupCreated === true, 3]
];

const score = checks.reduce((sum, [, passed, weight]) => sum + (passed ? weight : 0), 0);
const blockers = checks.filter(([, passed]) => !passed).map(([label]) => label);
const generatedAt = new Intl.DateTimeFormat("ja-JP", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Asia/Tokyo"
}).format(new Date());

const unsetItems = checks.filter(([, passed]) => !passed).map(([label]) => label);
const ceoInputs = [
  "代表者氏名",
  "代表者役職",
  "設立年月日",
  "法人番号",
  "郵便番号",
  "所在地",
  "電話番号",
  "メールアドレス",
  "問い合わせ方式 api / mailto / disabled",
  "公開ドメイン",
  "法務ページ制定日",
  "公開承認状態"
];
const technicalTasks = [
  "問い合わせAPIを使う場合はHTTPS endpointを設定し、送信成功と失敗をテストする",
  "ホスティング側で存在しないURLを404.htmlへ振り分ける",
  "本番ドメインでgenerate-meta.mjsを再実行する",
  "公開直前にLighthouseとリンク切れを再検査する",
  "公開前バックアップを保存する"
];
const shortestSteps = [
  "site-config.jsへCEO確定情報を入力する",
  "問い合わせ方式を決め、api又はmailtoを設定する",
  "法務制定日とpublication承認フラグを更新する",
  "node generate-meta.mjsを実行する",
  "node generate-publication-report.mjsを実行する",
  "publication-status.htmlとトップページを本番ドメインで確認する",
  "静的ホスティングへアップロードし、404とHTTPSを設定する"
];

const report = `# 協会公式サイト 本番公開前最終レポート

生成日時: ${generatedAt}

## 判定

- 公開判定: ${blockers.length ? "公開保留" : "公開可能"}
- 公開可能度: ${score} / 100点
- 検査対象HTML: ${htmlFiles.length}ページ
- 問い合わせ方式: ${contact.deliveryMode}
- 公開ドメイン: ${config.publicDomain}

## 未設定情報一覧

${unsetItems.length ? unsetItems.map((label) => `- ${label}`).join("\n") : "- なし"}

## CEOが入力すべき情報

${ceoInputs.map((item) => `- ${item}`).join("\n")}

## 技術的な残課題

${technicalTasks.map((item) => `- ${item}`).join("\n")}

## 公開までの最短手順

${shortestSteps.map((item, index) => `${index + 1}. ${item}`).join("\n")}

## 公開までに必要な想定時間

- 正式情報がすぐ揃う場合: 6〜10時間
- 問い合わせAPIを新規実装・検証する場合: 1〜2営業日

## 検査結果

${checks.map(([label, passed, weight]) => `- [${passed ? "x" : " "}] ${label} (${weight}点)`).join("\n")}

## 公開を妨げている項目

${blockers.length ? blockers.map((label) => `- ${label}`).join("\n") : "- なし"}

## 管理ファイル

- 正式情報・問い合わせ・法務・公開承認: \`site-config.js\`
- 公開前チェックリスト: \`docs/PUBLICATION_CHECKLIST.md\`
- 画面確認: \`publication-status.html\`
`;

await writeFile(path.join(projectRoot, "PUBLICATION_FINAL_REPORT.md"), report);
console.log(`Publication report generated: ${score}/100`);
