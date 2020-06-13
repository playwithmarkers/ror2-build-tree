[
	{
		itemName: 'brilliant-behemoth',
		displayName: 'Brilliant Behemoth',
		rarity: 'Legendary',
		description: 'All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.',
		effects: [
			{
				effect: 'Explosion Radius',
				value: 4,
				stackType: 'linear',
				stackValue: 2.5,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'ceremonial-dagger',
		displayName: 'Ceremonial Dagger',
		rarity: 'Legendary',
		description: 'Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.',
		effects: [
			{
				effect: 'Damage',
				value: 1.5,
				stackType: 'linear',
				stackValue: 1.5,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'frost-relic',
		displayName: 'Frost Relic',
		rarity: 'Legendary',
		description: 'Killing an enemy surrounds you with an ice storm that deals 600% damage per second. The storm grows with every kill, increasing its radius by 1m. Stacks up to 6m (+6m per stack).',
		effects: [
			{
				effect: 'Ice Storm Radius',
				value: 6,
				stackType: 'linear',
				stackValue: 6,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'happiest-mask',
		displayName: 'Happiest Mask',
		rarity: 'Legendary',
		description: 'Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).',
		effects: [
			{
				effect: 'Ghost Duration',
				value: 30,
				stackType: 'linear',
				stackValue: 30,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'h3ad-5t-v2',
		displayName: 'H3AD-5T v2',
		rarity: 'Legendary',
		description: 'Increase jump height. Creates a 10m radius kinetic explosion on hitting the ground, dealing 2300% base damage that scales up with speed. Recharges in 10 (-50% per stack) seconds.',
		effects: [
			{
				effect: 'Recharge Time',
				value: 10,
				stackType: 'exponential',
				stackValue: -50,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'nkuhanas-opinion',
		displayName: 'N\'kuhana\'s Opinion',
		rarity: 'Legendary',
		description: 'Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.',
		Unlock: 'Her Concepts',
		effects: [
			{
				effect: 'Damage',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'unstable-tesla-coil',
		displayName: 'Unstable Tesla Coil',
		rarity: 'Legendary',
		description: 'Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.',
		Unlock: 'Macho',
		effects: [
			{
				effect: 'Targets',
				value: 3,
				stackType: 'linear',
				stackValue: 2,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'sentient-meat-hook',
		displayName: 'Sentient Meat Hook',
		rarity: 'Legendary',
		description: '20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.',
		Unlock: 'Deja Vu?',
		effects: [
			{
				effect: 'Chance',
				value: 0.2,
				stackType: 'hyperbolic',
				stackValue: 0.2,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Targets',
				value: 10,
				stackType: 'linear',
				stackValue: 5,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'shaped-glass',
		displayName: 'Shaped Glass',
		rarity: 'Lunar',
		description: 'Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).',
		effects: [
			{
				effect: 'Damage',
				value: 1,
				stackType: 'exponential',
				stackValue: 1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Health Reduction',
				value: 0.5,
				stackType: 'exponential',
				stackValue: -0.5,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'brittle-crown',
		displayName: 'Brittle Crown',
		rarity: 'Lunar',
		description: '30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.',
		effects: [
			{
				effect: 'Chance',
				value: 2,
				stackType: 'linear',
				stackValue: 2,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'transcendence',
		displayName: 'Transcendence',
		rarity: 'Lunar',
		description: 'Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.',
		effects: [
			{
				effect: 'Maximum Health',
				value: 0.5,
				stackType: 'linear',
				stackValue: 0.25,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'soulbound-catalyst',
		displayName: 'Soulbound Catalyst',
		rarity: 'Legendary',
		description: 'Kills reduce equipment cooldown by 4s (+2s per stack).',
		Unlock: 'Newtist',
		effects: [
			{
				effect: 'Cooldown',
				value: 4,
				stackType: 'linear',
				stackValue: 2,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'titanic-knurl',
		displayName: 'Titanic Knurl',
		rarity: 'Boss',
		Boss: 'Stone Titan',
		description: 'Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).',
		effects: [
			{
				effect: 'Maximum Health',
				value: 40,
				stackType: 'linear',
				stackValue: 40,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Health Regen',
				value: 1.6,
				stackType: 'linear',
				stackValue: 1.6,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'queens-gland',
		displayName: 'Queen\'s Gland',
		rarity: 'Boss',
		Boss: 'Beetle Queen',
		description: 'Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.',
		effects: [
			{
				effect: 'Beetle Guard',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'dios-best-friend',
		displayName: 'Dio\'s Best Friend',
		rarity: 'Legendary',
		description: 'Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.',
		Unlock: 'The Lone Survivor',
		effects: [
			{
				effect: 'Uses',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'hardlight-afterburner',
		displayName: 'Hardlight Afterburner',
		rarity: 'Legendary',
		description: 'Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.',
		effects: [
			{
				effect: 'Charges',
				value: 2,
				stackType: 'linear',
				stackValue: 2,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'wake-of-vultures',
		displayName: 'Wake of Vultures',
		rarity: 'Legendary',
		description: 'Gain the power of any killed elite monster for 8s (+5s per stack).',
		effects: [
			{
				effect: 'Duration',
				value: 8,
				stackType: 'linear',
				stackValue: 5,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'brainstalks',
		displayName: 'Brainstalks',
		rarity: 'Legendary',
		description: 'Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have no cooldowns.',
		Unlock: 'Deicide',
		effects: [
			{
				effect: 'Duration',
				value: 4,
				stackType: 'linear',
				stackValue: 4,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'rejuvenation-rack',
		displayName: 'Rejuvenation Rack',
		rarity: 'Legendary',
		description: 'Heal +100% (+100% per stack) more.',
		Unlock: 'Naturopath',
		effects: [
			{
				effect: 'Heal',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'corpsebloom',
		displayName: 'Corpsebloom',
		rarity: 'Lunar',
		description: 'Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (reduced by 50% per stack) of your health per second.',
		effects: [
			{
				effect: 'Heal',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Maximum Heal',
				value: 0.1,
				stackType: 'exponential',
				stackValue: -0.5,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'gesture-of-the-drowned',
		displayName: 'Gesture of the Drowned',
		rarity: 'Lunar',
		description: 'Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.',
		Unlock: 'The Demons And The Crabs',
		effects: [
			{
				effect: 'Cooldown',
				value: -0.5,
				stackType: 'exponential',
				stackValue: -0.15,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'halcyon-seed',
		displayName: 'Halcyon Seed',
		rarity: 'Boss',
		Boss: 'Aurelionite',
		description: 'Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.',
		effects: [
			{
				effect: 'Health',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Damage',
				value: 1,
				stackType: 'linear',
				stackValue: 0.5,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'little-disciple',
		displayName: 'Little Disciple',
		rarity: 'Boss',
		Boss: 'Grovetender',
		description: 'Fire a tracking wisp for 100% (+100% per stack) damage. Fires every 0.5 seconds while sprinting.',
		effects: [
			{
				effect: 'Damage',
				value: 1,
				stackType: 'linear',
				stackValue: 1,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'shattering-justice',
		displayName: 'Shattering Justice',
		rarity: 'Legendary',
		description: 'After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.',
		effects: [
			{
				effect: 'Duration',
				value: 8,
				stackType: 'linear',
				stackValue: 8,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'strides-of-heresy',
		displayName: 'Strides of Heresy',
		rarity: 'Lunar',
		description: 'Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 25% (+25% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.',
		Unlock: 'Blockade Breaker',
		effects: [
			{
				effect: 'Heal',
				value: 0.25,
				stackType: 'linear',
				stackValue: 0.25,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Duration',
				value: 3,
				stackType: 'linear',
				stackValue: 3,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'pearl',
		displayName: 'Pearl',
		rarity: 'Boss',
		Boss: 'Cleansing Pool',
		description: 'Increases maximum health by 10% (+10% per stack).',
		effects: [
			{
				effect: 'Health',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'irradiant-pearl',
		displayName: 'Irradiant Pearl',
		rarity: 'Boss',
		Boss: 'Cleansing Pool',
		description: 'Increases ALL effects by 10% (+10% per stack).',
		effects: [
			{
				effect: 'Health',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Regen multiplier',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Movespeed',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Damage',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Attack Speed',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Crit Chance',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Armor Multiplier',
				value: 0.1,
				stackType: 'linear',
				stackValue: 0.1,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'resonance-disc',
		displayName: 'Resonance Disc',
		rarity: 'Legendary',
		description: 'Killing enemies charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn\'t kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).',
		effects: [
			{
				effect: 'Damage',
				value: 3,
				stackType: 'linear',
				stackValue: 3,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Explosion',
				value: 10,
				stackType: 'linear',
				stackValue: 10,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'visions-of-heresy',
		displayName: 'Visions of Heresy',
		rarity: 'Lunar',
		description: 'Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).',
		Unlock: 'Blockade Breaker',
		effects: [
			{
				effect: 'Charges',
				value: 12,
				stackType: 'linear',
				stackValue: 12,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Reload',
				value: 2,
				stackType: 'linear',
				stackValue: 2,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'genesis-loop',
		displayName: 'Genesis Loop',
		rarity: 'Boss',
		Boss: 'Wandering Vagrant',
		description: 'Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 seconds (-50% per stack).',
		effects: [
			{
				effect: 'Recharge Speed',
				value: 1,
				stackType: 'linear',
				stackValue: 0.5,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'interstellar-desk-plant',
		displayName: 'Interstellar Desk Plant',
		rarity: 'Legendary',
		description: 'On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% of maximum health every second to all allies within 3m (+1.5m per stack). Lasts 10 seconds',
		effects: [
			{
				effect: 'Radius',
				value: 3,
				stackType: 'linear',
				stackValue: 1.5,
				stackNumber: 0,
				total: 0
			}
		],
	},
	{
		itemName: 'focused-convergence',
		displayName: 'Focused Convergence',
		rarity: 'Lunar',
		description: 'Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller. ',
		Unlock: 'Never Back Down',
		effects: [
			{
				effect: 'Charge Speed',
				value: 0.3,
				stackType: 'linear',
				stackValue: 0.3,
				percentage: true,
				stackNumber: 0,
				total: 0
			},
			{
				effect: 'Teleporter Zone',
				value: 0.5,
				stackType: 'hyperbolic',
				stackValue: -0.5,
				percentage: true,
				stackNumber: 0,
				total: 0
			}
		],
	}
]