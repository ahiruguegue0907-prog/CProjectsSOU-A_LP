import { noteUrl } from "../constants";

export default function FounderStorySection() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-center text-primary text-xs font-medium tracking-wider mb-3">
          開発の背景
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading text-center leading-relaxed mb-10">
          我が子に、AIとの向き合い方を、
          <br />
          きちんと伝えたい。
          <br />
          そこから、SOU-Aは始まりました。
        </h2>

        <div className="bg-background rounded-2xl border border-border-card p-8 sm:p-10 shadow-sm space-y-5 text-body text-sm leading-relaxed">
          <p>私は2児の母です。</p>
          <p>
            子どもとAIの関係について真剣に考える中で、
            一度、子どもが直接使うAIチャットボットを本気で作りました。
            問いかけを通して考える力を引き出す設計や、
            安全性への配慮もできる限り組み込みました。
          </p>
          <p>
            でも、作り切る直前で立ち止まりました。
            <br />
            相手が子どもである以上、
            「これなら大丈夫」と言い切れなかったからです。
          </p>
          <p>
            だから私は考え直しました。
          </p>
          <p>
            まず必要なのは、子どもにAIを直接渡すことではなく、
            親である私たちがAIを知り、使いこなし、
            親子の時間に変えていくことなのではないか。
          </p>
          <p>
            SOU-Aは、そんな試行錯誤の中から生まれたサービスです。
          </p>
          <p>
            がんばりすぎなくてもできる、
            やさしい親子AI体験の入口をつくっていきたいと考えています。
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            noteで詳しく読む
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
