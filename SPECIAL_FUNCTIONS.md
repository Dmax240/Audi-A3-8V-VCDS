# Special Functions & Hidden Procedures (40+)

## ENGINE (Module 01)

### Service Reset (Oil Intervals)
- **Function:** Reset oil service light and interval timer
- **VCDS Access:** Module 01 → Adaptations
- **Steps:** Oil change performed → Service reset activation
- **Cost:** €0 (procedure only)

### Fuel Injector Cleaning Activation
- **Function:** Initiate active fuel injector cleaning cycle
- **VCDS Access:** Module 01 → Basic Settings
- **Duration:** 3-5 minute cycle at idle
- **Effect:** Removes carbon deposits
- **Cost:** €0 (DIY activation)

### O2 Sensor Heater Test
- **Function:** Verify oxygen sensor heating element functionality
- **VCDS Access:** Module 01 → Readiness Tests
- **Cold Start Required:** Yes
- **Verification:** Heater current measurement
- **Cost:** €0 (diagnostic)

---

## TRANSMISSION (Module 02)

### Sport Mode Aggressiveness Tuning
- **Range:** Standard → Aggressive
- **Effect:** Earlier shift points, higher RPM shifts
- **VCDS Access:** Module 02 → Adaptations
- **Impact:** +5-7% performance, -2-3% fuel economy
- **Safety:** Safe to modify
- **Cost:** €0 (DIY adjustment)

### Launch Control Activation
- **Function:** Enable launch control for acceleration runs
- **Requirement:** S-Tronic transmission
- **Method:** Module 02 → Special Functions
- **Procedure:** Hold brake, select gear, release brake
- **Risk Assessment:** Medium (transmission stress)
- **Cost:** €0 (feature unlock)

### Creep Function Toggle
- **Function:** Enable/disable automatic creeping at low speed
- **Default:** Enabled
- **VCDS Access:** Module 02 → Adaptations → Creep enable/disable
- **Benefit:** Parking lot maneuvering assistance
- **Cost:** €0 (toggle only)

### Fluid Quality Forensic Read
- **Function:** Advanced fluid health analysis
- **Parameters:** Iron content, water content, TAN value
- **VCDS Access:** Module 02 → Measuring Blocks
- **Interpretation:** Determines fluid change necessity
- **Action Threshold:** TAN > 4.0 = fluid change urgent
- **Cost:** €0 (diagnostic)

---

## BRAKES (Module 03)

### ABS Self-Test / Buildup Test
- **Function:** Verify ABS pressure buildup and modulation
- **VCDS Access:** Module 03 → Special Functions → ABS Test
- **Requirements:** Vehicle on level ground, foot on brake
- **Duration:** ~30 seconds with brake pedal pressure changes
- **Verification:** Brake pedal feedback, pressure confirmation
- **Cost:** €0 (diagnostic)

### EPB Full Retract (Pad Service)
- **Function:** Fully retract electronic parking brake pads
- **Use Case:** Before brake pad replacement
- **VCDS Access:** Module 03 → Special Functions → EPB Retract
- **Requirement:** Brake must be released first
- **Safety:** Essential before pad installation
- **Cost:** €0 (procedure)

### EPB Full Lock (Pad Service Completion)
- **Function:** Reset EPB after brake pad service
- **Use Case:** After brake pad replacement and bedding
- **VCDS Access:** Module 03 → Special Functions → EPB Lock
- **Calibration:** Automatic position learning
- **Verification:** EPB function test
- **Cost:** €0 (procedure)

### Brake Booster Integrity Check
- **Function:** Verify vacuum pressure maintenance
- **VCDS Access:** Module 03 → Measuring Blocks → Brake Pressure
- **Normal Range:** 200-250 mbar vacuum
- **Failure Sign:** Pressure drop > 20 mbar/minute
- **Action:** Booster replacement if failed
- **Cost:** €0 (diagnostic), €400-600 (repair if needed)

---

## COMFORT (Module 08)

### Window Obstacle Detection Reset
- **Function:** Recalibrate window anti-pinch sensors
- **VCDS Access:** Module 08 → Special Functions → Window Reset
- **Procedure:** Close windows fully, activate reset
- **Sensitivity Adjustment:** Available in adaptations
- **Result:** Window learns full range again
- **Cost:** €0 (DIY procedure)

### Comfort Window Auto-Close Test
- **Function:** Test automatic window closure on lock
- **VCDS Access:** Module 08 → Basic Settings
- **Feature:** Windows auto-close when vehicle locked
- **Activation:** Can be enabled/disabled per preferences
- **Safety:** Works with safety limits
- **Cost:** €0 (feature toggle)

---

## LIGHTING (Module 09)

### Headlight AFS Motor Range Test
- **Function:** Test adaptive front lighting motor positioning
- **VCDS Access:** Module 09 → Special Functions → AFS Test
- **Range:** Full sweep left-right-center
- **Duration:** ~15 seconds
- **Verification:** Smooth motor operation without grinding
- **Cost:** €0 (diagnostic)

### Radar Sensor FOV Verification
- **Function:** Verify adaptive cruise control sensor alignment
- **VCDS Access:** Module 09 → Measuring Blocks → Sensor Status
- **Clear View:** Lens must be clean for accuracy
- **Misalignment Indicator:** If readings out of spec
- **Recalibration:** Requires professional alignment tool
- **Cost:** €0 (diagnostic), €500-1000 (recalibration if needed)

### DRL Brightness Optimization
- **Range:** 100% → 70-80%
- **Effect:** Daytime running light intensity reduction
- **VCDS Access:** Module 09 → Adaptations
- **Benefit:** Reduced battery drain, maintains visibility
- **Default:** 100% brightness
- **Cost:** €0 (adjustment)

### AFS Curve Aggressiveness
- **Range:** Standard → Aggressive
- **Function:** Adjust adaptive headlight curve positioning
- **VCDS Access:** Module 09 → Adaptations
- **Effect:** More aggressive turn-in light movement
- **Visibility:** Better corner illumination in sport mode
- **Cost:** €0 (DIY adjustment)

---

## KESSY (Module 16)

### Key Fob Remote Testing
- **Function:** Diagnostic test of remote control signals
- **VCDS Access:** Module 16 → Special Functions → Remote Test
- **Button Test:** Each button press captures signal strength
- **Signal Strength:** Display in measuring blocks
- **Threshold:** Signal must exceed -80 dBm
- **Cost:** €0 (diagnostic)

### Receiver Sensitivity Tuning
- **Function:** Adjust key fob reception sensitivity
- **Range:** Low → High sensitivity
- **VCDS Access:** Module 16 → Adaptations
- **Use Case:** Improved range in weak signal areas
- **Tradeoff:** Higher sensitivity = more false triggers possible
- **Cost:** €0 (adjustment)

### Battery Voltage Check
- **Function:** Monitor key fob battery health from vehicle
- **VCDS Access:** Module 16 → Measuring Blocks → Battery Voltage
- **Normal Range:** 2.8-3.0V (for CR2032)
- **Warning Threshold:** < 2.6V = battery replacement needed
- **Cost:** €0 (diagnostic), €5 (battery)

---

## CLUSTER (Module 17)

### Odometer Fraud Verification
- **Function:** Verify odometer data integrity
- **VCDS Access:** Module 17 → Measuring Blocks → Mileage Data
- **Comparison:** Compare with gateway module records
- **Fraud Detection:** Mismatch indicates tampering
- **Legal:** Required for vehicle history verification
- **Cost:** €0 (diagnostic)

### Cluster Segment/Needle Self-Test
- **Function:** Test all cluster display elements
- **VCDS Access:** Module 17 → Special Functions → Display Test
- **Procedure:** All needles sweep, LCD activates
- **Duration:** ~5 seconds
- **Verification:** All segments illuminate correctly
- **Cost:** €0 (diagnostic)

---

## STEERING (Module 44)

### SAS Offset Adjustment Details
- **Function:** Fine-tune steering angle sensor calibration
- **VCDS Access:** Module 44 → Adaptations → SAS Offset
- **Range:** -180° to +180° adjustment
- **When Needed:** After suspension work, ESP light activation
- **Procedure:** Wheels straight, perform alignment procedure
- **Cost:** €150-300 (if professional alignment needed)

### Progressive Steering Ratio Tuning
- **Function:** Adjust steering response curve aggressiveness
- **Range:** Standard → Aggressive → Sport
- **VCDS Access:** Module 44 → Adaptations
- **Effect:** Faster steering input response in higher modes
- **Impact:** +20% steering sensitivity in sport mode
- **Cost:** €0 (DIY adjustment)

---

## INFOTAINMENT (Module 5F)

### Software Update Check & Apply
- **Function:** Check for and install software updates
- **VCDS Access:** Module 5F → Special Functions → Update Check
- **Requirements:** 80%+ battery, preferably on AC power
- **Duration:** 15-30 minutes depending on update size
- **Critical:** Do NOT interrupt process
- **Cost:** €0 (DIY update)

### Video-in-Motion (VIM) Unlock
- **Function:** Enable video playback while driving
- **VCDS Access:** Module 5F → Adaptations → VIM Enable
- **Safety Warning:** Reduces driver attention
- **Legal Status:** Check local driving laws
- **Activation:** Requires speed > 0 km/h to engage
- **Cost:** €0 (feature unlock)

### Boot Logo Customization
- **Function:** Customize startup splash screen
- **VCDS Access:** Module 5F → Coding → Boot Logo
- **Requirement:** Custom image file (specific format)
- **Resolution:** Depends on MMI version
- **Reversibility:** Can restore factory logo
- **Cost:** €0 (DIY customization)

---

## BATTERY (Module 61)

### SoH Trending Analysis
- **Function:** Monitor battery state of health over time
- **VCDS Access:** Module 61 → Measuring Blocks → SoH
- **Normal Range:** 80-100% for vehicle operation
- **Degradation Rate:** ~0.5% per month normal
- **Warning Level:** < 50% = replacement urgent
- **Cost:** €0 (monitoring), €80-150 (battery if needed)

### Start-Stop System Control
- **Function:** Enable/disable automatic engine shutdown
- **VCDS Access:** Module 61 → Adaptations
- **Requirement:** Battery SoH > 70% for reliable operation
- **Benefit:** 5-10% fuel economy improvement
- **Tradeoff:** Slightly faster battery degradation
- **Cost:** €0 (toggle feature)

---

## PDC (Module 76)

### Parking Sensor Range Tuning
- **Function:** Adjust detection distance sensitivity
- **Range:** 30cm → 150cm adjustable
- **VCDS Access:** Module 76 → Adaptations
- **Use Case:** Prevent false alerts from bumps/ridges
- **Verification:** Test in parking scenario
- **Cost:** €0 (adjustment)

### Audio Volume Control
- **Function:** Adjust PDC beep intensity
- **Range:** 0-9 (mute to maximum)
- **VCDS Access:** Module 76 → Adaptations
- **Preference:** Many users prefer 6-7 range
- **Effect:** Hearing protection vs. annoyance prevention
- **Cost:** €0 (adjustment)

---

## CAMERA (Module 0E)

### Image Quality Auto-Adjustment
- **Function:** Enable automatic camera exposure compensation
- **VCDS Access:** Module 0E → Adaptations
- **Benefit:** Better visibility in varying light conditions
- **Darkness Threshold:** Auto-adjust triggers below 500 lux
- **Tradeoff:** May introduce noise at very low light
- **Cost:** €0 (feature toggle)

### Rear Camera Display Delay Tuning
- **Function:** Adjust image display latency
- **Range:** 0-500ms adjustable
- **VCDS Access:** Module 0E → Adaptations
- **Benefit:** Reduces lag between camera and display
- **Note:** Factory setting often has intentional delay for safety
- **Cost:** €0 (adjustment)

---

## ADVANCED DIAGNOSTIC PROCEDURES

### Knock Sensor Self-Healing
- **Function:** Allow knock sensor to recover from transient faults
- **VCDS Access:** Module 01 → Special Functions → Knock Test
- **Procedure:** Run 3-5 minute high-RPM cycle
- **Result:** Sensor recalibration without replacement
- **Effectiveness:** 70-80% success rate
- **Cost:** €0 (procedure), €300+ (sensor if permanent fault)

### Fuel Injector Balance Test
- **Function:** Measure individual injector pulse timing
- **VCDS Access:** Module 01 → Measuring Blocks → Injector Timing
- **Normal Variance:** ±0.5ms between cylinders
- **Imbalance Symptom:** Rough idle, misfire
- **Action:** Clean or replace if variance > 1ms
- **Cost:** €0 (diagnostic), €50-200 (cleaning/repair)

### Transmission Adaptation Reset
- **Function:** Allow transmission to relearn shift patterns
- **Procedure:** Drive for 5-10 minutes with normal driving pattern
- **VCDS Action:** Clear adaptation values in Module 02
- **Relearning Time:** 20-50 miles of normal driving
- **Result:** Improved shift quality, fuel economy
- **Cost:** €0 (DIY procedure)

### Battery Registration (CRITICAL)
- **Function:** Register new battery with vehicle
- **VCDS Access:** Module 61 → Special Functions → Battery Registration
- **Requirement:** Mandatory after battery replacement
- **Impact:** Without registration: charging issues, false warnings
- **Duration:** ~1 minute procedure
- **Cost:** €0 (procedure only)

### DPF Regeneration Forced Cycle
- **Function:** Initiate manual diesel particulate filter cleaning (diesel only)
- **VCDS Access:** Module 01 → Special Functions → Regen
- **Duration:** 20-30 minutes at highway speeds
- **Requirement:** 50%+ fuel level
- **Cost:** €0 (procedure), €5-10 (extra fuel)

