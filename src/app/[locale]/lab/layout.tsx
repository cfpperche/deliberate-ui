import { notFound } from "next/navigation";
import { LabSidebar } from "@/components/lab/sidebar";
import { MobileHeader } from "@/components/lab/mobile-header";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function LabLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="min-h-full">
      <LabSidebar locale={locale} dict={dict} />
      <div className="min-h-full md:pl-[var(--sidebar-width)]">
        <MobileHeader locale={locale} dict={dict} />
        {children}
      </div>
    </div>
  );
}
