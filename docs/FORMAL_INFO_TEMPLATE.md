# 正式情報入力テンプレート

このテンプレートは、`site/site-config.js` へ正式情報を入力する前の確認用です。CEO確認後、確定した内容だけを `site/site-config.js` に反映してください。

## 基本情報

| No. | 項目 | site-config.js の設定箇所 | 入力例 | 未入力時の表示 | 公開前必須 |
|---:|---|---|---|---|---|
| 1 | 代表者氏名 | `organization.representative` | 山田 太郎 | 正式情報未設定 | 必須 |
| 2 | 代表者役職 | `organization.representativeTitle` | 代表理事 | 正式情報未設定 | 必須 |
| 3 | 設立年月日 | `organization.established` | 2026年6月1日 | 正式情報未設定 | 必須 |
| 4 | 法人番号 | `organization.corporateNumber` | 1234567890123 | 正式情報未設定 | 必須 |
| 5 | 郵便番号 | `organization.postalCode` | 100-0001 | 空欄 | 必須 |
| 6 | 所在地 | `organization.address` | 東京都千代田区千代田1-1 | 正式情報未設定 | 必須 |
| 7 | 電話番号 | `contact.phone` | 03-1234-5678 | 空欄又は正式情報未設定 | 必須 |
| 8 | メールアドレス | `contact.email` | info@example.or.jp | 空欄又は正式情報未設定 | 必須 |
| 9 | 公開ドメイン | `publicDomain` | https://www.example.or.jp | 設定中の仮ドメイン | 必須 |
| 10 | 法務ページ制定日 | `legal.privacyEffectiveDate` / `legal.termsEffectiveDate` / `legal.disclosureEffectiveDate` | 2026年7月1日 | 正式情報未設定 | 必須 |

## 問い合わせ設定

| No. | 項目 | site-config.js の設定箇所 | 入力例 | 未入力時の表示 | 公開前必須 |
|---:|---|---|---|---|---|
| 11 | 問い合わせ方式 | `contact.deliveryMode` | `mailto` | 送信先未設定の案内表示 | 必須 |
| 11-1 | disabled | `contact.deliveryMode` | `disabled` | 送信先未設定の案内表示 | 公開時は非推奨 |
| 11-2 | mailto | `contact.deliveryMode` | `mailto` | メールアプリ起動方式 | API未実装時は必須相当 |
| 11-3 | api | `contact.deliveryMode` | `api` | API送信方式 | API公開時は必須 |
| 12 | 問い合わせAPI URL | `contact.api.endpoint` | https://api.example.or.jp/contact | API未設定の案内表示 | `api`方式の場合は必須 |

## 表示設定

| No. | 項目 | site-config.js の設定箇所 | 入力例 | 未入力時の表示 | 公開前必須 |
|---:|---|---|---|---|---|
| 13 | 仮お知らせを表示するか | `content.publicationNoticeEnabled` | `false` | 仮お知らせが表示される | 必須 |
| 14 | SNS欄を表示するか | `content.showSocialPendingMessage` / `social.facebook` / `social.linkedin` / `social.youtube` | `false` 又は各SNS URL | SNS準備中表示又は非表示 | 任意 |

## 公開承認フラグ

| No. | 項目 | site-config.js の設定箇所 | 入力例 | 未入力時の表示 | 公開前必須 |
|---:|---|---|---|---|---|
| 15-1 | 公開ドメイン承認 | `publication.domainConfirmed` | `true` | 公開前チェックで未承認 | 必須 |
| 15-2 | 法人情報承認 | `publication.organizationApproved` | `true` | 公開前チェックで未承認 | 必須 |
| 15-3 | 法務承認 | `publication.legalApproved` | `true` | 公開前チェックで未承認 | 必須 |
| 15-4 | 翻訳確認 | `publication.translationsReviewed` | `true` | 公開前チェックで未承認 | 必須 |
| 15-5 | 官公庁ロゴ使用確認 | `publication.governmentLogoUsageReviewed` | `true` | 公開前チェックで未承認 | 必須 |
| 15-6 | 会員情報公開承諾確認 | `publication.memberConsentReviewed` | `true` | 公開前チェックで未承認 | 必須 |
| 15-7 | 404ページ設定確認 | `publication.custom404Configured` | `true` | 公開前チェックで未承認 | 必須 |
| 15-8 | 公開前バックアップ確認 | `publication.backupCreated` | `true` | 公開前チェックで未承認 | 必須 |

## CEO記入欄

| 項目 | 記入内容 |
|---|---|
| 代表者氏名 |  |
| 代表者役職 |  |
| 設立年月日 |  |
| 法人番号 |  |
| 郵便番号 |  |
| 所在地 |  |
| 電話番号 |  |
| メールアドレス |  |
| 公開ドメイン |  |
| 個人情報保護方針 制定日 |  |
| 利用規約 制定日 |  |
| 情報公開方針 制定日 |  |
| 問い合わせ方式 |  |
| 問い合わせAPI URL |  |
| 仮お知らせ表示 |  |
| SNS欄表示 |  |
| 公開承認フラグ |  |
