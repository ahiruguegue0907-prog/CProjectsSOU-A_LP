import { noteUrl, freeGuideUrl, workshopUrl } from "../constants";

const actions = [
  {
    emoji: "📝",
    title: "noteで読む",
    desc: "開発者の想いや、親子AI体験の具体例をnoteで発信しています。",
    href: noteUrl,
    label: "noteを見る",
    external: true,
    bg: "bg-accent-blue/50",
  },
  {
    emoji: "📖",
    title: "無料ガイドを受け取る",
    desc: "はじめてのAI体験ガイドを無料でお届けします。手順どおりに進めるだけで親子で楽しめます。",
    href: freeGuideUrl,
    label: "ガイドを受け取る",
    external: false,
    bg: "bg-accent-purple/40",
  },
  {
    emoji: "👩‍👧",
    title: "少人数の体験会に参加する",
    desc: "実際に親子で試せる少人数制の体験会を開催しています。",
    href: workshopUrl,
    label: "体験会について知る",
    external: false,
    bg: "bg-accent-blue/50",
  },
];

export default function ActionSection() {
  return (
    <section id="actions" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-12">
          まずは、ここから始められます
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {actions.map((a, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border-card p-7 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${a.bg} mx-auto mb-4 text-2xl`}
              >
                {a.emoji}
              </div>
              <h3 className="text-base font-semibold text-heading mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-body leading-relaxed mb-5 flex-1">
                {a.desc}
              </p>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                {a.label}
                {a.external && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
