(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector('button[type="submit"]');
  const config = window.SITE_CONFIG?.contact || {};
  const mode = config.deliveryMode || "disabled";
  const api = config.api || {};

  const setStatus = (message, state) => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
    status.hidden = false;
    status.focus();
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const honeypot = form.querySelector('[name="website"]');
    if (honeypot?.value) return;

    if (mode === "mailto" && config.email) {
      const data = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent(`[公式サイト] ${data.type || "お問い合わせ"} - ${data.organization || data.name}`);
      const body = encodeURIComponent([
        `氏名: ${data.name}`,
        `会社名・団体名: ${data.organization || ""}`,
        `メールアドレス: ${data.email}`,
        `電話番号: ${data.tel || ""}`,
        `問い合わせ種別: ${data.type}`,
        "",
        data.message
      ].join("\n"));
      setStatus("メールアプリを開きます。内容をご確認のうえ送信してください。", "pending");
      window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
      return;
    }

    if (mode === "mailto" && !config.email) {
      setStatus(
        "メール送信先が設定されていません。管理者へお問い合わせください。",
        "error"
      );
      return;
    }

    if (mode !== "api" || !api.endpoint) {
      setStatus(
        "送信先の設定が完了していません。恐れ入りますが、正式な連絡先の掲載までお待ちください。",
        "error"
      );
      return;
    }

    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    setStatus("送信しています。しばらくお待ちください。", "pending");

    const payload = Object.fromEntries(new FormData(form).entries());
    delete payload.website;

    try {
      const response = await fetch(api.endpoint, {
        method: api.method || "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          ...(api.headers || {})
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Contact request failed: ${response.status}`);

      form.reset();
      const successPage = config.successPage || "contact-complete.html";
      window.location.assign(successPage);
    } catch {
      setStatus(
        "送信できませんでした。時間をおいて再度お試しいただくか、掲載の連絡先へお問い合わせください。",
        "error"
      );
    } finally {
      submit.disabled = false;
      submit.removeAttribute("aria-busy");
    }
  });
})();
