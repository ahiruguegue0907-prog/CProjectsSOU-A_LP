const empathyItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    text: "AIが気になるけど、\n何から始めればいいかわからない",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    text: "子どもを喜ばせたいけど、\n時間も余裕もない",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "AIを子どもに\nどう触れさせるべきか不安",
  },
];

export default function EmpathySection() {
  return (
    <section id="empathy" className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-12">
          こんなモヤモヤ、ありませんか？
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {empathyItems.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border-card p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-purple/60 mb-4">
                {item.icon}
              </div>
              <p className="text-sm sm:text-base text-body leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
