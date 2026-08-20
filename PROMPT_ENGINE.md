# PROMPT_ENGINE.md — Dreamina 3D Character & Mascot Animation Specification

## 1. Overview & Core Objective
This specification defines prompt compilation rules for converting 2D vector character and mascot illustrations into continuous, living 3D AI video animations using **Dreamina (dreamina.capcut.com)**.

Supported Models:
- **Dreamina Seedance 2.5 / 2.0**: Continuous multi-beat character animation (up to 30s) with strict identity preservation via multimodal reference (`@Image 1`).
- **Dreamina Seedream 5.0 Pro / Lite**: High-fidelity 3D master-frame generation for Canvas anchoring.

---

## 2. Multimodal Character Anchoring Rules
- `@Image 1`: Primary 2D mascot/character vector artwork (geometry, colors, silhouette, and face proportions).
- `@Image 2`: Optional environment backdrop, secondary character, or held prop.

---

## 3. Storyboard Chronological Formula (Video)
```text
[Global Parameters: Duration: {duration}s | Aspect Ratio: {aspect_ratio} | Style: {character_style} | Environment: {environment}]
[Character Reference: @Image 1 (Mascot Identity & Geometry Anchor, Weight: {ref_weight}%)]

[0:00–{t1}s | Beat 1: {beat1_name}]
Character Action: {beat1_action} (anchored to @Image 1).
Expression & Emotion: {beat1_expression}.
Camera Movement: {beat1_camera}.
Lighting & Environment FX: {beat1_fx}.

[{t1}s–{t2}s | Beat 2: {beat2_name}]
Character Action: {beat2_action}.
Locomotion & Physics: {beat2_physics}.
Camera Movement: {beat2_camera}.
Lighting & Environment FX: {beat2_fx}.

[{t2}s–{duration}s | Beat 3: {beat3_name}]
Character Action: {beat3_action}.
Outro & Resolution: {beat3_resolution}.
Camera Movement: {beat3_camera}.
Lighting & Environment FX: {beat3_fx}.

[Production Constraints & Identity Locks]
{character_identity_tokens}, {locomotion_tokens}, {stability_tokens}.
```

---

## 4. Vocabulary Dictionaries

### A. 3D Character Rendering Styles
- **3D Pixar / Disney Stylized**: "high-end 3D animated feature film character style, soft subsurface scattering skin, expressive large eyes with glossy specular catchlights, tactile fabric and fur textures, volumetric studio illumination"
- **Stylized 2.5D Cel-Shaded Anime**: "vibrant stylized 2.5D cel-shaded animation, crisp dynamic edge outlines, expressive anime facial rigging, clean saturated color fills"
- **Stop-Motion Claymation / Vinyl Toy**: "tactile stop-motion claymation aesthetic, handcrafted clay fingerprint micro-textures, smooth vinyl toy finish, soft physical lighting"
- **Photoreal CGI Furry Creature**: "hyper-realistic CGI character, high-density individual fur strand dynamics, lifelike iris depth, realistic physical weight and secondary motion"
- **3D Chibi / Kawaii Figurine**: "adorable 3D chibi figurine style, cute oversized head proportions, smooth gloss porcelain finish, soft pastel lighting"

### B. Environments & Backdrops
- **Stylized Park / Meadow**: "lush green stylized grassy field, vibrant wildflowers, warm golden sunlight filtering through cartoon trees, soft floating pollen motes"
- **Cozy Whimsical Workshop**: "charming rustic artist workshop, warm wooden shelves, glowing lamps, soft ambient dust particles in light shafts"
- **Cyberpunk Neon Street**: "futuristic rain-slicked city street, colorful glowing neon signs, vibrant reflective puddles, moody atmospheric fog"
- **Minimalist Studio Stage**: "ultra-clean pastel studio curved cyclorama stage, soft commercial bounce lighting, gentle grounding contact shadows"
- **Enchanted Fantasy Forest**: "magical twilight woodland, glowing bioluminescent mushrooms, gentle sparkling fireflies, mossy ancient stone ruins"

### C. Locomotion, Physics & Expressive Actions
- **Locomotion**: "smooth natural walking cycle with bouncy gait", "energetic joyful run with weight cushioning", "playful rhythmic dance steps with organic sway"
- **Expressions**: "curious wide-eyed blink looking at camera", "broad joyful open-mouth smile with ear wiggles", "mischievous wink with cheerful head tilt"
- **Secondary Motion**: "dynamic ear bounce, tail wagging physics, natural clothing and hair follow-through inertia"

### D. Identity Preservation & Stability Safeguards
- `strict character identity lock matching @Image 1 proportions, colors, and features`
- `single continuous long take with zero cuts or angle jumps`
- `no body part melting, no extra limbs, no facial morphing or distortion`
- `high temporal character consistency across all 30 seconds`
- `realistic anatomical balance and fluid physics easing`
