const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M14.828 14.828a4 4 0 01-5.656-5.656M9 9l6 6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    emoji: "😊",
    title: "子どもを喜ばせる体験がつくれる",
    desc: "AI を使って、親子で音楽やイラスト、おはなしを楽しめます。「できた！」の笑顔が生まれます。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    emoji: "🍵",
    title: "お母さん自身の負担も少し軽くなる",
    desc: "忙しい日でも5分から。完璧じゃなくても大丈夫。「ちょっとだけ試す」を応援します。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    emoji: "🤝",
    title: "AIとのちょうどいい距離感がわかる",
    desc: "怖がりすぎず、依存もしない。自分たちに合った距離でAIと付き合う方法を一緒に見つけていきます。",
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-4">
          SOU-Aが目指すのは、
          <br />
          AIを子どもに渡すことではなく、
          <br />
          親子の時間をひらく使い方です。
        </h2>
        <p className="text-center text-body text-sm mb-14">
          お母さんがまずAIを知って、親子の時間に活かしていく。それがSOU-Aの考え方です。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border-card p-7 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{v.emoji}</div>
              <h3 className="text-base font-semibold text-heading mb-2 leading-snug">
                {v.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
