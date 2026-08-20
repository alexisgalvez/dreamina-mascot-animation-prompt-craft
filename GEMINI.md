# Dreamina Mascot Animation Prompt Craft - Project Guidelines

This file outlines the coding guidelines, UI preferences, server configurations, and version control procedures for this workspace.

## 1. User Interface & Layout Preferences
- **Text-Based Dropdowns**: Always use standard text-based select dropdowns and text inputs for Mascot Facial Expressions, Actions/Locomotion, and Camera Trajectories. Do NOT replace them with visual emoji card grids or icon badges unless explicitly requested by the user.
- **Support Badge**: Maintain the "Buy Me a Coffee" support badge in its original position at the bottom of the page (footer) with its orange hover glow styles.

## 2. Server & Port Configurations
- **Default Port**: The Node.js web server (`server.js`) must be configured to run on port **3001** to avoid conflicts.
- **Dynamic Port Allocation**: Keep the fallback error handling in `server.js` to increment the port dynamically if 3001 is already in use.

## 3. Custom Feature Integrity
- **Browser LocalStorage Saving**: Keep the serialization/deserialization logic in `app.js` under `dreamina_mascot_saves`. This system saves the prompt configuration, storyboard beats, video links/notes, and the base64-encoded mascot character reference PNG.
- **Video Player**: Maintain the drag-and-drop local video player slot and the online URL input. Do not upload local videos to any servers; keep them playing dynamically using local object URLs.

## 4. Git & Push Workflows
- **Handling Divergent History**: If the local repository is reset back to an older commit (e.g., the initial 11:42 AM commit) and needs to be pushed to GitHub, do NOT force push (`git push --force`) by default.
- **Merge/Rebase Pattern**: Reset the index to the remote branch (`git reset origin/master`) and commit the local workspace changes as a new commit on top of the remote tip. This keeps history continuous and prevents loss of remote commits.
