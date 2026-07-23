import { redirect } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";

export default async function LabIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) redirect(localePath("en", "/lab/type-hierarchy"));
  redirect(localePath(locale, "/lab/type-hierarchy"));
}
