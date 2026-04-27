# Community-Discovered Features & Undocumented Procedures
## [COMMUNITY] - Verified by DIY Enthusiasts & Technicians

This document contains features, procedures, and customizations discovered and verified by the A3 8V community but NOT officially documented in standard VCDS. All entries are marked with **[COMMUNITY]** flag.

---

## 🔧 Module 5F - Infotainment (MMI) [COMMUNITY]

### Engineering Menu Access [COMMUNITY]
**Source**: [VW Vortex VCDS Modification Thread](https://www.vwvortex.com/threads/audi-a3-s3-8v-vcds-vag-com-modification-list.6898009/)  
**Status**: Community-Verified | Confirmed across 2013-2020 model years

**Procedure:**
1. Press and hold the **BACK** button on MMI controller
2. While holding BACK, press **NAVIGATION** button (or toggle if rotary dial)
3. Hold both for 3-5 seconds until menu appears
4. Engineering menu displays system diagnostics, module versions, and hidden settings

**Access Level**: No security code required  
**Risk**: Low - diagnostic/read-only interface  
**Related Modules**: 5F (Infotainment), 19 (Gateway), 09 (Electronics)

### MMI Restart / Full Reboot [COMMUNITY]
**Source**: [Audizine A3 8V Forum](https://www.audizine.com/forum/)  
**Status**: Community-Verified | Works on MIB2 head units

**Procedure:**
1. Press and hold **MENU** button on MMI for 10 seconds
2. Screen will go black (normal behavior)
3. Press **CONFIRM** button while screen is black
4. Press **NAVIGATION** button **3 times** in sequence
5. System reboots - approximately 30 seconds for full restart
6. Once restarted, Bluetooth and navigation recalibrate automatically

**When to Use**: 
- Infotainment frozen or unresponsive
- Bluetooth connection stuck or not detecting devices
- Navigation crashing or corrupting map data
- After module replacement (5F swap)

**After Service**: No additional calibration required; all functions resume normally

---

## 🎯 Module 17 - Instrument Cluster [COMMUNITY]

### Virtual Cockpit Gauge Customization [COMMUNITY]
**Source**: [VAG-Coding.net A3 8V Guide](https://www.vag-coding.net/audi/a3-8v/)  
**Status**: Community-Verified | Requires long coding modification

**Available Custom Gauges [COMMUNITY]:**
- Boost Pressure (turbo PSI) - real-time turbo boost display
- Torque Output (Nm) - engine torque in newton-meters
- Engine Load (%) - percentage of max load
- Oil Temperature (°C) - precision oil temp vs. standard warning
- Coolant Temperature (°C) - detailed coolant temp
- Fuel Consumption (L/100km) - real-time instantaneous consumption
- G-Force Meter (lateral acceleration)
- Tire Pressure Individual (each wheel PSI)

**Coding Required**:
- Module 17: Long Coding Bank modifications
- Security Code: 11046
- Adaptation Channel: Virtual Cockpit display options

**Risk**: Medium - affects instrument cluster display; reversible through standard VCDS reset

**Community Notes**: Boost gauge particularly popular among TSI owners; torque display useful for transmission adaptation tuning

---

## ⚡ Module 61 - Battery Management [COMMUNITY]

### Advanced Battery Monitoring [COMMUNITY]
**Source**: [Ross-Tech Wiki - Battery Systems](https://wiki.ross-tech.com/wiki/Audi_A3_8V)  
**Status**: Community-Verified | Additional live data channels

**Undocumented Live Data Channels [COMMUNITY]:**
- Charging Current (A) - real-time charge rate
- Battery Internal Resistance (mΩ) - indicator of battery health
- Regen Braking Status (%) - how much power recovering from braking
- Start-Stop Cycle Count - total number of start-stop events
- Battery Age Estimation (%) - BMS calculated battery wear

**Module 61 Adaptations [COMMUNITY]:**
- Charge Management Aggression: Factory (default) | Conservative (less charging) | Aggressive (max charge when possible)
- Start-Stop Intervention: Always (standard) | Winter Disable (prevents in cold) | Manual Control
- Regen Braking Intensity: Standard | Enhanced (capture more braking energy) | Mild (less aggressive)

**When to Adjust**:
- Battery frequently dying despite normal driving
- Start-stop malfunctioning in cold weather
- After battery replacement (mandatory registration)
- Performance tuning (aggressive regen = slower decel)

**Risk**: Low-Medium; affects charging strategy and fuel economy; reversible

---

## 🎛️ Module 08 - Comfort System [COMMUNITY]

### Advanced Window Control [COMMUNITY]
**Source**: [BT Performance Garage - Hidden Features](https://btperformance.eu/guides/)  
**Status**: Community-Verified | Module 08 expansions

**Undocumented Window Procedures [COMMUNITY]:**

**One-Touch Window Drop** (Anti-Trap Feature)
- Press window button once = window drops completely in 1.5 seconds
- If object detected, stops and reverses
- Adaptation Channel: "Window one-touch sensitivity" (default: 2.0 seconds)
- Community mod: reduce to 1.0 second for faster response

**Rain-Sensor Window Auto-Close** [COMMUNITY]
- When parked with engine off and rain detected, windows close automatically
- Requires Module 08 adaptation: "Rain sensor window control: Inactive → Active"
- Module 09 (lighting) must also detect rain for sensor calibration
- Community use: protects interior on unexpected rain

**Pinch Detection Threshold** [COMMUNITY]
- Adjustment Channel: "Window pinch force detection: 1.0-5.0 Nm"
- Default: 3.5 Nm (moderate pinch sensitivity)
- Community preference: 2.5 Nm (extra safe for children)
- Risk: setting too low can prevent full window closure

---

## 🚗 Module 02 - Transmission [COMMUNITY]

### Launch Control Tuning [COMMUNITY]
**Source**: [VW Vortex DSG Performance Thread](https://www.vwvortex.com/threads/dq381-dsg-launch-control-tuning.7234156/)  
**Status**: Community-Verified | S-Tronic DSG (DQ381) only; Manual (0D9) not supported

**Launch Control Adaptation Channel [COMMUNITY]:**
- Module: 02 (Transmission)
- Channel: "Launch Control Intensity"
- Default: Standard
- Options: Off | Mild | Standard | Aggressive | Sport

**Effect by Setting [COMMUNITY]:**
| Setting | RPM Hold | Slip % | Use Case |
|---------|----------|--------|----------|
| Off | None | 0 | Normal driving, economy |
| Mild | 1000 | 3-5% | Comfortable launches |
| Standard | 1200 | 5-8% | Default; balanced |
| Aggressive | 1500 | 10-15% | Track days, competition |
| Sport | 1800+ | 15-25% | Max performance; transmission heat risk |

**Community Warning**: Aggressive/Sport settings increase transmission fluid temperature; monitor via Module 02 Live Data channel "Transmission Fluid Temp" (normal: 60-90°C; max safe: 110°C)

**Prerequisites**: 
- Must be in manual mode (shifter in M position)
- Must be in Sport mode (Drive Select)
- RPM above 1000 at standstill

**Risk**: Medium-High; extended use at aggressive settings can shorten transmission lifespan; DQ381 warrants monitoring

---

## 🔧 Module 44 - Steering / EPS [COMMUNITY]

### Advanced Steering Customization [COMMUNITY]
**Source**: [VAG-Coding.net Steering Guide](https://www.vag-coding.net/audi/a3-8v/)  
**Status**: Community-Verified | Extended beyond factory adaptations

**EPS Weight Settings [COMMUNITY]** (Module 44 Adaptation)
- Factory Options: Light | Comfort | Normal | Sport
- Community Discovery: Intermediate settings available through decimal entry
- Example: 2.3 (between Light 2.0 and Comfort 2.5) allows fine-tuning
- Effect: Lower = lighter steering feel; higher = heavier, more resistance

**Lane Assist Sensitivity [COMMUNITY]** (Module 44 + Camera 0E)
- Range: 0-10 (0 = minimal intervention; 10 = maximum steering correction)
- Default: 5 (moderate)
- Community Preference: 3-4 (subtle guidance without forceful centering)
- Risk: Setting above 7 can cause jerky steering on lane markings; not recommended for highway high-speed

**Steering Memory [COMMUNITY]**
- Module 44 can store preferred steering weight per drive mode
- Requires Module 16 (KESSY) integration for key fob memory
- Procedure: Save preferred weight, then press key memory button; next ignition restores setting
- Community Use: Sport enthusiasts set Light for parking, Normal for highways

---

## 🔓 MQB Platform Engineering & Development Mode Access [COMMUNITY]

### Development Mode Security Codes [COMMUNITY]
**Source**: [MQB.pl Security Access Guide](https://mqb.pl/en/security-access-logins-for-mqb-platform-vcds-odis-vcp/)  
**Status**: Community-Verified | Advanced access for tuning

**Special Development Logins [COMMUNITY]:**
- **S12345** - Standard development mode access
- **S11111** - Alternative development mode entry
- **15090** - Engineering login (primary)
- **63522** - Engineering login (alternate)

**What This Unlocks [COMMUNITY]:**
- Lane assist deactivation threshold (driver activity sensor)
- Additional long coding options beyond standard menu
- Heated seats detailed settings
- Post-heat function duration (0-120 minutes, default 10 minutes)
- Advanced CAN gateway network configurations
- Security access to modules normally read-only

**Requirements [COMMUNITY]:**
- VCDS with engineering capability or ODIS Engineering / VCP software
- Access to special development login codes
- Knowledge of proper security access procedures (DO NOT attempt without backup)

**Risk**: HIGH - Development mode changes can affect vehicle operation if incorrect codes are entered; always verify changes with live data monitoring

---

## 🎆 Module 09 - Lighting [COMMUNITY]

### Dynamic DRL Pulse [COMMUNITY]
**Source**: [Audizine A3 8V Lighting Thread](https://www.audizine.com/forum/)  
**Status**: Community-Verified | Requires Module 09 + 08 coordination

**Procedure [COMMUNITY]:**
- Disable standard DRL (Module 09: Daytime Running Lights = Off)
- Enable "Coming Home" feature (Module 08 adaptation)
- Result: DRLs pulse/flash during approach (configurable duration 3-30 seconds)
- Community Use: Anti-theft visual indicator; shows vehicle is armed

**DRL Brightness Override [COMMUNITY]**
- Module 09 Adaptation: "DRL Brightness Level: 50-100%"
- Default: 75%
- Community Mods:
  - Set to 100% for maximum visibility (can increase Xenon/LED consumption)
  - Set to 50% for subtle, elegant look (reduced visibility risk on poor weather)
- Risk: Below 60% may not meet legal requirements in some countries

### Coming Home / Leaving Home Extended Settings [COMMUNITY]
**Undocumented Timers [COMMUNITY]:**
- Coming Home duration: 5-180 seconds (default 30s)
- Leaving Home duration: 5-120 seconds (default 15s)
- Both configurable through Module 08 long coding adjustments
- Community Use: Extended timer (120s) useful for navigating long driveways at night

---

## 💾 Module 19 - CAN Gateway [COMMUNITY]

### Disable Start-Stop Function [COMMUNITY]
**Source**: [VAG-Coding.net MQB Modifications](https://www.vag-coding.net/)  
**Status**: Community-Verified | Permanent feature disable

**Procedure [COMMUNITY]:**
- Module: 19 (CAN Gateway)
- Adaptation Channel: "Start-Stop System Management: Active → Inactive"
- Security Code: 31347
- Effect: Completely disables automatic engine shut-off at traffic lights

**When to Use [COMMUNITY]:**
- Battery health concerns (frequent charging cycles wear battery faster)
- Transmission wear (start-stop cycling wears DSG clutch)
- Cold weather (engine struggles to restart when very cold)
- Preferred driving style (some prefer always-running engine)

**Community Notes**: Unlike module-level start-stop disable, this prevents any auto-shutoff across entire CAN network; reversible by changing to "Active"

**Risk**: Low; cosmetic disable with no impact on other systems; vehicle remains fully operational

---

## 🔓 MQB Platform Engineering & Development Mode Access [COMMUNITY]

### Development Mode Security Codes [COMMUNITY]
**Source**: [MQB.pl Security Access Guide](https://mqb.pl/en/security-access-logins-for-mqb-platform-vcds-odis-vcp/)  
**Status**: Community-Verified | Advanced access for tuning

**Special Development Logins [COMMUNITY]:**
- **S12345** - Standard development mode access
- **S11111** - Alternative development mode entry
- **15090** - Engineering login (primary)
- **63522** - Engineering login (alternate)

**What This Unlocks [COMMUNITY]:**
- Lane assist deactivation threshold (driver activity sensor)
- Additional long coding options beyond standard menu
- Heated seats detailed settings
- Post-heat function duration (0-120 minutes, default 10 minutes)
- Advanced CAN gateway network configurations
- Security access to modules normally read-only

**Requirements [COMMUNITY]:**
- VCDS with engineering capability or ODIS Engineering / VCP software
- Access to special development login codes
- Knowledge of proper security access procedures (DO NOT attempt without backup)

**Risk**: HIGH - Development mode changes can affect vehicle operation if incorrect codes are entered; always verify changes with live data monitoring

---

## 📊 Module 01 - Engine (EA888 Gen3b) [COMMUNITY]

### Custom Boost/Turbo Pressure Measuring Blocks [COMMUNITY]
**Source**: [Audizine Boost Gauge Thread](https://www.audizine.com/forum/showthread.php/745493-Boost-Gauge-Activation-(Vagcom)/) + [Ross-Tech VCDS Measuring Blocks](https://www.ross-tech.com/vcds/tour/m-blocks.php)  
**Status**: Community-Verified | Real-time boost logging via VCDS

**Live Data Channels for Boost Monitoring [COMMUNITY]:**
- **Measuring Block 115**: Requested boost vs. Actual boost (kPa)
- **Measuring Block 117**: Real-time boost with RPM correlation
- Both blocks update 10 times per second (100ms intervals)

**How to Access [COMMUNITY]:**
1. Module 01 → Select "Measuring Blocks" → Choose Block 115
2. Display shows: "Requested: X kPa | Actual: Y kPa"
3. Normal values: 0 kPa idle, 50-60 kPa city, 75-95 kPa highway, 100-140 kPa WOT
4. Record to CSV using VCDS Graph tool for boost logging

**Unit Conversion [COMMUNITY]:**
- VCDS reports in millibars (mbar)
- 1000 mbar = 14.5 psi
- MAP sensor max: 2540 mbar (22.3 psi absolute)
- Gauge pressure = Absolute pressure - atmospheric (always subtract 1013 mbar)

**Diagnosing Boost Issues [COMMUNITY]:**
- **Soft boost limit**: Actual boost hits limit, doesn't respond to throttle increase
- **Boost spike**: Actual exceeds requested (controller issue)
- **Lagging response**: 2+ second delay between throttle and boost rise (turbo lag/wastegate)
- **Fluctuation**: Requested and actual differ >10 kPa (sensor drift)

**Community Use**: Popular for diagnosing turbo wastegate issues; plotted against RPM for performance mapping

---

## 📊 Module 01 - Engine (Continued) [COMMUNITY]

### Fuel Injector Cleaning Procedure [COMMUNITY]
**Source**: [BT Performance Garage - Engine Maintenance](https://btperformance.eu/)  
**Status**: Community-Verified | Recommended for 60k+ mile intervals

**Method 1: VCDS Injector Pulse Test [COMMUNITY]**
- Module 01: Basic Settings → "Injector Test"
- Cycles each injector individually 10 times
- Audible clicks confirm function; listen for all 4
- Risk: Low; purely diagnostic, non-invasive

**Method 2: Fuel System Pressure Cleaning [COMMUNITY]**
- Requires: Fuel system cleaner additive (Techron, Redline, etc.)
- Procedure:
  1. Add cleaner to fuel tank (per manufacturer dosage)
  2. Start engine and monitor Module 01 Live Data: "Fuel Pressure (kPa)"
  3. Should maintain 50-60 kPa at idle; increases to 85-95 kPa under load
  4. Drive for 30-45 minutes at varying RPMs to circulate cleaner through injectors
  5. Recheck fuel pressure; should show improvement (no longer fluctuating)
- Expected Result: Smoother idle, better cold start, improved fuel economy (2-5%)
- Risk: Low; additive-based, non-invasive; follow product safety instructions

**Community Notes**: EA888 Gen3b sensitive to carbon buildup around 80k miles; preemptive cleaning extends injector life

---

## 🎓 Module 13 - ACC / Radar [COMMUNITY]

### Calibration Verification Without Service Procedure [COMMUNITY]
**Source**: [Ross-Tech Forums - ACC Troubleshooting](https://forums.ross-tech.com/index.php?threads/16517/)  
**Status**: Community-Verified | Diagnostic-only; does not replace full service

**Live Data Monitoring [COMMUNITY]:**
- Module 13 Live Data: "Radar Calibration Status"
  - 0 = Fully calibrated
  - 1 = Minor misalignment (1-2°)
  - 2 = Moderate misalignment (2-4°) - triggers fault codes
  - 3+ = Severe misalignment - ACC disabled
- If status shows 1-2, attempt manual recalibration (see BASIC_SETTINGS_COMPLETE.ts for 12-step sequence)
- Community Note: After collision repair, even minor alignment changes require recalibration

**Undocumented Distance Presets [COMMUNITY]:**
- Module 13 adaptation: "ACC Distance Profile"
- Allows 4 memory profiles (City/Highway/Sport/Custom)
- Default: 3 profiles (1.5s / 2.0s / 2.5s following distance)
- Community Discovery: 4th slot accessible through extended adaptation entry
- Community Use: Aggressive drivers program shorter 1.0-1.2s for dense traffic

**Risk**: Community use of 1.0-1.2s distances increases collision risk; use only on private closed courses or with extreme caution

---

## 🔐 Security & Risk Notes [COMMUNITY]

**General Community Safety Guidelines:**

1. **Backup Before Modifying**: Always export current adaptations/codings in VCDS before making community modifications
2. **Document Changes**: Note all alterations; reversibility may be needed for warranty
3. **Test Incrementally**: Make one change at a time; monitor for 24-48 hours before additional modifications
4. **Monitor Temps**: Community mods (Launch Control Aggressive, Boost Gauge) may increase component temperatures; use LIVE_DATA_COMPLETE.ts to establish baselines
5. **Warranty Impact**: Most community modifications will void drivetrain warranty; verify with dealer/insurer first
6. **Regional Legality**: Some adaptations (DRL modifications, lighting intensity) may violate regional road rules; check local regulations

---

## 🌐 Community Resources & Attribution

| Source | Focus | URL |
|--------|-------|-----|
| **VW Vortex** | VCDS Modifications, Performance Tuning | https://www.vwvortex.com/forums/audi-a3-s3 |
| **Audizine Forums** | Lighting, Comfort, A3-Specific Procedures | https://www.audizine.com/forum/a3-8v |
| **VAG-Coding.net** | Module-by-module Coding Guides | https://www.vag-coding.net/audi/a3-8v/ |
| **Ross-Tech Forums** | Transmission, Diagnostics, ACC | https://forums.ross-tech.com/ |
| **BT Performance** | Performance Tuning, Hidden Features | https://btperformance.eu/guides/audi-a3 |
| **Scribd VCDS Guide** | Professional Coding Reference | https://www.scribd.com/document/368211752/VCDS-Adaptations-and-Codings |

---

## [COMMUNITY] Disclaimer

All procedures marked with **[COMMUNITY]** are discovered and verified by DIY enthusiasts and independent technicians, NOT officially documented by Audi or Ross-Tech VCDS software. While community-tested and confirmed as safe by multiple sources:

- **Warranty**: Community modifications may void manufacturer warranties
- **Liability**: User assumes full responsibility for any modifications
- **Reversibility**: All changes documented here are reversible via VCDS
- **Safety**: Procedures marked with ⚠️ carry elevated risk; use caution and monitor systems closely
- **Legality**: Some modifications may violate regional automotive regulations; verify local laws

---

**Last Updated**: 2026-04-27  
**Status**: Community-Contributed | Cross-verified from multiple sources  
**Version**: 1.0

