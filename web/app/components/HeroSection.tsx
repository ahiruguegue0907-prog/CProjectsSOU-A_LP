import { noteUrl, freeGuideUrl } from "../constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 grid-bg overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-16 right-[10%] w-64 h-64 rounded-full bg-accent-purple/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-48 h-48 rounded-full bg-accent-blue/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-purple text-primary-dark text-xs font-medium mb-6 animate-fade-in-up">
          AI初心者のお母さんへ
        </span>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading leading-relaxed mb-6 animate-fade-in-up delay-100">
          AIってむずかしそう。
          <br />
          でも、子どもを笑顔にする使い方なら、
          <br className="hidden sm:inline" />
          今日からできる。
        </h1>

        {/* Sub copy */}
        <p className="text-base sm:text-lg text-body leading-relaxed mb-8 animate-fade-in-up delay-200">
          SOU-Aは、AIに詳しくないお母さんでも、
          <br className="hidden sm:inline" />
          子どもと一緒に音楽・お話・イラストを楽しめるようになる
          <br className="hidden sm:inline" />
          <span className="text-primary font-medium">&ldquo;親子AI体験&rdquo;</span>
          の入り口です。
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-300">
          {["AI初心者向け", "親子で5分からできる", "特別な才能はいりません"].map(
            (tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-sub text-body text-xs border border-border-card"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {tag}
              </span>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up delay-400">
          <a
            href={noteUrl}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
          >
            親子AI体験の例を見る
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={freeGuideUrl}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            無料ガイドを受け取る
          </a>
        </div>
      </div>
    </section>
  );
}
