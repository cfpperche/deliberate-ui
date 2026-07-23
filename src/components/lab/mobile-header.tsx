import Link from "next/link";
import { BookOpen } from "lucide-react";

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-12 items-center gap-2 border-b border-border bg-surface px-4 md:hidden">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <BookOpen className="h-3.5 w-3.5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Deliberate UI
        </Link>
      </div>
      <Link href="/#curriculum" className="text-xs font-medium text-accent">
        Index
      </Link>
    </header>
  );
}
