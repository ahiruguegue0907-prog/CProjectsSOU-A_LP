import { waitlistUrl } from "../constants";

export default function FutureSection() {
  return (
    <section id="future" className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading leading-relaxed mb-6">
          余裕がない日にも、
          <br />
          寄り添える形を考えています
        </h2>

        <div className="bg-background rounded-2xl border border-border-card p-8 shadow-sm mb-8 inline-block text-left max-w-lg mx-auto">
          <div className="flex items-start gap-3 mb-4">
            <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-purple text-primary text-xs">
              🔮
            </span>
            <p className="text-sm text-body leading-relaxed">
              <span className="font-medium text-heading">母親向けAI伴走機能</span>を構想中です。
              <br />
              気持ちの整理や、親子時間のアイデア相談など、
              <br />
              忙しい日でも寄り添える仕組みを考えています。
            </p>
          </div>
          <p className="text-xs text-body/70 pl-9">
            ※ 現在は構想段階です。リリース時期は未定です。
          </p>
        </div>

        <div>
          <a
            href={waitlistUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            先行案内を受け取る
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
