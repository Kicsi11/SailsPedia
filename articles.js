/* ==========================================================================
   SAILSPEDIA - ARTICLES DATABASE & CREATION TEMPLATES
   ==========================================================================
   
   HOW TO ADD A NEW PAGE:
   1. Copy one of the TEMPLATES below.
   2. Paste it inside `window.ARTICLES_DATABASE = { ... }` (separated by a comma).
   3. Change the text, images, and stats to match your game!

   --------------------------------------------------------------------------
   TEMPLATE 1: SHIP / VESSEL TEMPLATE
   --------------------------------------------------------------------------
   "My New Ship": {
       title: "My New Ship",
       category: "Ships & Vessels",
       summary: "Short 1-2 sentence description of this vessel.",
       infobox: {
           title: "My New Ship",
           image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
           caption: "My New Ship sailing in open waters.",
           stats: {
               "Ship Class": "Tier III Brig",
               "Hull HP": "2,500 HP",
               "Cannons": "16 Medium Cannons",
               "Top Speed": "16 Knots",
               "Crew Size": "2-4 Players"
           }
       },
       content: `The **My New Ship** is a balanced warship designed for tactical maneuvers.

== Overview ==
Describe the ship's role in combat, sail handling, and deck layout.

![Ship in action](https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80)

== Crafting Requirements ==
* 200x Wood Planks
* 80x Iron Bar
* 50x Canvas Cloth`
   },

   --------------------------------------------------------------------------
   TEMPLATE 2: LOCATION / ZONE TEMPLATE
   --------------------------------------------------------------------------
   "My Location": {
       title: "My Location",
       category: "Locations & Zones",
       summary: "Short description of the island or sea area.",
       infobox: {
           title: "My Location",
           image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
           caption: "View of the location coast.",
           stats: {
               "Danger Rating": "Medium",
               "Recommended Level": "Level 10+",
               "PvP Status": "Enabled"
           }
       },
       content: `**My Location** is an uncharted region located in the southern seas.

== Key Points of Interest ==
* **Docks:** Safe harbor for repair.
* **Fortress:** Outlaw stronghold with valuable loot chests.`
   },

   --------------------------------------------------------------------------
   TEMPLATE 3: FACTION / CHARACTER TEMPLATE
   --------------------------------------------------------------------------
   "My Faction": {
       title: "My Faction",
       category: "Factions & Lore",
       summary: "Overview of this faction or guild.",
       infobox: {
           title: "My Faction",
           image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&auto=format&fit=crop&q=80",
           caption: "Faction Emblem",
           stats: {
               "Leader": "Captain Vane",
               "Base": "Smuggler Bay",
               "Alignment": "Neutral / Rogue"
           }
       },
       content: `The **My Faction** controls trading routes in the eastern archipelago.

== Faction Bonuses ==
* **+10% Navigation Speed**
* **+5% Cannon Reload Speed**`
   },

   --------------------------------------------------------------------------
   TEMPLATE 4: SIMPLE / BLANK ARTICLE TEMPLATE
   --------------------------------------------------------------------------
   "Article Title": {
       title: "Article Title",
       category: "Game Mechanics", // Categories: "Ships & Vessels", "Factions & Lore", "Locations & Zones", "Game Mechanics"
       summary: "Short article overview.",
       infobox: {
           title: "Article Title",
           image: "",
           caption: "",
           stats: {
               "Key 1": "Value 1",
               "Key 2": "Value 2"
           }
       },
       content: `== First Section ==
Write your content here! You can link to other pages like [[HMS Sovereign]].`
   }
   ========================================================================== */

window.ARTICLES_DATABASE = {
    "Main Page": {
        title: "Main Page",
        category: "System Overview",
        infobox: {
            title: "Sails Playtest",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80",
            caption: "Official Sails Playtest Build v0.4.2",
            stats: {
                "Developer": "Solo Developer",
                "Phase": "Closed Playtest",
                "Version": "v0.4.2",
                "Platform": "PC / Web"
            }
        },
        content: `== Welcome to SailsPedia ==
Welcome to **SailsPedia**, the official wiki for the *Sails* naval combat and exploration playtest! All game data, ships, items, and mechanics are documented here.

== Featured Articles ==
* [[HMS Sovereign]] - Heavy Tier V flagship warship.
* [[Corsair Raider Sloop]] - High-speed ambush vessel.
* [[Corsair Syndicate]] - Rogue outlaw pirate faction.
* [[Sunken Archipelago]] - High-risk open ocean PvP zone.
* [[Sailing Mechanics]] - Master wind vectors and tacking.`
    },

    "HMS Sovereign": {
        title: "HMS Sovereign",
        category: "Ships & Vessels",
        summary: "A colossal Tier V flagship warship boasting 32 heavy cannons and heavily reinforced oak armor plating.",
        infobox: {
            title: "HMS Sovereign",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
            caption: "The HMS Sovereign firing broadside cannons.",
            stats: {
                "Ship Class": "Tier V Galleon",
                "Hull HP": "4,500 HP",
                "Cannons": "32 Heavy Broadside",
                "Top Speed": "14 Knots",
                "Crew Size": "4-6 Players"
            }
        },
        content: `The **HMS Sovereign** is the heaviest warship available in the current playtest. Built with triple-decked oak plating, it is designed for fleet combat and zone control.

== Overview ==
Commanding the HMS Sovereign requires a coordinated crew. While extremely durable, its maneuverability is low when sailing into headwinds.

![HMS Sovereign at dock](https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80)

== Crafting Requirements ==
* 500x Hardwood Timber
* 250x Refined Iron Ingot
* 120x Reinforced Canvas
* 1x Blueprint (Dropped in [[Sunken Archipelago]])`
    },

    "Corsair Raider Sloop": {
        title: "Corsair Raider Sloop",
        category: "Ships & Vessels",
        summary: "A swift and agile single-mast vessel favored by the Corsair Syndicate for high-speed ambush attacks.",
        infobox: {
            title: "Corsair Raider Sloop",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80",
            caption: "Sloop slicing through coastal waters.",
            stats: {
                "Ship Class": "Tier II Sloop",
                "Hull HP": "1,200 HP",
                "Cannons": "4 Light Chasers",
                "Top Speed": "22 Knots",
                "Crew Size": "1-2 Players"
            }
        },
        content: `The **Corsair Raider Sloop** is built for extreme speed and maneuverability. 

== Tactics ==
While frail against heavy broadside fire from larger warships like the [[HMS Sovereign]], sloops excel at tacking against wind vectors and outrunning chasers in shallow reefs.`
    },

    "Corsair Syndicate": {
        title: "Corsair Syndicate",
        category: "Factions & Lore",
        summary: "An outlaw coalition operating in southern waters, specializing in speed raiding and boarding tactics.",
        infobox: {
            title: "Corsair Syndicate",
            image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&auto=format&fit=crop&q=80",
            caption: "Official Banner of the Syndicate",
            stats: {
                "Type": "Playable Faction",
                "Base": "Smuggler's Cove",
                "Specialty": "Speed & Boarding"
            }
        },
        content: `The **Corsair Syndicate** is an outlaw coalition operating in the southern waters. Members specialize in high-speed raiding and boarding tactics.

== Faction Bonuses ==
* **+15% Boarding Damage** when using melee cutlasses.
* **+10% Sail Trimming Speed** on light sloops and brigs.`
    },

    "Sunken Archipelago": {
        title: "Sunken Archipelago",
        category: "Locations & Zones",
        summary: "A high-risk maritime region filled with coral reefs, submerged treasure vaults, and unpredictable wave swells.",
        infobox: {
            title: "Sunken Archipelago",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
            caption: "Tropical reefs in the Archipelago",
            stats: {
                "Danger Rating": "High (PvP Enabled)",
                "Recommended Tier": "Tier III+",
                "Key Hazard": "Shallow Reefs & Storms"
            }
        },
        content: `The **Sunken Archipelago** is a high-risk maritime region filled with coral reefs and submerged treasure vaults.

== Hazards ==
* Shallow reefs will damage large vessels like the [[HMS Sovereign]].
* Unpredictable storm fronts create high wave swells.`
    },

    "Sailing Mechanics": {
        title: "Sailing Mechanics",
        category: "Game Mechanics",
        summary: "Comprehensive guide to wind vectors, sail trimming angles, tacking, and maneuvering.",
        infobox: {
            title: "Sailing Mechanics",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80",
            caption: "Wind angle alignment guide",
            stats: {
                "Physics Engine": "Wind Vector Sim",
                "Controls": "A/D Trim, W/S Sails"
            }
        },
        content: `Sailing speed in *Sails* depends on your ship's angle relative to the wind direction.

== Wind Angles & Efficiency ==
* **Downwind (100% Speed):** Wind blowing directly from behind.
* **Crosswind (80% Speed):** Sails angled at 45 degrees.
* **Headwind (Tacking Required):** Zig-zagging required to travel forward.`
    }
};
