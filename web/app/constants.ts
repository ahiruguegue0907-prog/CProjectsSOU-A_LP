// =============================================================
// SOU-A LP — CTA リンク定数
// リリース時に実際のURLに差し替えてください
// =============================================================

export const noteUrl = "https://note.com/your-account";
export const freeGuideUrl = "https://example.com/free-guide";
export const workshopUrl = "https://example.com/workshop";
export const waitlistUrl = "https://example.com/waitlist";

// =============================================================
// ナビゲーション
// =============================================================
export const navLinks = [
  { label: "できること", href: "#features" },
  { label: "はじめ方", href: "#how-to-start" },
  { label: "開発者の想い", href: "#founder" },
  { label: "安心への考え方", href: "#safety" },
  { label: "note", href: noteUrl, external: true },
] as const;
