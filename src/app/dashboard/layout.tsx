import { dashboardPages } from "@/constants";
import { ActiveNavBarLink } from "@/components/platform/ActiveNavBarLink";
import { Button } from "@/ui";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {


  return (
    <div>

      <header className="flex justify-between items-center px-12 bg-zinc-100">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl mr-8">We plan</h1>
          {dashboardPages.map(page => <ActiveNavBarLink key={page.href} {...page} />)}
        </div>

        <div className="flex gap-4">
          <Button variant="tertiary">Opciones</Button>
          <Button>Ver mi perfil</Button>
        </div>
      </header>

      {children}
    </div>
  );
}