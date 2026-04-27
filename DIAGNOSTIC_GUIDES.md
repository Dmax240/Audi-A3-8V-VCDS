# Diagnostic Guides (15 Decision Trees)

## 1. Rough Idle Diagnosis

```
ROUGH IDLE DETECTED
│
├─ Check fuel quality first
│  ├─ Use Premium 95+ RON fuel
│  ├─ Drain old fuel if > 6 months stored
│  └─ Cost: €30-50
│
├─ Vacuum leak detection
│  ├─ Listen for hissing sounds
│  ├─ Spray brake cleaner around hoses
│  ├─ RPM spike = leak found
│  └─ Cost: €100-300 (hoses/seals)
│
├─ Timing chain wear
│  ├─ Check via DTC P0016 (cam/crank misalignment)
│  ├─ Module 01 → Measuring Blocks → Timing
│  ├─ Variance > 5° CAM = chain stretch
│  └─ Cost: €800-1500 (replacement)
│
├─ Fuel injector carbon
│  ├─ Activate injector cleaning cycle
│  ├─ Module 01 → Basic Settings → Injector Clean
│  ├─ Monitor fuel pressure: 50-55 bar normal
│  └─ Cost: €0-150 (cleaning activation)
│
└─ Ignition coil failure
   ├─ Check coil pack resistance
   ├─ DTC P0300+ indicates misfire
   ├─ Replace individual failed coil
   └─ Cost: €100-200 per coil
```

**Resolution Path:**
1. Fuel quality → Vacuum → Timing → Injectors → Ignition
2. Most common: Vacuum leak or fuel quality (80% of cases)
3. Cost range: €30-1500 depending on root cause

---

## 2. Check Engine Light (MIL) → Systematic Troubleshooting

```
CHECK ENGINE LIGHT ACTIVE
│
├─ Read DTC codes immediately
│  ├─ Module 01 (Engine)
│  ├─ Module 02 (Transmission)
│  ├─ Module 03 (Brakes)
│  └─ Module 08 (Comfort)
│
├─ P0016 - Cam/Crank correlation
│  ├─ Timing chain stretch
│  ├─ Camshaft sensor misalignment
│  └─ Cost: €800-1500
│
├─ P0300 - Random misfire
│  ├─ Check spark plugs (age > 30k mi)
│  ├─ Test fuel pressure: 50-55 bar
│  ├─ Check for fuel leaks
│  └─ Cost: €100-400
│
├─ P0101 - MAF sensor
│  ├─ Clean or replace MAF
│  ├─ Never touch sensor element
│  ├─ Cost: €150-300
│  └─ Check for vacuum leaks
│
├─ P0128 - Thermostat
│  ├─ Check coolant temperature pattern
│  ├─ Module 01 → Measuring Blocks → Coolant Temp
│  ├─ Should rise steadily to 90°C
│  └─ Cost: €200-400
│
├─ P0171 - Fuel trim too lean
│  ├─ Vacuum leak most common
│  ├─ MAF sensor dirty
│  ├─ Fuel pressure regulator fault
│  └─ Cost: €100-500
│
└─ False alarm (no drivability issues)
   ├─ Could be one-time sensor glitch
   ├─ Clear code and monitor
   ├─ If returns = real fault
   └─ Cost: €0-100
```

**Action Priority:**
1. Don't ignore - investigate immediately
2. Worst case: Timing chain (€1500), ignition (€100-200)
3. Most common: Fuel/air quality (€0-300)

---

## 3. Loss of Power / Limp Mode Diagnosis

```
LIMP MODE ACTIVATED (Power Limited)
│
├─ Check for active fault codes
│  ├─ Module 01 (Engine)
│  ├─ Module 02 (Transmission)
│  ├─ Module 03 (Brakes)
│  └─ Critical fault threshold exceeded
│
├─ Turbo system failure
│  ├─ Boost pressure < 0.5 bar
│  ├─ Check for intercooler leaks
│  ├─ Turbo wastegate stuck
│  └─ Cost: €800-1200
│
├─ Transmission over-temperature
│  ├─ Check ATF fluid level
│  ├─ Fluid color: Should be red
│  ├─ Burnt smell = urgent replacement
│  └─ Cost: €150-500 (fluid), €2000+ (rebuild)
│
├─ Engine over-temperature
│  ├─ Check coolant level
│  ├─ Thermostat may be stuck closed
│  ├─ Fan may not be operating
│  └─ Cost: €200-600
│
├─ Fuel system pressure loss
│  ├─ Module 01 → Measuring Blocks → Fuel Pressure
│  ├─ Normal: 50-55 bar
│  ├─ Low pressure fault: Pump or filter
│  └─ Cost: €400-800
│
├─ Oxygen sensor failure
│  ├─ Affects fuel trim significantly
│  ├─ Engine runs rich if O2 heater fails
│  ├─ DTC P0130-P0139 indicate O2 fault
│  └─ Cost: €200-400
│
└─ Catalytic converter clogging
   ├─ Exhaust back-pressure excessive
   ├─ Vehicle won't exceed 60 km/h
   ├─ Strong rotten egg smell
   └─ Cost: €600-1000
```

**Emergency Action:**
1. Do NOT continue driving if temperature warning active
2. Pull over safely, turn off engine
3. Wait 10 minutes before restart
4. Proceed carefully to service

---

## 4. Transmission Slipping Diagnosis

```
TRANSMISSION SLIPPING / HARSH SHIFTS
│
├─ Check fluid level first
│  ├─ Engine running, in Park
│  ├─ Fluid should reach dipstick mark
│  ├─ Low = seal leak most likely
│  └─ Top up and retest
│
├─ Fluid condition assessment
│  ├─ Color: Red (good) → Brown (worn) → Black (critical)
│  ├─ Smell: Sweet (good) → Burnt (replace immediately)
│  ├─ Forensic analysis: Module 02 → Measuring Blocks
│  └─ Cost: €150-300 (fluid change)
│
├─ Transmission adaptation reset
│  ├─ Module 02 → Adaptations → Clear Values
│  ├─ Drive 20-50 miles for relearning
│  ├─ Should improve shift quality significantly
│  └─ Cost: €0 (procedure)
│
├─ Mechatronic unit malfunction
│  ├─ Solenoid valve sticking
│  ├─ Hydraulic pressure loss
│  ├─ Multiple shifting issues
│  └─ Cost: €1500-3000
│
├─ Internal clutch wear
│  ├─ Slipping increases with load
│  ├─ Fuel economy drops 10-20%
│  ├─ Transmission fluid darkens quickly
│  └─ Cost: €2000-4000 (rebuild)
│
└─ Torque converter failure
   ├─ Slip primarily at low speeds
   ├─ Stalling on acceleration
   ├─ Lockup clutch not engaging
   └─ Cost: €1200-2000
```

**Severity Assessment:**
- Minor slipping: €0-300 (fluid/adaptation)
- Major slipping: €1500-4000 (rebuild/replacement)

---

## 5. Steering System Diagnosis (Too Heavy / Too Light)

```
STEERING FEEDBACK ABNORMAL
│
├─ Power steering fluid check
│  ├─ Level in reservoir: MIN to MAX
│  ├─ Fluid color: Clear to light amber (good)
│  ├─ Dark or burnt smell = change fluid
│  └─ Cost: €100-200
│
├─ EPS motor current draw
│  ├─ Module 44 → Measuring Blocks → EPS Current
│  ├─ Normal: 2-6 amps at idle
│  ├─ Excessive: > 8 amps = motor strain
│  └─ Could indicate bearing wear
│
├─ Power steering pressure
│  ├─ Cold: 80-100 bar minimum
│  ├─ Warm: 100-150 bar normal
│  ├─ Low: Pump or hose leak
│  └─ High: Pressure relief valve stuck
│
├─ Steering angle sensor (SAS)
│  ├─ If steering feels "off-center"
│  ├─ Module 44 → Adapt → SAS Offset
│  ├─ Recalibrate with wheels straight
│  └─ Cost: €0-150
│
├─ Tie rod / ball joint wear
│  ├─ Clunking sounds when turning
│  ├─ Excessive play in steering
│  ├─ Tire wear pattern uneven
│  └─ Cost: €300-600
│
├─ Steering rack internal leak
│  ├─ Fluid drips underneath vehicle
│  ├─ Steering fluid loss over time
│  ├─ May not need immediate repair
│  └─ Cost: €600-1200 (seal replacement)
│
└─ EPS motor failure
   ├─ Complete loss of power assist
   ├─ Steering becomes very heavy
   ├─ Electric motor not responding
   └─ Cost: €800-1500 (motor replacement)
```

**Most Common Issues:**
1. Low fluid (30%) → Top up: €20
2. EPS sensor offset (20%) → Calibrate: €0
3. Motor bearing wear (20%) → Replace: €1500
4. Fluid quality (15%) → Change: €150
5. Mechanical wear (15%) → Repair: €300-600

---

## 6. Brake System Diagnosis (Soft Pedal / ABS Issues)

```
BRAKE PEDAL SOFT OR ABS LIGHT ON
│
├─ Air in brake system
│  ├─ Pedal soft but holds
│  ├─ Must bleed brakes immediately
│  ├─ VCDS ABS bleed procedure
│  └─ Cost: €150-300
│
├─ Brake fluid level
│  ├─ Check reservoir (should be FULL)
│  ├─ Low = pad wear or leak
│  ├─ Low = brake line rupture (stop driving)
│  └─ Cost: €0-500
│
├─ Brake fluid condition
│  ├─ Moisture absorption over time
│  ├─ Color: Clear/light (good) → Brown (replace)
│  ├─ Boiling point drops with moisture
│  └─ Cost: €100-200 (system flush)
│
├─ ABS pump failure
│  ├─ ABS light on, brakes feel normal
│  ├─ Pump motor not responding
│  ├─ Module 03 → Special Functions → ABS Test
│  └─ Cost: €600-1000 (pump replacement)
│
├─ Brake pad wear
│  ├─ Soft pedal due to extra piston travel
│  ├─ Sensor may trigger ABS light
│  ├─ Measure pad thickness: < 3mm = replace
│  └─ Cost: €200-400 (pads + rotors)
│
├─ Brake booster failure
│  ├─ Multiple hard pumps needed
│  ├─ Engine running needed for assistance
│  ├─ Vacuum check: 150-200 mbar
│  └─ Cost: €400-600 (replacement)
│
├─ Brake line leakage
│  ├─ Fluid drips under vehicle
│  ├─ Loss of braking power
│  ├─ STOP DRIVING immediately
│  └─ Cost: €200-400 (line + repair)
│
└─ Caliper piston stuck
   ├─ Uneven braking
   ├─ Vehicle pulls to one side
   ├─ Caliper may need rebuild
   └─ Cost: €300-500 per caliper
```

**CRITICAL - STOP DRIVING IF:**
- Pedal goes to floor
- Loss of braking power
- Fluid dripping underneath
- Unable to stop vehicle

---

## 7. Battery Issues (Won't Start / Dying)

```
BATTERY PROBLEMS DETECTED
│
├─ Dead battery symptoms
│  ├─ Dim lights, clicking when turning key
│  ├─ No crank at all
│  ├─ Battery voltage < 11V
│  └─ Action: Jump start or replace
│
├─ Check battery state of health (SoH)
│  ├─ Module 61 → Measuring Blocks → SoH %
│  ├─ Normal: 80-100% (good capacity)
│  ├─ Caution: 50-80% (weakening)
│  ├─ Critical: < 50% (replace soon)
│  └─ Cost: €80-150 for replacement
│
├─ Battery registration after replacement
│  ├─ MANDATORY for new batteries
│  ├─ Module 61 → Special Functions → Battery Reg
│  ├─ Skip = charging issues, false warnings
│  └─ Cost: €0 (procedure)
│
├─ Alternator output check
│  ├─ Engine running: Should charge at 13.5-14.5V
│  ├─ < 13V = alternator failing
│  ├─ Monitor with VCDS during driving
│  └─ Cost: €400-600 (replacement)
│
├─ Parasitic drain detection
│  ├─ Battery dies overnight even parked
│  ├─ Disconnect negative terminal
│  ├─ Check current draw: < 50mA normal
│  ├─ > 100mA = parasitic drain issue
│  └─ Cost: €100-400 (find/fix drain source)
│
├─ Cold weather performance
│  ├─ Check cold cranking amps (CCA)
│  ├─ Winter: Need 600+ CCA minimum
│  ├─ Southern climates: 400+ CCA sufficient
│  └─ Cost: €80-150 (proper battery)
│
├─ Battery cable corrosion
│  ├─ Green/white crusty deposits
│  ├─ Clean terminals with baking soda
│  ├─ Apply dielectric grease
│  └─ Cost: €20-50
│
└─ Starter motor failure
   ├─ Clicking with full battery
   ├─ No cranking action
   ├─ Starter disabled via VCDS test
   └─ Cost: €400-600 (replacement)
```

**Quick Diagnosis Order:**
1. Check SoH % (Module 61)
2. Test voltage: Engine off (12V) vs running (13.5-14.5V)
3. Register if battery replaced
4. If still failing: Alternator test

---

## 8. Air Conditioning Diagnosis

```
AC NOT COOLING / NO COLD AIR
│
├─ Refrigerant charge level
│  ├─ System pressure: 2.5-3.5 bar (cold side)
│  ├─ Module 08 → Measuring Blocks → Pressure
│  ├─ Low pressure = leak or undercharge
│  └─ Cost: €200-400 (recharge + leak check)
│
├─ Compressor clutch engagement
│  ├─ Should engage with AC button
│  ├─ Check for rattling/grinding noise
│  ├─ Measure compressor current draw
│  └─ Cost: €0 (diagnostic), €800-1200 (compressor)
│
├─ Refrigerant leakage
│  ├─ Leaks commonly at hose connections
│  ├─ UV dye test identifies leak location
│  ├─ Seals may need replacement
│  └─ Cost: €150-400 (seal replacement)
│
├─ Blower motor functionality
│  ├─ Fan should run on all speeds
│  ├─ Check for motor noise
│  ├─ Module 08 → Test fan operation
│  └─ Cost: €200-400 (motor replacement)
│
├─ Condenser cleanliness
│  ├─ Front mounted, collects road debris
│  ├─ Gently rinse with low-pressure water
│  ├─ Do NOT damage fins
│  └─ Cost: €0 (cleaning), €600+ (replacement)
│
├─ Expansion valve blockage
│  ├─ One vent cool, another warm
│  ├─ Temperature split > 10°C
│  ├─ Valve may be stuck
│  └─ Cost: €300-500 (replacement)
│
└─ Cabin air filter clogged
   ├─ Reduced airflow overall
   ├─ Not directly causes AC failure
   ├─ Should be replaced annually
   └─ Cost: €30-80
```

**Most Common AC Failures:**
1. Refrigerant leak (50%) → €200-400
2. Compressor clutch failure (25%) → €1000
3. Expansion valve (15%) → €400
4. Blower motor (10%) → €300

---

## 9. ESP / ABS Light Diagnosis

```
ESP OR ABS WARNING LIGHT ON
│
├─ Wheel speed sensor malfunction
│  ├─ One wheel not reporting speed
│  ├─ Module 03 → Measuring Blocks → Wheel Speed
│  ├─ Sensor dirty or connector loose
│  └─ Cost: €150-300 (cleaning/replacement)
│
├─ Steering angle sensor (SAS) failure
│  ├─ SAS offset misaligned
│  ├─ Vehicle pulling or unstable
│  ├─ Module 44 → SAS Calibration
│  └─ Cost: €0-150 (recalibration)
│
├─ Yaw rate sensor fault
│  ├─ Used for stability control calculation
│  ├─ Contamination or connector issue
│  ├─ Module 03 → Sensor Test
│  └─ Cost: €200-400 (replacement)
│
├─ ABS pump motor failure
│  ├─ Pump relay clicking but no pump pressure
│  ├─ Module 03 → Special Functions → ABS Test
│  ├─ Motor resistance measurement
│  └─ Cost: €600-1000 (pump/module)
│
├─ Brake pressure sensor failure
│  ├─ Incorrect pressure readings
│  ├─ ABS system disabled for safety
│  ├─ Module 03 → Measuring Blocks → Pressure
│  └─ Cost: €300-500 (sensor replacement)
│
└─ Software version mismatch
   ├─ After module replacement
   ├─ Coding required for proper function
   ├─ VIN matching essential
   └─ Cost: €0-200 (if coding needed)
```

**Most Common ESP/ABS Faults:**
1. Wheel speed sensor (40%) → €200
2. SAS calibration (30%) → €0-100
3. Yaw rate sensor (20%) → €300
4. Pump failure (10%) → €800

---

## 10. Door Locks / Security Diagnosis

```
DOOR LOCKS NOT RESPONDING
│
├─ Central locking module failure
│  ├─ All doors locked/unlocked together
│  ├─ Check module voltage and connector
│  ├─ Module 09 → Control Unit
│  └─ Cost: €400-600 (module replacement)
│
├─ Individual solenoid failure
│  ├─ One or two doors not locking
│  ├─ Clicking sound but no lock movement
│  ├─ Solenoid coil burned out
│  └─ Cost: €150-250 per solenoid
│
├─ Door latch mechanical failure
│  ├─ Lock moves but door won't latch
│  ├─ Latch mechanism worn or broken
│  ├─ May need door module replacement
│  └─ Cost: €200-400 per door
│
├─ Key fob battery
│  ├─ Check KESSY module via VCDS
│  ├─ Module 16 → Measuring Blocks → Battery Voltage
│  ├─ Normal: 2.8-3.0V (CR2032)
│  ├─ Replace if: < 2.6V
│  └─ Cost: €5 (battery)
│
├─ Key fob receiver sensitivity
│  ├─ Module 16 → Receiver Sensitivity Tuning
│  ├─ Increase sensitivity if range weak
│  ├─ May reduce stability if too high
│  └─ Cost: €0 (adjustment)
│
├─ Door switch malfunction
│  ├─ Door stays unlocked after key turn
│  ├─ Mechanical switch worn
│  ├─ May need full door panel replacement
│  └─ Cost: €300-500
│
└─ BCM software issue
   ├─ After battery disconnect/replacement
   ├─ May need BCM coding update
   ├─ VIN relearn may be required
   └─ Cost: €0-200 (if coding needed)
```

**Quick Troubleshooting:**
1. Try key fob first (battery check)
2. Check all windows lock/unlock (module test)
3. Try manual lock with key (mechanical check)
4. Check specific door (solenoid vs module)

---

## 11. Window Issues Diagnosis

```
WINDOWS WON'T MOVE OR MOVE ERRATICALLY
│
├─ Window motor failure
│  ├─ No movement, no noise
│  ├─ Check motor voltage: Should be 12V
│  ├─ Motor coil may be burned
│  └─ Cost: €200-400 per motor
│
├─ Window regulator mechanical failure
│  ├─ Motor sounds but no movement
│  ├─ Regulator track bent or broken
│  ├─ Plastic clips sheared off
│  └─ Cost: €300-500 per door
│
├─ Window switch failure
│  ├─ Button doesn't respond
│  ├─ Check switch continuity
│  ├─ Switch contact worn
│  └─ Cost: €50-150 per switch
│
├─ Window obstacle detection reset
│  ├─ Auto-close pinch protection triggered
│  ├─ Module 08 → Special Functions → Window Reset
│  ├─ Drive window to fully open/close
│  └─ Cost: €0 (procedure)
│
├─ Wiring harness issue
│  ├─ Corroded connectors in door
│  ├─ Water intrusion from door seal
│  ├─ Broken wires from hinge flexing
│  └─ Cost: €100-300 (repair/replacement)
│
└─ Comfort module malfunction
   ├─ Module 08 not responding to input
   ├─ Software glitch or hardware failure
   ├─ May affect other comfort functions
   └─ Cost: €400-800 (module replacement)
```

**Most Common Window Failures:**
1. Motor failure (40%) → €300
2. Regulator failure (35%) → €400
3. Switch failure (15%) → €100
4. Obstacle reset needed (10%) → €0

---

## 12. Transmission Won't Engage / Select Gears

```
TRANSMISSION SELECTION PROBLEMS
│
├─ Low transmission fluid
│  ├─ Check fluid level with engine running
│  ├─ Should be at operating temperature
│  ├─ Low = leak detection needed
│  └─ Cost: €150-300 (leak repair)
│
├─ Transmission shift solenoid
│  ├─ Gears select but don't engage
│  ├─ Module 02 → Solenoid Test
│  ├─ Check solenoid resistance values
│  └─ Cost: €300-500 per solenoid
│
├─ Transmission range sensor
│  ├─ Selector shows wrong gear
│  ├─ Module 02 → Sensor Test
│  ├─ Potentiometer wear in selector
│  └─ Cost: €200-350 (replacement)
│
├─ Transmission clutch pack slipping
│  ├─ RPM rises without power increase
│  ├─ Specific gear slips (usually 2nd or 3rd)
│  ├─ Fluid color analysis: Dark = clutch wear
│  └─ Cost: €2000-4000 (rebuild)
│
├─ Torque converter lockup failure
│  ├─ Slips between gears
│  ├─ Loss of fuel economy
│  ├─ Hesitation on acceleration
│  └─ Cost: €1500-2500 (replacement)
│
├─ Transmission control module fault
│  ├─ Multiple shifting issues
│  ├─ Module 02 → Readiness Codes
│  ├─ May need software update
│  └─ Cost: €0-500 (update/replacement)
│
└─ Mechanical linkage disconnection
   ├─ Selector moves but transmission doesn't
   ├─ Cable or rod disconnected
   ├─ Usually obvious upon inspection
   └─ Cost: €100-300 (reconnect/replace)
```

**Severity Levels:**
- Minor (won't engage smoothly): €200-500
- Major (won't engage at all): €1500-4000
- Complete failure: €3000+ (rebuild)

---

## 13. Oil Pressure Warning Light

```
OIL PRESSURE LIGHT ON
│
├─ CRITICAL - Check oil level immediately
│  ├─ Engine off, on level ground
│  ├─ Pull dipstick, wipe, reinsert
│  ├─ Level should be between MIN and MAX
│  ├─ Top up with correct grade oil
│  └─ Cost: €20-50 (oil)
│
├─ Low oil pressure causes
│  ├─ Old/dirty oil with low viscosity
│  ├─ Change oil immediately with correct grade
│  ├─ Use manufacturer recommended oil only
│  └─ Cost: €100-200 (oil change)
│
├─ Oil pressure sensor failure
│  ├─ Module 01 → Measuring Blocks → Oil Pressure
│  ├─ Should read 40-80 bar at idle
│  ├─ Sensor connector may be loose
│  └─ Cost: €150-250 (sensor replacement)
│
├─ Oil pump wear
│  ├─ Internal pump clearances increased
│  ├─ Age/mileage > 150k mi suspect
│  ├─ Pressure drops with engine age
│  └─ Cost: €600-1000 (pump replacement)
│
├─ Engine bearing wear
│  ├─ Most serious diagnosis
│  ├─ Knocking/ticking sounds from engine
│  ├─ Metal particles in oil
│  └─ Cost: €2000+ (engine rebuild/replacement)
│
└─ Clogged oil filter or lines
   ├─ Recent oil change may have issue
   ├─ Wrong filter specification
   ├─ Filter bypass valve stuck
   └─ Cost: €50-150 (replace filter)
```

**EMERGENCY ACTIONS:**
1. Check oil level FIRST
2. If low: Top up and retest
3. If normal: Drive carefully to service
4. Continued warning: Stop driving immediately

---

## 14. Fuel Smell / Fuel Leak Detection

```
STRONG FUEL ODOR - POTENTIAL LEAK
│
├─ CRITICAL - Safety hazard
│  ├─ Do not ignore fuel smell
│  ├─ Fuel leaks = fire/explosion risk
│  ├─ Proceed to service immediately
│  └─ Stop driving if fumes in cabin
│
├─ Fuel line leakage
│  ├─ Visual inspection under vehicle
│  ├─ Dripping fuel = immediate danger
│  ├─ Hoses degrade with age/heat
│  └─ Cost: €200-400 (line replacement)
│
├─ Fuel injector seal failure
│  ├─ Smell from engine bay only
│  ├─ Usually only on cold start
│  ├─ O-ring degradation common
│  └─ Cost: €150-300 (seal kit)
│
├─ Charcoal canister saturation
│  ├─ Smell but no visible leak
│  ├─ Canister stores fuel vapors
│  ├─ May overflow in hot weather
│  └─ Cost: €300-500 (replacement)
│
├─ Fuel pump seal failure
│  ├─ Internal leak into fuel tank
│  ├─ No external dripping visible
│  ├─ Fuel may pool at pump area
│  └─ Cost: €500-800 (pump replacement)
│
├─ Fuel tank puncture/crack
│  ├─ Road debris impact damage
│  ├─ Corrosion perforation
│  ├─ Leak rate increases with fuel level
│  └─ Cost: €600-1200 (repair/replacement)
│
├─ Overfilled fuel tank
│  ├─ Fuel smell from vent line
│  ├─ Excess fuel in charcoal canister
│  ├─ Will dissipate as fuel burns
│  └─ Cost: €0 (no repair needed)
│
└─ Fuel pressure regulator failure
   ├─ Fuel pressure bleed-off malfunction
   ├─ Excess pressure forces fuel past seals
   ├─ Module 01 → Fuel Pressure Test
   └─ Cost: €200-400 (regulator replacement)
```

**Safety Rule:** Never ignore fuel smell - address immediately.

---

## 15. Check Engine Light + Transmission Issues

```
MIL LIGHT + SHIFTING PROBLEMS
│
├─ Transmission-related DTCs
│  ├─ P0700: Transmission fault
│  ├─ P0715: Input shaft sensor
│  ├─ P0730: Wrong gear ratio
│  ├─ P0750: Shift solenoid
│  └─ Check all codes together
│
├─ Torque converter clutch solenoid
│  ├─ Sticking or slow to respond
│  ├─ Harsh shifts or excessive slip
│  ├─ Module 02 → Solenoid Test
│  └─ Cost: €300-500 (solenoid)
│
├─ Transmission fluid overheat
│  ├─ Temperature sensor fault
│  ├─ Module 02 → Measuring Blocks → Temp
│  ├─ Normal: 60-100°C operating
│  ├─ > 120°C = critical (stop driving)
│  └─ Cost: €0 (cooling flush), €500+ (radiator)
│
├─ Engine load sensor failure (MAF/O2)
│  ├─ Affects transmission shift points
│  ├─ Engine running too rich/lean
│  ├─ Module 01 → Sensor Test
│  └─ Cost: €150-300 (sensor)
│
├─ Transmission adaptation learning
│  ├─ After engine work or fluid change
│  ├─ Transmission may shift poorly temporarily
│  ├─ Module 02 → Clear Adaptations
│  ├─ Drive 20-50 miles for relearning
│  └─ Cost: €0 (procedure)
│
├─ Engine oil viscosity wrong
│  ├─ Too thin = transmission slip
│  ├─ Too thick = harsh shifts
│  ├─ Use ONLY specified grade
│  └─ Cost: €100-200 (oil change)
│
└─ Transmission control module coding
   ├─ After module replacement
   ├─ May need VIN matching
   ├─ Requires professional coding
   └─ Cost: €0-300 (coding)
```

**Most Common Combination Faults:**
1. Sensor (MAF/O2/Temp) + Fluid = €150-300
2. Solenoid + Adaptation = €300-500
3. Converter + Temperature = €1500-2500

