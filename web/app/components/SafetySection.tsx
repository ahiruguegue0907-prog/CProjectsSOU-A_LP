const principles = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "子どもを一人でAIに向かわせない",
    desc: "SOU-Aは、子どもが単独でAIを使うサービスではありません。まず大人が理解し、親子の体験に変えることを大切にしています。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
    title: 'AIを\u201C正解の箱\u201Dにしない',
    desc: "AIの答えは万能ではありません。考えるきっかけや創作の道具として、ちょうどいい距離感を大切にします。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "創り手への敬意を忘れない",
    desc: "AIで何かを生み出す楽しさと同時に、オリジナルの創り手への敬意も自然に学べる場でありたいと考えています。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "誇張しない",
    desc: "「完全」「絶対」といった断定はしません。正直に、誠実に、今の自分たちにできることを伝えます。",
  },
];

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-center text-primary text-xs font-medium tracking-wider mb-3">
          大切にしていること
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-12">
          安心して向き合うために、
          <br />
          大切にしていること
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border-card p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-sub mb-4">
                {p.icon}
              </div>
              <h3 className="text-base font-semibold text-heading mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
