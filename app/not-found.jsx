import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 text-3xl font-bold">This page doesn't exist</h1>
      <p className="mt-3 text-muted">The link may be old or mistyped.</p>
      <Link href="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </section>
  );
}
