import { LabSidebar } from "@/components/lab/sidebar";
import { MobileHeader } from "@/components/lab/mobile-header";

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <LabSidebar />
      <div className="min-h-full md:pl-[var(--sidebar-width)]">
        <MobileHeader />
        {children}
      </div>
    </div>
  );
}
