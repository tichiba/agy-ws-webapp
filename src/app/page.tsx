export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-sm">
            AG
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Antigravity ワークショップ Web アプリ
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Next.js + Tailwind CSS スターターテンプレート
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
          <h2 className="text-sm font-semibold text-blue-900 dark:text-blue-300">
            🚀 ハンズオンのスタート地点です
          </h2>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
            Antigravity のエージェントに指示を出して、この画面をタスク管理アプリケーションへと進化させていきましょう！
          </p>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            次のステップ
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                1
              </span>
              エージェントにこのアプリの構造を解説させる
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                2
              </span>
              計画を立ててタスク管理機能を追加する
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                3
              </span>
              <code>/grill-me</code> で仕様を詰めてモダンUIにする
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
