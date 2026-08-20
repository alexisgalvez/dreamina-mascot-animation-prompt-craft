/**
 * Dreamina Character & Mascot Animation Prompt Craft - Application Logic
 * Creator: Alexis Galvez (CorelDRAW Tips)
 * YouTube: youtube.com/coreldrawtips
 * Copyright © 2026 Alexis Galvez. All rights reserved.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  const State = {
    duration: 30,
    aspectRatio: '16:9',
    characterStyle: 'pixar-3d',
    environment: 'stylized-park',
    identityWeight: 85,
    strictIdentityLock: true,
    hasImage: false,
    extractedColors: [],
    beats: []
  };

  const PRESETS = {
    'mascot-adventure': {
      duration: 30,
      aspectRatio: '16:9',
      characterStyle: 'pixar-3d',
      environment: 'stylized-park',
      identityWeight: 85,
      strictIdentityLock: true,
      beats: [
        {
          name: 'Awakening & Curious Look',
          durationShare: 0.20,
          action: 'Mascot character wakes up, blinks with curiosity, stretches cheerfully, and looks directly at camera',
          expression: 'Wide-eyed joyful smile, cheerful eye contact, perked-up ears',
          camera: 'Slow continuous dolly push-in toward character face',
          fx: 'Warm sunlight filtering through trees with soft floating pollen particles'
        },
        {
          name: 'Energetic Meadow Walk',
          durationShare: 0.50,
          action: 'Mascot character performs an energetic, bouncy walk cycle across the lush meadow with rhythmic arm swings',
          expression: 'Enthusiastic singing expression, happy humming, bouncy head tilt',
          camera: 'Smooth tracking pan maintaining side-profile medium shot with natural depth parallax',
          fx: 'Soft dust puffs on footsteps with natural secondary ear bounce and hair inertia'
        },
        {
          name: 'Celebration Leap & Wave',
          durationShare: 0.30,
          action: 'Mascot leaps into the air with joy, lands softly with cushioned knees, turns to camera, and waves enthusiastically',
          expression: 'Broad celebratory grin, playful wink, and friendly wave goodbye',
          camera: 'Low-angle gentle rise settling into a crisp hero freeze-frame',
          fx: 'Brilliant sparkling magic particles glowing around character'
        }
      ]
    },
    'playful-dance': {
      duration: 15,
      aspectRatio: '16:9',
      characterStyle: 'chibi-kawaii',
      environment: 'cozy-workshop',
      identityWeight: 85,
      strictIdentityLock: true,
      beats: [
        {
          name: 'Beat Intro & Head Bop',
          durationShare: 0.30,
          action: 'Mascot stands in center room, bopping head to the rhythm and wiggling ears playfully',
          expression: 'Playful grin with sparkling eyes looking directly at camera',
          camera: 'Camera slowly glides in with subtle rhythmic pulse',
          fx: 'Warm cozy lamp glow with soft golden dust motes'
        },
        {
          name: 'Cute Dance Routine',
          durationShare: 0.45,
          action: 'Mascot performs a cute synchronized dance routine with mini spins and hip sways',
          expression: 'Excited laughing expression, expressive eye blinks',
          camera: 'Gentle horizontal floating camera catching all dynamic dance moves',
          fx: 'Vibrant pop-art heart and star particles briefly appearing on accent beats'
        },
        {
          name: 'Hero Pose & Bow',
          durationShare: 0.25,
          action: 'Mascot strikes an adorable superhero ending pose, placing hands on hips with a polite bow',
          expression: 'Proud cheerful smile with a cute head tilt',
          camera: 'Locked-off centered framing with smooth ease-out',
          fx: 'Soft spotlight highlight focusing on the character'
        }
      ]
    },
    'action-hero': {
      duration: 15,
      aspectRatio: '16:9',
      characterStyle: 'cel-shaded',
      environment: 'cyber-street',
      identityWeight: 90,
      strictIdentityLock: true,
      beats: [
        {
          name: 'Stealth Dash',
          durationShare: 0.30,
          action: 'Mascot character dashes quickly through rain puddles, sliding under an obstacle',
          expression: 'Focused determined gaze, heroic intense eye contact',
          camera: 'Fast low-angle dynamic tracking shot following character velocity',
          fx: 'Water splash particles and neon reflections rippling across the pavement'
        },
        {
          name: 'High-Altitude Flip',
          durationShare: 0.40,
          action: 'Mascot leaps high off a crate, performing a 360-degree backflip in mid-air',
          expression: 'Confident thrill expression with dynamic wind blowing hair/fur',
          camera: 'Upward tilting crane camera following mid-air trajectory',
          fx: 'Speed lines and blue cyan electric sparks trailing the motion'
        },
        {
          name: 'Epic 3-Point Hero Landing',
          durationShare: 0.30,
          action: 'Mascot executes a dramatic 3-point hero landing, looking up slowly toward the camera',
          expression: 'Fierce confident smirk with glowing eyes',
          camera: 'Dramatic low-angle push-in locking onto the hero stance',
          fx: 'Shockwave air ripple dissipating outward from the point of impact'
        }
      ]
    },
    'cute-reaction': {
      duration: 10,
      aspectRatio: '9:16',
      characterStyle: 'claymation',
      environment: 'studio-stage',
      identityWeight: 85,
      strictIdentityLock: true,
      beats: [
        {
          name: 'Surprised Discovery',
          durationShare: 0.45,
          action: 'Mascot notices something unexpected off-screen, gasps with surprise, and leans forward',
          expression: 'Exaggerated wide comical eyes, open mouth gasp, ears standing straight up',
          camera: 'Fast comedic snap-zoom onto the character surprised face',
          fx: 'Clean studio lighting with dramatic pop highlight'
        },
        {
          name: 'Delighted Giggle & Clapping',
          durationShare: 0.55,
          action: 'Mascot realizes it is a wonderful gift, breaks into uncontrollable giggles, and claps tiny hands excitedly',
          expression: 'Heartwarming joyful squinting smile with blushing cheeks',
          camera: 'Slow gentle orbit around the happy mascot',
          fx: 'Soft pastel background lighting with subtle glowing confetti'
        }
      ]
    }
  };

  const STYLE_MAPPINGS = {
    'pixar-3d': 'high-end 3D animated feature film character style, soft subsurface scattering skin, expressive large eyes with glossy specular catchlights, tactile fabric and fur textures, volumetric studio illumination',
    'cel-shaded': 'vibrant stylized 2.5D cel-shaded animation, crisp dynamic edge outlines, expressive anime facial rigging, clean saturated color fills',
    'claymation': 'tactile stop-motion claymation aesthetic, handcrafted clay fingerprint micro-textures, smooth vinyl toy finish, soft physical lighting',
    'photoreal-fur': 'hyper-realistic CGI character, high-density individual fur strand dynamics, lifelike iris depth, realistic physical weight and secondary motion',
    'chibi-kawaii': 'adorable 3D chibi figurine style, cute oversized head proportions, smooth gloss porcelain finish, soft pastel lighting'
  };

  const ENV_MAPPINGS = {
    'stylized-park': 'lush green stylized grassy field, vibrant wildflowers, warm golden sunlight filtering through cartoon trees, soft floating pollen motes',
    'cozy-workshop': 'charming rustic artist workshop, warm wooden shelves, glowing lamps, soft ambient dust particles in light shafts',
    'cyber-street': 'futuristic rain-slicked city street, colorful glowing neon signs, vibrant reflective puddles, moody atmospheric fog',
    'studio-stage': 'ultra-clean pastel studio curved cyclorama stage, soft commercial bounce lighting, gentle grounding contact shadows',
    'enchanted-forest': 'magical twilight woodland, glowing bioluminescent mushrooms, gentle sparkling fireflies, mossy ancient stone ruins'
  };

  const ACTION_PRESETS = [
    { value: 'Mascot character wakes up, blinks with curiosity, stretches cheerfully, and looks directly at camera', label: 'Awakening & Curious Look' },
    { value: 'Mascot character performs an energetic, bouncy walk cycle across the scene with rhythmic arm swings', label: 'Energetic Walk Cycle' },
    { value: 'Mascot turns toward camera, jumps in celebration, and waves enthusiastically', label: 'Celebration Jump & Wave' },
    { value: 'Mascot stands in center room, bopping head to the rhythm and wiggling ears playfully', label: 'Playful Head Bop' },
    { value: 'Mascot performs a cute synchronized dance routine with mini spins and hip sways', label: 'Cute Dance Routine' },
    { value: 'Mascot strikes an adorable superhero ending pose, placing hands on hips with a polite bow', label: 'Hero Pose & Bow' },
    { value: 'Mascot character dashes quickly through rain puddles, sliding under an obstacle', label: 'Action Dash & Slide' },
    { value: 'Mascot leaps high off a crate, performing a 360-degree backflip in mid-air', label: 'High Mid-Air Backflip' },
    { value: 'Mascot executes a dramatic 3-point hero landing, looking up slowly toward the camera', label: '3-Point Hero Landing' },
    { value: 'Mascot notices something unexpected off-screen, gasps with surprise, and leans forward', label: 'Surprised Discovery Gasp' },
    { value: 'Mascot realizes it is a wonderful gift, breaks into uncontrollable giggles, and claps tiny hands excitedly', label: 'Delighted Giggle & Clapping' }
  ];

  const EXPRESSION_PRESETS = [
    { value: 'Wide-eyed joyful smile, cheerful eye contact, perked-up ears', label: 'Joyful Smile & Perked Ears' },
    { value: 'Enthusiastic singing expression, happy humming, bouncy head tilt', label: 'Humming & Singing' },
    { value: 'Broad celebratory grin, playful wink, and friendly wave goodbye', label: 'Wink & Wave Goodbye' },
    { value: 'Playful grin with sparkling eyes looking directly at camera', label: 'Sparkling Eyes Grin' },
    { value: 'Excited laughing expression, expressive eye blinks', label: 'Excited Laugh & Blink' },
    { value: 'Proud cheerful smile with a cute head tilt', label: 'Proud Smile & Head Tilt' },
    { value: 'Focused determined gaze, heroic intense eye contact', label: 'Determined Heroic Gaze' },
    { value: 'Confident thrill expression with dynamic wind blowing hair/fur', label: 'Confident Thrill Gaze' },
    { value: 'Fierce confident smirk with glowing eyes', label: 'Fierce Smirk & Glowing Eyes' },
    { value: 'Exaggerated wide comical eyes, open mouth gasp, ears standing straight up', label: 'Comical Surprised Eyes' },
    { value: 'Heartwarming joyful squinting smile with blushing cheeks', label: 'Squinting Smile & Blush' }
  ];

  const CAMERA_PRESETS = [
    { value: 'Slow continuous dolly push-in toward character face', label: 'Dolly Push-In' },
    { value: 'Smooth tracking pan maintaining side-profile medium shot with natural depth parallax', label: 'Tracking Pan (Profile)' },
    { value: 'Low-angle gentle rise settling into a crisp hero freeze-frame', label: 'Low-Angle Rise to Freeze' },
    { value: 'Camera slowly glides in with subtle rhythmic pulse', label: 'Rhythmic Gliding Close-Up' },
    { value: 'Gentle horizontal floating camera catching all dynamic dance moves', label: 'Floating Camera (Dance)' },
    { value: 'Locked-off centered framing with smooth ease-out', label: 'Locked-Off Centered' },
    { value: 'Fast low-angle dynamic tracking shot following character velocity', label: 'Fast Low-Angle Action Track' },
    { value: 'Upward tilting crane camera following mid-air trajectory', label: 'Crane Tilt-Up Track' },
    { value: 'Dramatic low-angle push-in locking onto the hero stance', label: 'Dramatic Hero Push-In' },
    { value: 'Fast comedic snap-zoom onto the character surprised face', label: 'Comedic Snap-Zoom' },
    { value: 'Slow gentle orbit around the happy mascot', label: 'Slow 360-Degree Orbit' }
  ];

  const FX_PRESETS = [
    { value: 'Warm sunlight filtering through trees with soft floating pollen particles', label: 'Warm Sunlight & Pollen' },
    { value: 'Soft dust puffs on footsteps with natural secondary ear bounce and hair inertia', label: 'Step Dust Puffs & Bounce' },
    { value: 'Brilliant sparkling magic particles glowing around character', label: 'Magic Glowing Sparkles' },
    { value: 'Warm cozy lamp glow with soft golden dust motes', label: 'Cozy Lamp Glow & Dust' },
    { value: 'Vibrant pop-art heart and star particles briefly appearing on accent beats', label: 'Pop-Art Hearts & Stars' },
    { value: 'Soft spotlight highlight focusing on the character', label: 'Soft Character Spotlight' },
    { value: 'Water splash particles and neon reflections rippling across the pavement', label: 'Rain Splashes & Neon Glow' },
    { value: 'Speed lines and blue cyan electric sparks trailing the motion', label: 'Speed Lines & Electric Sparks' },
    { value: 'Shockwave air ripple dissipating outward from the point of impact', label: 'Impact Shockwave Ripple' },
    { value: 'Clean studio lighting with dramatic pop highlight', label: 'Studio Pop Highlight' },
    { value: 'Soft pastel background lighting with subtle glowing confetti', label: 'Pastel Confetti & Soft BG' }
  ];

  // DOM Elements
  const durationSelect = document.getElementById('video-duration');
  const aspectRatioSelect = document.getElementById('aspect-ratio');
  const characterStyleSelect = document.getElementById('character-style');
  const environmentSelect = document.getElementById('environment-select');
  const identityLockToggle = document.getElementById('identity-lock-toggle');
  
  const weight1 = document.getElementById('weight-1');
  const weightVal1 = document.getElementById('weight-val-1');

  const imageUpload1 = document.getElementById('image-upload-1');
  const dropZone1 = document.getElementById('drop-zone-1');
  const uploadIdle1 = document.getElementById('upload-idle-1');
  const uploadPreview1 = document.getElementById('upload-preview-1');
  const imagePreview1 = document.getElementById('image-preview-1');
  const btnRemove1 = document.getElementById('btn-remove-1');

  const paletteSwatches = document.getElementById('palette-swatches');
  const beatsContainer = document.getElementById('beats-container');
  const btnAddBeat = document.getElementById('btn-add-beat');
  const timelineIndicator = document.getElementById('timeline-indicator');
  
  const videoPromptText = document.getElementById('video-prompt-text');
  const canvasPromptText = document.getElementById('canvas-prompt-text');
  const btnCopyVideo = document.getElementById('btn-copy-video');
  const btnCopyCanvas = document.getElementById('btn-copy-canvas');
  const metaDuration = document.getElementById('meta-duration');
  const metaRatio = document.getElementById('meta-ratio');
  
  const tabButtons = document.querySelectorAll('.tab-btn');
  const viewVideoPrompt = document.getElementById('view-video-prompt');
  const viewCanvasPrompt = document.getElementById('view-canvas-prompt');
  const presetButtons = document.querySelectorAll('.preset-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  const btnOpenManual = document.getElementById('btn-open-manual');
  const manualModal = document.getElementById('manual-modal');
  const btnCloseManual = document.getElementById('btn-close-manual');
  const btnCloseManualOk = document.getElementById('btn-close-manual-ok');

  function init() {
    loadPreset('mascot-adventure');
    setupEventListeners();
    setupImageUpload();
  }

  function setupEventListeners() {
    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        presetButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadPreset(btn.dataset.preset);
      });
    });

    durationSelect.addEventListener('change', () => {
      State.duration = parseInt(durationSelect.value);
      recalculateBeatTimings();
      renderBeats();
      compilePrompts();
    });

    aspectRatioSelect.addEventListener('change', () => {
      State.aspectRatio = aspectRatioSelect.value;
      compilePrompts();
    });

    characterStyleSelect.addEventListener('change', () => {
      State.characterStyle = characterStyleSelect.value;
      compilePrompts();
    });

    environmentSelect.addEventListener('change', () => {
      State.environment = environmentSelect.value;
      compilePrompts();
    });

    identityLockToggle.addEventListener('change', () => {
      State.strictIdentityLock = identityLockToggle.checked;
      compilePrompts();
    });

    weight1.addEventListener('input', (e) => {
      State.identityWeight = parseInt(e.target.value);
      weightVal1.textContent = `${State.identityWeight}%`;
      compilePrompts();
    });

    btnAddBeat.addEventListener('click', handleAddBeat);

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn.dataset.tab === 'video-prompt') {
          viewVideoPrompt.classList.remove('hidden');
          viewCanvasPrompt.classList.add('hidden');
        } else {
          viewVideoPrompt.classList.add('hidden');
          viewCanvasPrompt.classList.remove('hidden');
        }
      });
    });

    btnCopyVideo.addEventListener('click', () => copyToClipboard(videoPromptText.value, 'Seedance 2.5 Video Prompt copied!'));
    btnCopyCanvas.addEventListener('click', () => copyToClipboard(canvasPromptText.value, 'Canvas Master 3D Image Prompt copied!'));

    // User Manual Modal event listeners
    if (btnOpenManual && manualModal) {
      btnOpenManual.addEventListener('click', () => {
        manualModal.classList.remove('hidden');
      });
    }

    const hideManual = () => {
      if (manualModal) manualModal.classList.add('hidden');
    };

    if (btnCloseManual) btnCloseManual.addEventListener('click', hideManual);
    if (btnCloseManualOk) btnCloseManualOk.addEventListener('click', hideManual);

    if (manualModal) {
      manualModal.addEventListener('click', (e) => {
        if (e.target === manualModal) hideManual();
      });
    }
  }

  function loadPreset(presetKey) {
    const preset = PRESETS[presetKey];
    if (!preset) return;

    State.duration = preset.duration;
    State.aspectRatio = preset.aspectRatio;
    State.characterStyle = preset.characterStyle;
    State.environment = preset.environment;
    State.identityWeight = preset.identityWeight;
    State.strictIdentityLock = preset.strictIdentityLock;

    durationSelect.value = State.duration.toString();
    aspectRatioSelect.value = State.aspectRatio;
    characterStyleSelect.value = State.characterStyle;
    environmentSelect.value = State.environment;
    identityLockToggle.checked = State.strictIdentityLock;
    weight1.value = State.identityWeight.toString();
    weightVal1.textContent = `${State.identityWeight}%`;

    State.beats = preset.beats.map((b, idx) => ({
      id: Date.now() + idx,
      name: b.name,
      durationShare: b.durationShare,
      startSec: 0,
      endSec: 0,
      action: b.action,
      expression: b.expression,
      camera: b.camera,
      fx: b.fx
    }));

    recalculateBeatTimings();
    renderBeats();
    compilePrompts();
  }

  function recalculateBeatTimings() {
    const totalBeats = State.beats.length;
    if (totalBeats === 0) return;

    let sumShare = State.beats.reduce((sum, b) => sum + (b.durationShare || 0), 0);
    if (Math.abs(sumShare - 1.0) > 0.01) {
      State.beats.forEach(b => {
        b.durationShare = 1 / totalBeats;
      });
    }

    let currentSec = 0;
    State.beats.forEach((beat, idx) => {
      beat.startSec = Math.round(currentSec);
      if (idx === totalBeats - 1) {
        beat.endSec = State.duration;
      } else {
        const span = Math.round(State.duration * beat.durationShare);
        beat.endSec = Math.min(State.duration, currentSec + Math.max(2, span));
      }
      currentSec = beat.endSec;
    });

    timelineIndicator.textContent = `${totalBeats} Scene Beats (0:00 - 0:${State.duration < 10 ? '0' : ''}${State.duration})`;
  }

  function renderBeats() {
    beatsContainer.innerHTML = '';

    function renderFieldGroup(label, fieldName, currentValue, presetArray) {
      const matchedPreset = presetArray.find(p => p.value === currentValue);
      const isCustom = !matchedPreset && currentValue !== '';
      
      let optionsHtml = presetArray.map(p => {
        const selected = p.value === currentValue ? 'selected' : '';
        return `<option value="${escapeHtml(p.value)}" ${selected}>${escapeHtml(p.label)}</option>`;
      }).join('');

      const customSelected = isCustom ? 'selected' : '';
      optionsHtml += `<option value="custom" ${customSelected}>Other / Custom Text...</option>`;

      return `
        <div class="form-group ${fieldName === 'action' || fieldName === 'fx' ? 'full-span' : ''}">
          <label class="field-desc">${label}</label>
          <div class="field-input-group">
            <select class="form-select beat-preset-select" data-field="${fieldName}">
              ${optionsHtml}
            </select>
            <input type="text" class="form-input beat-custom-input ${isCustom ? '' : 'hidden'}" value="${escapeHtml(currentValue)}" data-field="${fieldName}" placeholder="Enter custom ${label.toLowerCase()}...">
          </div>
        </div>
      `;
    }

    State.beats.forEach((beat, index) => {
      const card = document.createElement('div');
      card.className = 'beat-card';
      card.dataset.id = beat.id;

      card.innerHTML = `
        <div class="beat-header">
          <div class="beat-title-wrap">
            <span class="beat-pill">Beat ${index + 1}</span>
            <input type="text" class="beat-name-input" value="${escapeHtml(beat.name)}" data-field="name">
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="beat-time-range">${formatTime(beat.startSec)} – ${formatTime(beat.endSec)}</span>
            ${State.beats.length > 1 ? `<button type="button" class="btn-delete-beat" title="Delete Beat"><i class="fa-solid fa-trash"></i></button>` : ''}
          </div>
        </div>

        <div class="beat-grid">
          ${renderFieldGroup('Character Action & Movement', 'action', beat.action, ACTION_PRESETS)}
          ${renderFieldGroup('Facial Expression & Emotion', 'expression', beat.expression, EXPRESSION_PRESETS)}
          ${renderFieldGroup('Camera Movement', 'camera', beat.camera, CAMERA_PRESETS)}
          ${renderFieldGroup('Lighting & Atmosphere FX', 'fx', beat.fx, FX_PRESETS)}
        </div>
      `;

      // Event listener for beat name input
      const nameInput = card.querySelector('.beat-name-input');
      if (nameInput) {
        nameInput.addEventListener('input', (e) => {
          beat.name = e.target.value;
          compilePrompts();
        });
      }

      // Event listeners for preset selects
      card.querySelectorAll('.beat-preset-select').forEach(select => {
        select.addEventListener('change', (e) => {
          const field = e.target.dataset.field;
          const input = e.target.nextElementSibling;
          
          if (e.target.value === 'custom') {
            input.classList.remove('hidden');
            beat[field] = input.value;
            input.focus();
          } else {
            input.classList.add('hidden');
            beat[field] = e.target.value;
            input.value = e.target.value;
          }
          compilePrompts();
        });
      });

      // Event listeners for custom inputs
      card.querySelectorAll('.beat-custom-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const field = e.target.dataset.field;
          beat[field] = e.target.value;
          compilePrompts();
        });
      });

      const deleteBtn = card.querySelector('.btn-delete-beat');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          State.beats = State.beats.filter(b => b.id !== beat.id);
          recalculateBeatTimings();
          renderBeats();
          compilePrompts();
        });
      }

      beatsContainer.appendChild(card);
    });
  }

  function handleAddBeat() {
    if (State.beats.length >= 5) {
      showToast('Maximum 5 scene beats recommended for 30s video.');
      return;
    }

    const newBeat = {
      id: Date.now(),
      name: `Scene ${State.beats.length + 1}`,
      durationShare: 1 / (State.beats.length + 1),
      startSec: 0,
      endSec: 0,
      action: 'Mascot performs an expressive motion in the environment',
      expression: 'Cheerful smile and friendly eye contact',
      camera: 'Camera glides smoothly with subtle parallax',
      fx: 'Atmospheric light beams and soft particle dynamics'
    };

    State.beats.push(newBeat);
    recalculateBeatTimings();
    renderBeats();
    compilePrompts();
  }

  function compilePrompts() {
    metaDuration.textContent = `${State.duration}s`;
    metaRatio.textContent = State.aspectRatio;

    const styleDesc = STYLE_MAPPINGS[State.characterStyle] || State.characterStyle;
    const envDesc = ENV_MAPPINGS[State.environment] || State.environment;
    const colorPaletteStr = State.extractedColors.length > 0 
      ? `Brand Color Palette: [${State.extractedColors.join(', ')}].`
      : '';

    // Video Prompt (Seedance 2.5)
    let videoPrompt = `Generate a single continuous ${State.duration}-second 3D character animation video in ${State.aspectRatio} format.\n`;
    videoPrompt += `Visual Rendering Style: ${styleDesc}.\n`;
    videoPrompt += `Environment & World: ${envDesc}.\n`;
    videoPrompt += `Character Reference Anchor: @Image 1 (Mascot Identity & Geometry Anchor, reference weight: ${State.identityWeight}%).\n`;
    if (colorPaletteStr) videoPrompt += `${colorPaletteStr}\n`;
    videoPrompt += `\n--- CHRONOLOGICAL ANIMATION STORYBOARD ---\n`;

    State.beats.forEach((b) => {
      videoPrompt += `\n[${formatTime(b.startSec)} – ${formatTime(b.endSec)} | ${b.name}]\n`;
      videoPrompt += `- Mascot Action: ${b.action} (strictly maintaining @Image 1 identity)\n`;
      videoPrompt += `- Expression & Eyes: ${b.expression}\n`;
      videoPrompt += `- Camera Path: ${b.camera}\n`;
      videoPrompt += `- Environment FX: ${b.fx}\n`;
    });

    videoPrompt += `\n--- PRODUCTION CONSTRAINTS & STABILITY ---\n`;
    videoPrompt += `Single continuous long take with zero cuts or camera jumps. `;
    if (State.strictIdentityLock) {
      videoPrompt += `Strict character identity preservation: exact head-to-body proportions, eye shapes, color schemes, and vector silhouette matching @Image 1 across all 30 seconds. Zero limb melting, zero facial morphing, zero body warping. `;
    }
    videoPrompt += `Smooth locomotion physics, natural weight cushioning, dynamic secondary ear/tail inertia, high temporal consistency, 4K production render.`;

    videoPromptText.value = videoPrompt;

    // Canvas Still Prompt (Seedream 5.0 Pro)
    let canvasPrompt = `Master 3D character portrait anchored by @Image 1 vector artwork.\n`;
    canvasPrompt += `Subject: Full-body 3D realization of the mascot character from @Image 1.\n`;
    canvasPrompt += `Style: ${styleDesc}.\n`;
    canvasPrompt += `Setting: ${envDesc}.\n`;
    if (colorPaletteStr) canvasPrompt += `${colorPaletteStr}\n`;
    canvasPrompt += `Composition: Perfectly centered full-body framing, ultra-high resolution 4K render, crisp textural details on fur/skin, expressive specular eye catchlights, professional studio character showcase.`;

    canvasPromptText.value = canvasPrompt;
  }

  function setupImageUpload() {
    imageUpload1.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleImageFile(file);
    });

    ['dragenter', 'dragover'].forEach(name => {
      dropZone1.addEventListener(name, (e) => {
        e.preventDefault();
        dropZone1.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(name => {
      dropZone1.addEventListener(name, (e) => {
        e.preventDefault();
        dropZone1.classList.remove('dragover');
      }, false);
    });

    dropZone1.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file) handleImageFile(file);
    });

    btnRemove1.addEventListener('click', (e) => {
      e.stopPropagation();
      imageUpload1.value = '';
      imagePreview1.src = '';
      uploadPreview1.classList.add('hidden');
      uploadIdle1.classList.remove('hidden');
      State.hasImage = false;
      State.extractedColors = [];
      renderPalette();
      compilePrompts();
    });
  }

  function handleImageFile(file) {
    const isSvg = file.name.endsWith('.svg') || file.type === 'image/svg+xml';

    if (isSvg) {
      const textReader = new FileReader();
      textReader.onload = (e) => extractColorsFromSvg(e.target.result);
      textReader.readAsText(file);
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview1.src = e.target.result;
      uploadIdle1.classList.add('hidden');
      uploadPreview1.classList.remove('hidden');
      State.hasImage = true;

      if (!isSvg) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => extractColorsFromRaster(img);
      }
      compilePrompts();
    };
    reader.readAsDataURL(file);
  }

  function extractColorsFromSvg(svgText) {
    const colors = new Set();
    const hexRegex = /#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;
    let match;
    while ((match = hexRegex.exec(svgText)) !== null) {
      colors.add(match[0].toUpperCase());
    }

    State.extractedColors = Array.from(colors).slice(0, 6);
    renderPalette();
    compilePrompts();
  }

  function extractColorsFromRaster(img) {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 64;
      canvas.height = 64;
      ctx.drawImage(img, 0, 0, 64, 64);
      const data = ctx.getImageData(0, 0, 64, 64).data;
      const colorCounts = {};

      for (let i = 0; i < data.length; i += 16) {
        const a = data[i + 3];
        if (a > 128) {
          const r = Math.min(255, Math.round(data[i] / 32) * 32);
          const g = Math.min(255, Math.round(data[i + 1] / 32) * 32);
          const b = Math.min(255, Math.round(data[i + 2] / 32) * 32);
          const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
          colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }
      }

      const sorted = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);
      State.extractedColors = sorted.slice(0, 5);
    } catch (e) {
      console.warn('Canvas color extraction error:', e);
    }
    renderPalette();
    compilePrompts();
  }

  function renderPalette() {
    paletteSwatches.innerHTML = '';
    if (State.extractedColors.length === 0) {
      paletteSwatches.innerHTML = '<span class="palette-empty-text">Upload mascot to extract colors</span>';
      return;
    }

    State.extractedColors.forEach(hex => {
      const swatch = document.createElement('div');
      swatch.className = 'swatch-item';
      swatch.style.backgroundColor = hex;
      swatch.title = `${hex} (Click to copy)`;
      swatch.addEventListener('click', () => copyToClipboard(hex, `Copied ${hex} to clipboard`));
      paletteSwatches.appendChild(swatch);
    });
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function copyToClipboard(text, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(message));
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(message);
    }
  }

  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2800);
  }

  init();
});
