import { useState } from "react";
import { warningLights } from "@/data/warningLights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Link } from "wouter";

export default function WarningLights() {
  const [search, setSearch] = useState("");
  const [urgencyFilter, setUrgencyFilter] = useState("all");

  const filtered = warningLights.filter((light) => {
    const matchesSearch =
      light.name.toLowerCase().includes(search.toLowerCase()) ||
      light.action.toLowerCase().includes(search.toLowerCase()) ||
      light.primaryModule.toLowerCase().includes(search.toLowerCase());
    const matchesUrgency = urgencyFilter === "all" || light.urgency === urgencyFilter;
    return matchesSearch && matchesUrgency;
  });

  const stopCount = warningLights.filter((l) => l.urgency === "stop").length;
  const warnCount = warningLights.filter((l) => l.urgency === "warning").length;
  const infoCount = warningLights.filter((l) => l.urgency === "info").length;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Warning Light Diagnosis</h1>
        <p className="text-muted-foreground">
          Identify instrument cluster indicators and determine which modules to scan first.
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          <Badge variant="destructive" className="text-xs flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {stopCount} Stop
          </Badge>
          <Badge className="bg-amber-500 text-black text-xs flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" /> {warnCount} Warning
          </Badge>
          <Badge variant="secondary" className="text-xs flex items-center gap-1">
            <Info className="h-3 w-3" /> {infoCount} Info
          </Badge>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <Input
          placeholder="Search warning light name or action..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm text-sm"
        />
        <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All urgencies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All urgencies</SelectItem>
            <SelectItem value="stop">Stop — Critical</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="info">Info</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">
          {filtered.length} of {warningLights.length} lights
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((light, i) => (
            <Card
              key={i}
              className={`bg-card overflow-hidden border-l-4 ${
                light.urgency === "stop"
                  ? "border-l-destructive"
                  : light.urgency === "warning"
                  ? "border-l-amber-500"
                  : "border-l-blue-500"
              }`}
            >
              <CardHeader className="pb-2 bg-muted/20">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    {light.urgency === "stop" ? (
                      <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    ) : light.urgency === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    ) : (
                      <Info className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                    )}
                    <CardTitle className="text-base leading-snug">{light.name}</CardTitle>
                  </div>
                  <Badge
                    variant={light.urgency === "stop" ? "destructive" : "outline"}
                    className={`text-xs shrink-0 ${
                      light.urgency === "warning" ? "border-amber-500/50 text-amber-400" :
                      light.urgency === "info" ? "border-blue-500/50 text-blue-400" : ""
                    }`}
                  >
                    {light.urgency === "stop" ? "Stop" : light.urgency === "warning" ? "Warning" : "Info"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <div className="grid grid-cols-[110px_1fr] gap-y-1.5 text-sm">
                  <span className="text-muted-foreground text-xs font-medium mt-0.5">Primary Module</span>
                  <Link
                    href={`/module/${light.primaryModule.split(" ")[0]}`}
                    className="font-mono text-primary text-xs font-semibold hover:underline"
                  >
                    {light.primaryModule}
                  </Link>
                  <span className="text-muted-foreground text-xs font-medium mt-0.5">Also Check</span>
                  <span className="text-xs">{light.secondaryModules}</span>
                </div>
                <div className="bg-muted/30 p-3 rounded-md border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Recommended Action
                  </p>
                  <p className="text-sm leading-relaxed">{light.action}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground border border-border rounded-md bg-card">
          <AlertTriangle className="h-10 w-10 opacity-30" />
          <p className="font-medium">No warning lights match your search</p>
          <p className="text-sm opacity-70">Try a different name or clear the urgency filter</p>
        </div>
      )}
    </div>
  );
}
