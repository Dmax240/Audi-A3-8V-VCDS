import { useState } from "react";
import { securityCodes } from "@/data/securityCodes";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function SecurityCodes() {
  const [search, setSearch] = useState("");

  const filtered = securityCodes.filter(
    (item) =>
      item.module.toLowerCase().includes(search.toLowerCase()) ||
      item.moduleName.toLowerCase().includes(search.toLowerCase()) ||
      item.codes.toLowerCase().includes(search.toLowerCase()) ||
      item.purpose.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Security Access Codes</h1>
        <p className="text-muted-foreground">Reference for module security access codes required for adaptations and coding.</p>
      </div>

      <Alert className="bg-muted/50 border-primary/20">
        <Info className="h-4 w-4 text-primary" />
        <AlertTitle className="text-primary font-medium">How to Enter a Security Code</AlertTitle>
        <AlertDescription className="text-muted-foreground mt-2">
          <ol className="list-decimal list-inside space-y-1 ml-2 font-mono text-sm">
            <li>Open the target module (e.g. 09 – Cent. Elect.)</li>
            <li>Click <strong>[Security Access – 16]</strong></li>
            <li>Enter the 5-digit code shown below</li>
            <li>Click <strong>[Do It!]</strong></li>
            <li>Wait for the "Security access granted!" confirmation message</li>
          </ol>
        </AlertDescription>
      </Alert>

      <div className="flex items-center gap-4 justify-between">
        <Input
          placeholder="Search module name, ID, or purpose..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm text-sm"
        />
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {filtered.length} of {securityCodes.length} entries
        </span>
      </div>

      <div className="rounded-md border border-border bg-card overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[70px]">Module</TableHead>
              <TableHead className="w-[180px]">Name</TableHead>
              <TableHead className="w-[140px]">Code</TableHead>
              <TableHead>Purpose</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <TableRow key={item.module} className="hover:bg-muted/20">
                  <TableCell>
                    <Link
                      href={`/module/${item.module}`}
                      className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded border border-border hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {item.module}
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium text-sm">{item.moduleName}</TableCell>
                  <TableCell>
                    {item.codes !== "None required" && item.codes !== "Varies" ? (
                      <span className="font-mono font-bold text-primary tracking-widest bg-primary/10 px-2 py-1 rounded text-sm">
                        {item.codes}
                      </span>
                    ) : (
                      <span className="text-muted-foreground italic text-sm">{item.codes}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{item.purpose}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                  <Shield className="h-8 w-8 opacity-30 mx-auto mb-2" />
                  No security codes match your search
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
