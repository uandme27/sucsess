import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-b from-white to-brand-lighter px-5 py-16">
      <div className="w-full max-w-[480px] rounded-xl border border-border bg-card p-8 text-center shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        <p className="mt-3 text-muted-foreground">
          This page hasn't been built yet. Keep prompting to fill in this
          page's content.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 font-bold text-primary-foreground hover:bg-primary/90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
