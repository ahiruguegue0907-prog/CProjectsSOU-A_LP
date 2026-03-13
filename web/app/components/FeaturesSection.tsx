const features = [
  {
    emoji: "🎵",
    title: "親子AIミュージック",
    desc: "子どもの好きなテーマで、AIと一緒にオリジナルの歌をつくれます。",
    bg: "bg-accent-purple/40",
  },
  {
    emoji: "📖",
    title: "親子AIおはなし",
    desc: "名前や好きなものを入れるだけで、世界にひとつだけのお話ができます。",
    bg: "bg-accent-blue/50",
  },
  {
    emoji: "🎨",
    title: "親子AIキャラクターづくり",
    desc: "子どもが考えたキャラクターを、AIの力でイラストにします。",
    bg: "bg-accent-purple/40",
  },
  {
    emoji: "💡",
    title: "忙しい日のアイデア相談",
    desc: "しんどい日も、余裕がない日も。5分でできる親子遊びのアイデアをAIに聞けます。",
    bg: "bg-accent-blue/50",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-primary text-xs font-medium tracking-wider mb-3">
          できること
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-12">
          親子でできる、はじめてのAI体験
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border-card p-7 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center text-2xl`}
              >
                {f.emoji}
              </div>
              <div>
                <h3 className="text-base font-semibold text-heading mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
