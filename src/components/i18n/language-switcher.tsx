"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale, localeLabels } from "@/i18n/config";
import { stripLocaleFromPathname } from "@/i18n/paths";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const rest = stripLocaleFromPathname(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface p-0.5 text-xs",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((item) => {
        const href = `/${item}${rest === "/" ? "" : rest}`;
        const active = item === locale;
        return (
          <Link
            key={item}
            href={href}
            hrefLang={item}
            className={cn(
              "rounded-[5px] px-2 py-1 font-medium transition-colors",
              active
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-current={active ? "true" : undefined}
          >
            {item.toUpperCase()}
            <span className="sr-only">{localeLabels[item]}</span>
          </Link>
        );
      })}
    </div>
  );
}
