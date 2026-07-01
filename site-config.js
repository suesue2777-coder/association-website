(() => {
const OFFICIAL_INFORMATION_UNSET = "正式情報未設定";

// 本番公開前の正式情報と公開承認状態は、このファイルだけを編集してください。
window.SITE_CONFIG = Object.freeze({
  unsetLabel: OFFICIAL_INFORMATION_UNSET,
  organization: {
    name: "一般社団法人 日本特定技能教育支援協会",
    nameShort: "日本特定技能教育支援協会",
    nameEn: "JAPAN SPECFIED SKILLED EDUCATION SUPPORT ASSOCIATION",
    representative: OFFICIAL_INFORMATION_UNSET,
    representativeTitle: OFFICIAL_INFORMATION_UNSET,
    established: OFFICIAL_INFORMATION_UNSET,
    corporateNumber: OFFICIAL_INFORMATION_UNSET,
    postalCode: "",
    address: OFFICIAL_INFORMATION_UNSET
  },
  contact: {
    // "disabled"、"mailto"、"api" のいずれかを指定します。
    deliveryMode: "disabled",
    phone: "",
    email: "",
    api: {
      endpoint: "",
      method: "POST",
      // ブラウザへ公開されるため、APIキーや秘密情報は設定しないでください。
      headers: {}
    },
    successPage: "contact-complete.html"
  },
  legal: {
    privacyEffectiveDate: OFFICIAL_INFORMATION_UNSET,
    termsEffectiveDate: OFFICIAL_INFORMATION_UNSET,
    disclosureEffectiveDate: OFFICIAL_INFORMATION_UNSET
  },
  publicDomain: "https://association.sgea.global",
  publication: {
    domainConfirmed: false,
    organizationApproved: false,
    legalApproved: false,
    translationsReviewed: false,
    governmentLogoUsageReviewed: false,
    memberConsentReviewed: false,
    custom404Configured: false,
    backupCreated: false
  },
  content: {
    // 正式なお知らせへ差し替えた後は false にするか、内容を更新してください。
    publicationNoticeEnabled: true,
    publicationNoticeDate: "2026.06.30",
    publicationNotice: {
      jp: ["お知らせ", "協会公式サイトの正式公開に向けて準備を進めています。"],
      en: ["Notice", "We are preparing the association's official website for publication."],
      bn: ["বিজ্ঞপ্তি", "সমিতির আনুষ্ঠানিক ওয়েবসাইট প্রকাশের প্রস্তুতি চলছে।"],
      ne: ["सूचना", "संस्थाको आधिकारिक वेबसाइट प्रकाशनको तयारी भइरहेको छ।"],
      id: ["Pemberitahuan", "Situs web resmi asosiasi sedang dipersiapkan untuk publikasi."],
      vi: ["Thông báo", "Trang web chính thức của hiệp hội đang được chuẩn bị để công bố."],
      km: ["សេចក្តីជូនដំណឹង", "គេហទំព័រផ្លូវការរបស់សមាគមកំពុងត្រូវបានរៀបចំសម្រាប់ការផ្សព្វផ្សាយ។"]
    },
    showSocialPendingMessage: true
  },
  social: {
    facebook: "",
    linkedin: "",
    youtube: ""
  }
});
})();
