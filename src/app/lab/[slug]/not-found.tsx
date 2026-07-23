import Link from "next/link";

export default function LessonNotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-start justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Not ready
      </p>
      <h1 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
        Lesson not available
      </h1>
      <p className="mt-3 text-sm text-muted-foreground" style={{ lineHeight: "var(--leading-relaxed)" }}>
        This lesson is planned or does not exist. Open a ready lesson from the index.
      </p>
      <Link
        href="/lab/type-hierarchy"
        className="mt-6 text-sm font-medium text-accent hover:underline"
      >
        Go to lesson 1.1
      </Link>
    </div>
  );
}
