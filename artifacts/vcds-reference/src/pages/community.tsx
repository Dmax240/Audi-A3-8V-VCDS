import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { communityFeatures, searchCommunityFeatures } from "@/data/communityFeatures";
import { AlertTriangle, Users, ExternalLink, Shield } from "lucide-react";

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  const filteredFeatures = searchQuery
    ? searchCommunityFeatures(searchQuery)
    : communityFeatures;

  const riskFilteredFeatures = selectedRisk
    ? filteredFeatures.filter(f => f.riskLevel === selectedRisk)
    : filteredFeatures;

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const getWarrantyColor = (impact: string) => {
    switch (impact) {
      case "none":
        return "bg-green-500/10 text-green-300";
      case "possible":
        return "bg-yellow-500/10 text-yellow-300";
      case "likely":
        return "bg-red-500/10 text-red-300";
      default:
        return "bg-gray-500/10 text-gray-300";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Community-Discovered Features</h1>
        <p className="text-muted-foreground">
          Verified procedures and undocumented customizations discovered by the Audi A3 8V VCDS community
        </p>
      </div>

      <Alert className="border-blue-500/30 bg-blue-500/10">
        <Users className="h-4 w-4 text-blue-400" />
        <AlertTitle className="text-blue-300">Community-Verified Content</AlertTitle>
        <AlertDescription className="text-blue-200 text-sm">
          All features marked with [COMMUNITY] are discovered and tested by DIY enthusiasts and independent technicians,
          NOT officially documented by Audi or Ross-Tech. While thoroughly tested, proceed with caution and backup your VCDS data first.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Search community features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-background border-border"
          />

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" onClick={() => setSelectedRisk(null)}>
                All ({filteredFeatures.length})
              </TabsTrigger>
              <TabsTrigger value="low" onClick={() => setSelectedRisk("low")}>
                Low Risk
              </TabsTrigger>
              <TabsTrigger value="medium" onClick={() => setSelectedRisk("medium")}>
                Medium Risk
              </TabsTrigger>
              <TabsTrigger value="high" onClick={() => setSelectedRisk("high")}>
                High Risk
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {riskFilteredFeatures.map((feature) => (
                <CommunityFeatureCard key={feature.id} feature={feature} getRiskColor={getRiskColor} getWarrantyColor={getWarrantyColor} />
              ))}
            </TabsContent>
            <TabsContent value="low" className="space-y-4 mt-4">
              {riskFilteredFeatures.filter(f => f.riskLevel === "low").map((feature) => (
                <CommunityFeatureCard key={feature.id} feature={feature} getRiskColor={getRiskColor} getWarrantyColor={getWarrantyColor} />
              ))}
            </TabsContent>
            <TabsContent value="medium" className="space-y-4 mt-4">
              {riskFilteredFeatures.filter(f => f.riskLevel === "medium").map((feature) => (
                <CommunityFeatureCard key={feature.id} feature={feature} getRiskColor={getRiskColor} getWarrantyColor={getWarrantyColor} />
              ))}
            </TabsContent>
            <TabsContent value="high" className="space-y-4 mt-4">
              {riskFilteredFeatures.filter(f => f.riskLevel === "high").map((feature) => (
                <CommunityFeatureCard key={feature.id} feature={feature} getRiskColor={getRiskColor} getWarrantyColor={getWarrantyColor} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {riskFilteredFeatures.length === 0 && (
        <Card className="border-border">
          <CardContent className="pt-6 text-center text-muted-foreground">
            No community features found matching your search.
          </CardContent>
        </Card>
      )}

      <Card className="border-border bg-background/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            Important Safety & Warranty Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">⚠️ Warranty Impact</p>
            <p className="text-muted-foreground">
              Community modifications may void manufacturer warranties. Review each feature's warranty impact before proceeding.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">✓ Always Reversible</p>
            <p className="text-muted-foreground">
              All changes documented here are reversible through standard VCDS reset. Always backup your current settings before making modifications.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">🔧 Verification Required</p>
            <p className="text-muted-foreground">
              Use live data monitoring to verify changes. Test in controlled environment before highway use.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">🌍 Regional Regulations</p>
            <p className="text-muted-foreground">
              Some modifications (lighting, emissions) may violate regional automotive regulations. Verify local laws before implementation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CommunityFeatureCard({ feature, getRiskColor, getWarrantyColor }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-border hover:border-primary/50 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <Badge variant="outline" className="text-xs">
                [{feature.module}]
              </Badge>
            </div>
            <CardDescription>{feature.category}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge className={`${getRiskColor(feature.riskLevel)} border`}>
              {feature.riskLevel.charAt(0).toUpperCase() + feature.riskLevel.slice(1)} Risk
            </Badge>
            <Badge className={`${getWarrantyColor(feature.warrantyImpact)} border border-transparent`}>
              {feature.warrantyImpact}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{feature.description}</p>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">EXPECTED OUTCOME</p>
            <p className="text-sm">{feature.expectedOutcome}</p>
          </div>

          {feature.communityNotes && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">COMMUNITY NOTES</p>
              <p className="text-sm">{feature.communityNotes}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? "Hide Details ▼" : "Show Procedure & Details ▶"}
        </button>

        {expanded && (
          <div className="space-y-4 pt-4 border-t border-border">
            {feature.procedure.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-2">PROCEDURE</p>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  {feature.procedure.map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-semibold text-primary">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {feature.whenToUse.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-2">WHEN TO USE</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {feature.whenToUse.map((use, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {feature.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="pt-2 border-t border-border">
              <a
                href={feature.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                {feature.source}
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Shield className="h-3 w-3" />
              <span>
                {feature.reversible ? "✓ Reversible" : "✗ Not reversible"}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
