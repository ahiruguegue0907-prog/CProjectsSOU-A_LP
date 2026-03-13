"use client";

const faqs = [
  {
    q: "AIをほとんど使ったことがなくても大丈夫ですか？",
    a: "はい、SOU-Aは「AIがはじめて」の方を前提に設計しています。ガイドに沿って進めるだけなので、特別な知識は必要ありません。",
  },
  {
    q: "子どもが一人で使うサービスですか？",
    a: "いいえ。SOU-Aは、お母さんがAIを使って親子で楽しむ体験をつくるサービスです。子どもが一人でAIに向かうことを前提にしていません。",
  },
  {
    q: "どんなことができますか？",
    a: "親子で一緒につくる音楽、おはなし、キャラクターイラスト、しんどい日のアイデア相談など、AIを使った親子体験をガイド付きでお届けしています。",
  },
  {
    q: "特別なスキルや才能は必要ですか？",
    a: "いいえ、特別なスキルは必要ありません。ガイドの手順どおりに進めるだけで、今日から親子AI体験を始められます。",
  },
  {
    q: "今すぐ利用できますか？",
    a: "noteの記事紹介や無料ガイドは今すぐご利用いただけます。体験会も随時開催しています。一部の構想中機能については、先行案内の登録が可能です。",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-12">
          よくある質問
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-background rounded-2xl border border-border-card overflow-hidden group"
            >
              <summary className="flex items-center justify-between px-6 py-5 text-sm sm:text-base font-medium text-heading">
                <span className="pr-4">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 text-primary faq-chevron"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-sm text-body leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
