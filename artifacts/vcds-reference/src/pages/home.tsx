import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { modules } from "@/data/modules";
import { faultCodes } from "@/data/faultCodes";
import { warningLights } from "@/data/warningLights";
import { securityCodes } from "@/data/securityCodes";
import { adaptations } from "@/data/adaptations";
import { basicSettings } from "@/data/basicSettings";
import { liveDataChannels } from "@/data/liveData";
import { Link } from "wouter";
import { Shield, AlertTriangle, Key, Cpu, Activity, SlidersHorizontal, Settings2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Vehicle header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">2018 Audi A3 8V MQB</h1>
        <p className="text-muted-foreground text-sm">CZPB 2.0 TSI 220hp &bull; DQ381 S-Tronic &bull; Simos 18.1 ECU</p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <StatCard icon={<Cpu />} label="Modules" value={modules.length} sub="Control units" />
        <StatCard icon={<AlertTriangle />} label="Fault Codes" value={faultCodes.length} sub="DTCs documented" color="text-amber-500" />
        <StatCard icon={<Key />} label="Security Codes" value={securityCodes.length} sub="Access codes" color="text-primary" />
        <StatCard icon={<Shield />} label="Warning Lights" value={warningLights.length} sub="Procedures" color="text-blue-400" />
        <StatCard icon={<Activity />} label="Live Channels" value={liveDataChannels.length} sub="Data channels" />
        <StatCard icon={<SlidersHorizontal />} label="Procedures" value={basicSettings.length} sub="Basic settings" color="text-green-400" />
      </div>

      {/* Quick access links */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <QuickLink href="/fault-codes" icon={<AlertTriangle className="h-5 w-5 text-amber-500" />} label="Fault Code Reference" sub={`${faultCodes.length} DTCs with causes`} />
        <QuickLink href="/warning-lights" icon={<Shield className="h-5 w-5 text-destructive" />} label="Warning Light Guide" sub={`${warningLights.length} cluster indicators`} />
        <QuickLink href="/security-codes" icon={<Key className="h-5 w-5 text-primary" />} label="Security Access Codes" sub={`${securityCodes.length} module codes`} />
        <QuickLink href="/setup" icon={<Settings2 className="h-5 w-5 text-muted-foreground" />} label="Setup & Safe Practices" sub="VCDS guide & tips" />
      </div>

      {/* Module cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Control Modules</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const modFaults = faultCodes.filter((f) => f.module === mod.id).length;
            const modLive = liveDataChannels.filter((c) => c.module === mod.id).length;
            const modAdapt = adaptations.filter((a) => a.module === mod.id).length;
            return (
              <Link key={mod.id} href={`/module/${mod.id}`}>
                <Card className="hover:border-primary/50 hover:bg-muted/20 transition-all cursor-pointer h-full bg-card group">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-base group-hover:text-primary transition-colors leading-snug">
                        {mod.name}
                      </CardTitle>
                      <span className="font-mono text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded border border-border shrink-0">
                        {mod.id}
                      </span>
                    </div>
                    <CardDescription className="text-xs">{mod.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{mod.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {modFaults > 0 && (
                        <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                          <AlertTriangle className="h-2.5 w-2.5 mr-1" />{modFaults} faults
                        </Badge>
                      )}
                      {modLive > 0 && (
                        <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                          <Activity className="h-2.5 w-2.5 mr-1" />{modLive} channels
                        </Badge>
                      )}
                      {modAdapt > 0 && (
                        <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                          <SlidersHorizontal className="h-2.5 w-2.5 mr-1" />{modAdapt} adapt
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <Shield className="h-3 w-3" />
                        <span>{mod.securityCode}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon, label, value, sub, color,
}: {
  icon: React.ReactNode; label: string; value: number; sub: string; color?: string;
}) {
  return (
    <Card className="bg-card">
      <CardContent className="pt-4 pb-3 px-4">
        <div className={`mb-2 ${color ?? "text-muted-foreground"}`}>
          <div className="h-4 w-4">{icon}</div>
        </div>
        <div className="text-2xl font-bold font-mono">{value}</div>
        <p className="text-xs font-medium text-foreground mt-0.5">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
}

function QuickLink({ href, icon, label, sub }: { href: string; icon: React.ReactNode; label: string; sub: string }) {
  return (
    <Link href={href}>
      <Card className="hover:border-primary/50 hover:bg-muted/20 transition-all cursor-pointer group bg-card">
        <CardContent className="pt-4 pb-3 px-4 flex items-center gap-3">
          <div className="shrink-0">{icon}</div>
          <div className="min-w-0">
            <p className="text-sm font-medium group-hover:text-primary transition-colors">{label}</p>
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors ml-auto shrink-0" />
        </CardContent>
      </Card>
    </Link>
  );
}
