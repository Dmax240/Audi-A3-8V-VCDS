import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { modules } from "@/data/modules";
import { Shield, AlertTriangle, Key, Wrench, Home, Settings2, Activity } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: ReactNode;
}

function getPageTitle(location: string): string {
  if (location === "/") return "Dashboard";
  if (location === "/fault-codes") return "Fault Code Reference";
  if (location === "/warning-lights") return "Warning Light Diagnosis";
  if (location === "/security-codes") return "Security Access Codes";
  if (location === "/setup") return "Setup & Guide";
  if (location.startsWith("/module/")) {
    const id = location.replace("/module/", "");
    const mod = modules.find((m) => m.id === id);
    return mod ? `Module ${id} – ${mod.name}` : `Module ${id}`;
  }
  return "VCDS Reference";
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const pageTitle = getPageTitle(location);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background dark">
        <Sidebar className="border-r border-border">
          <SidebarHeader className="border-b border-border px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <Wrench className="h-5 w-5 shrink-0" />
              <span>VCDS Reference</span>
            </Link>
            <div className="text-xs text-muted-foreground mt-0.5 font-mono">A3 8V MQB / EA888.3</div>
          </SidebarHeader>

          <SidebarContent className="flex flex-col overflow-hidden">
            <SidebarGroup className="shrink-0">
              <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/"}>
                      <Link href="/">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/fault-codes"}>
                      <Link href="/fault-codes">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Fault Codes</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/warning-lights"}>
                      <Link href="/warning-lights">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        <span>Warning Lights</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/security-codes"}>
                      <Link href="/security-codes">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>Security Codes</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/setup"}>
                      <Link href="/setup">
                        <Settings2 className="h-4 w-4" />
                        <span>Setup & Guide</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="flex-1 overflow-hidden flex flex-col min-h-0">
              <SidebarGroupLabel className="flex items-center justify-between">
                <span>Modules</span>
                <span className="text-xs font-mono text-muted-foreground/60">{modules.length}</span>
              </SidebarGroupLabel>
              <SidebarGroupContent className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <SidebarMenu className="pr-2 pb-4">
                    {modules.map((mod) => (
                      <SidebarMenuItem key={mod.id}>
                        <SidebarMenuButton asChild isActive={location === `/module/${mod.id}`}>
                          <Link href={`/module/${mod.id}`} className="flex justify-between items-center w-full gap-2">
                            <span className="truncate text-sm">{mod.name}</span>
                            <span className="font-mono text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border shrink-0">
                              {mod.id}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </ScrollArea>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-10 flex h-12 items-center gap-3 border-b border-border bg-background/95 backdrop-blur px-4">
            <SidebarTrigger />
            <div className="h-4 w-px bg-border" />
            <span className="text-sm text-muted-foreground truncate">{pageTitle}</span>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
