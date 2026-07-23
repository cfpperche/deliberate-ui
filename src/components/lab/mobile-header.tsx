import Link from "next/link";
import { BookOpen } from "lucide-react";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";

export function MobileHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-20 flex h-12 items-center gap-2 border-b border-border bg-surface px-4 md:hidden">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <BookOpen className="h-3.5 w-3.5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <Link
          href={localePath(locale)}
          className="text-sm font-semibold tracking-tight"
        >
          {dict.common.brand}
        </Link>
      </div>
      <LanguageSwitcher locale={locale} />
      <Link
        href={`${localePath(locale)}#curriculum`}
        className="text-xs font-medium text-accent"
      >
        {dict.common.index}
      </Link>
    </header>
  );
}
