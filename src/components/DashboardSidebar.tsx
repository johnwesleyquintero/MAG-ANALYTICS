import { DashboardMenuItem } from "./ui/DashboardMenuItem";
import { DashboardGroupLabel } from "./ui/DashboardGroupLabel";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, BarChart2, Target, History, Database, Settings, Link } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

type NavigationItem = {
  title: string;
  icon: LucideIcon;
  path: string;
  description: string;
};

const navigationItems: NavigationItem[] = [
  {
    title: "Overview",
    icon: Home,
    path: "/dashboard",
    description: "Dashboard overview and key metrics"
  },
  {
    title: "Insights",
    icon: BarChart2,
    path: "/dashboard/insights",
    description: "Detailed performance analytics"
  },
  {
    title: "Targets & Search Terms",
    icon: Target,
    path: "/dashboard/targets",
    description: "Campaign targets and search term analysis"
  },
  {
    title: "History",
    icon: History,
    path: "/dashboard/history",
    description: "Historical performance data"
  },
  {
    title: "DSP",
    icon: Database,
    path: "/dashboard/dsp",
    description: "Demand-side platform management"
  },
  {
    title: "Data Connections",
    icon: Link,
    path: "/dashboard/import",
    description: "Configure data sources and imports"
  },
];

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar className="w-sidebar">
      <SidebarContent>
        <SidebarGroup>
          <DashboardGroupLabel label="Analytics" />
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <DashboardMenuItem
                    key={item.title}
                    title={item.title}
                    icon={<Icon className="w-4 h-4" />}
                    path={item.path}
                    description={item.description}
                    active={isActive}
                  />
                );
              })}
              <DashboardMenuItem
                key="settings"
                title="Settings"
                icon={<Settings className="w-4 h-4" />}
                path="/dashboard/settings"
                description="Settings"
                active={location.pathname === "/dashboard/settings"}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
