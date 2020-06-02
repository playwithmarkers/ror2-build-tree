
const wikiData = {
    items: [

        {
            itemName: '57 Leaf Clover',
            Rarity: 'Legendary',
            Quote: 'Luck is on your side.',
            description: 'All random effects are rolled {{Color|u|+1}} {{Stack|(+1 per stack)}} {{Color|u|times for a favorable outcome}}.',
            Category: 'Utility',
            Unlock: 'The Long Road',
            ID: 35,
            Stats: [
              {
                Stat: 'Luck',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'Soldier\'s Syringe',
            rarity: 'Common',
            Quote: 'Increases attack speed.',
            description: 'Increases {{Color|d|attack speed}} by {{Color|d|15%}} {{Stack|(+15% per stack)}}.',
            Category: 'Damage',
            ID: 0,
            Stats: [
              {
                Stat: 'Attack Speed',
                Value: '15%',
                Stack: 'Linear',
                Add: '+15%'
              }
            ]
          },
          {
            itemName: 'Tougher Times',
            rarity: 'Common',
            Quote: 'Chance to block incoming damage.',
            description: '{{Color|h|15%}} {{Stack|(+15% per stack)}} chance to {{Color|h|block}} incoming damage. {{Color|u|Unaffected by luck}}.',
            Category: 'Utility',
            Unlock: 'Learning Process',
            ID: 1,
            Stats: [
              {
                Stat: 'Block Chance',
                Value: '15%',
                Stack: 'Hyperbolic',
                Add: '+15%'
              }
            ]
          },
          {
            itemName: 'Brilliant Behemoth',
            rarity: 'Legendary',
            Quote: 'All your attacks explode!',
            description: 'All your {{Color|d|attacks explode}} in a {{Color|d|4m}} {{Stack|(+2.5m per stack)}} radius for a bonus {{Color|d|60%}} TOTAL damage to nearby enemies.',
            Category: 'Damage',
            ID: 2,
            Stats: [
              {
                Stat: 'Explosion Radius',
                Value: '4m',
                Stack: 'Linear',
                Add: '+2.5m'
              }
            ]
          },
          {
            itemName: 'AtG Missile Mk. 1',
            rarity: 'Uncommon',
            Quote: 'Chance to fire a missile.',
            description: '{{Color|d|10%}} chance to fire a missile that deals {{Color|d|300%}} {{Stack|(+300% per stack)}} TOTAL damage.',
            Category: 'Damage',
            ID: 3,
            Stats: [
              {
                Stat: 'Damage',
                Value: '300%',
                Stack: 'Linear',
                Add: '+300%'
              }
            ]
          },
          {
            itemName: 'Will-o\'-the-wisp',
            rarity: 'Uncommon',
            Quote: 'Detonate enemies on kill.',
            description: 'On killing an enemy, spawn a {{Color|d|lava pillar}} in a {{Color|d|12m}} {{Stack|(+2.4m per stack)}} radius for {{Color|d|350%}} {{Stack|(+280% per stack)}} base damage.',
            Category: 'Damage,OnKillEffect',
            ID: 4,
            Stats: [
              {
                Stat: 'Damage',
                Value: '350%',
                Stack: 'Linear',
                Add: '+280%'
              }, {
                Stat: 'Radius',
                Value: '12m',
                Stack: 'Linear',
                Add: '+2.4m'
              }
            ]
          },
          {
            itemName: 'Ceremonial Dagger',
            rarity: 'Legendary',
            Quote: 'Killing an enemy releases homing daggers.',
            description: 'Killing an enemy fires out {{Color|d|3}} {{Color|d|homing daggers}} that deal {{Color|d|150%}} {{Stack|(+150% per stack)}} base damage.',
            Category: 'Damage,OnKillEffect',
            ID: 5,
            Stats: [
              {
                Stat: 'Damage',
                Value: '150%',
                Stack: 'Linear',
                Add: '+150%'
              }
            ]
          },
          {
            itemName: 'Monster Tooth',
            rarity: 'Common',
            Quote: 'Drop a healing orb on kill.',
            description: 'Killing an enemy spawns a {{Color|h|healing orb}} that heals for {{Color|h|8 {{Stack|(+8 per stack)}} health}}.',
            Category: 'Healing,OnKillEffect',
            ID: 6,
            Stats: [
              {
                Stat: 'Health per Orb',
                Value: '6',
                Stack: 'Linear',
                Add: '+6'
              }
            ]
          },
          {
            itemName: 'Lens-Maker\'s Glasses',
            rarity: 'Common',
            //Quote: 'Chance to 'Critically Strike', dealing double damage.',
            description: 'Your attacks have a {{Color|d|10%}} {{Stack|(+10% per stack)}} chance to {{Color|d|Critically Strike}}, dealing {{Color|d|double damage}}.',
            Category: 'Damage',
            ID: 7,
            Stats: [
              {
                Stat: 'Critical Chance',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%'
              }
            ]
          },
          {
            itemName: 'Paul\'s Goat Hoof',
            rarity: 'Common',
            Quote: 'Move faster.',
            description: 'Increases {{Color|u|movement speed}} by {{Color|u|14%}} {{Stack|(+14% per stack)}}.',
            Category: 'Utility',
            Unlock: '\'Is This Bugged?\'',
            ID: 8,
            Stats: [
              {
                Stat: 'Movement Speed',
                Value: '14%',
                Stack: 'Linear',
                Add: '+14%'
              }
            ]
          },
          {
            itemName: 'Hopoo Feather',
            rarity: 'Uncommon',
            Quote: 'Gain an extra jump.',
            description: 'Gain {{Color|u|+1}} {{Stack|(+1 per stack)}} maximum {{Color|u|jump count}}.',
            Category: 'Utility,AIBlacklist',
            ID: 9,
            Stats: [
              {
                Stat: 'Extra Jump',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'Ukulele',
            rarity: 'Uncommon',
            Quote: '...and his music was electric.',
            description: '{{Color|d|25%}} chance to fire {{Color|d|chain lightning}} for {{Color|d|80%}} TOTAL damage on up to {{Color|d|3}} {{Stack|(+2 per stack)}} targets within {{Color|d|20m}} {{Stack|(+2m per stack)}}.',
            Category: 'Damage',
            ID: 11,
            Stats: [
              {
                Stat: 'Targets',
                Value: '3',
                Stack: 'Linear',
                Add: '+2'
              }, {
                Stat: 'Radius',
                Value: '20m',
                Stack: 'Linear',
                Add: '+2m'
              }
            ]
          },
          {
            itemName: 'Leeching Seed',
            rarity: 'Uncommon',
            Quote: 'Dealing damage heals you.',
            description: 'Dealing damage {{Color|h|heals}} you for {{Color|h|1 {{Stack|(+1 per stack)}} health}}.',
            Category: 'Healing',
            ID: 13,
            Stats: [
              {
                Stat: 'Heal',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'Frost Relic',
            rarity: 'Legendary',
            Quote: 'Killing enemies surrounds you with an ice storm.',
            description: 'Killing an enemy surrounds you with an {{Color|d|ice storm}} that deals {{Color|d|600% damage per second}}. The storm {{Color|d|grows with every kill}}, increasing its radius by {{Color|d|1m}}. Stacks up to {{Color|d|6m}} {{Stack|(+6m per stack)}}.',
            Category: 'Damage,OnKillEffect',
            ID: 14,
            Stats: [
              {
                Stat: 'Ice Storm Radius',
                Value: '6m',
                Stack: 'Linear',
                Add: '+6m'
              }
            ]
          },
          {
            itemName: 'Happiest Mask',
            rarity: 'Legendary',
            Quote: 'Chance on killing an enemy to summon a ghost.',
            description: 'Killing enemies has a {{Color|d|7%}} chance to {{Color|d|spawn a ghost}} of the killed enemy with {{Color|d|1500%}} damage. Lasts {{Color|d|30s}} {{Stack|(+30s per stack)}}.',
            Category: 'Damage,Utility,OnKillEffect',
            ID: 15,
            Stats: [
              {
                Stat: 'Ghost Duration',
                Value: '30s',
                Stack: 'Linear',
                Add: '+30s'
              }
            ]
          },
          {
            itemName: 'Bustling Fungus',
            rarity: 'Common',
            Quote: 'Heal all nearby allies after standing still for 2 seconds.',
            description: 'After standing still for {{Color|h|2}} seconds, create a zone that {{Color|h|heals}} for {{Color|h|4.5%}} {{Stack|(+2.25% per stack)}} of your {{Color|h|health}} every second to all allies within {{Color|h|3m}} {{Stack|(+1.5m per stack)}}.',
            Category: 'Healing,AIBlacklist',
            ID: 16,
            Stats: [
              {
                Stat: 'Health per Second',
                Value: '4.5%',
                Stack: 'Linear',
                Add: '+2.25%'
              }, {
                Stat: 'Radius',
                Value: '3m',
                Stack: 'Linear',
                Add: '+1.5m'
              }
            ]
          },
          {
            itemName: 'Crowbar',
            rarity: 'Common',
            Quote: 'Deal more damage to healthy enemies.',
            description: 'Deal {{Color|d|150%}} {{Stack|(+50% per stack)}} damage to enemies above {{Color|d|90% health}}.',
            Category: 'Damage',
            Unlock: 'The Basics',
            ID: 17,
            Stats: [
              {
                Stat: 'Damage',
                Value: '150%',
                Stack: 'Linear',
                Add: '+50%'
              }
            ]
          },
          {
            itemName: 'Predatory Instincts',
            rarity: 'Uncommon',
            //Quote: ''Critical Strikes' increase attack speed. Stacks 3 times.',
            description: 'Gain {{Color|d|5% critical chance}} {{Stack|(+0% per stack)}}. {{Color|d|Critical strikes}} increase {{Color|d|attack speed}} by {{Color|d|12%}}. Maximum cap of {{Color|d|36% {{Stack|(+24% per stack)}} attack speed}}.',
            Category: 'Damage',
            Unlock: 'Rapidfire',
            ID: 19,
            Stats: [
              {
                Stat: 'Attack Speed Cap',
                Value: '36%',
                Stack: 'Linear',
                Add: '+24%'
              }, {
                Stat: 'Crit chance',
                Value: '5%',
                Stack: 'None',
                Add: '+0%'
              }
            ]
          },
          {
            itemName: 'Tri-Tip Dagger',
            rarity: 'Common',
            Quote: 'Chance to bleed enemies on hit.',
            description: '{{Color|d|15%}} {{Stack|(+15% per stack)}} chance to {{Color|d|bleed}} an enemy for {{Color|d|240%}} base damage.',
            Category: 'Damage',
            ID: 20,
            Stats: [
              {
                Stat: 'Chance to Bleed',
                Value: '15%',
                Stack: 'Linear',
                Add: '+15%'
              }
            ]
          },
          {
            itemName: 'Red Whip',
            rarity: 'Uncommon',
            Quote: 'Move fast out of combat.',
            description: 'Leaving combat boosts your {{Color|u|movement speed}} by {{Color|u|30%}} {{Stack|(+30% per stack)}}.',
            Category: 'Utility',
            ID: 21,
            Stats: [
              {
                Stat: 'Movement Speed ',
                Value: '30%',
                Stack: 'Linear',
                Add: '+30%'
              }
            ]
          },
          {
            itemName: 'H3AD-5T v2',
            rarity: 'Legendary',
            //Quote: 'Increase jump height. Hold 'Interact' to slam down to the ground.',
            description: 'Increase {{Color|u|jump height}}. Creates a {{Color|d|10m}} radius {{Color|d|kinetic explosion}} on hitting the ground, dealing {{Color|d|2300%}} base damage that scales up with {{Color|d|speed}}. Recharges in {{Color|d|10}} {{Stack|(-50% per stack)}} seconds.',
            Category: 'Damage,Utility,AIBlacklist',
            ID: 22,
            Stats: [
              {
                Stat: 'Recharge Time',
                Value: '10s',
                Stack: 'Exponential',
                Add: '-50%'
              }
            ]
          },
          {
            itemName: 'Warbanner',
            rarity: 'Common',
            Quote: 'Drop a Warbanner on leveling up, giving you great strength.',
            description: 'On {{Color|u|level up}} drop a banner that strengthens all allies within {{Color|u|16m}} {{Stack|(+8m per stack)}}. Raise {{Color|d|attack}} and {{Color|u|movement speed}} by {{Color|d|30%}}.',
            Category: 'Utility,AIBlacklist',
            ID: 24,
            Stats: [
              {
                Stat: 'Radius',
                Value: '16m',
                Stack: 'Linear',
                Add: '+8m'
              }
            ]
          },
          {
            itemName: 'Berzerker\'s Pauldron',
            rarity: 'Uncommon',
            Quote: 'Enter a frenzy after killing 3 enemies in quick succession.',
            description: '{{Color|d|Killing 3 enemies}} within {{Color|d|1}} second sends you into a {{Color|d|frenzy}} for {{Color|d|6s}} {{Stack|(+4s per stack)}}. Increases {{Color|u|movement speed}} by {{Color|u|50%}} and {{Color|d|attack speed}} by {{Color|d|100%}}.',
            Category: 'Damage,OnKillEffect',
            Unlock: 'Glorious Battle',
            ID: 46,
            Stats: [
              {
                Stat: 'Frenzy Duration',
                Value: '6s',
                Stack: 'Linear',
                Add: '+4s'
              }
            ]
          },
          {
            itemName: 'Old War Stealthkit',
            rarity: 'Uncommon',
            Quote: 'Turn invisible on taking heavy damage.',
            description: 'Chance on taking damage to gain {{Color|u|40% movement speed}} and {{Color|u|invisibility}} for {{Color|u|3s}} {{Stack|(+1.5s per stack)}}. Chance increases the more damage you take.',
            Category: 'Utility',
            ID: 25,
            Stats: [
              {
                Stat: 'Duration',
                Value: '3s',
                Stack: 'Linear',
                Add: '+1.5s'
              }
            ]
          },
          {
            itemName: 'Harvester\'s Scythe',
            rarity: 'Uncommon',
            //Quote: ''Critical Strikes' heal you.',
            description: 'Gain {{Color|d|5% critical chance}} {{Stack|(+0% per stack)}}. {{Color|d|Critical strikes}} {{Color|h|heal}} for {{Color|h|8}} {{Stack|(+4 per stack)}} {{Color|h|health}}.',
            Category: 'Healing',
            Unlock: 'Prismatically Aligned',
            ID: 26,
            Stats: [
              {
                Stat: 'Heal',
                Value: '8',
                Stack: 'Linear',
                Add: '+4'
              }, {
                Stat: 'Crit chance',
                Value: '5%',
                Stack: 'None',
                Add: '+0%'
              }
            ]
          },
          {
            itemName: 'Cautious Slug',
            rarity: 'Common',
            Quote: 'Rapidly heal outside of danger.',
            description: 'Increases {{Color|h|base health regeneration}} by {{Color|h|+4 hp/s}} {{Stack|(+4 hp/s per stack)}} while outside of combat.',
            Category: 'Healing',
            ID: 27,
            Stats: [
              {
                Stat: 'Health Regen',
                Value: '4 hp/s',
                Stack: 'Linear',
                Add: '+4 hp/s'
              }
            ]
          },
          {
            itemName: 'Wax Quail',
            rarity: 'Uncommon',
            Quote: 'Jumping while sprinting boosts you forward.',
            description: '{{Color|u|Jumping}} while {{Color|u|sprinting}} boosts you forward by {{Color|u|10m}} {{Stack|(+10m per stack)}}.',
            Category: 'Utility,SprintRelated',
            Unlock: 'Going Fast Recommended',
            ID: 76,
            Stats: [
              {
                Stat: 'Boost',
                Value: '10m',
                Stack: 'Linear',
                Add: '+10m'
              }
            ]
          },
          {
            itemName: 'Personal Shield Generator',
            rarity: 'Common',
            Quote: 'Gain a recharging shield.',
            description: 'Gain a {{Color|h|shield}} equal to {{Color|h|8%}} {{Stack|(+8% per stack)}} of your maximum health. Recharges outside of danger.',
            Category: 'Utility',
            ID: 29,
            Stats: [
              {
                Stat: 'Shield',
                Value: '8%',
                Stack: 'Linear',
                Add: '+8%'
              }
            ]
          },
          {
            itemName: 'N\'kuhana\'s Opinion',
            rarity: 'Legendary',
            Quote: 'Fire haunting skulls when healed.',
            description: 'Store {{Color|h|100%}} {{Stack|(+100% per stack)}} of healing as {{Color|h|Soul Energy}}. After your {{Color|h|Soul Energy}} reaches {{Color|h|10%}} of your {{Color|h|maximum health}}, {{Color|d|fire a skull}} that deals {{Color|d|250%}} of your {{Color|h|Soul Energy}} as {{Color|d|damage}}.',
            Category: 'Damage',
            Unlock: 'Her Concepts',
            ID: 31,
            Stats: [
              {
                Stat: 'Damage',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%'
              }
            ]
          },
          {
            itemName: 'Medkit',
            rarity: 'Common',
            Quote: 'Receive a delayed heal after taking damage.',
            description: '{{Color|h|Heal}} for {{Color|h|25 {{Stack|(+25 per stack)}} health}} 2 seconds after getting hurt.',
            Category: 'Healing',
            Unlock: 'Elite Slayer',
            ID: 36,
            Stats: [
              {
                Stat: 'Heal',
                Value: '10',
                Stack: 'Linear',
                Add: '+10'
              }
            ]
          },
          {
            itemName: 'Fuel Cell',
            rarity: 'Uncommon',
            Quote: 'Hold an additional equipment charge. Reduce equipment cooldown.',
            description: 'Hold an {{Color|u|additional equipment charge}} {{Stack|(+1 per stack)}}. {{Color|u|Reduce equipment cooldown}} by {{Color|u|15%}} {{Stack|(+15% per stack)}}.',
            Category: 'Utility,OnKillEffect,EquipmentRelated',
            Unlock: 'Experimenting',
            ID: 30,
            Stats: [
              {
                Stat: 'Charges',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }, {
                Stat: 'Cooldown',
                Value: '15%',
                Stack: 'Exponential',
                Add: '+15%'
              }
            ]
          },
          {
            itemName: 'Infusion',
            rarity: 'Uncommon',
            Quote: 'Killing an enemy permanently increases your health, up to 100.',
            description: 'Killing an enemy increases your {{Color|h|health permanently}} by {{Color|h|1}} {{Stack|(+1 per stack)}}, up to a {{Color|h|maximum}} of {{Color|h|100 {{Stack|(+100 per stack)}} health}}.',
            Category: 'Utility,Healing,OnKillEffect',
            Unlock: 'Slaughter',
            ID: 33,
            Stats: [
              {
                Stat: 'Health Increase',
                Value: '100',
                Stack: 'Linear',
                Add: '+100'
              }
            ]
          },
          {
            itemName: 'Unstable Tesla Coil',
            rarity: 'Legendary',
            Quote: 'Shock all nearby enemies every 10 seconds.',
            description: 'Fire out {{Color|d|lightning}} that hits {{Color|d|3}} {{Stack|(+2 per stack)}} enemies for {{Color|d|200%}} base damage every {{Color|d|0.5s}}. The Tesla Coil switches off every {{Color|d|10 seconds}}.',
            Category: 'Damage',
            Unlock: 'Macho',
            ID: 32,
            Stats: [
              {
                Stat: 'Targets',
                Value: '3',
                Stack: 'Linear',
                Add: '+2'
              }
            ]
          },
          {
            itemName: 'Gasoline',
            rarity: 'Common',
            Quote: 'Killing enemies sets nearby enemies on fire.',
            description: 'Killing an enemy {{Color|d|ignites}} all enemies within {{Color|d|12m}} {{Stack|(+4m per stack)}}. Enemies {{Color|d|burn}} for {{Color|d|150%}} {{Stack|(+75% per stack)}} base damage.',
            Category: 'Damage,OnKillEffect',
            ID: 39,
            Stats: [
              {
                Stat: 'Damage',
                Value: '150%',
                Stack: 'Linear',
                Add: '+75%'
              }, {
                Stat: 'Radius',
                Value: '12m',
                Stack: 'Linear',
                Add: '+4m'
              }
            ]
          },
          {
            itemName: 'BoostDamage',
            rarity: 'NoTier',
            Category: 'Hidden,Damage',
            ID: 48,
            Stats: [
                {
                Stat: 'Damage Multiplier',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%'
              }
            ]
          },
          {
            itemName: 'BoostHP',
            rarity: 'NoTier',
            Category: 'Hidden,Utility',
            Stats: [
                {
                Stat: 'Health Multiplier',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%'
              }
            ]
          },
          {
            itemName: 'Sentient Meat Hook',
            rarity: 'Legendary',
            Quote: 'Chance to hook all nearby enemies.',
            description: '{{Color|d|20%}} {{Stack|(+20% per stack)}} chance on hit to {{Color|d|fire homing hooks}} at up to {{Color|d|10}} {{Stack|(+5 per stack)}} enemies for {{Color|d|100%}} TOTAL damage.',
            Category: 'Damage',
            Unlock: 'Deja Vu?',
            ID: 38,
            Stats: [
              {
                Stat: 'Chance',
                Value: '20%',
                Stack: 'Hyperbolic',
                Add: '+20%'
              }, {
                Stat: 'Targets',
                Value: '10',
                Stack: 'Linear',
                Add: '+5'
              }
            ]
          },
          {
            itemName: 'Bundle of Fireworks',
            rarity: 'Common',
            Quote: 'Activating an interactable launches fireworks at nearby enemies.',
            description: 'Activating an interactable {{Color|d|launches 8 {{Stack|(+4 per stack)}} fireworks}} that deal {{Color|d|300%}} base damage.',
            Category: 'Damage,AIBlacklist',
            Unlock: '...Maybe One More',
            ID: 42,
            Stats: [
              {
                Stat: 'Fireworks',
                Value: '8',
                Stack: 'Linear',
                Add: '+4'
              }
            ]
          },
          {
            itemName: 'Bandolier',
            rarity: 'Uncommon',
            Quote: 'Chance on kill to drop an ammo pack that resets all skill cooldowns.',
            description: '{{Color|u|18%}} {{Stack|(+10% per stack)}} chance on kill to drop an ammo pack that {{Color|u|resets all skill cooldowns}}.',
            Category: 'Utility,OnKillEffect',
            ID: 37,
            Stats: [
              {
                Stat: 'Chance',
                Value: '18%',
                Stack: 'Special',
                Add: '+10%'
              }
            ]
          },
          {
            itemName: 'Stun Grenade',
            rarity: 'Common',
            Quote: 'Chance to stun on hit.',
            description: '{{Color|u|5%}} {{Stack|(+5% on stack)}} chance on hit to {{Color|u|stun}} enemies for {{Color|u|2 seconds}}.',
            Category: 'Utility,AIBlacklist',
            ID: 41,
            Stats: [
              {
                Stat: 'Chance',
                Value: '5%',
                Stack: 'Hyperbolic',
                Add: '+5%'
              }
            ]
          },
          {
            itemName: 'Shaped Glass',
            rarity: 'Lunar',
            Quote: 'Double your damage... {{Color|#FF7F7F|BUT halve your health}}.',
            description: 'Increase base damage by {{Color|d|100%}} {{Stack|(+100% per stack)}}. {{Color|h|Reduce maximum health by 50%}} {{Stack|(+50% per stack)}}.',
            Category: 'Damage',
            ID: 43,
            Stats: [
              {
                Stat: 'Damage',
                Value: '100%',
                Stack: 'Exponential',
                Add: '+100%'
              }, {
                Stat: 'Health Reduction',
                Value: '50%',
                Stack: 'Exponential',
                Add: '-50%'
              }
            ]
          },
          {
            itemName: 'Brittle Crown',
            rarity: 'Lunar',
            Quote: 'Gain gold on hit... {{Color|#FF7F7F|BUT lose gold on getting hit}}.',
            description: '{{Color|u|30% chance on hit}} to gain {{Color|u|2 {{Stack|(+2 per stack)}} gold}}. {{Color|u|Scales over time.}}\r\n\r\n{{Color|hp|Lose gold}} on taking damage equal to {{Color|hp|100%}} {{Stack|(+100% per stack)}} of the {{Color|hp|maximum health percentage you lost}}.',
            Category: 'Utility',
            ID: 44,
            Stats: [
              {
                Stat: 'Chance',
                Value: '2',
                Stack: 'Linear',
                Add: '+2'
              }
            ]
          },
          {
            itemName: 'Transcendence',
            rarity: 'Lunar',
            Quote: 'Convert all your health into shield. Increase maximum health.',
            description: '{{Color|h|Convert}} all but {{Color|h|1 health}} into {{Color|h|regenerating shields}}. {{Color|h|Gain 50% {{Stack|(+25% per stack)}} maximum health}}.',
            Category: 'Utility',
            ID: 49,
            Stats: [
              {
                Stat: 'Maximum Health',
                Value: '50%',
                Stack: 'Linear',
                Add: '+25%'
              }
            ]
          },
          {
            itemName: 'Alien Head',
            rarity: 'Legendary',
            Quote: 'Reduces cooldowns for your skills.',
            description: '{{Color|u|Reduce skill cooldowns}} by {{Color|u|25%}} {{Stack|(+25% per stack)}}.',
            Category: 'Utility',
            ID: 50,
            Stats: [
              {
                Stat: 'Cooldown',
                Value: '25%',
                Stack: 'Exponential',
                Add: '+25%'
              }
            ]
          },
          {
            itemName: 'Soulbound Catalyst',
            rarity: 'Legendary',
            Quote: 'Kills reduce equipment cooldown.',
            description: '{{Color|d|Kills reduce}} {{Color|u|equipment cooldown}} by {{Color|u|4s}} {{Stack|(+2s per stack)}}.',
            Category: 'Utility,OnKillEffect,EquipmentRelated',
            Unlock: 'Newtist',
            ID: 51,
            Stats: [
              {
                Stat: 'Cooldown',
                Value: '4s',
                Stack: 'Linear',
                Add: '+2s'
              }
            ]
          },
          {
            itemName: 'Titanic Knurl',
            rarity: 'Boss',
            Boss: 'Stone Titan',
            Quote: 'Boosts health and regeneration.',
            description: '{{Color|h|Increase maximum health}} by {{Color|h|40}} {{Stack|(+40 per stack)}} and {{Color|h|base health regeneration}} by {{Color|h|+1.6 hp/s}} {{Stack|(+1.6 hp/s per stack)}}.',
            Category: 'Utility,Healing',
            ID: 52,
            Stats: [
              {
                Stat: 'Maximum Health',
                Value: '40',
                Stack: 'Linear',
                Add: '+40'
              }, {
                Stat: 'Health Regen',
                Value: '1.6',
                Stack: 'Linear',
                Add: '+1.6'
              }
            ]
          },
          {
            itemName: 'Queen\'s Gland',
            rarity: 'Boss',
            Boss: 'Beetle Queen',
            Quote: 'Recruit a Beetle Guard.',
            description: 'Every 30 seconds, {{Color|u|summon a Beetle Guard}} with bonus {{Color|d|300%}} damage and {{Color|h|100% health}}. Can have up to {{Color|u|1}} {{Stack|(+1 per stack)}} Guards at a time.',
            Category: 'Utility',
            ID: 53,
            Stats: [
              {
                Stat: 'Beetle Guard',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'BurnNearby',
            rarity: 'NoTier',
            Category: 'Abandoned',
            ID: 54
          },
          {
            itemName: 'CritHeal',
            rarity: 'NoTier',
            Category: 'Abandoned,Healing',
            ID: 55,
            Stats: [
              {
                Stat: 'Critical Chance',
                Value: '5%',
                Stack: 'None',
                Add: '+0%'
              }
            ]
          },
          {
            itemName: 'CrippleWardOnLevel',
            rarity: 'NoTier',
            Category: 'Abandoned,Utility',
            ID: 56,
            Stats: [
              {
                Stat: 'Radius',
                Value: '16m',
                Stack: 'Linear',
                Add: '+8m'
              }
            ]
          },
          {
            itemName: 'Energy Drink',
            rarity: 'Common',
            Quote: 'Sprint faster.',
            description: '{{Color|u|Sprint speed}} is improved by {{Color|u|30%}} {{Stack|(+20% per stack)}}.',
            Category: 'Utility,SprintRelated',
            ID: 57,
            Stats: [
              {
                Stat: 'Sprint Speed',
                Value: '30%',
                Stack: 'Linear',
                Add: '+20%'
              }
            ]
          },
          {
            itemName: 'Backup Magazine',
            rarity: 'Common',
            Quote: 'Add an extra charge of your Secondary skill.',
            description: 'Add {{Color|u|+1}} {{Stack|(+1 per stack)}} charge of your {{Color|u|Secondary skill}}.',
            Category: 'Utility',
            Unlock: 'Flawless',
            ID: 58,
            Stats: [
              {
                Stat: 'Charge',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'Sticky Bomb',
            rarity: 'Common',
            Quote: 'Chance on hit to attach a bomb to enemies.',
            description: '{{Color|d|5%}} {{Stack|(+5% per stack)}} chance on hit to attach a {{Color|d|bomb}} to an enemy, detonating for {{Color|d|180%}} TOTAL damage.',
            Category: 'Damage',
            ID: 59,
            Stats: [
              {
                Stat: 'Chance',
                Value: '5%',
                Stack: 'Linear',
                Add: '+5%'
              }
            ]
          },
          {
            itemName: 'Rusted Key',
            rarity: 'Common',
            Quote: 'Gain access to a Rusty Lockbox that contains treasure.',
            description: 'A {{Color|u|hidden cache}} containing an item will appear in a random location {{Color|u|on each stage}}. {{Stack|(Increases rarity of the item per stack)}}.',
            Category: 'Utility,AIBlacklist',
            Unlock: 'Keyed Up',
            ID: 60,
            Stats: [
              {
                Stat: 'Chance',
                Value: '-',
                Stack: 'Special',
                Add: '-'
              }
            ]
          },
          {
            itemName: 'Armor-Piercing Rounds',
            rarity: 'Common',
            Quote: 'Deal extra damage to bosses.',
            description: 'Deal an additional {{Color|d|20%}} damage {{Stack|(+20% per stack)}} to bosses.',
            Category: 'Damage,AIBlacklist',
            Unlock: 'Advancement',
            ID: 61,
            Stats: [
              {
                Stat: 'Damage',
                Value: '20%',
                Stack: 'Linear',
                Add: '+20%'
              }
            ]
          },
          {
            itemName: 'Rose Buckler',
            rarity: 'Uncommon',
            Quote: 'Reduce incoming damage while sprinting.',
            description: '{{Color|h|Increase armor}} by {{Color|h|30}} {{Stack|(+30 per stack)}} {{Color|u|while sprinting}}.',
            Category: 'Utility,SprintRelated',
            ID: 62,
            Stats: [
              {
                Stat: 'Armor',
                Value: '30',
                Stack: 'Linear',
                Add: '+30'
              }
            ]
          },
          {
            itemName: 'Runald\'s Band',
            rarity: 'Uncommon',
            Quote: 'Chance on hit to strike an enemy with a runic ice blast.',
            description: '{{Color|d|8%}} chance on hit to strike an enemy with a {{Color|d|runic ice blast}}, {{Color|u|slowing}} them by {{Color|u|80%}} and dealing {{Color|d|250%}} {{Stack|(+125% per stack)}} TOTAL damage.',
            Category: 'Damage',
            Unlock: 'Death Do Us Part',
            ID: 63,
            Stats: [
              {
                Stat: 'Damage',
                Value: '250%',
                Stack: 'Linear',
                Add: '+125%'
              }
            ]
          },
          {
            itemName: 'Kjaro\'s Band',
            rarity: 'Uncommon',
            Quote: 'Chance on hit to strike an enemy with a runic flame tornado.',
            description: '{{Color|d|8%}} chance on hit to strike an enemy with a {{Color|d|runic flame tornado}}, dealing {{Color|d|500%}} {{Stack|(+250% per stack)}} TOTAL damage.',
            Category: 'Damage',
            Unlock: 'Death Do Us Part',
            ID: 64,
            Stats: [
              {
                Stat: 'Damage',
                Value: '500%',
                Stack: 'Linear',
                Add: '+250%'
              }
            ]
          },
          {
            itemName: 'Chronobauble',
            rarity: 'Uncommon',
            Quote: 'Slow enemies on hit.',
            description: '{{Color|u|Slow}} enemies on hit for {{Color|u|-60% movement speed}} for {{Color|u|2s}} {{Stack|(+2s per stack)}}.',
            Category: 'Utility',
            ID: 65,
            Stats: [
              {
                Stat: 'Slow Duration',
                Value: '2s',
                Stack: 'Linear',
                Add: '+2s'
              }
            ]
          },
          {
            itemName: 'Dio\'s Best Friend',
            rarity: 'Legendary',
            Quote: 'Cheat death. Consumed on use.',
            description: '{{Color|u|Upon death}}, this item will be {{Color|u|consumed}} and you will {{Color|h|return to life}} with {{Color|h|3 seconds of invulnerability}}.',
            Category: 'Utility',
            Unlock: 'The Lone Survivor',
            ID: 66,
            Stats: [
              {
                Stat: 'Uses',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'Hardlight Afterburner',
            rarity: 'Legendary',
            Quote: 'Add 2 extra charges of your Utility skill. Reduce Utility skill cooldown.',
            description: 'Add {{Color|u|+2}} {{Stack|(+2 per stack)}} charges of your {{Color|u|Utility skill}}. {{Color|u|Reduces Utility skill cooldown}} by {{Color|u|33%}}.',
            Category: 'Utility',
            ID: 68,
            Stats: [
              {
                Stat: 'Charges',
                Value: '2',
                Stack: 'Linear',
                Add: '+2'
              }
            ]
          },
          {
            itemName: 'Wake of Vultures',
            rarity: 'Legendary',
            Quote: 'Temporarily steal the power of slain elites.',
            description: 'Gain the {{Color|d|power}} of any killed elite monster for {{Color|d|8s}} {{Stack|(+5s per stack)}}.',
            Category: 'Damage,Utility,AIBlacklist,OnKillEffect',
            ID: 69,
            Stats: [
              {
                Stat: 'Duration',
                Value: '8s',
                Stack: 'Linear',
                Add: '+5s'
              }
            ]
          },
          {
            itemName: 'Brainstalks',
            rarity: 'Legendary',
            Quote: 'Skills have NO cooldowns for a short period after killing an elite.',
            description: 'Upon killing an elite monster, {{Color|d|enter a frenzy}} for {{Color|d|4s}} {{Stack|(+4s per stack)}} where {{Color|u|skills have no cooldowns}}.',
            Category: 'Utility,AIBlacklist,OnKillEffect',
            Unlock: 'Deicide',
            ID: 70,
            Stats: [
              {
                Stat: 'Duration',
                Value: '4s',
                Stack: 'Linear',
                Add: '+4s'
              }
            ]
          },
          {
            itemName: 'Rejuvenation Rack',
            rarity: 'Legendary',
            Quote: 'Double the strength of healing.',
            description: '{{Color|h|Heal +100%}} {{Stack|(+100% per stack)}} more.',
            Category: 'Healing',
            Unlock: 'Naturopath',
            ID: 75,
            Stats: [
              {
                Stat: 'Heal',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%'
              }
            ]
          },
          {
            itemName: 'Corpsebloom',
            rarity: 'Lunar',
            //Quote: 'Double your healing... {{Color|#FF7F7F|BUT it's applied over time}}.',
            description: '{{Color|h|Heal +100%}} {{Stack|(+100% per stack)}} more. {{Color|h|All healing is applied over time}}. Can {{Color|h|heal}} for a {{Color|h|maximum}} of {{Color|h|10%}} {{Stack|(reduced by 50% per stack)}} of your {{Color|h|health per second}}.',
            Category: 'Healing',
            ID: 71,
            Stats: [
              {
                Stat: 'Heal',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%'
              }, {
                Stat: 'Maximum Heal',
                Value: '10%',
                Stack: 'Exponential',
                Add: '-50%'
              }
            ]
          },
          {
            itemName: 'Gesture of the Drowned',
            rarity: 'Lunar',
            Quote: 'Dramatically reduce Equipment cooldown... {{Color|#FF7F7F|BUT it automatically activates}}.',
            description: '{{Color|u|Reduce Equipment cooldown}} by {{Color|u|50%}} {{Stack|(+15% per stack)}}. Forces your Equipment to {{Color|u|activate}} whenever it is off {{Color|u|cooldown}}.',
            Category: 'Utility,EquipmentRelated',
            Unlock: 'The Demons And The Crabs',
            ID: 74,
            Stats: [
              {
                Stat: 'Cooldown',
                Value: '-50%',
                Stack: 'Exponential',
                Add: '-15%'
              }
            ]
          },
          {
            itemName: 'Old Guillotine',
            rarity: 'Uncommon',
            Quote: 'Instantly kill low health Elite monsters.',
            description: 'Instantly kill Elite monsters below {{Color|hp|20% {{Stack|(+20% per stack)}} health}}.',
            Category: 'Damage,AIBlacklist',
            Unlock: 'Cut Down',
            ID: 78,
            Stats: [
              {
                Stat: 'Threshold',
                Value: '20%',
                Stack: 'Hyperbolic',
                Add: '+20%'
              }
            ]
          },
          {
            itemName: 'War Horn',
            rarity: 'Uncommon',
            Quote: 'Activating your Equipment gives you a burst of attack speed.',
            description: 'Activating your Equipment gives you {{Color|d|+70% attack speed}} for {{Color|d|8s}} {{Stack|(+4s per stack)}}.',
            Category: 'Damage,EquipmentRelated',
            Unlock: 'Warmonger',
            ID: 79,
            Stats: [
              {
                Stat: 'Duration',
                Value: '8s',
                Stack: 'Linear',
                Add: '+4s'
              }
            ]
          },
          {
            itemName: 'Aegis',
            rarity: 'Legendary',
            Quote: 'Healing past full grants you a temporary barrier.',
            description: 'Healing past full grants you a {{Color|h|temporary barrier}} for {{Color|h|50%}} {{Stack|(+50% per stack)}} of the amount you {{Color|h|healed}}.',
            Category: 'Utility,Healing',
            ID: 80,
            Stats: [
              {
                Stat: 'Healing Converted',
                Value: '50%',
                Stack: 'Linear',
                Add: '+50%'
              }
            ]
          },
          {
            itemName: 'DrizzlePlayerHelper',
            rarity: 'NoTier',
            Category: 'Hidden',
            ID: 77,
            Stats: [
              {
                Stat: 'Armor',
                Value:  '70',
                Stack: 'Linear',
                Add: '+70'
              }, {
                Stat: 'Regen Multiplier',
                Value: '+0.5',
                Stack: 'None',
                Add: '0'
              }
            ]
          },
          {
            itemName: 'Ghost',
            rarity: 'NoTier',
            Category: 'Hidden',
            ID: 72
          },
          {
            itemName: 'HealthDecay',
            rarity: 'NoTier',
            Category: 'Hidden',
            ID: 73,
            Stats: [
              {
                Stat: 'Health Regen',
                Value: '- Health/Stacksize',
                Stack: 'Special',
                Add: '-'
              }
            ]
          },
          {
            itemName: 'MageAttunement',
            rarity: 'NoTier',
            Category: 'Abandoned',
            ID: 45
          },
          {
            itemName: 'Tonic Affliction',
            rarity: 'NoTier',
            Quote: 'Reduce ALL stats when not under the effects of Spinel Tonic.',
            Category: 'Cleansable',
            ID: 81,
            Stats: [
              {
                Stat: 'Most',
                Value: '5%',
                Stack: 'Exponential',
                Add: '-5%'
              }
            ]
          },
          {
            itemName: 'Halcyon Seed',
            rarity: 'Boss',
            Boss: 'Aurelionite',
            Quote: 'Summon Aurelionite during the Teleporter event.',
            description: 'Summon {{Color|d|Aurelionite}} during the teleporter event. It has {{Color|d|100% {{Stack|(+50% per stack)}} damage}} and {{Color|h|100% {{Stack|(+100% per stack)}} health}}.',
            Category: 'Utility,WorldUnique',
            ID: 82,
            Stats: [
              {
                Stat: 'Health',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%'
              }, {
                Stat: 'Damage',
                Value: '100%',
                Stack: 'Linear',
                Add: '+50%'
              }
            ]
          },
          {
            itemName: 'Little Disciple',
            rarity: 'Boss',
            Boss: 'Grovetender',
            Quote: 'Fire tracking wisps while sprinting.',
            description: 'Fire a {{Color|d|tracking wisp}} for {{Color|d|100% {{Stack|(+100% per stack)}} damage}}. Fires every 0.5 seconds while sprinting.',
            Category: 'Damage,SprintRelated',
            ID: 83,
            Stats: [
              {
                Stat: 'Damage',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%'
              }
            ]
          },
          {
            itemName: 'Topaz Brooch',
            rarity: 'Common',
            Quote: 'Gain a temporary barrier on kill.',
            description: 'Gain a {{Color|h|temporary barrier}} on kill for {{Color|h|15 health}} {{Stack|(+15 per stack)}}.',
            Category: 'Utility,Healing,OnKillEffect',
            ID: 84,
            Stats: [
              {
                Stat: 'Shield',
                Value: '15',
                Stack: 'Linear',
                Add: '+15'
              }
            ]
          },
          {
            itemName: 'Shattering Justice',
            rarity: 'Legendary',
            Quote: 'Reduce the armor of enemies after repeatedly striking them.',
            description: 'After hitting an enemy {{Color|d|5}} times, reduce their {{Color|d|armor}} by {{Color|d|60}} for {{Color|d|8}} {{Stack|(+8 per stack)}} seconds.',
            Category: 'Damage',
            ID: 85,
            Stats: [
              {
                Stat: 'Duration',
                Value: '8s',
                Stack: 'Linear',
                Add: '+8s'
              }
            ]
          },
          {
            itemName: 'Lepton Daisy',
            rarity: 'Uncommon',
            Quote: 'Periodically release a healing nova during the Teleporter event.',
            description: 'Release a {{Color|h|healing nova}} during the Teleporter event, {{Color|h|healing}} all nearby allies for {{Color|h|50%}} of their maximum health. Occurs {{Color|h|1}} {{Stack|(+1 per stack)}} times.',
            Category: 'Healing,AIBlacklist',
            ID: 86,
            Stats: [
              {
                Stat: 'Healing Nova',
                Value: '1',
                Stack: 'Linear',
                Add: '+1'
              }
            ]
          },
          {
            itemName: 'Focus Crystal',
            rarity: 'Common',
            Quote: 'Deal bonus damage to nearby enemies.',
            description: 'Increase damage to enemies within {{Color|d|13m}} by {{Color|d|15%}} {{Stack|(+15% per stack)}}.',
            Category: 'Damage',
            ID: 87,
            Stats: [
              {
                Stat: 'Damage',
                Value: '15%',
                Stack: 'Linear',
                Add: '+15%'
              }
            ]
          },
          {
            itemName: 'Strides of Heresy',
            rarity: 'Lunar',
            //Quote: 'Replace your Utility Skill with 'Shadowfade'.',
            description: '{{Color|u|Replace your Utility Skill}} with {{Color|u|Shadowfade}}.\r\n\r\nFade away, becoming {{Color|u|intangible}} and gaining {{Color|u|+30% movement speed}}. {{Color|h|Heal}} for {{Color|h|25% {{Stack|(+25% per stack)}} of your maximum health}}. Lasts 3 {{Stack|(+3 per stack)}} seconds.',
            Category: 'Utility,Healing',
            Unlock: 'Blockade Breaker',
            ID: 88,
            Stats: [
              {
                Stat: 'Heal',
                Value: '25%',
                Stack: 'Linear',
                Add: '+25%'
              }, {
                Stat: 'Duration',
                Value: '3s',
                Stack: 'Linear',
                Add: '+3s'
              }
            ]
          },
          {
            itemName: 'MonsoonPlayerHelper',
            rarity: 'NoTier',
            Category: 'Hidden',
            ID: 89,
            Stats: [
              {
                Stat: 'Regen Multiplier',
                Value: '-0.4',
                Stack: 'None',
                Add: '0'
              }
            ]
          },
          {
            itemName: 'Razorwire',
            rarity: 'Uncommon',
            Quote: 'Retaliate in a burst of razors on taking damage.',
            description: 'Getting hit causes you to explode in a burst of razors, dealing {{Color|d|160% damage}}. Hits up to {{Color|d|5}} {{Stack|(+2 per stack)}} targets in a {{Color|d|25m}} {{Stack|(+10m per stack)}} radius',
            Category: 'Damage,AIBlacklist',
            ID: 90,
            Stats: [
              {
                Stat: 'Targets',
                Value: '5',
                Stack: 'Linear',
                Add: '+2',
              }, {
                Stat: 'Radius',
                Value: '25m',
                Stack: 'Linear',
                Add: '+10m',
              }
            ]
          },
          {
            itemName: 'Fresh Meat',
            rarity: 'Common',
            Quote: 'Regenerate health after killing an enemy.',
            description: 'Increases {{Color|h|base health regeneration}} by {{Color|h|+2 hp/s}} for {{Color|u|3s}} {{Stack|(+3s per stack)}} after killing an enemy.',
            Category: 'Healing,OnKillEffect',
            ID: 91,
            Stats: [
              {
                Stat: 'Duration',
                Value: '3s',
                Stack: 'Linear',
                Add: '+3s',
              }
            ]
          },
          {
            itemName: 'Pearl',
            rarity: 'Boss',
            Boss: 'Cleansing Pool',
            Quote: 'Increase your maximum health.',
            description: 'Increases {{Color|h|maximum health}} by {{Color|h|10%}} {{Stack|(+10% per stack)}}.',
            Category: 'Utility,WorldUnique',
            ID: 92,
            Stats: [
              {
                Stat: 'Health',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }
            ]
          },
          {
            itemName: 'Irradiant Pearl',
            rarity: 'Boss',
            Boss: 'Cleansing Pool',
            Quote: 'Increase ALL of your stats.',
            description: 'Increases {{Color|u|ALL stats}} by {{Color|u|10%}} {{Stack|(+10% per stack)}}.',
            Category: 'Damage,Healing,Utility,WorldUnique',
            ID: 93,
            Stats: [
              {
                Stat: 'Health',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }, {
                Stat: 'Regen multiplier',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }, {
                Stat: 'Movespeed',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }, {
                Stat: 'Damage',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }, {
                Stat: 'Attack Speed',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }, {
                Stat: 'Crit Chance',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }, {
                Stat: 'Armor Multiplier',
                Value: '10%',
                Stack: 'Linear',
                Add: '+10%',
              }
            ]
          },
          {
            itemName: 'Ghor\'s Tome',
            rarity: 'Uncommon',
            Quote: 'Chance on kill to drop a treasure.',
            description: '{{Color|u|4%}} {{Stack|(+4% on stack)}} chance on kill to drop a treasure worth {{Color|u|$25}}. {{Color|u|Scales over time.}}',
            Category: 'Utility,OnKillEffect',
            ID: 94,
            Stats: [
              {
                Stat: 'Drop Chance',
                Value: '4%',
                Stack: 'Linear',
                Add: '+4%',
              }
            ]
          },
          {
            itemName: 'Resonance Disc',
            rarity: 'Legendary',
            Quote: 'Obtain a Resonance Disc charged by killing enemies. Fires automatically when fully charged.',
            description: 'Killing enemies charges the Resonance Disc. The disc launches itself toward a target for {{Color|d|300%}} base damage {{Stack|(+300% per stack)}}, piercing all enemies it doesn\'t kill, and then explodes for {{Color|d|1000%}} base damage {{Stack|(+1000% per stack)}}. Returns to the user, striking all enemies along the way for {{Color|d|300%}} base damage {{Stack|(+300% per stack)}}.',
            Category: 'Damage,OnKillEffect',
            ID: 95,
            Stats: [
              {
                Stat: 'Damage',
                Value: '300%',
                Stack: 'Linear',
                Add: '+300%',
              }, {
                Stat: 'Explosion',
                Value: '1000%',
                Stack: 'Linear',
                Add: '+1000%',
              }
            ]
          },
          {
            itemName: 'Visions of Heresy',
            rarity: 'Lunar',
            //Quote: 'Replace your Primary Skill with 'Hungering Gaze'.',
            description: '{{Color|u|Replace your Primary Skill}} with {{Color|u|Hungering Gaze}}.\r\n\r\nFire a flurry of {{Color|u|tracking shards}} that detonate after a delay, dealing {{Color|d|120%}} base damage. Hold up to 12 charges {{Stack|(+12 per stack)}} that reload after 2 seconds {{Stack|(+2 per stack)}}.',
            Category: 'Damage',
            Unlock: 'Blockade Breaker',
            ID: 96,
            Stats: [
              {
                Stat: 'Charges',
                Value: '12',
                Stack: 'Linear',
                Add: '+12',
              }, {
                Stat: 'Reload',
                Value: '2s',
                Stack: 'Linear',
                Add: '+2s',
              }
            ]
          },
          {
            itemName: 'Genesis Loop',
            rarity: 'Boss',
            Boss: 'Wandering Vagrant',
            Quote: 'Fire an electric nova at low health.',
            description: 'Falling below {{Color|hp|25% health}} causes you to explode, dealing {{Color|d|6000% base damage}}. Recharges every {{Color|u|30 seconds}} {{Stack|(-50% per stack)}}.',
            Category: 'Damage',
            ID: 97,
            Stats: [
              {
                Stat: 'Recharge Speed',
                Value: '100%',
                Stack: 'Linear',
                Add: '+50%',
              }
            ]
          },
          {
            itemName: 'Beads of Fealty',
            rarity: 'Lunar',
            Quote: 'Seems to do nothing... {{Color|#FF7F7F|but...}}',
            description: 'Seems to do nothing... {{Color|#FF7F7F|but...}}',
            ID: 98
          },
          {
            itemName: 'Artifact Key',
            rarity: 'Boss',
            Boss: 'Bulwark\'s Ambry',
            Quote: 'A stone shard with immense power.',
            description: 'A stone shard with immense power.',
            Category: 'WorldUnique',
            ID: 101,
          },
          {
            itemName: 'Repulsion Armor Plate',
            rarity: 'Common',
            Quote: 'Receive flat damage reduction from all attacks.',
            description: 'Reduce all {{Color|d|incoming damage}} by {{Color|d|5{{Stack| (+5 per stack)}}}}. Cannot be reduced below {{Color|d|1}}.',
            Category: 'Utility',
            ID: 102,
            Stats: [
              {
                Stat: 'Damage Reduction',
                Value: '5',
                Stack: 'Linear',
                Add: '+5',
              }
            ]
          },
          {
            itemName: 'Squid Polyp',
            rarity: 'Uncommon',
            Quote: 'Activating an interactable summons a Squid Turret nearby.',
            description: 'Activating an interactable summons a {{Color|d|Squid Turret}} that attacks nearby enemies at {{Color|d|100% {{Stack|(+100% per stack)}} attack speed}}. Lasts {{Color|u|30}} seconds.',
            Category: 'Damage,AIBlacklist',
            Unlock: 'Automation Activation',
            ID: 103,
            Stats: [
              {
                Stat: 'Attack Speed',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%',
              }
            ]
          },
          {
            itemName: 'Death Mark',
            rarity: 'Uncommon',
            Quote: 'Enemies with 4 or more debuffs are marked for death, taking bonus damage.',
            description: 'Enemies with {{Color|d|4}} or more debuffs are {{Color|d|marked for death}}, increasing damage taken by {{Color|d|50%}} {{Stack|(+50% per stack)}} from all sources for {{Color|u|7}} seconds.',
            Category: 'Damage',
            ID: 104,
            Stats: [
              {
                Stat: 'Damage',
                Value: '50%',
                Stack: 'Linear',
                Add: '+50%',
              }
            ]
          },
          {
            itemName: 'Interstellar Desk Plant',
            rarity: 'Legendary',
            Quote: 'Plant a healing fruit on kill.',
            description: 'On kill, plant a {{Color|h|healing}} fruit seed that grows into a plant after {{Color|u|5}} seconds.\r\n\r\nThe plant {{Color|h|heals}} for {{Color|h|5%}} of {{Color|h|maximum health}} every second to all allies within {{Color|h|3m}} {{Stack|(+1.5m per stack)}}. Lasts {{Color|u|10}} seconds',
            Category: 'Healing',
            ID: 105,
            Stats: [
              {
                Stat: 'Radius',
                Value: '3m',
                Stack: 'Linear',
                Add: '+1.5m',
              }
            ]
          },
          {
            itemName: 'Ancestral Incubator',
            rarity: 'NoTier',
            Boss: 'Grandparent',
            Quote: 'Chance on kill to summon an Ancestral Pod.',
            description: '{{Color|d|7%}} chance {{Stack|(+1% per stack)}} on kill to {{Color|u|summon an Ancestral Pod}} that distracts enemies.\r\n\r\nOnce it fully grows, it will hatch into an allied {{Color|d|Parent}} with {{Color|h|100% health}} {{Stack|(+100% per stack)}}.',
            Category: 'Utility,OnKillEffect',
            ID: 106,
            Stats: [
              {
                Stat: 'Chance',
                Value: '7%',
                Stack: 'Linear',
                Add: '+1%',
              }, {
                Stat: 'Parent Health',
                Value: '100%',
                Stack: 'Linear',
                Add: '+100%',
              }
            ]
          },
          {
            itemName: 'Focused Convergence',
            rarity: 'Lunar',
            Quote: 'Increase the speed of Teleporter charging... {{Color|#FF7F7F|BUT reduce the size of the zone}}.',
            description: 'Teleporters charge {{Color|u|30% {{Stack|(+30% per stack)}} faster}}, but the size of the Teleporter zone is {{Color|hp|50%}} {{Stack|(-50% per stack)}} smaller. ',
            Category: 'Utility,AIBlacklist',
            Unlock: 'Never Back Down',
            ID: 107,
            Stats: [
              {
                Stat: 'Charge Speed',
                Value: '30%',
                Stack: 'Linear',
                Add: '+30%',
              }, {
                Stat: 'Teleporter Zone',
                Value: '50%',
                Stack: 'Hyperbolic',
                Add: '-50%',
              }
            ]
          }

    ]
}

