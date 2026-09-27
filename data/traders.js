window.ARTICLES_DATABASE = window.ARTICLES_DATABASE || {};

// Main Category Overview Page
window.ARTICLES_DATABASE["Traders"] = {
    title: "Traders",
    category: "Traders",
    infobox: {
        title: "Merchant System",
        caption: "Commerce in SAILS",
        stats: {
            "Role": "Economy & Commerce",
            "Locations": "Outposts & Settlements"
        }
    },
    content: `== Overview ==
**Traders** are specialized vendors found across outposts and ports in SAILS. Every merchant specializes in specific goods, allowing players to buy essential supplies or sell looted cargo and raw materials for profit.

== List of Traders ==
* [[Tavern]] — Buy drinks, food, and rumor tips, or sell gathered provisions.
* [[Currency Exchange]] — Trade raw treasures, doubloons, or foreign coins for standard currency.
* [[Food]] — Purchase fresh rations and ingredients, or sell hunted meat and fish.
* [[Shipwright]] — Buy ship upgrades, repair materials, and vessel hulls, or sell salvaged naval parts.
* [[Materials]] — Purchase raw crafting resources like wood and metal, or sell gathered ores and lumber.
* [[Armor Shop]] — Buy protective gear and apparel, or sell salvaged armor pieces.
* [[Weapon Shop]] — Purchase firearms, melee weapons, and ammunition, or sell looted weaponry.`
};

// 1. Tavern
window.ARTICLES_DATABASE["Tavern"] = {
    title: "Tavern",
    category: "Traders",
    infobox: {
        title: "Tavern Keeper",
        caption: "Local Inn & Tavern",
        stats: {
            "Type": "Vendor",
            "Primary Goods": "Consumables & Rumors"
        }
    },
    content: `== Tavern Keeper ==
The **Tavern** serves as a hub for sailors looking to rest, purchase consumables, or sell scavenged tavern supplies.

== Buying & Selling ==
* **What you can Buy:** Special drinks, cooked meals, basic provisions, and local rumors or quest leads.
* **What you can Sell:** Excess food, gathered ingredients, and rare alcohol or bottled goods found while exploring.`
};

// 2. Currency Exchange
window.ARTICLES_DATABASE["Currency Exchange"] = {
    title: "Currency Exchange",
    category: "Traders",
    infobox: {
        title: "Money Changer",
        caption: "Financial Services",
        stats: {
            "Type": "Financial Vendor",
            "Primary Goods": "Currency Converting"
        }
    },
    content: `== Money Changer ==
The **Currency Exchange** merchant allows captains to convert raw treasure, rare coins, and foreign currencies into usable coin.

== Buying & Selling ==
* **What you can Buy:** Standard currency pouches, gold bars, and regional coins.
* **What you can Sell:** Rare doubloons, ancient coins, bullion, and untradeable currency tokens looted from rival ships or treasure chests.`
};

// 3. Food Vendor
window.ARTICLES_DATABASE["Food"] = {
    title: "Food Vendor",
    category: "Traders",
    infobox: {
        title: "Food Merchant",
        caption: "Provisions & Rations",
        stats: {
            "Type": "Vendor",
            "Primary Goods": "Rations & Ingredients"
        }
    },
    content: `== Food Merchant ==
The **Food Merchant** supplies crews with the necessary rations to survive long voyages at sea.

== Buying & Selling ==
* **What you can Buy:** Fresh fruit, dried meat, barrels of water, and cooking recipes.
* **What you can Sell:** Raw meat from hunting, caught fish, harvested crops, and excess food supplies.`
};

// 4. Shipwright
window.ARTICLES_DATABASE["Shipwright"] = {
    title: "Shipwright",
    category: "Traders",
    infobox: {
        title: "Master Shipwright",
        caption: "Naval Services & Repair",
        stats: {
            "Type": "Vendor",
            "Primary Goods": "Ships, Parts & Repair"
        }
    },
    content: `== Master Shipwright ==
The **Shipwright** is essential for maintaining your vessel, buying new ships, or upgrading existing hulls and sails.

== Buying & Selling ==
* **What you can Buy:** Ship repair kits, hull paint, cannon upgrades, sail customizations, and new vessel hulls.
* **What you can Sell:** Salvaged ship parts, wreckage timber, unused cannons, and naval gear.`
};

// 5. Materials Trader
window.ARTICLES_DATABASE["Materials"] = {
    title: "Materials Trader",
    category: "Traders",
    infobox: {
        title: "Resource Merchant",
        caption: "Crafting & Building Supplies",
        stats: {
            "Type": "Vendor",
            "Primary Goods": "Raw Resources & Ores"
        }
    },
    content: `== Resource Merchant ==
The **Materials Trader** deals in raw crafting resources needed for building, repairing, and crafting equipment.

== Buying & Selling ==
* **What you can Buy:** Wood planks, iron ingots, hemp rope, cloth rolls, and refining blueprints.
* **What you can Sell:** Mined ores, chopped logs, gathered fibers, and extra raw crafting materials.`
};

// 6. Armor Shop
window.ARTICLES_DATABASE["Armor Shop"] = {
    title: "Armor Shop",
    category: "Traders",
    infobox: {
        title: "Armorer",
        caption: "Protective Gear & Apparel",
        stats: {
            "Type": "Vendor",
            "Primary Goods": "Armor & Clothing"
        }
    },
    content: `== Armorer ==
The **Armor Shop** provides pirate apparel, protective gear, and specialized armor sets for player survival during combat.

== Buying & Selling ==
* **What you can Buy:** Leather vests, armored coats, helmets, boots, and defensive accessories.
* **What you can Sell:** Damaged armor pieces, unused clothing items, and looted defensive gear.`
};

// 7. Weapon Shop
window.ARTICLES_DATABASE["Weapon Shop"] = {
    title: "Weapon Shop",
    category: "Traders",
    infobox: {
        title: "Weaponsmith",
        caption: "Arms & Munitions",
        stats: {
            "Type": "Vendor",
            "Primary Goods": "Weapons & Ammo"
        }
    },
    content: `== Weaponsmith ==
The **Weapon Shop** sells personal armament ranging from cutlasses and daggers to flintlock pistols and blunderbusses.

== Buying & Selling ==
* **What you can Buy:** Melee weapons, firearms, gunpowder, bullets, and weapon repair kits.
* **What you can Sell:** Looted weapons, spare firearms, melee arms, and excess ammunition.`
};
