import { useParams } from "wouter";
import { modules } from "@/data/modules";
import { liveDataChannels } from "@/data/liveData";
import { adaptations } from "@/data/adaptations";
import { basicSettings } from "@/data/basicSettings";
import { faultCodes } from "@/data/faultCodes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import {
  Shield, AlertCircle, Activity, Settings2, SlidersHorizontal,
  ChevronDown, ChevronUp, CheckCircle2, AlertTriangle, Lightbulb, Wrench
} from "lucide-react";

function SeverityBadge({ severity }: { severity: string }) {
  if (severity === "critical") {
    return <Badge variant="destructive" className="text-xs">Critical</Badge>;
  }
  if (severity === "warning") {
    return <Badge className="bg-amber-500 hover:bg-amber-600 text-black text-xs">Warning</Badge>;
  }
  return <Badge variant="secondary" className="text-xs">Info</Badge>;
}

function ExpandableText({ text, maxLength = 140 }: { text: string; maxLength?: number }) {
  const [expanded, setExpanded] = useState(false);
  if (text.length <= maxLength) return <span>{text}</span>;
  return (
    <span>
      {expanded ? text : `${text.slice(0, maxLength)}…`}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-1 text-primary hover:underline text-xs font-medium whitespace-nowrap inline-flex items-center gap-0.5"
      >
        {expanded ? (<><ChevronUp className="h-3 w-3" />less</>) : (<><ChevronDown className="h-3 w-3" />more</>)}
      </button>
    </span>
  );
}

export default function ModuleDetail() {
  const { id } = useParams<{ id: string }>();
  const module = modules.find((m) => m.id === id);

  const [liveSearch, setLiveSearch] = useState("");
  const [adaptSearch, setAdaptSearch] = useState("");
  const [adaptCategory, setAdaptCategory] = useState("all");
  const [bsSearch, setBsSearch] = useState("");
  const [bsCategory, setBsCategory] = useState("all");
  const [fcSearch, setFcSearch] = useState("");
  const [fcSeverity, setFcSeverity] = useState("all");

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3 text-muted-foreground">
        <AlertCircle className="h-12 w-12 opacity-40" />
        <p className="text-lg font-medium">Module not found</p>
        <p className="text-sm">No module with ID "{id}" in the reference database.</p>
      </div>
    );
  }

  const moduleLiveData = liveDataChannels.filter((c) => c.module === id);
  const moduleAdaptations = adaptations.filter((a) => a.module === id);
  const moduleBasicSettings = basicSettings.filter((b) => b.module === id);
  const moduleFaultCodes = faultCodes.filter((f) => f.module === id);

  const filteredLiveData = moduleLiveData.filter(
    (c) =>
      c.channel.toLowerCase().includes(liveSearch.toLowerCase()) ||
      c.description.toLowerCase().includes(liveSearch.toLowerCase()) ||
      c.normalValues.toLowerCase().includes(liveSearch.toLowerCase())
  );

  const adaptCategories = Array.from(new Set(moduleAdaptations.map((a) => a.category).filter(Boolean)));
  const filteredAdaptations = moduleAdaptations.filter((a) => {
    const matchText =
      a.channel.toLowerCase().includes(adaptSearch.toLowerCase()) ||
      a.effect.toLowerCase().includes(adaptSearch.toLowerCase()) ||
      (a.options || "").toLowerCase().includes(adaptSearch.toLowerCase());
    const matchCat = adaptCategory === "all" || a.category === adaptCategory;
    return matchText && matchCat;
  });

  const bsCategories = Array.from(new Set(moduleBasicSettings.map((b) => b.category).filter(Boolean)));
  const filteredBasicSettings = moduleBasicSettings.filter((b) => {
    const matchText =
      b.name.toLowerCase().includes(bsSearch.toLowerCase()) ||
      b.procedure.toLowerCase().includes(bsSearch.toLowerCase()) ||
      (b.whenToUse || "").toLowerCase().includes(bsSearch.toLowerCase());
    const matchCat = bsCategory === "all" || b.category === bsCategory;
    return matchText && matchCat;
  });

  const filteredFaultCodes = moduleFaultCodes.filter((f) => {
    const matchText =
      f.code.toLowerCase().includes(fcSearch.toLowerCase()) ||
      f.description.toLowerCase().includes(fcSearch.toLowerCase()) ||
      f.cause.toLowerCase().includes(fcSearch.toLowerCase());
    const matchSev = fcSeverity === "all" || f.severity === fcSeverity;
    return matchText && matchSev;
  });

  function TabCount({ count }: { count: number }) {
    return (
      <span className="ml-1.5 text-xs bg-muted text-muted-foreground rounded-full px-1.5 py-0.5 font-mono">
        {count}
      </span>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Module header */}
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xl font-bold bg-primary/10 text-primary px-3 py-1 rounded border border-primary/20">
            {module.id}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{module.name}</h1>
        </div>
        <p className="text-muted-foreground">{module.subtitle}</p>
        <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">{module.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <Badge variant="outline" className="font-mono flex items-center gap-1.5 py-1 text-xs">
            <Shield className="h-3 w-3" />
            Security Access: {module.securityCode}
          </Badge>
          {moduleLiveData.length > 0 && (
            <Badge variant="outline" className="flex items-center gap-1.5 py-1 text-xs">
              <Activity className="h-3 w-3" />
              {moduleLiveData.length} live channels
            </Badge>
          )}
          {moduleFaultCodes.length > 0 && (
            <Badge variant="outline" className="flex items-center gap-1.5 py-1 text-xs">
              <AlertCircle className="h-3 w-3" />
              {moduleFaultCodes.length} fault codes
            </Badge>
          )}
        </div>
      </div>

      <Tabs defaultValue="livedata" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="livedata" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <Activity className="h-3.5 w-3.5 shrink-0" />
            <span>Live Data</span>
            <TabCount count={moduleLiveData.length} />
          </TabsTrigger>
          <TabsTrigger value="adaptations" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <Settings2 className="h-3.5 w-3.5 shrink-0" />
            <span>Adaptations</span>
            <TabCount count={moduleAdaptations.length} />
          </TabsTrigger>
          <TabsTrigger value="basicsettings" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">Basic Settings</span>
            <span className="sm:hidden">Settings</span>
            <TabCount count={moduleBasicSettings.length} />
          </TabsTrigger>
          <TabsTrigger value="faultcodes" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">Fault Codes</span>
            <span className="sm:hidden">Faults</span>
            <TabCount count={moduleFaultCodes.length} />
          </TabsTrigger>
        </TabsList>

        {/* ── LIVE DATA ── */}
        <TabsContent value="livedata" className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <Input
              placeholder="Search channel ID, description or values..."
              value={liveSearch}
              onChange={(e) => setLiveSearch(e.target.value)}
              className="max-w-md text-sm"
            />
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {filteredLiveData.length} of {moduleLiveData.length} channels
            </span>
          </div>
          {filteredLiveData.length > 0 ? (
            <div className="rounded-md border border-border bg-card overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[140px] whitespace-nowrap">Channel</TableHead>
                    <TableHead className="min-w-[200px]">Description</TableHead>
                    <TableHead className="w-[80px]">Unit</TableHead>
                    <TableHead className="min-w-[220px]">Normal Values</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLiveData.map((channel, i) => (
                    <TableRow key={`${channel.channel}-${i}`} className="hover:bg-muted/20 align-top">
                      <TableCell className="font-mono text-xs font-semibold text-primary py-3">
                        {channel.channel}
                      </TableCell>
                      <TableCell className="text-sm py-3">{channel.description}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground py-3">
                        {channel.unit}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground py-3 leading-relaxed">
                        {channel.normalValues}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <EmptyState icon={<Activity />} message="No live data channels found" sub={liveSearch ? "Try a different search term" : "No channels documented for this module"} />
          )}
        </TabsContent>

        {/* ── ADAPTATIONS ── */}
        <TabsContent value="adaptations" className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <Input
                placeholder="Search channel name or effect..."
                value={adaptSearch}
                onChange={(e) => setAdaptSearch(e.target.value)}
                className="max-w-xs text-sm"
              />
              {adaptCategories.length > 1 && (
                <Select value={adaptCategory} onValueChange={setAdaptCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {adaptCategories.map((cat) => (
                      <SelectItem key={cat} value={cat!}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {filteredAdaptations.length} of {moduleAdaptations.length} entries
            </span>
          </div>

          {filteredAdaptations.length > 0 ? (
            <div className="space-y-6">
              {Array.from(new Set(filteredAdaptations.map((a) => a.category))).map((category) => {
                const items = filteredAdaptations.filter((a) => a.category === category);
                return (
                  <div key={category || "general"} className="space-y-3">
                    {category && (
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-2">
                        {category}
                      </h3>
                    )}
                    <div className="rounded-md border border-border bg-card overflow-x-auto">
                      <Table>
                        <TableHeader className="bg-muted/30">
                          <TableRow>
                            <TableHead className="min-w-[180px]">Channel / Setting</TableHead>
                            <TableHead className="w-[120px]">Default</TableHead>
                            <TableHead className="min-w-[160px]">Options</TableHead>
                            <TableHead className="min-w-[220px]">Effect</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {items.map((a, i) => (
                            <TableRow key={i} className="hover:bg-muted/20 align-top">
                              <TableCell className="font-medium text-sm py-3 text-primary">
                                {a.channel}
                              </TableCell>
                              <TableCell className="font-mono text-xs text-muted-foreground py-3 whitespace-nowrap">
                                {a.default}
                              </TableCell>
                              <TableCell className="text-xs text-muted-foreground py-3">
                                {a.options}
                              </TableCell>
                              <TableCell className="text-xs py-3 leading-relaxed text-foreground/90">
                                {a.effect}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState icon={<Settings2 />} message="No adaptations found" sub={adaptSearch ? "Try a different search or clear the category filter" : "No adaptations documented for this module"} />
          )}
        </TabsContent>

        {/* ── BASIC SETTINGS ── */}
        <TabsContent value="basicsettings" className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <Input
                placeholder="Search procedure name or steps..."
                value={bsSearch}
                onChange={(e) => setBsSearch(e.target.value)}
                className="max-w-xs text-sm"
              />
              {bsCategories.length > 1 && (
                <Select value={bsCategory} onValueChange={setBsCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {bsCategories.map((cat) => (
                      <SelectItem key={cat} value={cat!}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {filteredBasicSettings.length} of {moduleBasicSettings.length} procedures
            </span>
          </div>

          {filteredBasicSettings.length > 0 ? (
            <div className="grid gap-5">
              {filteredBasicSettings.map((bs, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <CardTitle className="text-base text-foreground leading-snug">{bs.name}</CardTitle>
                      {bs.category && (
                        <Badge variant="secondary" className="text-xs shrink-0">{bs.category}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {bs.whenToUse && (
                      <div className="flex gap-2.5 p-3 bg-blue-500/10 border border-blue-500/20 rounded-md">
                        <Lightbulb className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">When to use</p>
                          <p className="text-sm text-foreground/90 leading-relaxed">{bs.whenToUse}</p>
                        </div>
                      </div>
                    )}

                    {bs.symptoms && bs.symptoms.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          Symptoms
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {bs.symptoms.map((s, si) => (
                            <Badge key={si} variant="outline" className="text-xs border-amber-500/40 text-amber-300 bg-amber-500/5">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-3 bg-muted/30 rounded-md border border-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Prerequisites</p>
                      <p className="text-sm leading-relaxed">{bs.prerequisites}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Wrench className="h-3.5 w-3.5" />
                        Procedure
                      </p>
                      <ProcedureText text={bs.procedure} />
                    </div>

                    {bs.afterService && bs.afterService.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Run after
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {bs.afterService.map((s, si) => (
                            <Badge key={si} variant="outline" className="text-xs border-green-500/40 text-green-400 bg-green-500/5">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState icon={<SlidersHorizontal />} message="No procedures found" sub={bsSearch ? "Try a different search term" : "No basic settings documented for this module"} />
          )}
        </TabsContent>

        {/* ── FAULT CODES ── */}
        <TabsContent value="faultcodes" className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <Input
                placeholder="Search code, description or cause..."
                value={fcSearch}
                onChange={(e) => setFcSearch(e.target.value)}
                className="max-w-xs text-sm"
              />
              <Select value={fcSeverity} onValueChange={setFcSeverity}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All severities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {filteredFaultCodes.length} of {moduleFaultCodes.length} codes
            </span>
          </div>

          {filteredFaultCodes.length > 0 ? (
            <div className="rounded-md border border-border bg-card overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[100px] whitespace-nowrap">Code</TableHead>
                    <TableHead className="min-w-[200px]">Description</TableHead>
                    <TableHead className="min-w-[260px]">Diagnosis / Cause</TableHead>
                    <TableHead className="w-[100px]">Severity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFaultCodes.map((fault) => (
                    <TableRow key={fault.code} className="hover:bg-muted/20 align-top">
                      <TableCell className="font-mono font-bold text-primary text-sm py-3 whitespace-nowrap">
                        {fault.code}
                      </TableCell>
                      <TableCell className="font-medium text-sm py-3 leading-snug">
                        {fault.description}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground py-3 leading-relaxed">
                        <ExpandableText text={fault.cause} maxLength={180} />
                      </TableCell>
                      <TableCell className="py-3">
                        <SeverityBadge severity={fault.severity} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <EmptyState icon={<AlertCircle />} message="No fault codes found" sub={fcSearch || fcSeverity !== "all" ? "Try adjusting your filters" : "No fault codes documented for this module"} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProcedureText({ text }: { text: string }) {
  const steps = text.split(/(?<=[.!?])\s+(?=\d+\.|Step|\()/).filter(Boolean);
  if (steps.length > 1) {
    return (
      <ol className="space-y-1.5 list-decimal list-inside">
        {steps.map((step, i) => (
          <li key={i} className="text-sm leading-relaxed text-foreground/90 pl-1">
            {step.replace(/^\d+\.\s*/, "")}
          </li>
        ))}
      </ol>
    );
  }
  return <p className="text-sm leading-relaxed text-foreground/90">{text}</p>;
}

function EmptyState({ icon, message, sub }: { icon: React.ReactNode; message: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground border border-border rounded-md bg-card">
      <div className="h-10 w-10 opacity-30">{icon}</div>
      <p className="font-medium">{message}</p>
      <p className="text-sm opacity-70">{sub}</p>
    </div>
  );
}
