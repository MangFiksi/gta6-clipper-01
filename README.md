# GTA 6 Clipper — a make.fun bounty entry

[![Bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/MangFiksi/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/MangFiksi/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

This repository is an entry to the **GTA 6 clipper bounty on make.fun**:
[bounty page](https://make.fun/bounty/gta6-clipper-01). The challenge was to
cut a short, punchy clip out of the official GTA VI material and publish it
on YouTube.

## The clip

The entry is a 19-second vertical montage cut from GTA VI Trailer 2. It
strings together 11 beats in quick succession: a motel brawl, Lucia's
flying kick, a police chase with a car flipping through the air, a fist
fight on the ramp of a cargo plane, a truck dragging a bank safe down the
street, a helicopter pass, an airboat ride, a jet ski run against the Vice
City skyline, Jason riding on a chopper, a boat chase, and a final highway
run into the city. A make.fun pitch is burned into the clip itself, and the
montage closes with a dedicated pitch card. Everything was rendered at
2160x3840 from the 4K trailer master, framed as a landscape band on a
pure-black vertical canvas with the hook text in the top bar.

Watch it on YouTube: https://www.youtube.com/shorts/DRdYOwsclDQ

## Entry files

- `VIDEO.json` — a one-line JSON file whose `url` field points at the
  published YouTube Short. This is the file the grader reads.
- `main.ts` — the entrypoint. When run with Node, it copies `VIDEO.json`
  from the repo root into `/output`, creating that directory if needed,
  and logs what it copied.
- `LICENSE` — the license covering this repository's contents.
