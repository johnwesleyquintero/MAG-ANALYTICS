import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface DashboardMenuItemProps {
  title: string;
  icon: ReactNode;
  path: string;
  description: string;
  active?: boolean;
}

export function DashboardMenuItem({ title, icon, path, description, active }: DashboardMenuItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton
        onClick={handleNavigation}
        isActive={active || location.pathname === path}
        className="flex items-center gap-2"
        title={description}
      >
        {icon && <>{icon}</>}
        <span>{title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}