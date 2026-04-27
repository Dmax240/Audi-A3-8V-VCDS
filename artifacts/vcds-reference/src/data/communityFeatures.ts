export interface CommunityFeature {
  id: string;
  module: string;
  moduleName: string;
  category: string;
  title: string;
  description: string;
  source: string;
  sourceUrl: string;
  status: "verified" | "community-tested" | "experimental";
  riskLevel: "low" | "medium" | "high";
  procedure: string[];
  whenToUse: string[];
  expectedOutcome: string;
  communityNotes?: string;
  reversible: boolean;
  warrantyImpact: "none" | "possible" | "likely";
  tags: string[];
}

export const communityFeatures: CommunityFeature[] = [
  {
    id: "5f-engineering-menu",
    module: "5F",
    moduleName: "Infotainment (MMI)",
    category: "MMI Engineering Access",
    title: "Engineering Menu Access",
    description: "Access hidden MMI engineering/diagnostic menu for advanced system information",
    source: "VW Vortex VCDS Modification Thread",
    sourceUrl: "https://www.vwvortex.com/threads/audi-a3-s3-8v-vcds-vag-com-modification-list.6898009/",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Press and hold the BACK button on MMI controller",
      "While holding BACK, press NAVIGATION button (top left)",
      "Hold both for 3-5 seconds until menu appears",
      "Engineering menu displays system diagnostics and module versions"
    ],
    whenToUse: [
      "Diagnosing MMI software issues",
      "Checking system module versions",
      "Advanced MMI troubleshooting"
    ],
    expectedOutcome: "Access to hidden diagnostic and system information menu",
    communityNotes: "Works on MIB2 head units; diagnostic/read-only interface with no risk",
    reversible: true,
    warrantyImpact: "none",
    tags: ["mmi", "diagnostics", "engineering", "hidden-features"]
  },
  {
    id: "5f-mmi-reboot",
    module: "5F",
    moduleName: "Infotainment (MMI)",
    category: "MMI System Control",
    title: "MMI Restart / Full Reboot",
    description: "Perform complete MMI system restart to resolve software freezes and connectivity issues",
    source: "Audizine A3 8V Forum",
    sourceUrl: "https://www.audizine.com/forum/",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Press and hold MENU button on MMI for 10 seconds",
      "Screen will go black (normal behavior)",
      "Press CONFIRM button while screen is black",
      "Press NAVIGATION button 3 times in sequence",
      "System reboots - approximately 30 seconds for full restart",
      "Once restarted, Bluetooth and navigation recalibrate automatically"
    ],
    whenToUse: [
      "Infotainment frozen or unresponsive",
      "Bluetooth connection stuck or not detecting devices",
      "Navigation crashing or corrupting map data",
      "After module replacement (5F swap)"
    ],
    expectedOutcome: "Full MMI system reboot with automatic recalibration",
    communityNotes: "No additional calibration required after reboot; all functions resume normally",
    reversible: true,
    warrantyImpact: "none",
    tags: ["mmi", "bluetooth", "navigation", "troubleshooting"]
  },
  {
    id: "17-virtual-cockpit-gauges",
    module: "17",
    moduleName: "Instrument Cluster",
    category: "Virtual Cockpit Customization",
    title: "Virtual Cockpit Custom Gauge Display",
    description: "Customize virtual cockpit to display boost pressure, torque, G-force, and other real-time metrics",
    source: "VAG-Coding.net A3 8V Guide",
    sourceUrl: "https://www.vag-coding.net/audi/a3-8v/",
    status: "verified",
    riskLevel: "medium",
    procedure: [
      "Access Module 17 via VCDS with security code 11046",
      "Navigate to Long Coding section",
      "Modify coding values for Virtual Cockpit display options",
      "Select desired gauge from: Boost, Torque, Engine Load, Oil Temp, Coolant Temp, Fuel Consumption, G-Force, Tire Pressure",
      "Save changes and test in vehicle"
    ],
    whenToUse: [
      "Performance monitoring during spirited driving",
      "Real-time boost pressure verification",
      "Turbo health monitoring",
      "Engine load assessment"
    ],
    expectedOutcome: "Custom gauge displayed on Virtual Cockpit with real-time values",
    communityNotes: "Boost gauge particularly popular among TSI owners for turbo monitoring",
    reversible: true,
    warrantyImpact: "none",
    tags: ["cluster", "virtual-cockpit", "performance", "boost", "customization"]
  },
  {
    id: "61-advanced-battery-monitoring",
    module: "61",
    moduleName: "Battery Management",
    category: "Battery System Monitoring",
    title: "Advanced Battery Health Monitoring",
    description: "Access undocumented live data channels for detailed battery health and charging analysis",
    source: "Ross-Tech Wiki - Battery Systems",
    sourceUrl: "https://wiki.ross-tech.com/wiki/Audi_A3_8V",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Access Module 61 via VCDS",
      "Navigate to Live Data channels",
      "Monitor: Charging Current (A), Battery Internal Resistance (mΩ), Regen Braking Status (%)",
      "Cross-reference with Start-Stop Cycle Count for battery health estimation"
    ],
    whenToUse: [
      "Battery frequently dying despite normal driving",
      "Start-stop malfunctioning in cold weather",
      "After battery replacement (mandatory registration)",
      "Performance tuning analysis"
    ],
    expectedOutcome: "Detailed battery health metrics and charging strategy visualization",
    communityNotes: "Battery internal resistance <5mΩ indicates good health; >20mΩ suggests replacement needed",
    reversible: true,
    warrantyImpact: "none",
    tags: ["battery", "diagnostics", "live-data", "health-monitoring"]
  },
  {
    id: "08-advanced-window-control",
    module: "08",
    moduleName: "Comfort System",
    category: "Window Control Enhancement",
    title: "Advanced Window Control Features",
    description: "Unlock one-touch window drop, rain-sensor auto-close, and pinch detection tuning",
    source: "BT Performance Garage - Hidden Features",
    sourceUrl: "https://btperformancegarage.com/audi-a3-8v-hidden-features-activation/",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Access Module 08 with security code 31347",
      "Find 'Window one-touch sensitivity' adaptation channel",
      "Find 'Rain sensor window control' adaptation (set: Inactive → Active)",
      "Find 'Window pinch force detection' and adjust 1.0-5.0 Nm range",
      "Default one-touch: 2.0 seconds | Community preference: 1.0 second"
    ],
    whenToUse: [
      "Protecting interior on unexpected rain",
      "Faster one-touch window response",
      "Child safety (lower pinch detection threshold)"
    ],
    expectedOutcome: "Enhanced window control with automatic rain protection and customizable sensitivity",
    communityNotes: "Setting pinch detection too low can prevent full window closure; test before driving",
    reversible: true,
    warrantyImpact: "none",
    tags: ["comfort", "windows", "weather-protection", "safety"]
  },
  {
    id: "02-launch-control-tuning",
    module: "02",
    moduleName: "Transmission",
    category: "DSG Performance Tuning",
    title: "Launch Control Intensity Tuning",
    description: "Customize DQ381 DSG launch control for different driving scenarios and RPM holds",
    source: "VW Vortex DSG Performance Thread",
    sourceUrl: "https://www.vwvortex.com/threads/",
    status: "community-tested",
    riskLevel: "medium",
    procedure: [
      "Access Module 02 via VCDS with security code 01138",
      "Navigate to Adaptations: 'Launch Control Intensity'",
      "Select setting: Off | Mild | Standard | Aggressive | Sport",
      "Monitor Module 02 Live Data: 'Transmission Fluid Temp' (normal: 60-90°C)",
      "Test launches in manual mode (shifter in M position) with Drive Select in Sport"
    ],
    whenToUse: [
      "Track days or competition driving",
      "Customizing acceleration feel",
      "Performance tuning"
    ],
    expectedOutcome: "Enhanced launch performance with customizable slip and RPM hold",
    communityNotes: "Aggressive/Sport settings increase transmission fluid temperature; monitor closely. Max safe temp: 110°C",
    reversible: true,
    warrantyImpact: "possible",
    tags: ["transmission", "performance", "dsg", "launch-control"]
  },
  {
    id: "44-advanced-steering-tuning",
    module: "44",
    moduleName: "Steering / EPS",
    category: "EPS Customization",
    title: "Advanced Steering Weight & Lane Assist Tuning",
    description: "Fine-tune EPS steering weight with intermediate decimal values and customize lane assist sensitivity",
    source: "VAG-Coding.net Steering Guide",
    sourceUrl: "https://www.vag-coding.net/audi/a3-8v/",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Access Module 44 via VCDS",
      "Find 'EPS Weight Settings' adaptation channel",
      "Standard options: Light (2.0) | Comfort (2.5) | Normal (3.0) | Sport (3.5)",
      "Enter intermediate values (e.g., 2.3 for between Light and Comfort)",
      "For Lane Assist: Modify sensitivity range 0-10 (default: 5)",
      "Test in different drive modes and save preferred profile"
    ],
    whenToUse: [
      "Fine-tuning steering response for personal preference",
      "Reducing lane assist steering correction intensity",
      "Performance-oriented suspension/steering matching"
    ],
    expectedOutcome: "Customized steering feel with precise weight adjustment and lane assist response",
    communityNotes: "Setting lane assist >7 can cause jerky steering on lane markings; not recommended for highway speeds",
    reversible: true,
    warrantyImpact: "none",
    tags: ["steering", "eps", "lane-assist", "customization"]
  },
  {
    id: "09-dynamic-drl-features",
    module: "09",
    moduleName: "Central Electronics / Lighting",
    category: "DRL Customization",
    title: "Dynamic DRL Pulse & Brightness Override",
    description: "Enable pulsing DRL during approach and customize DRL brightness for visual preference",
    source: "Audizine A3 8V Lighting Thread",
    sourceUrl: "https://www.audizine.com/forum/",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Disable standard DRL (Module 09: 'Daytime Running Lights' = Off)",
      "Enable 'Coming Home' feature (Module 08 adaptation)",
      "DRLs will pulse/flash during approach (configurable 3-30 seconds)",
      "For brightness: Find 'DRL Brightness Level' adaptation (50-100%)",
      "Default: 75% | Community preference: 100% for visibility or 50% for elegance"
    ],
    whenToUse: [
      "Anti-theft visual indicator",
      "Personal preference for DRL appearance",
      "Weather-specific visibility optimization"
    ],
    expectedOutcome: "Dynamic DRL pulsing with customizable brightness and duration",
    communityNotes: "Below 60% DRL brightness may not meet legal requirements; verify local regulations",
    reversible: true,
    warrantyImpact: "none",
    tags: ["lighting", "drl", "customization", "safety"]
  },
  {
    id: "01-boost-pressure-monitoring",
    module: "01",
    moduleName: "Engine Control",
    category: "Boost Monitoring & Diagnostics",
    title: "Custom Boost Pressure Measuring Blocks",
    description: "Access real-time turbo boost pressure via measuring blocks for diagnostics and performance monitoring",
    source: "Audizine Boost Gauge Thread + Ross-Tech VCDS",
    sourceUrl: "https://www.audizine.com/forum/showthread.php/745493-Boost-Gauge-Activation-(Vagcom)/",
    status: "verified",
    riskLevel: "low",
    procedure: [
      "Access Module 01 via VCDS",
      "Select 'Measuring Blocks'",
      "Choose Block 115 for 'Requested vs Actual Boost'",
      "Block updates 10 times per second",
      "Display shows: 'Requested: X kPa | Actual: Y kPa'",
      "Use VCDS Graph tool to log and plot data"
    ],
    whenToUse: [
      "Diagnosing turbo wastegate issues",
      "Performance mapping and boost curve analysis",
      "Identifying boost pressure sensor drift",
      "Verifying turbo health and response"
    ],
    expectedOutcome: "Real-time boost pressure data with CSV logging capability",
    communityNotes: "Normal values: 0 kPa idle, 50-60 kPa city, 75-95 kPa highway, 100-140 kPa WOT. Map sensor max: 2540 mbar (22.3 psi)",
    reversible: true,
    warrantyImpact: "none",
    tags: ["boost", "diagnostics", "turbo", "performance", "live-data"]
  },
  {
    id: "19-disable-start-stop",
    module: "19",
    moduleName: "CAN Gateway",
    category: "Start-Stop System",
    title: "Disable Start-Stop Function via CAN Gateway",
    description: "Permanently disable automatic engine shut-off at traffic lights via network-level configuration",
    source: "VAG-Coding.net MQB Modifications",
    sourceUrl: "https://www.vag-coding.net/",
    status: "community-tested",
    riskLevel: "low",
    procedure: [
      "Access Module 19 (CAN Gateway) via VCDS",
      "Security Code: 31347",
      "Find 'Start-Stop System Management' adaptation channel",
      "Change from 'Active' to 'Inactive'",
      "System-wide start-stop disabled across entire CAN network"
    ],
    whenToUse: [
      "Battery health concerns",
      "DSG transmission wear reduction",
      "Cold weather operation",
      "Personal driving preference"
    ],
    expectedOutcome: "Complete disabling of start-stop across all vehicle systems",
    communityNotes: "Network-level disable prevents any auto-shutoff; reversible by re-enabling adaptation",
    reversible: true,
    warrantyImpact: "none",
    tags: ["start-stop", "battery", "transmission", "network"]
  },
  {
    id: "mqb-engineering-mode",
    module: "Multi",
    moduleName: "MQB Platform Engineering",
    category: "Development Mode Access",
    title: "MQB Engineering Mode & Development Logins",
    description: "Advanced engineering access for development-level module tuning and hidden feature unlocks",
    source: "MQB.pl Security Access Guide",
    sourceUrl: "https://mqb.pl/en/security-access-logins-for-mqb-platform-vcds-odis-vcp/",
    status: "community-tested",
    riskLevel: "high",
    procedure: [
      "Launch VCDS with engineering capability (or ODIS Engineering / VCP software)",
      "Use special development login: S12345, S11111, 15090, or 63522",
      "Enter appropriate security codes for target module",
      "Access development-level adaptation channels",
      "Make changes incrementally with live data verification"
    ],
    whenToUse: [
      "Advanced tuning beyond standard VCDS",
      "Development-level feature unlocks",
      "Deep system customization",
      "Professional technical diagnostics"
    ],
    expectedOutcome: "Access to development mode features and hidden long coding options",
    communityNotes: "Unlocks lane assist deactivation, heated seats details, post-heat duration (0-120 min), advanced CAN configs",
    reversible: true,
    warrantyImpact: "likely",
    tags: ["engineering", "development", "advanced", "mqb", "security-codes"]
  }
];

export function getCommunityFeaturesByModule(moduleId: string): CommunityFeature[] {
  return communityFeatures.filter(f => f.module === moduleId || f.module === "Multi");
}

export function getCommunityFeaturesByRisk(riskLevel: string): CommunityFeature[] {
  return communityFeatures.filter(f => f.riskLevel === riskLevel);
}

export function searchCommunityFeatures(query: string): CommunityFeature[] {
  const lowerQuery = query.toLowerCase();
  return communityFeatures.filter(f =>
    f.title.toLowerCase().includes(lowerQuery) ||
    f.description.toLowerCase().includes(lowerQuery) ||
    f.category.toLowerCase().includes(lowerQuery) ||
    f.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
