import { freeGuideUrl, noteUrl } from "../constants";

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-purple/60 mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading leading-relaxed mb-4">
          AIが得意じゃなくても大丈夫。
          <br />
          親子の時間を、
          <br className="sm:hidden" />
          今日から少し変えてみませんか。
        </h2>

        <p className="text-sm text-body mb-10 leading-relaxed">
          まずは気軽に、自分のペースで始めてみてください。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={freeGuideUrl}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
          >
            無料ガイドを受け取る
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            noteを読む
          </a>
        </div>
      </div>
    </section>
  );
}
