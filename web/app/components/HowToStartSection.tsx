const steps = [
  {
    num: "1",
    title: "やってみたい体験を選ぶ",
    desc: "音楽、おはなし、イラスト…親子で「これやりたい！」を選ぶだけ。",
  },
  {
    num: "2",
    title: "ガイドに沿ってAIに聞くだけ",
    desc: "無料ガイドの手順どおりに進めるだけ。専門知識はいりません。",
  },
  {
    num: "3",
    title: "子どもと一緒に楽しむ",
    desc: "できあがった作品を親子で鑑賞。「すごい！」の声が聞こえます。",
  },
];

export default function HowToStartSection() {
  return (
    <section id="how-to-start" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-4">
          むずかしいことは、しなくて大丈夫。
        </h2>
        <p className="text-center text-body text-sm mb-14">
          3ステップで、今日から始められます。
        </p>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {s.num}
              </div>
              <div className="pt-1.5">
                <h3 className="text-base font-semibold text-heading mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
