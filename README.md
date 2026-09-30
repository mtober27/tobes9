# Mike's Game Room

Play the games here: https://mtober27.github.io/tobes9/

Three browser games in one lobby. Open `game-room.html` and pick a cabinet. Each game is a single HTML file, so there is nothing to install.

The pages load fonts from the internet. Starpath Dash also loads [Three.js](https://threejs.org/). A local static server works if opening the file directly does not:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000/game-room.html`.

| Game | File | What it is |
| --- | --- | --- |
| Iron Man Hangman | `hangman.html` | Guess the word. Seven misses and the match is over. |
| Starpath Dash | `starpath.html` | A 100-course third-person deathrun. |
| Agent Bramble | `bramble.html` | A side-scrolling bear spy. Twenty-five levels and a boss. |

The lobby also links to the [Agent Bramble times](bramble-times.html). That page is the leaderboard, not a second game. `bramble-times.js` is the small script that loads and saves those times.

## Iron Man Hangman

A word or short phrase is picked at random. The category sits above the blanks. Fill in every letter before you take 7 misses.

### How to play

Each match draws 1 of 40 answers. Spaces in a phrase are already filled in. A correct letter fills every copy of that letter at once.

A miss adds one piece to the figure and drops the letter in the incorrect bank. The strike counter in the header counts down from 7. At 0, the match is over and the answer is shown. A win shows the answer too, and locks the guess box until you start another match.

**New match** draws a new word and clears the figure and the bank. It does not clear your win and loss totals. Those chips stay until you refresh the page. Nothing is written to the browser.

Guessing a letter you already tried does nothing. Anything that is not a letter is ignored.

### Controls

| Action | Key |
| --- | --- |
| Type a guess | One letter, A–Z |
| Submit the guess | Enter, or the Guess button |
| Start another word | New match |

The box only keeps one character. It switches what you type to uppercase.

### Categories

| Category | Answers | Examples of the kind of phrase |
| --- | --- | --- |
| Movies | 15 | Film titles |
| Sports | 13 | Plays and positions |
| Machines | 7 | Cars and tools |
| Muscle | 5 | Lifts and gym gear |

The header links back to the game room.

## Starpath Dash

Ten worlds, ten courses each. Reach the gold flag, pick a power-up, and keep going until course 100.

### How to play

Each course is a generated path of platforms. Land on the gold finish pad to clear it. Falling off, or touching a red spinning bar, costs a life. You start each course with 3 lives. Run out and you return to the map. The course layout is the same every time you play that number.

Checkpoints sit near the middle and near the end. Dying sends you back to the last one you touched. **R** also sends you back there, without spending a life.

Coins on the path add to your total when you clear the course. They are saved in the browser.

Clearing a course unlocks the next one, up to 100. Worlds stay locked until you reach their first course. **Continue adventure** jumps to the furthest course you have unlocked. **Reset save** wipes progress.

After a clear (except course 100), you pick 1 of 3 random power-ups. It lasts 3 attempts on the next course, including deaths. When those attempts are gone, the power drops off even if you still have lives. Beating course 100 ends the run.

### Controls

| Action | Key |
| --- | --- |
| Look around | Click the game, then move the mouse |
| Move | W A S D |
| Jump | Space |
| Sprint | Shift |
| Restart at last checkpoint | R |
| Back to the map | Esc |

Hold Space only as long as you want the jump. Letting go early cuts the height.

### Worlds

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

### Power-ups

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

### Sandbox

**Sandbox** on the title screen unlocks all 100 courses and gives infinite lives. Progress from sandbox is not written to your save.

- **P** opens the full power list. The one you pick stays on for that session.
- **,** and **.** move to the previous or next course.
- **No Power** clears the equipped power.

Leave sandbox by going back to the map and choosing **Continue adventure**.

### Save data

Progress is stored in `localStorage` under the key `starpath-dash-v1`:

- `unlocked` — highest course you can start
- `coins` — coins banked from cleared courses
- `best` — highest course number you have cleared

It stays in this browser until you press **Reset save** or clear site data.

## Agent Bramble

A park-service bear spy. Twenty-five vaults in one timed run. Put on a visor headset, free the scouts, and shut Director Vex down on level 25.

Enter a first and last name before the mission. That name is what shows up on the time leaderboard if you clear every level. The game remembers it in this browser, so the next visit skips the name screen.

You start each level with 5 hearts. A hit knocks one off and gives you a short moment where the next hit does not count. At 0 hearts the screen says **Busted**. **Try again** restarts that level and puts your score back to what it was when the level began. **Title** drops the run.

A banner names the vault when it starts. Press Space or Enter to skip it, or wait and it goes away on its own.

### Controls

Arrow keys or WASD both work. On a phone, on-screen buttons cover run, jump, slide, and laser.

| Action | Key |
| --- | --- |
| Run | Left and Right arrows |
| Jump. Press again in the air for a second jump | Up arrow |
| Slide. Needed in vents, and it ducks under shots | Down arrow |
| Yoink a bot’s headset up close. Hold to fire the visor laser | Space |
| Pause. The clock stops | Esc or P |
| Restart the current level | R |
| Resume from the pause screen | Esc, P, Space, or Enter |

You have to be moving to start a slide. Sliding is faster than running. You cannot fire while you are sliding. Jumping stands you back up.

Hold Space only while you want the beam. Letting go stops it. You run slower while it is firing.

### How to clear a vault

Most levels end at an exit on the right. A gate blocks the way until every scout on that level is free. Walk into a scout and they follow you. They are safe from spikes and enemies. When the last one is free, the gate opens. Touch the exit to clear the level. You get 1000 points, then the next vault starts on its own.

If you touch the exit early, a hint tells you what is still left: scouts, or the boss on the last level.

Spikes cost a heart. Falling off the map costs a heart and sends you back to the last solid ground you stood on. If that was your last heart, the fall ends the level.

### Headset and laser

Levels hide a headset you can walk over. Visor bots are also wearing one. Stand close and press Space to pull it off and buckle it on. Until it is on, the laser does nothing.

The beam aims at an enemy in front of you, a little above or below, or fires straight ahead if nothing is there. It stops on walls and on a closed gate. It burns health even if a bot still has a helmet. Holding it spends charge. The meter refills on its own when you let go. A second headset fills the meter. A cell adds a chunk of charge, but only if you are already wearing a headset.

A helmet only changes stomps. Stomp a visor bot once to knock the helmet off, then stomp again to finish it. Yoinking the headset also takes the helmet off, and then one stomp is enough.

### Pickups

The HUD shows hearts, score, the clock, headset charge, and shards collected out of the total on that level.

| Pickup | Effect |
| --- | --- |
| Shard | 100 points |
| Gold shard | 500 points |
| Headset | Turns the laser on. Another one fully recharges it |
| Cell | Adds charge if you already have a headset |
| Honey | Restores 2 hearts, up to 5 |
| Scout | Follows you. 200 points. The gate opens when every scout is free |

### Enemies

| Enemy | What they do |
| --- | --- |
| Walker | Patrols the floor. Stomp once to defeat them |
| Visor bot | Stands still and shoots. Wears a headset. First stomp removes the helmet. Second stomp defeats them |
| Flyer | Hovers and shoots. Burn them with the laser |
| Spikes | A touch costs a heart |

A defeat is worth 50 points. Sliding under a shot lets it pass over you. Shots also stop on walls and gates.

Later vaults mix in more of these. Paths get longer. Low ceilings need a slide. Spike pits have a barge you can ride. Some gates want two scouts. Flyers show up, and shots come out faster.

### Levels

The first two vaults and the last one are built by hand. The rest are generated, and the layout for a given number stays the same. Five color palettes rotate as the level number climbs.

| Level | Name |
| --- | --- |
| 1 | Cargo Spine |
| 2 | Amber Lake |
| 3 | Pine Switchback |
| 4 | Honeycomb Vent |
| 5 | Cinder Walk |
| 6 | Glass Orchard |
| 7 | Rust Trestle |
| 8 | Lantern Drift |
| 9 | Moss Lift |
| 10 | Copper Sluice |
| 11 | Night Market |
| 12 | Bramble Spires |
| 13 | Echo Causeway |
| 14 | Soot Garden |
| 15 | Relay Cliffs |
| 16 | Amber Aqueduct |
| 17 | Static Orchard |
| 18 | Kiln Bridge |
| 19 | Fog Catwalk |
| 20 | Scout Hollow |
| 21 | Wire Canopy |
| 22 | Redwood Switch |
| 23 | Ember Docks |
| 24 | Last Gate |
| 25 | Vex Core |

### Director Vex

Level 25 starts with no exit. Vex flies, shoots, then slams the floor. The slam leaves a shock on the ground. After the slam, the core opens. Hold the laser on the open core. The armor blocks the beam while the core is shut.

Under half health, Vex shoots more and leaves the core open for less time. Dropping the core to 0 is worth 2000 points. An exit appears where Vex was. Step into it to finish the run.

### Score, clock, and save data

The clock starts when the mission starts. It keeps running through a busted screen. It stops while the game is paused, and it stops on the win screen.

| Event | Points |
| --- | --- |
| Shard | 100 |
| Gold shard | 500 |
| Enemy defeated | 50 |
| Scout freed | 200 |
| Level cleared | 1000 |
| Director Vex defeated | 2000 |

Two values stay in this browser:

- `bramble-name` — the first and last name from the name screen
- `bramble-best` — the highest score from a finished 25-level run

The title screen shows that best score. Clearing site data wipes both.

### Leaderboard

Finishing all 25 levels sends your time to the shared board. Open it from the lobby, or from the win screen, at `bramble-times.html`. It needs a connection.

Your name is stored once. A later clear only replaces it when the new time is faster. A time under 45 seconds is rejected. **Refresh** on the board reloads the list. Lower time ranks higher.
