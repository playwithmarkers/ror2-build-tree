const useItemData = (function() {

	const itemData = {
		
		items: [
            // ----------------------------------------------- //
            // ---------------- COMMON ITEMS ----------------- //
            // ----------------------------------------------- //
			{
				itemName: "armor-piercing-rounds",
				displayName: "Armor-Piercing Rounds",
				description:
					"Deal an additional 20% damage (+20% per stack) to bosses.",
				rarity: "common",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 0.2,
						stackValue: 0.2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "backup-magazine",
				displayName: "Backup Magazine",
				description: "Add +1 (+1 per stack) charge of your Secondary skill.",
				rarity: "common",
				effects: [
					{
						effect: "Charge",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "bundle-of-fireworks",
				displayName: "Bundle of Fireworks",
				description:
					"Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage.",
				rarity: "common",
				effects: [
					{
						effect: "Fireworks",
						stackType: "linear",
						percentage: false,
						value: 8,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "bustling-fungus",
				displayName: "Bustling Fungus",
				description:
					"After standing still for 2 seconds, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Health per Second",
						stackType: "linear",
						percentage: true,
						value: 0.045,
						stackValue: 0.0225,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 1.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "cautious-slug",
				displayName: "Cautious Slug",
				description:
					"Increases base health regeneration by +4 hp/s (+4 hp/s per stack) while outside of combat.",
				rarity: "common",
				effects: [
					{
						effect: "Health Regen",
						stackType: "linear",
						percentage: false,
						value: 4,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "crowbar",
				displayName: "Crowbar",
				description:
					"Deal 150% (+50% per stack) damage to enemies above 90% health.",
				rarity: "common",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 1.5,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "energy-drink",
				displayName: "Energy Drink",
				description: "Sprint speed is improved by 30% (+20% per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Sprint Speed",
						stackType: "linear",
						percentage: true,
						value: 0.3,
						stackValue: 0.2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "focus-crystal",
				displayName: "Focus Crystal",
				description:
					"Increase damage to enemies within 13m by 15% (+15% per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 0.15,
						stackValue: 0.15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "fresh-meat",
				displayName: "Fresh Meat",
				description:
					"Increases base health regeneration by +2 hp/s for 3s (+3s per stack) after killing an enemy.",
				rarity: "common",
				effects: [
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 3,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "gasoline",
				displayName: "Gasoline",
				description:
					"Killing an enemy ignites all enemies within 12m (+4m per stack). Enemies burn for 150% (+75% per stack) base damage.",
				rarity: "common",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 1.5,
						stackValue: 0.75,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 12,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "lens-makers-glasses",
				displayName: "Lens-Maker's Glasses",
				description:
					"Your attacks have a 10% (+10% per stack) chance to Critically Strike, dealing double damage.",
				rarity: "common",
				effects: [
					{
						effect: "Critical Chance",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "medkit",
				displayName: "Medkit",
				description:
					"Heal for 25 (+25 per stack) health 2 seconds after getting hurt.",
				rarity: "common",
				effects: [
					{
						effect: "Heal",
						stackType: "linear",
						percentage: false,
						value: 10,
						stackValue: 10,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "monster-tooth",
				displayName: "Monster Tooth",
				description:
					"Killing an enemy spawns a healing orb that heals for 8 (+8 per stack) health.",
				rarity: "common",
				effects: [
					{
						effect: "Health per Orb",
						stackType: "linear",
						percentage: false,
						value: 6,
						stackValue: 6,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "pauls-goat-hoof",
				displayName: "Paul's Goat Hoof",
				description: "Increases movement speed by 14% (+14% per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Movement Speed",
						stackType: "linear",
						percentage: true,
						value: 0.14,
						stackValue: 0.14,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "personal-shield-generator",
				displayName: "Personal Shield Generator",
				description:
					"Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.",
				rarity: "common",
				effects: [
					{
						effect: "Shield",
						stackType: "linear",
						percentage: true,
						value: 0.08,
						stackValue: 0.08,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "repulsion-armor-plate",
				displayName: "Repulsion Armor Plate",
				description:
					"Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.",
				rarity: "common",
				effects: [
					{
						effect: "Damage Reduction",
						stackType: "linear",
						percentage: false,
						value: 5,
						stackValue: 5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "rusted-key",
				displayName: "Rusted Key",
				description:
					"A hidden cache containing an item will appear in a random location on each stage. (Increases rarity of the item per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Chance",
						stackType: "special",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "soldiers-syringe",
				displayName: "Soldier's Syringe",
				description: "Increases attack speed by 15% (+15% per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Attack Speed",
						stackType: "linear",
						percentage: true,
						value: 0.15,
						stackValue: 0.15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "sticky-bomb",
				displayName: "Sticky Bomb",
				description:
					"5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.",
				rarity: "common",
				effects: [
					{
						effect: "Chance",
						stackType: "linear",
						percentage: true,
						value: 0.05,
						stackValue: 0.05,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "stun-grenade",
				displayName: "Stun Grenade",
				description:
					"5% (+5% on stack) chance on hit to stun enemies for 2 seconds.",
				rarity: "common",
				effects: [
					{
						effect: "Chance",
						stackType: "hyperbolic",
						percentage: true,
						value: 0.05,
						stackValue: 0.05,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "topaz-brooch",
				displayName: "Topaz Brooch",
				description:
					"Gain a temporary barrier on kill for 15 health (+15 per stack).",
				rarity: "common",
				effects: [
					{
						effect: "Shield",
						stackType: "linear",
						percentage: false,
						value: 15,
						stackValue: 15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "tougher-times",
				displayName: "Tougher Times",
				description:
					"15% (+15% per stack) chance to block incoming damage. Unaffected by luck.",
				rarity: "common",
				effects: [
					{
						effect: "Block Chance",
						stackType: "hyperbolic",
						percentage: true,
						value: 0.15,
						stackValue: 0.15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "tri-tip-dagger",
				displayName: "Tri-Tip Dagger",
				description:
					"15% (+15% per stack) chance to bleed an enemy for 240% base damage.",
				rarity: "common",
				effects: [
					{
						effect: "Chance to Bleed",
						stackType: "linear",
						percentage: true,
						value: 0.15,
						stackValue: 0.15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "warbanner",
				displayName: "Warbanner",
				description:
					"On level up drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.",
				rarity: "common",
				effects: [
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 16,
						stackValue: 8,
						stackNumber: 0,
						total: 0,
					},
				],
            },
            // ----------------------------------------------- //
            // ---------------- UNCOMMON ITEMS --------------- //
            // ----------------------------------------------- //
			{
				itemName: "atg-missile-mk-1",
				displayName: "AtG Missile Mk. 1",
				description:
					"10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 3,
						stackValue: 3,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "bandolier",
				displayName: "Bandolier",
				description:
					"18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Chance",
						stackType: "special",
						percentage: true,
						value: 0.18,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "berzerkers-pauldron",
				displayName: "Berzerker's Pauldron",
				description:
					"Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Frenzy Duration",
						stackType: "linear",
						percentage: false,
						value: 6,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "chronobauble",
				displayName: "Chronobauble",
				description:
					"Slow enemies on hit for -60% movement speed for 2s (+2s per stack).",
				rarity: "uncommon",
				effects: [
					{
						effect: "Slow Duration",
						stackType: "linear",
						percentage: false,
						value: 2,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "death-mark",
				displayName: "Death Mark",
				description:
					"Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% (+50% per stack) from all sources for 7 seconds.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 0.5,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "fuel-cell",
				displayName: "Fuel Cell",
				description:
					"Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).",
				rarity: "uncommon",
				effects: [
					{
						effect: "Charges",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Cooldown",
						stackType: "exponential",
						percentage: true,
						value: 0.15,
						stackValue: 0.15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "ghors-tome",
				displayName: "Ghor's Tome",
				description:
					"4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Drop Chance",
						stackType: "linear",
						percentage: true,
						value: 0.04,
						stackValue: 0.04,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "harvesters-scythe",
				displayName: "Harvester's Scythe",
				description:
					"Gain 5% critical chance (+0% per stack). Critical strikes heal for 8 (+4 per stack) health.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Heal",
						stackType: "linear",
						percentage: false,
						value: 8,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Crit chance",
						stackType: "linear",
						percentage: true,
						value: 0.05,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "hopoo-feather",
				displayName: "Hopoo Feather",
				description: "Gain +1 (+1 per stack) maximum jump count.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Extra Jump",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "infusion",
				displayName: "Infusion",
				description:
					"Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Health Increase",
						stackType: "linear",
						percentage: false,
						value: 100,
						stackValue: 100,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "kjaros-band",
				displayName: "Kjaro's Band",
				description:
					"8% chance on hit to strike an enemy with a runic flame tornado, dealing 500% (+250% per stack) TOTAL damage.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 5,
						stackValue: 2.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "leeching-seed",
				displayName: "Leeching Seed",
				description: "Dealing damage heals you for 1 (+1 per stack) health.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Heal",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "lepton-daisy",
				displayName: "Lepton Daisy",
				description:
					"Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Healing Nova",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "old-guillotine",
				displayName: "Old Guillotine",
				description:
					"Instantly kill Elite monsters below 20% (+20% per stack) health.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Threshold",
						stackType: "hyperbolic",
						percentage: true,
						value: 0.2,
						stackValue: 0.2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "old-war-stealthkit",
				displayName: "Old War Stealthkit",
				description:
					"Chance on taking damage to gain 40% movement speed and invisibility for 3s (+1.5s per stack). Chance increases the more damage you take.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 1.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "predatory-instincts",
				displayName: "Predatory Instincts",
				description:
					"Gain 5% critical chance (+0% per stack). Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Attack Speed Cap",
						stackType: "linear",
						percentage: true,
						value: 0.36,
						stackValue: 0.24,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Crit chance",
						stackType: "linear",
						percentage: true,
						value: 0.05,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "razorwire",
				displayName: "Razorwire",
				description:
					"Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius",
				rarity: "uncommon",
				effects: [
					{
						effect: "Targets",
						stackType: "linear",
						percentage: false,
						value: 5,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 25,
						stackValue: 10,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "red-whip",
				displayName: "Red Whip",
				description:
					"Leaving combat boosts your movement speed by 30% (+30% per stack).",
				rarity: "uncommon",
				effects: [
					{
						effect: "Movement Speed ",
						stackType: "linear",
						percentage: true,
						value: 0.3,
						stackValue: 0.3,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "rose-buckler",
				displayName: "Rose Buckler",
				description: "Increase armor by 30 (+30 per stack) while sprinting.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Armor",
						stackType: "linear",
						percentage: false,
						value: 30,
						stackValue: 30,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "runalds-band",
				displayName: "Runald's Band",
				description:
					"8% chance on hit to strike an enemy with a runic ice blast, slowing them by 80% and dealing 250% (+125% per stack) TOTAL damage.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 2.5,
						stackValue: 1.25,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "squid-polyp",
				displayName: "Squid Polyp",
				description:
					"Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Attack Speed",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "ukulele",
				displayName: "Ukulele",
				description:
					"25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).",
				rarity: "uncommon",
				effects: [
					{
						effect: "Targets",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 20,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "war-horn",
				displayName: "War Horn",
				description:
					"Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).",
				rarity: "uncommon",
				effects: [
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 8,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "wax-quail",
				displayName: "Wax Quail",
				description:
					"Jumping while sprinting boosts you forward by 10m (+10m per stack).",
				rarity: "uncommon",
				effects: [
					{
						effect: "Boost",
						stackType: "linear",
						percentage: false,
						value: 10,
						stackValue: 10,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "will-o-the-wisp",
				displayName: "Will-o'-the-wisp",
				description:
					"On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.",
				rarity: "uncommon",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 3.5,
						stackValue: 2.8,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 12,
						stackValue: 2.4,
						stackNumber: 0,
						total: 0,
					},
				],
            },
            // ----------------------------------------------- //
            // ---------------- LEGENDARY ITEMS -------------- //
            // ----------------------------------------------- //
			{
				itemName: "fifty-seven-leaf-clover",
				displayName: "57 Leaf Clover",
				description:
					"All random effects are rolled +1 (+1 per stack) times for a favorable outcome.",
				rarity: "legendary",
				effects: [
					{
						effect: "Luck",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "aegis",
				displayName: "Aegis",
				description:
					"Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.",
				rarity: "legendary",
				effects: [
					{
						effect: "Healing Converted",
						stackType: "linear",
						percentage: true,
						value: 0.5,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "alien-head",
				displayName: "Alien Head",
				description: "Reduce skill cooldowns by 25% (+25% per stack).",
				rarity: "legendary",
				effects: [
					{
						effect: "Cooldown",
						stackType: "exponential",
						percentage: true,
						value: 0.25,
						stackValue: 0.25,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "brainstalks",
				displayName: "Brainstalks",
				description:
					"Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have no cooldowns.",
				rarity: "legendary",
				effects: [
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 4,
						stackValue: 4,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "brilliant-behemoth",
				displayName: "Brilliant Behemoth",
				description:
					"All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.",
				rarity: "legendary",
				effects: [
					{
						effect: "Explosion Radius",
						stackType: "linear",
						percentage: false,
						value: 4,
						stackValue: 2.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "ceremonial-dagger",
				displayName: "Ceremonial Dagger",
				description:
					"Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.",
				rarity: "legendary",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 1.5,
						stackValue: 1.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "dios-best-friend",
				displayName: "Dio's Best Friend",
				description:
					"Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.",
				rarity: "legendary",
				effects: [
					{
						effect: "Uses",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "frost-relic",
				displayName: "Frost Relic",
				description:
					"Killing an enemy surrounds you with an ice storm that deals 600% damage per second. The storm grows with every kill, increasing its radius by 1m. Stacks up to 6m (+6m per stack).",
				rarity: "legendary",
				effects: [
					{
						effect: "Ice Storm Radius",
						stackType: "linear",
						percentage: false,
						value: 6,
						stackValue: 6,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "h3ad-5t-v2",
				displayName: "H3AD-5T v2",
				description:
					"Increase jump height. Creates a 10m radius kinetic explosion on hitting the ground, dealing 2300% base damage that scales up with speed. Recharges in 10 (-50% per stack) seconds.",
				rarity: "legendary",
				effects: [
					{
						effect: "Recharge Time",
						stackType: "exponential",
						percentage: false,
						value: 10,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "happiest-mask",
				displayName: "Happiest Mask",
				description:
					"Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).",
				rarity: "legendary",
				effects: [
					{
						effect: "Ghost Duration",
						stackType: "linear",
						percentage: false,
						value: 30,
						stackValue: 30,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "hardlight-afterburner",
				displayName: "Hardlight Afterburner",
				description:
					"Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.",
				rarity: "legendary",
				effects: [
					{
						effect: "Charges",
						stackType: "linear",
						percentage: false,
						value: 2,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "interstellar-desk-plant",
				displayName: "Interstellar Desk Plant",
				description:
					"On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% of maximum health every second to all allies within 3m (+1.5m per stack). Lasts 10 seconds",
				rarity: "legendary",
				effects: [
					{
						effect: "Radius",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 1.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "nkuhanas-opinion",
				displayName: "N'kuhana's Opinion",
				description:
					"Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.",
				rarity: "legendary",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "rejuvenation-rack",
				displayName: "Rejuvenation Rack",
				description: "Heal +100% (+100% per stack) more.",
				rarity: "legendary",
				effects: [
					{
						effect: "Heal",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "resonance-disc",
				displayName: "Resonance Disc",
				description:
					"Killing enemies charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).",
				rarity: "legendary",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 3,
						stackValue: 3,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Explosion",
						stackType: "linear",
						percentage: true,
						value: 10,
						stackValue: 10,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "sentient-meat-hook",
				displayName: "Sentient Meat Hook",
				description:
					"20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.",
				rarity: "legendary",
				effects: [
					{
						effect: "Chance",
						stackType: "hyperbolic",
						percentage: true,
						value: 0.2,
						stackValue: 0.2,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Targets",
						stackType: "linear",
						percentage: false,
						value: 10,
						stackValue: 5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "shattering-justice",
				displayName: "Shattering Justice",
				description:
					"After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.",
				rarity: "legendary",
				effects: [
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 8,
						stackValue: 8,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "soulbound-catalyst",
				displayName: "Soulbound Catalyst",
				description: "Kills reduce equipment cooldown by 4s (+2s per stack).",
				rarity: "legendary",
				effects: [
					{
						effect: "Cooldown",
						stackType: "linear",
						percentage: false,
						value: 4,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "unstable-tesla-coil",
				displayName: "Unstable Tesla Coil",
				description:
					"Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.",
				rarity: "legendary",
				effects: [
					{
						effect: "Targets",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "wake-of-vultures",
				displayName: "Wake of Vultures",
				description:
					"Gain the power of any killed elite monster for 8s (+5s per stack).",
				rarity: "legendary",
				effects: [
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 8,
						stackValue: 5,
						stackNumber: 0,
						total: 0,
					},
				],
            },
            // ----------------------------------------------- //
            // ---------------- LUNAR ITEMS ------------------ //
            // ----------------------------------------------- //
			{
				itemName: "brittle-crown",
				displayName: "Brittle Crown",
				description:
					"30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.",
				rarity: "lunar",
				effects: [
					{
						effect: "Chance",
						stackType: "linear",
						percentage: false,
						value: 2,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "corpsebloom",
				displayName: "Corpsebloom",
				description:
					"Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (reduced by 50% per stack) of your health per second.",
				rarity: "lunar",
				effects: [
					{
						effect: "Heal",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Maximum Heal",
						stackType: "exponential",
						percentage: true,
						value: 0.1,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "focused-convergence",
				displayName: "Focused Convergence",
				description:
					"Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller. Effects do not stack above 3.",
				rarity: "lunar",
				effects: [
					{
						effect: "Charge Speed",
						stackType: "linear",
						percentage: true,
						value: 0.3,
						stackValue: 0.3,
						stackNumber: 0,
                        total: 0,
                        stackCap: 3,
					},
					{
						effect: "Teleporter Zone",
						stackType: "hyperbolic",
						percentage: true,
						value: 0.5,
						stackValue: 0.5,
						stackNumber: 0,
                        total: 0,
                        stackCap: 3,
					},
				],
			},
			{
				itemName: "gesture-of-the-drowned",
				displayName: "Gesture of the Drowned",
				description:
					"Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.",
				rarity: "lunar",
				effects: [
					{
						effect: "Cooldown",
						stackType: "exponential",
						percentage: true,
						value: 0.5,
						stackValue: 0.15,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "shaped-glass",
				displayName: "Shaped Glass",
				description:
					"Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).",
				rarity: "lunar",
				effects: [
					{
						effect: "Damage",
						stackType: "exponential",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Health Reduction",
						stackType: "exponential",
						percentage: true,
						value: 0.5,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "strides-of-heresy",
				displayName: "Strides of Heresy",
				description:
					"Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 25% (+25% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.",
				rarity: "lunar",
				effects: [
					{
						effect: "Heal",
						stackType: "linear",
						percentage: true,
						value: 0.25,
						stackValue: 0.25,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Duration",
						stackType: "linear",
						percentage: false,
						value: 3,
						stackValue: 3,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "transcendence",
				displayName: "Transcendence",
				description:
					"Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.",
				rarity: "lunar",
				effects: [
					{
						effect: "Maximum Health",
						stackType: "linear",
						percentage: true,
						value: 0.5,
						stackValue: 0.25,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "visions-of-heresy",
				displayName: "Visions of Heresy",
				description:
					"Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).",
				rarity: "lunar",
				effects: [
					{
						effect: "Charges",
						stackType: "linear",
						percentage: false,
						value: 12,
						stackValue: 12,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Reload",
						stackType: "linear",
						percentage: false,
						value: 2,
						stackValue: 2,
						stackNumber: 0,
						total: 0,
					},
				],
            },
            // ----------------------------------------------- //
            // ---------------- BOSS ITEMS ------------------- //
            // ----------------------------------------------- //
			{
				itemName: "genesis-loop",
				displayName: "Genesis Loop",
				description:
					"Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 seconds (-50% per stack).",
				rarity: "boss",
				effects: [
					{
						effect: "Recharge Speed",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
            },
            // issue with the following two items.  effects beyond the first are not displaying properly because the values are the same as the first.  problem replicated by changing values on resonance disc to be the same.  how to fix?
			{
				itemName: "halcyon-seed",
				displayName: "Halcyon Seed",
				description:
					"Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.",
				rarity: "boss",
				effects: [
					{
						effect: "Health",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 0.5,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "irradiant-pearl",
				displayName: "Irradiant Pearl",
				description: "Increases ALL effects by 10% (+10% per stack). Effects are Health, Regeneration Multiplier, Move Speed, Damage, Attack Speed, Critical Chance, Armor Multiplier.",
				rarity: "boss",
				effects: [
					{
						effect: "Effects",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
					/* {
						effect: "Regen multiplier",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Movespeed",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Attack Speed",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Crit Chance",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Armor Multiplier",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					}, */
				],
			},
			{
				itemName: "little-disciple",
				displayName: "Little Disciple",
				description:
					"Fire a tracking wisp for 100% (+100% per stack) damage. Fires every 0.5 seconds while sprinting.",
				rarity: "boss",
				effects: [
					{
						effect: "Damage",
						stackType: "linear",
						percentage: true,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "pearl",
				displayName: "Pearl",
				description: "Increases maximum health by 10% (+10% per stack).",
				rarity: "boss",
				effects: [
					{
						effect: "Health",
						stackType: "linear",
						percentage: true,
						value: 0.1,
						stackValue: 0.1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "queens-gland",
				displayName: "Queen's Gland",
				description:
					"Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.",
				rarity: "boss",
				effects: [
					{
						effect: "Beetle Guard",
						stackType: "linear",
						percentage: false,
						value: 1,
						stackValue: 1,
						stackNumber: 0,
						total: 0,
					},
				],
			},
			{
				itemName: "titanic-knurl",
				displayName: "Titanic Knurl",
				description:
					"Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).",
				rarity: "boss",
				effects: [
					{
						effect: "Maximum Health",
						stackType: "linear",
						percentage: false,
						value: 40,
						stackValue: 40,
						stackNumber: 0,
						total: 0,
					},
					{
						effect: "Health Regen",
						stackType: "linear",
						percentage: false,
						value: 1.6,
						stackValue: 1.6,
						stackNumber: 0,
						total: 0,
					},
				],
            },
            // ----------------------------------------------- //
            // ---------------- EQUIPMENT ITEMS -------------- //
			// ----------------------------------------------- //
			
			// add active property to equipment objects?
			{
				itemName: "blast-shower",
				displayName: "Blast Shower",
				rarity: "equipment",
				description:
					"Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.",
				effects: [
					{
						effect: "Cleanse Effects",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 20,
					},
				],
			},
			{
				itemName: "disposable-missile-launcher",
				displayName: "Disposable Missile Launcher",
				rarity: "equipment",
				description: "Fire a swarm of 12 missiles that deal 12 x 300% damage.",
				effects: [
					{
						effect: "Fire Missles",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "eccentric-vase",
				displayName: "Eccentric Vase",
				rarity: "equipment",
				description:
					"Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.",
				effects: [
					{
						effect: "Tunnel",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "foreign-fruit",
				displayName: "Foreign Fruit",
				rarity: "equipment",
				description: "Instantly heal for 50% of your maximum health.",
				effects: [
					{
						effect: "Heal",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "fuel-array",
				displayName: "Fuel Array",
				rarity: "equipment",
				description:
					"Looks like it could power something. EXTREMELY unstable...",
				effects: [
					{
						effect: "Self-Destruct",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "gnarled-woodsprite",
				displayName: "Gnarled Woodsprite",
				rarity: "equipment",
				description:
					"Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health.",
				effects: [
					{
						effect: "Healing",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 15,
					},
				],
			},
			{
				itemName: "jade-elephant",
				displayName: "Jade Elephant",
				rarity: "equipment",
				description: "Gain 500 armor for 5 seconds.",
				effects: [
					{
						effect: "Armor",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "milky-chrysalis",
				displayName: "Milky Chrysalis",
				rarity: "equipment",
				description:
					"Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.",
				effects: [
					{
						effect: "Flight",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 60,
					},
				],
			},
			{
				itemName: "ocular-hud",
				displayName: "Ocular HUD",
				rarity: "equipment",
				description: "Gain +100% Critical Strike Chance for 8 seconds.",
				effects: [
					{
						effect: "Critical Strike",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 60,
					},
				],
			},
			{
				itemName: "preon-accumulator",
				displayName: "Preon Accumulator",
				rarity: "equipment",
				description:
					"Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 140,
					},
				],
			},
			{
				itemName: "primordial-cube",
				displayName: "Primordial Cube",
				rarity: "equipment",
				description:
					"Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds",
				effects: [
					{
						effect: "Black Hole",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 60,
					},
				],
			},
			{
				itemName: "radar-scanner",
				displayName: "Radar Scanner",
				rarity: "equipment",
				description: "Reveal all interactables within 500m for 10 seconds.",
				effects: [
					{
						effect: "Reveal Interactables",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "recycler",
				displayName: "Recycler",
				rarity: "equipment",
				description:
					"Transform an Item or equipment into a different one. Can only be converted into the same tier one time.",
				effects: [
					{
						effect: "Recycle",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "royal-capacitor",
				displayName: "Royal Capacitor",
				rarity: "equipment",
				description:
					"Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 20,
					},
				],
			},
			{
				itemName: "sawmerang",
				displayName: "Sawmerang",
				rarity: "equipment",
				description:
					"Throw three large saw blades that slice through enemies for 3x400% damage. Also deals an additional 3x100% damage per second while bleeding enemies. Can strike enemies again on the way back.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "the-back-up",
				displayName: "The Back-up",
				rarity: "equipment",
				description: "Call 4 Strike Drones to fight for you. Lasts 25 seconds.",
				effects: [
					{
						effect: "Drones",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 100,
					},
				],
			},
			{
				itemName: "the-crowdfunder",
				displayName: "The Crowdfunder",
				rarity: "equipment",
				description:
					"Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "volcanic-egg",
				displayName: "Volcanic Egg",
				rarity: "equipment",
				description:
					"Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 30,
					},
				],
			},
			{
				itemName: "effigy-of-grief",
				displayName: "Effigy of Grief",
				// lunar equipment
				rarity: "equipment",
				description:
					"ALL characters within are slowed by 50% and have their armor reduced by 20.",
				effects: [
					{
						effect: "Decrease Effects",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "glowing-meteorite",
				displayName: "Glowing Meteorite",
				// lunar equipment
				rarity: "equipment",
				description:
					"Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 140,
					},
				],
			},
			{
				itemName: "helfire-tincture",
				displayName: "Helfire Tincture",
				// lunar equipment
				rarity: "equipment",
				description:
					"Ignite ALL characters within 8m. Deal 5% of your maximum health/second as burning to yourself. The burn is 0.5x stronger on allies, and 24x stronger on enemies.",
				effects: [
					{
						effect: "Damage",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 45,
					},
				],
			},
			{
				itemName: "spinel-tonic",
				displayName: "Spinel Tonic",
				// lunar equipment
				rarity: "equipment",
				description:
					"Drink the Tonic, gaining a boost for 20 seconds. Increases damage by +100%. Increases attack speed by +70%. Increases armor by +20. Increases maximum health by +50%. Increases passive health regeneration by +300%. Increases movespeed by +30%.When the Tonic wears off, you have a 20% chance to gain a Tonic Affliction, reducing all of your stats by -5% (-5% per stack).",
				effects: [
					{
						effect: "Increase Effects",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 60,
					},
				],
			},
			{
				itemName: "her-biting-embrace",
				displayName: "Her Biting Embrace",
				// elite equipment
				rarity: "equipment",
				description: "Become an aspect of ice.",
				effects: [
					{
						effect: "Ice Aspect",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "ifrits-distinction",
				displayName: "Ifrit's Distinction",
				// elite equipment
				rarity: "equipment",
				description: "Become an aspect of fire.",
				effects: [
					{
						effect: "Fire Aspect",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "nkuhanas-retort",
				displayName: "N'kuhana's Retort",
				// elite equipment
				rarity: "equipment",
				description: "Become an aspect of corruption.",
				effects: [
					{
						effect: "Corruption Aspect",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "silence-between-two-strikes",
				displayName: "Silence Between Two Strikes",
				// elite equipment
				rarity: "equipment",
				description: "Become an aspect of lightning.",
				effects: [
					{
						effect: "Lightning Aspect",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			{
				itemName: "spectral-circlet",
				displayName: "Spectral Circlet",
				// elite equipment
				rarity: "equipment",
				description: "Become an aspect of incorporeality.",
				effects: [
					{
						effect: "Incorporeality Aspect",
						stackType: "equipment",
						percentage: false,
						value: 0,
						stackValue: 0,
						stackNumber: 0,
						total: 0,
						cooldown: 0,
					},
				],
			},
			
		]
	}

	return {
		getItemData: function() {
			return itemData;
		}
	}

})();