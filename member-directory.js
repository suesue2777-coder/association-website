const memberDirectory = {
  regular: {
    title: "正会員",
    members: []
  },
  supporting: {
    title: "賛助会員",
    members: []
  },
  special: {
    title: "特別会員",
    members: []
  },
  overseas: {
    title: "海外パートナー会員",
    members: []
  }
};

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeUrl(url) {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function memberNameCell(member) {
  const name = escapeHtml(member.name);
  const url = normalizeUrl(member.website);
  if (!url) return name || "掲載準備中";
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${name}</a>`;
}

function renderMemberTable(group) {
  if (!group.members.length) {
    return `
      <div class="member-empty">
        公開承諾済みの会員情報を確認中です。掲載対象者の氏名、住所、電話番号、メールアドレス、ホームページURLをご提供ください。
      </div>
    `;
  }

  return `
    <div class="member-table-wrap">
      <table class="member-table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">会員氏名</th>
            <th scope="col">住所</th>
            <th scope="col">電話番号</th>
            <th scope="col">メールアドレス</th>
            <th scope="col">ホームページURL</th>
          </tr>
        </thead>
        <tbody>
          ${group.members.map((member, index) => {
            const website = normalizeUrl(member.website);
            return `
              <tr>
                <td>${index + 1}</td>
                <td>${memberNameCell(member)}</td>
                <td>${escapeHtml(member.address)}</td>
                <td>${escapeHtml(member.phone)}</td>
                <td>${member.email ? `<a href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a>` : ""}</td>
                <td>${website ? `<a href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(website)}</a>` : ""}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMemberDirectory() {
  const root = document.querySelector("[data-member-directory]");
  if (!root) return;

  root.innerHTML = Object.entries(memberDirectory).map(([key, group]) => `
    <section class="member-group" id="members-${key}">
      <div class="member-group-head">
        <h3>${group.title}</h3>
        <span>${group.members.length}件</span>
      </div>
      ${renderMemberTable(group)}
    </section>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderMemberDirectory);
