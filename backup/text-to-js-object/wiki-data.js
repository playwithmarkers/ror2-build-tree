
const useWikiData = (function() {


	const wikiData = {
		
		items: [

			{
				itemName: '',
				displayName: '57 Leaf Clover',
				rarity: 'Legendary',
				//Quote: 'Luck is on your side.',
				description: 'All random effects are rolled +1 (+1 per stack) times for a favorable outcome.',
				//Category: 'Utility',
				//unlock: 'The Long Road',
				effects: [
					{
						effect: 'Luck',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Soldier\'s Syringe',
				rarity: 'Common',
				//Quote: 'Increases attack speed.',
				description: 'Increases attack speed by 15% (+15% per stack).',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Attack Speed',
						stackType: 'Linear',
						percentage: false,
						value: '15%',
						stackValue: '+15%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Tougher Times',
				rarity: 'Common',
				//Quote: 'Chance to block incoming damage.',
				description: '15% (+15% per stack) chance to block incoming damage. Unaffected by luck.',
				//Category: 'Utility',
				//unlock: 'Learning Process',
				effects: [
					{
						effect: 'Block Chance',
						stackType: 'Hyperbolic',
						percentage: false,
						value: '15%',
						stackValue: '+15%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Brilliant Behemoth',
				rarity: 'Legendary',
				//Quote: 'All your attacks explode!',
				description: 'All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Explosion Radius',
						stackType: 'Linear',
						percentage: false,
						value: '4m',
						stackValue: '+2.5m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'AtG Missile Mk. 1',
				rarity: 'Uncommon',
				//Quote: 'Chance to fire a missile.',
				description: '10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '300%',
						stackValue: '+300%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Will-o\'-the-wisp',
				rarity: 'Uncommon',
				//Quote: 'Detonate enemies on kill.',
				description: 'On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.',
				//Category: 'Damage,OnKillEffect',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '350%',
						stackValue: '+280%'
					}, {
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '12m',
						stackValue: '+2.4m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Ceremonial Dagger',
				rarity: 'Legendary',
				//Quote: 'Killing an enemy releases homing daggers.',
				description: 'Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.',
				//Category: 'Damage,OnKillEffect',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '150%',
						stackValue: '+150%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Monster Tooth',
				rarity: 'Common',
				//Quote: 'Drop a healing orb on kill.',
				description: 'Killing an enemy spawns a healing orb that heals for 8 (+8 per stack) health.',
				//Category: 'Healing,OnKillEffect',
				effects: [
					{
						effect: 'Health per Orb',
						stackType: 'Linear',
						percentage: false,
						value: '6',
						stackValue: '+6'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Lens-Maker\'s Glasses',
				rarity: 'Common',
				////Quote: 'Chance to 'Critically Strike', dealing double damage.',
				description: 'Your attacks have a 10% (+10% per stack) chance to Critically Strike, dealing double damage.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Critical Chance',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Paul\'s Goat Hoof',
				rarity: 'Common',
				//Quote: 'Move faster.',
				description: 'Increases movement speed by 14% (+14% per stack).',
				//Category: 'Utility',
				//unlock: '\'Is This Bugged?\'',
				effects: [
					{
						effect: 'Movement Speed',
						stackType: 'Linear',
						percentage: false,
						value: '14%',
						stackValue: '+14%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Hopoo Feather',
				rarity: 'Uncommon',
				//Quote: 'Gain an extra jump.',
				description: 'Gain +1 (+1 per stack) maximum jump count.',
				//Category: 'Utility,AIBlacklist',
				effects: [
					{
						effect: 'Extra Jump',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Ukulele',
				rarity: 'Uncommon',
				//Quote: '...and his music was electric.',
				description: '25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Targets',
						stackType: 'Linear',
						percentage: false,
						value: '3',
						stackValue: '+2'
					}, {
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '20m',
						stackValue: '+2m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Leeching Seed',
				rarity: 'Uncommon',
				//Quote: 'Dealing damage heals you.',
				description: 'Dealing damage heals you for 1 (+1 per stack) health.',
				//Category: 'Healing',
				effects: [
					{
						effect: 'Heal',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Frost Relic',
				rarity: 'Legendary',
				//Quote: 'Killing enemies surrounds you with an ice storm.',
				description: 'Killing an enemy surrounds you with an ice storm that deals 600% damage per second. The storm grows with every kill, increasing its radius by 1m. Stacks up to 6m (+6m per stack).',
				//Category: 'Damage,OnKillEffect',
				effects: [
					{
						effect: 'Ice Storm Radius',
						stackType: 'Linear',
						percentage: false,
						value: '6m',
						stackValue: '+6m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Happiest Mask',
				rarity: 'Legendary',
				//Quote: 'Chance on killing an enemy to summon a ghost.',
				description: 'Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).',
				//Category: 'Damage,Utility,OnKillEffect',
				effects: [
					{
						effect: 'Ghost Duration',
						stackType: 'Linear',
						percentage: false,
						value: '30s',
						stackValue: '+30s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Bustling Fungus',
				rarity: 'Common',
				//Quote: 'Heal all nearby allies after standing still for 2 seconds.',
				description: 'After standing still for 2 seconds, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).',
				//Category: 'Healing,AIBlacklist',
				effects: [
					{
						effect: 'Health per Second',
						stackType: 'Linear',
						percentage: false,
						value: '4.5%',
						stackValue: '+2.25%'
					}, {
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '3m',
						stackValue: '+1.5m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Crowbar',
				rarity: 'Common',
				//Quote: 'Deal more damage to healthy enemies.',
				description: 'Deal 150% (+50% per stack) damage to enemies above 90% health.',
				//Category: 'Damage',
				//unlock: 'The Basics',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '150%',
						stackValue: '+50%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Predatory Instincts',
				rarity: 'Uncommon',
				////Quote: ''Critical Strikes' increase attack speed. Stacks 3 times.',
				description: 'Gain 5% critical chance (+0% per stack). Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.',
				//Category: 'Damage',
				//unlock: 'Rapidfire',
				effects: [
					{
						effect: 'Attack Speed Cap',
						stackType: 'Linear',
						percentage: false,
						value: '36%',
						stackValue: '+24%'
					}, {
						effect: 'Crit chance',
						stackType: 'None',
						percentage: false,
						value: '5%',
						stackValue: '+0%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Tri-Tip Dagger',
				rarity: 'Common',
				//Quote: 'Chance to bleed enemies on hit.',
				description: '15% (+15% per stack) chance to bleed an enemy for 240% base damage.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Chance to Bleed',
						stackType: 'Linear',
						percentage: false,
						value: '15%',
						stackValue: '+15%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Red Whip',
				rarity: 'Uncommon',
				//Quote: 'Move fast out of combat.',
				description: 'Leaving combat boosts your movement speed by 30% (+30% per stack).',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Movement Speed ',
						stackType: 'Linear',
						percentage: false,
						value: '30%',
						stackValue: '+30%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'H3AD-5T v2',
				rarity: 'Legendary',
				////Quote: 'Increase jump height. Hold 'Interact' to slam down to the ground.',
				description: 'Increase jump height. Creates a 10m radius kinetic explosion on hitting the ground, dealing 2300% base damage that scales up with speed. Recharges in 10 (-50% per stack) seconds.',
				//Category: 'Damage,Utility,AIBlacklist',
				effects: [
					{
						effect: 'Recharge Time',
						stackType: 'Exponential',
						percentage: false,
						value: '10s',
						stackValue: '-50%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Warbanner',
				rarity: 'Common',
				//Quote: 'Drop a Warbanner on leveling up, giving you great strength.',
				description: 'On level up drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.',
				//Category: 'Utility,AIBlacklist',
				effects: [
					{
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '16m',
						stackValue: '+8m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Berzerker\'s Pauldron',
				rarity: 'Uncommon',
				//Quote: 'Enter a frenzy after killing 3 enemies in quick succession.',
				description: 'Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.',
				//Category: 'Damage,OnKillEffect',
				//unlock: 'Glorious Battle',
				effects: [
					{
						effect: 'Frenzy Duration',
						stackType: 'Linear',
						percentage: false,
						value: '6s',
						stackValue: '+4s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Old War Stealthkit',
				rarity: 'Uncommon',
				//Quote: 'Turn invisible on taking heavy damage.',
				description: 'Chance on taking damage to gain 40% movement speed and invisibility for 3s (+1.5s per stack). Chance increases the more damage you take.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '3s',
						stackValue: '+1.5s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Harvester\'s Scythe',
				rarity: 'Uncommon',
				////Quote: ''Critical Strikes' heal you.',
				description: 'Gain 5% critical chance (+0% per stack). Critical strikes heal for 8 (+4 per stack) health.',
				//Category: 'Healing',
				//unlock: 'Prismatically Aligned',
				effects: [
					{
						effect: 'Heal',
						stackType: 'Linear',
						percentage: false,
						value: '8',
						stackValue: '+4'
					}, {
						effect: 'Crit chance',
						stackType: 'None',
						percentage: false,
						value: '5%',
						stackValue: '+0%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Cautious Slug',
				rarity: 'Common',
				//Quote: 'Rapidly heal outside of danger.',
				description: 'Increases base health regeneration by +4 hp/s (+4 hp/s per stack) while outside of combat.',
				//Category: 'Healing',
				effects: [
					{
						effect: 'Health Regen',
						stackType: 'Linear',
						percentage: false,
						value: '4 hp/s',
						stackValue: '+4 hp/s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Wax Quail',
				rarity: 'Uncommon',
				//Quote: 'Jumping while sprinting boosts you forward.',
				description: 'Jumping while sprinting boosts you forward by 10m (+10m per stack).',
				//Category: 'Utility,SprintRelated',
				//unlock: 'Going Fast Recommended',
				effects: [
					{
						effect: 'Boost',
						stackType: 'Linear',
						percentage: false,
						value: '10m',
						stackValue: '+10m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Personal Shield Generator',
				rarity: 'Common',
				//Quote: 'Gain a recharging shield.',
				description: 'Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Shield',
						stackType: 'Linear',
						percentage: false,
						value: '8%',
						stackValue: '+8%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'N\'kuhana\'s Opinion',
				rarity: 'Legendary',
				//Quote: 'Fire haunting skulls when healed.',
				description: 'Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.',
				//Category: 'Damage',
				//unlock: 'Her Concepts',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Medkit',
				rarity: 'Common',
				//Quote: 'Receive a delayed heal after taking damage.',
				description: 'Heal for 25 (+25 per stack) health 2 seconds after getting hurt.',
				//Category: 'Healing',
				//unlock: 'Elite Slayer',
				effects: [
					{
						effect: 'Heal',
						stackType: 'Linear',
						percentage: false,
						value: '10',
						stackValue: '+10'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Fuel Cell',
				rarity: 'Uncommon',
				//Quote: 'Hold an additional equipment charge. Reduce equipment cooldown.',
				description: 'Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).',
				//Category: 'Utility,OnKillEffect,EquipmentRelated',
				//unlock: 'Experimenting',
				effects: [
					{
						effect: 'Charges',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}, {
						effect: 'Cooldown',
						stackType: 'Exponential',
						percentage: false,
						value: '15%',
						stackValue: '+15%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Infusion',
				rarity: 'Uncommon',
				//Quote: 'Killing an enemy permanently increases your health, up to 100.',
				description: 'Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.',
				//Category: 'Utility,Healing,OnKillEffect',
				//unlock: 'Slaughter',
				effects: [
					{
						effect: 'Health Increase',
						stackType: 'Linear',
						percentage: false,
						value: '100',
						stackValue: '+100'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Unstable Tesla Coil',
				rarity: 'Legendary',
				//Quote: 'Shock all nearby enemies every 10 seconds.',
				description: 'Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.',
				//Category: 'Damage',
				//unlock: 'Macho',
				effects: [
					{
						effect: 'Targets',
						stackType: 'Linear',
						percentage: false,
						value: '3',
						stackValue: '+2'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Gasoline',
				rarity: 'Common',
				//Quote: 'Killing enemies sets nearby enemies on fire.',
				description: 'Killing an enemy ignites all enemies within 12m (+4m per stack). Enemies burn for 150% (+75% per stack) base damage.',
				//Category: 'Damage,OnKillEffect',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '150%',
						stackValue: '+75%'
					}, {
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '12m',
						stackValue: '+4m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'BoostDamage',
				rarity: 'NoTier',
				//Category: 'Hidden,Damage',
				effects: [
						{
						effect: 'Damage Multiplier',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'BoostHP',
				rarity: 'NoTier',
				//Category: 'Hidden,Utility',
				effects: [
						{
						effect: 'Health Multiplier',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Sentient Meat Hook',
				rarity: 'Legendary',
				//Quote: 'Chance to hook all nearby enemies.',
				description: '20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.',
				//Category: 'Damage',
				//unlock: 'Deja Vu?',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Hyperbolic',
						percentage: false,
						value: '20%',
						stackValue: '+20%'
					}, {
						effect: 'Targets',
						stackType: 'Linear',
						percentage: false,
						value: '10',
						stackValue: '+5'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Bundle of Fireworks',
				rarity: 'Common',
				//Quote: 'Activating an interactable launches fireworks at nearby enemies.',
				description: 'Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage.',
				//Category: 'Damage,AIBlacklist',
				//unlock: '...Maybe One More',
				effects: [
					{
						effect: 'Fireworks',
						stackType: 'Linear',
						percentage: false,
						value: '8',
						stackValue: '+4'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Bandolier',
				rarity: 'Uncommon',
				//Quote: 'Chance on kill to drop an ammo pack that resets all skill cooldowns.',
				description: '18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.',
				//Category: 'Utility,OnKillEffect',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Special',
						percentage: false,
						value: '18%',
						stackValue: '+10%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Stun Grenade',
				rarity: 'Common',
				//Quote: 'Chance to stun on hit.',
				description: '5% (+5% on stack) chance on hit to stun enemies for 2 seconds.',
				//Category: 'Utility,AIBlacklist',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Hyperbolic',
						percentage: false,
						value: '5%',
						stackValue: '+5%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Shaped Glass',
				rarity: 'Lunar',
				//Quote: 'Double your damage... BUT halve your health.',
				description: 'Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Exponential',
						percentage: false,
						value: '100%',
						stackValue: '+100%'
					}, {
						effect: 'Health Reduction',
						stackType: 'Exponential',
						percentage: false,
						value: '50%',
						stackValue: '-50%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Brittle Crown',
				rarity: 'Lunar',
				//Quote: 'Gain gold on hit... BUT lose gold on getting hit.',
				description: '30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Linear',
						percentage: false,
						value: '2',
						stackValue: '+2'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Transcendence',
				rarity: 'Lunar',
				//Quote: 'Convert all your health into shield. Increase maximum health.',
				description: 'Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Maximum Health',
						stackType: 'Linear',
						percentage: false,
						value: '50%',
						stackValue: '+25%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Alien Head',
				rarity: 'Legendary',
				//Quote: 'Reduces cooldowns for your skills.',
				description: 'Reduce skill cooldowns by 25% (+25% per stack).',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Cooldown',
						stackType: 'Exponential',
						percentage: false,
						value: '25%',
						stackValue: '+25%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Soulbound Catalyst',
				rarity: 'Legendary',
				//Quote: 'Kills reduce equipment cooldown.',
				description: 'Kills reduce equipment cooldown by 4s (+2s per stack).',
				//Category: 'Utility,OnKillEffect,EquipmentRelated',
				//unlock: 'Newtist',
				effects: [
					{
						effect: 'Cooldown',
						stackType: 'Linear',
						percentage: false,
						value: '4s',
						stackValue: '+2s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Titanic Knurl',
				rarity: 'Boss',
				//Boss: 'Stone Titan',
				//Quote: 'Boosts health and regeneration.',
				description: 'Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).',
				//Category: 'Utility,Healing',
				effects: [
					{
						effect: 'Maximum Health',
						stackType: 'Linear',
						percentage: false,
						value: '40',
						stackValue: '+40'
					}, {
						effect: 'Health Regen',
						stackType: 'Linear',
						percentage: false,
						value: '1.6',
						stackValue: '+1.6'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Queen\'s Gland',
				rarity: 'Boss',
				//Boss: 'Beetle Queen',
				//Quote: 'Recruit a Beetle Guard.',
				description: 'Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Beetle Guard',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'BurnNearby',
				rarity: 'NoTier',
				//Category: 'Abandoned',
			},
			{
				itemName: '',
				displayName: 'CritHeal',
				rarity: 'NoTier',
				//Category: 'Abandoned,Healing',
				effects: [
					{
						effect: 'Critical Chance',
						stackType: 'None',
						percentage: false,
						value: '5%',
						stackValue: '+0%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'CrippleWardOnLevel',
				rarity: 'NoTier',
				//Category: 'Abandoned,Utility',
				effects: [
					{
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '16m',
						stackValue: '+8m'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Energy Drink',
				rarity: 'Common',
				//Quote: 'Sprint faster.',
				description: 'Sprint speed is improved by 30% (+20% per stack).',
				//Category: 'Utility,SprintRelated',
				effects: [
					{
						effect: 'Sprint Speed',
						stackType: 'Linear',
						percentage: false,
						value: '30%',
						stackValue: '+20%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Backup Magazine',
				rarity: 'Common',
				//Quote: 'Add an extra charge of your Secondary skill.',
				description: 'Add +1 (+1 per stack) charge of your Secondary skill.',
				//Category: 'Utility',
				//unlock: 'Flawless',
				effects: [
					{
						effect: 'Charge',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Sticky Bomb',
				rarity: 'Common',
				//Quote: 'Chance on hit to attach a bomb to enemies.',
				description: '5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Linear',
						percentage: false,
						value: '5%',
						stackValue: '+5%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Rusted Key',
				rarity: 'Common',
				//Quote: 'Gain access to a Rusty Lockbox that contains treasure.',
				description: 'A hidden cache containing an item will appear in a random location on each stage. (Increases rarity of the item per stack).',
				//Category: 'Utility,AIBlacklist',
				//unlock: 'Keyed Up',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Special',
						percentage: false,
						value: '1',
						stackValue: '1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Armor-Piercing Rounds',
				rarity: 'Common',
				//Quote: 'Deal extra damage to bosses.',
				description: 'Deal an additional 20% damage (+20% per stack) to bosses.',
				//Category: 'Damage,AIBlacklist',
				//unlock: 'Advancement',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '20%',
						stackValue: '+20%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Rose Buckler',
				rarity: 'Uncommon',
				//Quote: 'Reduce incoming damage while sprinting.',
				description: 'Increase armor by 30 (+30 per stack) while sprinting.',
				//Category: 'Utility,SprintRelated',
				effects: [
					{
						effect: 'Armor',
						stackType: 'Linear',
						percentage: false,
						value: '30',
						stackValue: '+30'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Runald\'s Band',
				rarity: 'Uncommon',
				//Quote: 'Chance on hit to strike an enemy with a runic ice blast.',
				description: '8% chance on hit to strike an enemy with a runic ice blast, slowing them by 80% and dealing 250% (+125% per stack) TOTAL damage.',
				//Category: 'Damage',
				//unlock: 'Death Do Us Part',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '250%',
						stackValue: '+125%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Kjaro\'s Band',
				rarity: 'Uncommon',
				//Quote: 'Chance on hit to strike an enemy with a runic flame tornado.',
				description: '8% chance on hit to strike an enemy with a runic flame tornado, dealing 500% (+250% per stack) TOTAL damage.',
				//Category: 'Damage',
				//unlock: 'Death Do Us Part',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '500%',
						stackValue: '+250%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Chronobauble',
				rarity: 'Uncommon',
				//Quote: 'Slow enemies on hit.',
				description: 'Slow enemies on hit for -60% movement speed for 2s (+2s per stack).',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Slow Duration',
						stackType: 'Linear',
						percentage: false,
						value: '2s',
						stackValue: '+2s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Dio\'s Best Friend',
				rarity: 'Legendary',
				//Quote: 'Cheat death. Consumed on use.',
				description: 'Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.',
				//Category: 'Utility',
				//unlock: 'The Lone Survivor',
				effects: [
					{
						effect: 'Uses',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Hardlight Afterburner',
				rarity: 'Legendary',
				//Quote: 'Add 2 extra charges of your Utility skill. Reduce Utility skill cooldown.',
				description: 'Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Charges',
						stackType: 'Linear',
						percentage: false,
						value: '2',
						stackValue: '+2'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Wake of Vultures',
				rarity: 'Legendary',
				//Quote: 'Temporarily steal the power of slain elites.',
				description: 'Gain the power of any killed elite monster for 8s (+5s per stack).',
				//Category: 'Damage,Utility,AIBlacklist,OnKillEffect',
				effects: [
					{
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '8s',
						stackValue: '+5s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Brainstalks',
				rarity: 'Legendary',
				//Quote: 'Skills have NO cooldowns for a short period after killing an elite.',
				description: 'Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have no cooldowns.',
				//Category: 'Utility,AIBlacklist,OnKillEffect',
				//unlock: 'Deicide',
				effects: [
					{
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '4s',
						stackValue: '+4s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Rejuvenation Rack',
				rarity: 'Legendary',
				//Quote: 'Double the strength of healing.',
				description: 'Heal +100% (+100% per stack) more.',
				//Category: 'Healing',
				//unlock: 'Naturopath',
				effects: [
					{
						effect: 'Heal',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Corpsebloom',
				rarity: 'Lunar',
				////Quote: 'Double your healing... BUT it's applied over time.',
				description: 'Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (reduced by 50% per stack) of your health per second.',
				//Category: 'Healing',
				effects: [
					{
						effect: 'Heal',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%'
					}, {
						effect: 'Maximum Heal',
						stackType: 'Exponential',
						percentage: false,
						value: '10%',
						stackValue: '-50%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Gesture of the Drowned',
				rarity: 'Lunar',
				//Quote: 'Dramatically reduce Equipment cooldown... BUT it automatically activates.',
				description: 'Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.',
				//Category: 'Utility,EquipmentRelated',
				//unlock: 'The Demons And The Crabs',
				effects: [
					{
						effect: 'Cooldown',
						stackType: 'Exponential',
						percentage: false,
						value: '-50%',
						stackValue: '-15%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Old Guillotine',
				rarity: 'Uncommon',
				//Quote: 'Instantly kill low health Elite monsters.',
				description: 'Instantly kill Elite monsters below 20% (+20% per stack) health.',
				//Category: 'Damage,AIBlacklist',
				//unlock: 'Cut Down',
				effects: [
					{
						effect: 'Threshold',
						stackType: 'Hyperbolic',
						percentage: false,
						value: '20%',
						stackValue: '+20%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'War Horn',
				rarity: 'Uncommon',
				//Quote: 'Activating your Equipment gives you a burst of attack speed.',
				description: 'Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).',
				//Category: 'Damage,EquipmentRelated',
				//unlock: 'Warmonger',
				effects: [
					{
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '8s',
						stackValue: '+4s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Aegis',
				rarity: 'Legendary',
				//Quote: 'Healing past full grants you a temporary barrier.',
				description: 'Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.',
				//Category: 'Utility,Healing',
				effects: [
					{
						effect: 'Healing Converted',
						stackType: 'Linear',
						percentage: false,
						value: '50%',
						stackValue: '+50%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'DrizzlePlayerHelper',
				rarity: 'NoTier',
				//Category: 'Hidden',
				effects: [
					{
						effect: 'Armor',
						stackType: 'Linear',
						percentage: false,
						value:  '70',
						stackValue: '+70'
					}, {
						effect: 'Regen Multiplier',
						stackType: 'None',
						percentage: false,
						value: '+0.5',
						stackValue: '0'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Ghost',
				rarity: 'NoTier',
				//Category: 'Hidden',
			},
			{
				itemName: '',
				displayName: 'HealthDecay',
				rarity: 'NoTier',
				//Category: 'Hidden',
				effects: [
					{
						effect: 'Health Regen',
						stackType: 'Special',
						percentage: false,
						value: '- Health/Stacksize',
						stackValue: '-'
					}
				]
			},
			{
				itemName: '',
				displayName: 'MageAttunement',
				rarity: 'NoTier',
				//Category: 'Abandoned',
			},
			{
				itemName: '',
				displayName: 'Tonic Affliction',
				rarity: 'NoTier',
				//Quote: 'Reduce ALL effects when not under the effects of Spinel Tonic.',
				//Category: 'Cleansable',
				effects: [
					{
						effect: 'Most',
						stackType: 'Exponential',
						percentage: false,
						value: '5%',
						stackValue: '-5%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Halcyon Seed',
				rarity: 'Boss',
				//Boss: 'Aurelionite',
				//Quote: 'Summon Aurelionite during the Teleporter event.',
				description: 'Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.',
				//Category: 'Utility,WorldUnique',
				effects: [
					{
						effect: 'Health',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%'
					}, {
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+50%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Little Disciple',
				rarity: 'Boss',
				//Boss: 'Grovetender',
				//Quote: 'Fire tracking wisps while sprinting.',
				description: 'Fire a tracking wisp for 100% (+100% per stack) damage. Fires every 0.5 seconds while sprinting.',
				//Category: 'Damage,SprintRelated',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Topaz Brooch',
				rarity: 'Common',
				//Quote: 'Gain a temporary barrier on kill.',
				description: 'Gain a temporary barrier on kill for 15 health (+15 per stack).',
				//Category: 'Utility,Healing,OnKillEffect',
				effects: [
					{
						effect: 'Shield',
						stackType: 'Linear',
						percentage: false,
						value: '15',
						stackValue: '+15'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Shattering Justice',
				rarity: 'Legendary',
				//Quote: 'Reduce the armor of enemies after repeatedly striking them.',
				description: 'After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '8s',
						stackValue: '+8s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Lepton Daisy',
				rarity: 'Uncommon',
				//Quote: 'Periodically release a healing nova during the Teleporter event.',
				description: 'Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.',
				//Category: 'Healing,AIBlacklist',
				effects: [
					{
						effect: 'Healing Nova',
						stackType: 'Linear',
						percentage: false,
						value: '1',
						stackValue: '+1'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Focus Crystal',
				rarity: 'Common',
				//Quote: 'Deal bonus damage to nearby enemies.',
				description: 'Increase damage to enemies within 13m by 15% (+15% per stack).',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '15%',
						stackValue: '+15%'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Strides of Heresy',
				rarity: 'Lunar',
				////Quote: 'Replace your Utility Skill with 'Shadowfade'.',
				description: 'Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 25% (+25% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.',
				//Category: 'Utility,Healing',
				//unlock: 'Blockade Breaker',
				effects: [
					{
						effect: 'Heal',
						stackType: 'Linear',
						percentage: false,
						value: '25%',
						stackValue: '+25%'
					}, {
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '3s',
						stackValue: '+3s'
					}
				]
			},
			{
				itemName: '',
				displayName: 'MonsoonPlayerHelper',
				rarity: 'NoTier',
				//Category: 'Hidden',
				effects: [
					{
						effect: 'Regen Multiplier',
						stackType: 'None',
						percentage: false,
						value: '-0.4',
						stackValue: '0'
					}
				]
			},
			{
				itemName: '',
				displayName: 'Razorwire',
				rarity: 'Uncommon',
				//Quote: 'Retaliate in a burst of razors on taking damage.',
				description: 'Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius',
				//Category: 'Damage,AIBlacklist',
				effects: [
					{
						effect: 'Targets',
						stackType: 'Linear',
						percentage: false,
						value: '5',
						stackValue: '+2',
					}, {
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '25m',
						stackValue: '+10m',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Fresh Meat',
				rarity: 'Common',
				//Quote: 'Regenerate health after killing an enemy.',
				description: 'Increases base health regeneration by +2 hp/s for 3s (+3s per stack) after killing an enemy.',
				//Category: 'Healing,OnKillEffect',
				effects: [
					{
						effect: 'Duration',
						stackType: 'Linear',
						percentage: false,
						value: '3s',
						stackValue: '+3s',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Pearl',
				rarity: 'Boss',
				//Boss: 'Cleansing Pool',
				//Quote: 'Increase your maximum health.',
				description: 'Increases maximum health by 10% (+10% per stack).',
				//Category: 'Utility,WorldUnique',
				effects: [
					{
						effect: 'Health',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Irradiant Pearl',
				rarity: 'Boss',
				//Boss: 'Cleansing Pool',
				//Quote: 'Increase ALL of your effects.',
				description: 'Increases ALL effects by 10% (+10% per stack).',
				//Category: 'Damage,Healing,Utility,WorldUnique',
				effects: [
					{
						effect: 'Health',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}, {
						effect: 'Regen multiplier',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}, {
						effect: 'Movespeed',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}, {
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}, {
						effect: 'Attack Speed',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}, {
						effect: 'Crit Chance',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}, {
						effect: 'Armor Multiplier',
						stackType: 'Linear',
						percentage: false,
						value: '10%',
						stackValue: '+10%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Ghor\'s Tome',
				rarity: 'Uncommon',
				//Quote: 'Chance on kill to drop a treasure.',
				description: '4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.',
				//Category: 'Utility,OnKillEffect',
				effects: [
					{
						effect: 'Drop Chance',
						stackType: 'Linear',
						percentage: false,
						value: '4%',
						stackValue: '+4%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Resonance Disc',
				rarity: 'Legendary',
				//Quote: 'Obtain a Resonance Disc charged by killing enemies. Fires automatically when fully charged.',
				description: 'Killing enemies charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn\'t kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).',
				//Category: 'Damage,OnKillEffect',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '300%',
						stackValue: '+300%',
					}, {
						effect: 'Explosion',
						stackType: 'Linear',
						percentage: false,
						value: '1000%',
						stackValue: '+1000%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Visions of Heresy',
				rarity: 'Lunar',
				////Quote: 'Replace your Primary Skill with 'Hungering Gaze'.',
				description: 'Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).',
				//Category: 'Damage',
				//unlock: 'Blockade Breaker',
				effects: [
					{
						effect: 'Charges',
						stackType: 'Linear',
						percentage: false,
						value: '12',
						stackValue: '+12',
					}, {
						effect: 'Reload',
						stackType: 'Linear',
						percentage: false,
						value: '2s',
						stackValue: '+2s',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Genesis Loop',
				rarity: 'Boss',
				//Boss: 'Wandering Vagrant',
				//Quote: 'Fire an electric nova at low health.',
				description: 'Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 seconds (-50% per stack).',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Recharge Speed',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+50%',
					}
				]
			},
			/* {
				itemName: '',
				displayName: 'Beads of Fealty',
				rarity: 'Lunar',
				//Quote: 'Seems to do nothing... but...',
				description: 'Seems to do nothing... but...',
			},
			{
				itemName: '',
				displayName: 'Artifact Key',
				rarity: 'Boss',
				//Boss: 'Bulwark\'s Ambry',
				//Quote: 'A stone shard with immense power.',
				description: 'A stone shard with immense power.',
				//Category: 'WorldUnique',
			}, */
			{
				itemName: '',
				displayName: 'Repulsion Armor Plate',
				rarity: 'Common',
				//Quote: 'Receive flat damage reduction from all attacks.',
				description: 'Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.',
				//Category: 'Utility',
				effects: [
					{
						effect: 'Damage Reduction',
						stackType: 'Linear',
						percentage: false,
						value: '5',
						stackValue: '+5',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Squid Polyp',
				rarity: 'Uncommon',
				//Quote: 'Activating an interactable summons a Squid Turret nearby.',
				description: 'Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.',
				//Category: 'Damage,AIBlacklist',
				//unlock: 'Automation Activation',
				effects: [
					{
						effect: 'Attack Speed',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Death Mark',
				rarity: 'Uncommon',
				//Quote: 'Enemies with 4 or more debuffs are marked for death, taking bonus damage.',
				description: 'Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% (+50% per stack) from all sources for 7 seconds.',
				//Category: 'Damage',
				effects: [
					{
						effect: 'Damage',
						stackType: 'Linear',
						percentage: false,
						value: '50%',
						stackValue: '+50%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Interstellar Desk Plant',
				rarity: 'Legendary',
				//Quote: 'Plant a healing fruit on kill.',
				description: 'On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% of maximum health every second to all allies within 3m (+1.5m per stack). Lasts 10 seconds',
				//Category: 'Healing',
				effects: [
					{
						effect: 'Radius',
						stackType: 'Linear',
						percentage: false,
						value: '3m',
						stackValue: '+1.5m',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Ancestral Incubator',
				rarity: 'NoTier',
				//Boss: 'Grandparent',
				//Quote: 'Chance on kill to summon an Ancestral Pod.',
				description: '7% chance (+1% per stack) on kill to summon an Ancestral Pod that distracts enemies. Once it fully grows, it will hatch into an allied Parent with 100% health (+100% per stack).',
				//Category: 'Utility,OnKillEffect',
				effects: [
					{
						effect: 'Chance',
						stackType: 'Linear',
						percentage: false,
						value: '7%',
						stackValue: '+1%',
					}, {
						effect: 'Parent Health',
						stackType: 'Linear',
						percentage: false,
						value: '100%',
						stackValue: '+100%',
					}
				]
			},
			{
				itemName: '',
				displayName: 'Focused Convergence',
				rarity: 'Lunar',
				//Quote: 'Increase the speed of Teleporter charging... BUT reduce the size of the zone.',
				description: 'Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller. ',
				//Category: 'Utility,AIBlacklist',
				//unlock: 'Never Back Down',
				effects: [
					{
						effect: 'Charge Speed',
						stackType: 'Linear',
						percentage: false,
						value: '30%',
						stackValue: '+30%',
					}, {
						effect: 'Teleporter Zone',
						stackType: 'Hyperbolic',
						percentage: false,
						value: '50%',
						stackValue: '-50%',
					}
				]
			}

		]

	}
		
	return {
		getItems: function() {
			return wikiData;
		}
	}
	

})();
