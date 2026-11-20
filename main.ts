// My gta6-clipper-01 entry, in my own words: I went through Rockstar's official GTA VI Trailer 2 frame by frame and
// picked its stunt crescendo as the hook — Lucia grappling with a man on the open rear ramp of a flying cargo plane,
// which the trailer itself cuts straight into a pickup truck dragging a whole bank safe down a night street, sparks
// flying. I cut that passage (119.6s to 123.0s of the trailer), reframed it vertical with a blur fill so none of the
// wide action is lost, and burned in the hook lines "FIST FIGHT ON A FLYING PLANE?!" and "THEN THEY DRAG THE WHOLE
// SAFE!". The clip then lands on a pitch card with the make.fun ghost: make clips like this with AI and earn money
// on make.fun, naming this bounty's page. The rendered file is clip.mp4 in this repository; once it is public on
// YouTube, VIDEO.json names its address and this program hands that address in, unchanged.
//
// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The clip this entry hands in: the title it goes up with on YouTube.
const CLIP_TITLE = 'GTA 6: Fist Fight on a Flying Plane, Then They Drag the Whole Safe';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
  console.log(`Handed in the GTA 6 stunt clip: ${CLIP_TITLE}`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
