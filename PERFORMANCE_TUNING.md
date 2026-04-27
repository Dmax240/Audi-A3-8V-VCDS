# Performance Tuning (22 Optimizations)

## ENGINE PERFORMANCE

### Fuel Octane Rating Optimization (95 → 98 RON)
- **Module:** Engine (01)
- **Access:** Basic Settings → Fuel Grade
- **Effect:** Earlier spark timing, +3-5% power
- **Requirement:** Premium 98 RON fuel only
- **Risk:** Detonation if using lower octane
- **Fuel Economy Impact:** -1-2% (offset by performance gain)
- **Cost:** €0 (parameter adjustment)
- **Safety Rating:** ✓ Safe with correct fuel

### Ignition Timing Aggression Levels
- **Module:** Engine (01)
- **Range:** Conservative → Standard → Aggressive
- **Conservative:** Stock timing, maximum efficiency
- **Standard:** Balanced power/efficiency
- **Aggressive:** Advanced timing, +5-8% power
- **Risk:** Knocking with aggressive setting + lower octane fuel
- **Cost:** €0 (adjustment)
- **Safety Rating:** ⚠ Aggressive requires 98 RON minimum

### Turbo Boost Pressure Tuning (1.8-2.1 bar)
- **Module:** Engine (01)
- **Base:** 1.8 bar (factory safe)
- **2.0 bar:** +8-10% power, manageable stress
- **2.1 bar:** +12-15% power, higher component stress
- **Requirement:** Engine must handle boost (EV tune vs OEM)
- **Monitoring:** Boost pressure logs essential
- **Risk Assessment:** Medium-High (2.1 bar)
- **Cost:** €0 (parameter), €500-1000 (engine inspection if used continuously)
- **Safety Rating:** ⚠ Regular monitoring required

### Rev Limiter Adjustment (6500-6800 RPM)
- **Module:** Engine (01)
- **Factory Default:** 6500 RPM
- **Race Setting:** 6800 RPM (+300 RPM)
- **Effect:** Extends power band by ~5%
- **Trade-off:** Increased engine stress at redline
- **Fuel Consumption:** Negligible impact if used occasionally
- **Cost:** €0 (adjustment)
- **Safety Rating:** ⚠ Use sparingly in high-performance driving

---

## TRANSMISSION PERFORMANCE

### DSG Shift Aggressiveness (Standard → Aggressive)
- **Module:** Transmission (02)
- **Standard:** Factory-tuned for efficiency
- **Aggressive:** Earlier shift points, +2-3% acceleration
- **Effect:** Higher RPM before upshift
- **Fuel Economy:** -3-5% with aggressive setting
- **Component Wear:** Minimal impact with DSG engineering
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe for DSG transmission

### Launch Control Engagement Tuning
- **Module:** Transmission (02)
- **Feature:** Enable for maximum acceleration starts
- **Procedure:** Brake held, select Drive, release brake
- **Wheel Slip Control:** Optimizes launch without wheel spin
- **0-60 Improvement:** +0.3-0.5 seconds possible
- **Tire Wear:** Slightly increased with repeated launches
- **Cost:** €0 (feature unlock)
- **Safety Rating:** ⚠ Use only in controlled conditions

### Manual Mode Shift Speed Enhancement
- **Module:** Transmission (02)
- **Effect:** Faster response to paddle shifter input
- **Reduction:** 50-100ms faster shift execution
- **Performance:** More engaging driving feel
- **Transmission Stress:** Within factory design limits
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe

### Creep Function Optimization
- **Module:** Transmission (02)
- **Dynamic Creep:** Varies based on road grade
- **Static Creep:** Fixed low-speed idle crawl
- **Performance Mode:** Can be disabled for manual throttle control
- **Use Case:** Aggressive acceleration or track driving
- **Cost:** €0 (toggle)
- **Safety Rating:** ✓ Safe

---

## BRAKE & SAFETY PERFORMANCE

### ABS Sensitivity Reduction (Street → Track)
- **Module:** Brakes (03)
- **Street Mode:** Enhanced control, wheel lock prevention
- **Track Mode:** Minimal intervention, maximum driver input
- **Effect:** Different ABS modulation thresholds
- **Risk:** Track mode requires driver skill and smooth inputs
- **Tire Requirements:** Performance tires recommended for track
- **Cost:** €0 (parameter)
- **Safety Rating:** ⚠ Track mode only for experienced drivers

### ESP/TCS Intervention Tuning (Standard → Sport)
- **Module:** Brakes (03)
- **Standard:** Maximum stability intervention
- **Sport:** Reduced traction control, allows wheel slip
- **Effect:** ~20% more throttle response at corner exit
- **Skill Requirement:** High (risk of oversteer)
- **Conditions:** Dry pavement only
- **Cost:** €0 (parameter)
- **Safety Rating:** ⚠⚠ Sport mode requires advanced driving skills

---

## STEERING & HANDLING

### Steering Ratio Aggressiveness
- **Module:** Steering (44)
- **Range:** Standard → Aggressive
- **Standard:** Linear 1:1 response
- **Aggressive:** Faster initial response, slower high-lock
- **Effect:** +15-20% perceived steering sharpness
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe for all drivers

### EPS Motor Power Assist Reduction
- **Module:** Steering (44)
- **Default:** Full power assist at low speeds
- **Tuned:** Variable assist based on speed
- **Benefit:** Improved steering feedback, more weight at speed
- **Trade-off:** Slightly heavier steering in parking
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe

### Progressive Steering Ratio Tuning
- **Module:** Steering (44)
- **Effect:** More responsive at edge of envelope
- **Speed Compensation:** Adjusts responsiveness by vehicle speed
- **Range:** 50-150% variation available
- **Use Case:** Sport/track driving performance
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe with understanding

---

## LIGHTING PERFORMANCE

### DRL Brightness Optimization (100% → 70-80%)
- **Module:** Lighting (09)
- **Effect:** Reduced battery load, maintained visibility
- **Power Saving:** 10-15W continuous reduction
- **Visibility Impact:** Minimal in daylight
- **Consumer Benefit:** ~5% battery efficiency gain
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe

### AFS Curve Aggressiveness
- **Module:** Lighting (09)
- **Standard:** Moderate curve-following response
- **Aggressive:** Faster light rotation, enhanced turn illumination
- **Effect:** Better corner visibility in tight turns
- **Speed Range:** Active above 30 km/h
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe, improves handling confidence

### Lighting Color Temperature Tuning
- **Module:** Lighting (09)
- **Range:** 4000K → 6000K adjustable
- **Lower (4000K):** Warmer light, reduced glare in fog
- **Higher (6000K):** Cooler, "more premium" appearance
- **Visibility:** Negligible functional difference
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe, cosmetic preference

---

## COMFORT & CONVENIENCE PERFORMANCE

### ACC Following Distance (1-3 Second Gaps)
- **Module:** Comfort (08)
- **1 Second:** Aggressive, high-traffic mode
- **2 Seconds:** Balanced comfort and traffic flow
- **3 Seconds:** Conservative, highway cruising
- **Safety Note:** Longer gaps recommended for highway speeds
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe, driver preference

### Front Assist Warning Distance (50-120m)
- **Module:** Comfort (08)
- **50m:** Very aggressive, short warning time
- **80m:** Balanced approach warning
- **120m:** Conservative, early warning
- **Effectiveness:** Depends on road conditions and visibility
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe, adjustable for comfort

### Approach Unlock Range Tuning
- **Module:** Comfort (08)
- **Standard:** ~1.5m unlock range
- **Extended:** ~3m range
- **Benefit:** Unlock vehicle from greater distance
- **Battery Impact:** Minimal, ~1-2% additional draw
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe

### Coming Home Lights Duration
- **Module:** Lighting (09)
- **Range:** 15-300 seconds adjustable
- **Function:** Exterior lights remain on after vehicle shutdown
- **Benefit:** Safe lighting when approaching home
- **Battery Impact:** ~10-20W for duration
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe

---

## BATTERY & EFFICIENCY PERFORMANCE

### Start-Stop Enable/Disable
- **Module:** Battery (61)
- **Effect on Efficiency:** 5-10% fuel savings
- **Battery Stress:** Slightly accelerated degradation (~0.5% per month)
- **Comfort Impact:** Engine restarts may be noticeable
- **Requirement:** Battery SoH > 70% for reliable operation
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe with healthy battery

### Temperature Threshold Adjustment
- **Module:** Battery (61)
- **Function:** Temperature window for start-stop operation
- **Cold Setting:** Start-stop disabled below certain temp
- **Warm Setting:** Start-stop active in higher temperatures
- **Winter Mode:** Can disable start-stop entirely in winter
- **Battery Protection:** Essential in extreme cold climates
- **Cost:** €0 (parameter)
- **Safety Rating:** ✓ Safe

---

## ADVANCED PERFORMANCE COMBINATIONS

### Sport Mode Profile (Combined Optimization)
**Activation:** Sport button or drive mode selection
**Includes:**
- Engine: Aggressive ignition timing, higher rev limit
- Transmission: Aggressive shift points
- Steering: Aggressive ratio, reduced power assist
- Suspension: If available, stiffened damping
- Lighting: AFS aggression maximum
- Brakes: ESP/TCS sport mode enabled

**Effect:** +15-20% performance improvement
**Cost:** €0 (predefined profile)
**Safety Rating:** ✓ Safe for experienced drivers

### Track Day Performance Package
**Components:**
- Boost: 2.0-2.1 bar setting
- Rev Limit: 6800 RPM
- Launch Control: Enabled
- ABS: Track mode (minimal intervention)
- Steering: Aggressive ratio, reduced assist
- Transmission: Manual mode preferred

**Performance Gain:** +20-30% acceleration
**Requirements:** Performance tires, track experience
**Cost:** €0 (configuration), €500+ (vehicle inspection)
**Safety Rating:** ⚠⚠ Track use only

### Efficiency Mode Profile
**Includes:**
- Fuel Octane: Conservative (95 RON acceptable)
- Ignition Timing: Conservative
- Transmission: Efficient shift points
- Start-Stop: Enabled
- ACC: 3-second spacing
- Lighting: DRL reduced to 70%

**Effect:** 10-15% better fuel economy
**Cost:** €0 (predefined profile)
**Safety Rating:** ✓ Safe for daily driving

