# APP_SPEC.md — Functional Architecture & State Schema

## 1. Application State Schema
```javascript
const State = {
  duration: 30,             // 10 | 15 | 30
  aspectRatio: '16:9',      // 16:9 | 9:16 | 1:1
  characterStyle: 'pixar-3d',// pixar-3d | cel-shaded | claymation | photoreal-fur | chibi-kawaii
  environment: 'stylized-park',
  identityLockWeight: 85,
  extractedColors: [],
  beats: [
    {
      id: 1,
      name: 'Intro & Awakening',
      startSec: 0,
      endSec: 5,
      action: 'Mascot wakes up, blinks curiously, and looks directly at camera',
      expression: 'Wide-eyed joyful smile with gentle ear twitch',
      camera: 'Slow continuous dolly push-in toward character face',
      fx: 'Warm sunlight filtering through trees with soft pollen particles'
    },
    {
      id: 2,
      name: 'Core Locomotion / Action',
      startSec: 5,
      endSec: 20,
      action: 'Mascot performs an energetic, bouncy walk cycle across the scene',
      expression: 'Enthusiastic cheerful expression, humming along happily',
      camera: 'Smooth tracking pan maintaining side-profile medium shot',
      fx: 'Soft dust puffs on footsteps with natural secondary ear bounce'
    },
    {
      id: 3,
      name: 'Outro Wave & Celebration',
      startSec: 20,
      endSec: 30,
      action: 'Mascot turns toward camera, jumps in celebration, and waves enthusiastically',
      expression: 'Broad happy grin and friendly eye contact',
      camera: 'Low-angle gentle rise settling into a crisp hero freeze-frame',
      fx: 'Brilliant sparkling magic particles glowing around character'
    }
  ]
};
```

---

## 2. Local Testing & Web Hosting
- **Local Run**: Double-click `index.html`.
- **Web Hosting**: Upload `index.html`, `style.css`, `app.js` to web server (or rename to `index.php`).
