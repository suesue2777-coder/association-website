# 一般社団法人 日本特定技能教育支援協会 公式サイト

協会・財団向けの信頼感ある静的ホームページです。Vercelでそのまま公開できるよう、HTML / CSS / JavaScript の静的サイトとして構成しています。

制作目的、表記ルール、団体の位置づけ及び未確定情報は、`docs/CONTEXT.md` を参照してください。

## GitHub / Vercel 構成

このリポジトリは、公開サイトに必要なファイルだけを配置しています。

- リポジトリ直下: 公開される静的サイト
- `assets/`: 画像、ロゴ、favicon、OGP画像
- `docs/`: 公開前チェック、正式情報入力テンプレート、運用メモ
- `vercel.json`: Vercel用の静的サイト設定

Vercelでは次の設定で公開できます。

- Framework Preset: `Other`
- Build Command: 空欄
- Output Directory: 空欄
- Install Command: 空欄
- Root Directory: 空欄又はリポジトリ直下

## 構成

- `index.html` トップページ
- `index-en.html` 英語トップページ
- `index-bn.html` ベンガル語トップページ
- `index-ne.html` ネパール語トップページ
- `index-id.html` インドネシア語トップページ
- `index-vi.html` ベトナム語トップページ
- `index-km.html` カンボジア語トップページ
- `about.html` 協会概要
- `services.html` 事業内容
- `network.html` 海外ネットワーク
- `members.html` 会員名簿
- `membership.html` 会員制度
- `news.html` お知らせ
- `contact.html` お問い合わせ
- `contact-complete.html` お問い合わせ完了
- `privacy.html` 個人情報保護方針
- `terms.html` サイト利用規約
- `disclosure.html` 情報公開方針
- `404.html` ページ未検出
- `search.html` サイト内検索
- `styles.css` 共通デザイン
- `app.js` 共通ヘッダー、フッター、ナビゲーション、言語切替、お知らせデータ
- `home-i18n.js` 翻訳トップページ本文データ
- `member-directory.js` 会員名簿データ
- `member-list-template.csv` 会員名簿入力テンプレート
- `assets/` 画像差し替え用ディレクトリ

## ローカルで開く

ブラウザで `index.html` を開いてください。静的サイトのため、サーバーなしで確認できます。

## ローカルサーバーで確認する場合

Python が利用できる場合は次のコマンドで確認できます。

```bash
python3 -m http.server 8080
```

その後、ブラウザで `http://localhost:8080` を開きます。

## 多言語対応

右上に `JP / EN / বাংলা / नेपाली / ID / VI / ខ្មែរ` の言語切替ボタンを設置しています。

現時点ではトップページのデモ翻訳版を作成しています。各言語ページは以下です。

- 日本語: `index.html`
- 英語: `index-en.html`
- ベンガル語: `index-bn.html`
- ネパール語: `index-ne.html`
- インドネシア語: `index-id.html`
- ベトナム語: `index-vi.html`
- カンボジア語: `index-km.html`

## お知らせの追加

`app.js` の `newsItems` 配列に記事を追加できます。将来的には、この配列を JSON や CMS API から取得する形に移行できます。

## 正式法人情報

法人名、英語名、代表者、役職、設立日、法人番号、所在地、電話番号、メールアドレス、公開ドメイン、問い合わせ送信先、法務制定日、仮お知らせ及びSNSは `site-config.js` で一元管理します。正式情報の差し替え時は、原則としてHTMLを直接編集しません。

公開前に、次の項目を必ず正式情報へ変更してください。

- `organization` 内の未設定項目
- `contact.phone`
- `contact.email`
- `contact.deliveryMode`
- `contact.api.endpoint`
- `publicDomain`
- `legal` 内の各法務ページ制定日
- `publication` 内の公開承認状態
- `content.publicationNoticeEnabled`
- 使用するSNSのURL

公開前の確認項目は、`docs/PUBLICATION_CHECKLIST.md` にまとめています。CEO入力用の正式情報テンプレートは `docs/FORMAL_INFO_TEMPLATE.md` です。

## お問い合わせ送信

API方式では、`site-config.js` の `contact.deliveryMode` を `api` にし、`contact.api.endpoint` にJSON形式のPOSTを受け付けるHTTPSエンドポイントを設定します。

メールアプリ方式では、`contact.deliveryMode` を `mailto` にし、`contact.email` を設定します。フォームを停止する場合は `deliveryMode` を `disabled` にします。

フォームには入力検証、個人情報保護方針への同意、迷惑送信対策用の非表示項目、送信状態の通知を実装しています。

## SEOメタ情報

各HTMLのdescription、canonical、OGP、Twitter Card、favicon及び多言語トップの`hreflang`は `generate-meta.mjs` で整備します。

```bash
node generate-meta.mjs
```

生成スクリプトは `site-config.js` の `publicDomain` と正式団体名を参照します。公開ドメインを変更した後は必ず再実行してください。

## 公開前最終チェック

`publication-status.html` を開くと、正式情報、問い合わせ方式、法務制定日及び公開承認状態を画面で確認できます。このページは検索エンジンに登録しない管理用ページです。

公開判定レポートは次のコマンドで生成します。

```bash
node generate-publication-report.mjs
```

生成先は `PUBLICATION_FINAL_REPORT.md` です。GitHub公開用には必要に応じて `docs/PUBLICATION_FINAL_REPORT.md` へコピーしてください。

## Vercel公開手順

1. GitHubの `suesue2777-coder/association-website` をVercelへImportする
2. Framework Presetを `Other` にする
3. Build Command / Output Directory / Install Command は空欄にする
4. Deployを実行する
5. 発行された `https://association-website-*.vercel.app` のURLで表示確認する
6. VercelのProject Settings > Domainsで `association.sgea.global` を追加する

## Cloudflare接続手順

Cloudflareで `sgea.global` のDNSを管理している場合、Vercelで `association.sgea.global` を追加した後、Cloudflare側に次のDNSレコードを設定します。

| Type | Name | Target |
|---|---|---|
| CNAME | `association` | `cname.vercel-dns.com` |

設定後、VercelのDomains画面でDNS検証が完了するまで待ちます。SSL証明書はVercel側で自動発行されます。

CloudflareのProxy設定は、最初はDNS Onlyで検証し、正常公開後に必要に応じてProxiedへ切り替えてください。

## 会員名簿の追加

`member-directory.js` の `memberDirectory` に会員情報を追加できます。公開する前に、氏名、住所、電話番号、メールアドレス、ホームページURLの掲載承諾を必ず確認してください。

入力用テンプレートは `member-list-template.csv` です。

## 画像差し替え

トップページの表示用画像は `assets/hero-international-education.jpg` です。元画像は `assets/hero-international-education.png` として保存しています。

正式ロゴの元画像は `assets/official-logo-full.png` です。画面表示には軽量化した `official-logo-full-optimized.jpg` と `official-logo-mark-optimized.png` を使用しています。
