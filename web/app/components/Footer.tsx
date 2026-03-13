export default function Footer() {
  return (
    <footer className="border-t border-border-card py-10 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white font-bold text-xs">
            S
          </span>
          <span className="text-lg font-bold text-heading">SOU-A</span>
        </div>
        <p className="text-xs text-body/70 mb-1">
          親子の時間をひらく、やさしいAI体験
        </p>
        <p className="text-xs text-body/50">
          &copy; {new Date().getFullYear()} SOU-A. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
