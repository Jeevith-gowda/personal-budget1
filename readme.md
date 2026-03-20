Survival Of The Fittest - Project Readme

Project:
- GameMaker project where the player evolves from a microorganism into a human.
- Main objective: survive enemy waves, collect DNA, evolve through stages, and reach the final form.

Engine and Project Entry:
- Engine: GameMaker (GML)
- project file: Survival Of The Fittest.yyp

Gameplay Loop:
- Start in the overview screen and press Enter to begin.
- Move around the level, avoid enemies, and shoot to survive.
- Enemies drop DNA points when defeated.
- Collect enough DNA to unlock evolution.
- Press E to evolve and gain power.
- At evolution stage 3, the game transitions from water to land.
- Reach stage 5+ to trigger victory and enter the win screen.

Controls:
- Move: WASD or Arrow Keys
- Aim: Mouse
- Shoot: Left Click or Q
- Evolve: E (when DNA requirement is met)
- Confirm/Restart on menus: Enter

Core Mechanics:
- Player starts with HP, movement speed, and a shooting cooldown.
- Each evolution increases speed, max HP, and fire rate.
- Underwater stage uses a shader effect.
- Enemy spawner increases pressure as player evolution increases.
- HUD includes health bar, DNA progress, stage display, evolve prompt, and minimap.

Enemy and Progression Notes:
- Water level enemy: mosasaurus variant.
- Land level enemy: sabretooth variant with erratic movement.
- Enemy parent logic handles chasing behavior, death, and DNA drops.

Win/Lose Conditions:
- Lose when player HP reaches zero (game over room).
- Win when evolution reaches human form (win room with final stats).

Graduate-Level Features (ITCS 5230):
- Smart AI: Enemies chase the player using point_direction. Sabretooth adds erratic movement with random direction offsets. (obj_enemy_parent, obj_sabretooth)
- Object Inheritance: obj_enemy_parent handles shared enemy logic. obj_mosasaurus inherits directly, obj_sabretooth overrides movement.
- Views: Camera follows the player with room-bound clamping. (obj_player Step Event, room viewport settings)
- Shader: shd_underwater applies blue-green tint with animated wave shimmerr. (shd_underwater, obj_player Draw Event)
- Particles: Three particle effects for enemy death, player evolution, and player death. (obj_particle_manager)
- Spatial Sound: Background music and sound effects vary by room and respond to gameplay events.

Cheat Codes (from project):
- 1: Full health
- 2: +10 DNA points
- 3: Skip to next evolution stage
- 4: Instant win
- 5: Instant death
- 6: Kill all enemies currently on screen

Team Credit in project:
- Gold Standard Studios - Allie, Jeevith, Summer, Nathan

