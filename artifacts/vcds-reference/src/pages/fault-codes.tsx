import { useState } from "react";
import { faultCodes } from "@/data/faultCodes";
import { modules } from "@/data/modules";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

function SeverityBadge({ severity }: { severity: string }) {
  if (severity === "critical") return <Badge variant="destructive" className="text-xs">Critical</Badge>;
  if (severity === "warning") return <Badge className="bg-amber-500 hover:bg-amber-600 text-black text-xs">Warning</Badge>;
  return <Badge variant="secondary" className="text-xs">Info</Badge>;
}

function ExpandableCell({ text, maxLength = 160 }: { text: string; maxLength?: number }) {
  const [expanded, setExpanded] = useState(false);
  if (text.length <= maxLength) return <span>{text}</span>;
  return (
    <span>
      {expanded ? text : `${text.slice(0, maxLength)}…`}{" "}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-primary hover:underline text-xs font-medium whitespace-nowrap inline-flex items-center gap-0.5"
      >
        {expanded ? (<><ChevronUp className="h-3 w-3" />less</>) : (<><ChevronDown className="h-3 w-3" />more</>)}
      </button>
    </span>
  );
}

export default function FaultCodes() {
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [moduleFilter, setModuleFilter] = useState("all");

  const filteredCodes = faultCodes.filter((fault) => {
    const matchesSearch =
      fault.code.toLowerCase().includes(search.toLowerCase()) ||
      fault.description.toLowerCase().includes(search.toLowerCase()) ||
      fault.cause.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severityFilter === "all" || fault.severity === severityFilter;
    const matchesModule = moduleFilter === "all" || fault.module === moduleFilter;
    return matchesSearch && matchesSeverity && matchesModule;
  });

  const criticalCount = faultCodes.filter((f) => f.severity === "critical").length;
  const warningCount = faultCodes.filter((f) => f.severity === "warning").length;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Fault Code Reference</h1>
        <p className="text-muted-foreground">Comprehensive database of VAG-specific DTCs with diagnosis steps.</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <Badge variant="outline" className="text-xs">{faultCodes.length} total codes</Badge>
          <Badge variant="destructive" className="text-xs">{criticalCount} critical</Badge>
          <Badge className="bg-amber-500 text-black text-xs">{warningCount} warning</Badge>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 flex-wrap items-start sm:items-center">
        <Input
          placeholder="Search code (P0011), description, or cause..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm text-sm"
        />
        <Select value={severityFilter} onValueChange={setSeverityFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Severities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="info">Info</SelectItem>
          </SelectContent>
        </Select>
        <Select value={moduleFilter} onValueChange={setModuleFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Module" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Modules</SelectItem>
            {modules.map((mod) => (
              <SelectItem key={mod.id} value={mod.id}>
                {mod.id} – {mod.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">
          Showing {filteredCodes.length} of {faultCodes.length} codes
        </span>
      </div>

      {filteredCodes.length > 0 ? (
        <div className="rounded-md border border-border bg-card overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px] whitespace-nowrap">Code</TableHead>
                <TableHead className="w-[70px]">Module</TableHead>
                <TableHead className="min-w-[180px]">Description</TableHead>
                <TableHead className="min-w-[260px]">Diagnosis / Cause</TableHead>
                <TableHead className="w-[100px]">Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCodes.map((fault) => (
                <TableRow key={`${fault.module}-${fault.code}`} className="hover:bg-muted/20 align-top">
                  <TableCell className="font-mono font-bold text-primary text-sm py-3 whitespace-nowrap">
                    {fault.code}
                  </TableCell>
                  <TableCell className="py-3">
                    <Link
                      href={`/module/${fault.module}`}
                      className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded border border-border hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {fault.module}
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium text-sm py-3 leading-snug">{fault.description}</TableCell>
                  <TableCell className="text-xs text-muted-foreground py-3 leading-relaxed">
                    <ExpandableCell text={fault.cause} />
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
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground border border-border rounded-md bg-card">
          <AlertTriangle className="h-10 w-10 opacity-30" />
          <p className="font-medium">No fault codes match your filters</p>
          <p className="text-sm opacity-70">Try a different search term or clear the filters</p>
        </div>
      )}
    </div>
  );
}
