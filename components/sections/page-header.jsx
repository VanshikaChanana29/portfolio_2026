export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="container py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </header>
  );
}
