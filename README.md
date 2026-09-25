# Starpath Dash

A 100-course third-person deathrun in one HTML file. Ten worlds, ten courses each. Reach the gold flag, pick a power-up, and keep going until course 100.

Open `deathrun.html` in a browser. The page loads [Three.js](https://threejs.org/) and fonts from the internet, so you need a connection the first time. A local static server works too:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000/deathrun.html`.

## How to play

Each course is a generated path of platforms. Land on the gold finish pad to clear it. Falling off, or touching a red spinning bar, costs a life. You start each course with 3 lives. Run out and you return to the map. The course layout is the same every time you play that number.

Checkpoints sit near the middle and near the end. Dying sends you back to the last one you touched. **R** also sends you back there, without spending a life.

Coins on the path add to your total when you clear the course. They are saved in the browser.

Clearing a course unlocks the next one, up to 100. Worlds stay locked until you reach their first course. **Continue adventure** jumps to the furthest course you have unlocked. **Reset save** wipes progress.

After a clear (except course 100), you pick 1 of 3 random power-ups. It lasts 3 attempts on the next course, including deaths. When those attempts are gone, the power drops off even if you still have lives. Beating course 100 ends the run.

## Controls

| Action | Key |
| --- | --- |
| Look around | Click the game, then move the mouse |
| Move | W A S D |
| Jump | Space |
| Sprint | Shift |
| Restart at last checkpoint | R |
| Back to the map | Esc |

Hold Space only as long as you want the jump. Letting go early cuts the height.

## Worlds

Courses 1–10 are World 1, 11–20 are World 2, and so on. Later courses use narrower pads, wider gaps, and more hazards. Each world also has its own twist.

| World | Courses | What changes |
| --- | --- | --- |
| Leafy Grove | 1–10 | Extra moving side platforms |
| Candy Kingdom | 11–20 | Bounce pads |
| Sunbaked Dunes | 21–30 | Open desert hops |
| Neon Streets | 31–40 | Conveyor platforms that shove you |
| Frostpeak Pass | 41–50 | Ice. You slide on landing |
| Magma Keep | 51–60 | Crumbling pads and a higher lava floor |
| Coral Cove | 61–70 | Lighter gravity and a little bounce |
| Sky Parade | 71–80 | Lighter gravity over the clouds |
| Spooky Hollow | 81–90 | Platforms that blink in and out |
| Star Palace | 91–100 | Slightly faster running, space road |

Shared platform types show up more as the course number climbs:

- **Moving** pads slide sideways or bob up and down.
- **Crumbling** pads fall apart after you stand on them.
- **Blink** pads vanish and come back.
- **Ice** pads (cyan) are slippery.
- **Bounce** pads (green) launch you upward.
- **Red bars** spin. Touch one and you lose a life.

## Power-ups

| Power | Effect |
| --- | --- |
| Super Jump | Much higher jumps |
| Moon Gravity | Slow, floaty falls |
| Turbo Sneaks | You sprint without holding Shift, and a bit faster than a normal sprint |
| Double Jump | Press Space again in the air |
| Feather Fall | Hold Space while falling to glide |
| Star Magnet | Coins pull toward you |
| Safety Spark | The first red-bar hit each attempt is ignored |
| Sticky Grip | Ice does not slide, and landings are more forgiving |
| Time Warp | Red bars spin slower |
| Wide Pads | Every platform is larger |
| Hover Step | You can jump a little late and still make it |
| Spring Soles | Normal landings give a small hop |

## Sandbox

**Sandbox** on the title screen unlocks all 100 courses and gives infinite lives. Progress from sandbox is not written to your save.

- **P** opens the full power list. The one you pick stays on for that session.
- **,** and **.** move to the previous or next course.
- **No Power** clears the equipped power.

Leave sandbox by going back to the map and choosing **Continue adventure**.

## Save data

Progress is stored in `localStorage` under the key `starpath-dash-v1`:

- `unlocked` — highest course you can start
- `coins` — coins banked from cleared courses
- `best` — highest course number you have cleared

It stays in this browser until you press **Reset save** or clear site data.
