import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/paths";

export default function LessonNotFound() {
  // not-found may not receive locale params reliably; default to EN copy + root lab path
  const dict = getDictionary(defaultLocale);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-start justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {dict.lab.notReady}
      </p>
      <h1 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
        {dict.lab.notAvailableTitle}
      </h1>
      <p
        className="mt-3 text-sm text-muted-foreground"
        style={{ lineHeight: "var(--leading-relaxed)" }}
      >
        {dict.lab.notAvailableBody}
      </p>
      <Link
        href={localePath(defaultLocale, "/lab/type-hierarchy")}
        className="mt-6 text-sm font-medium text-accent hover:underline"
      >
        {dict.lab.goToLesson}
      </Link>
    </div>
  );
}
