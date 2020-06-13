/* [
    {
      displayName: 'Brilliant Behemoth',
      description: 'All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Explosion Radius',
          value: '4m',
          stackType: 'Linear',
          stackValue: '+2.5m'
        }
      ]
    },
    {
      displayName: 'Ceremonial Dagger',
      description: 'Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Damage',
          value: '150%',
          stackType: 'Linear',
          stackValue: '+150%'
        }
      ]
    },
    {
      displayName: 'Frost Relic',
      description: 'Killing an enemy surrounds you with an ice storm that deals 600% damage per second. The storm grows with every kill, increasing its radius by 1m. Stacks up to 6m (+6m per stack).',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Ice Storm Radius',
          value: '6m',
          stackType: 'Linear',
          stackValue: '+6m'
        }
      ]
    },
    {
      displayName: 'Happiest Mask',
      description: 'Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Ghost Duration',
          value: '30s',
          stackType: 'Linear',
          stackValue: '+30s'
        }
      ]
    },
    {
      displayName: 'H3AD-5T v2',
      description: 'Increase jump height. Creates a 10m radius kinetic explosion on hitting the ground, dealing 2300% base damage that scales up with speed. Recharges in 10 (-50% per stack) seconds.',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Recharge Time',
          value: '10s',
          stackType: 'Exponential',
          stackValue: '-50%'
        }
      ]
    },
    {
      displayName: 'N\'kuhana\'s Opinion',
      description: 'Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.',
      rarity: 'Legendary',
      Unlock: 'Her Concepts',
      effects: [
        {
          effect: 'Damage',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+100%'
        }
      ]
    },
    {
      displayName: 'Unstable Tesla Coil',
      description: 'Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.',
      rarity: 'Legendary',
      Unlock: 'Macho',
      effects: [
        {
          effect: 'Targets',
          value: '3',
          stackType: 'Linear',
          stackValue: '+2'
        }
      ]
    },
    {
      displayName: 'BoostDamage',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Damage Multiplier',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        }
      ]
    },
    {
      displayName: 'BoostHP',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Health Multiplier',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        }
      ]
    },
    {
      displayName: 'Sentient Meat Hook',
      description: '20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.',
      rarity: 'Legendary',
      Unlock: 'Deja Vu?',
      effects: [
        {
          effect: 'Chance',
          value: '20%',
          stackType: 'Hyperbolic',
          stackValue: '+20%'
        },
        {
          effect: 'Targets',
          value: '10',
          stackType: 'Linear',
          stackValue: '+5'
        }
      ]
    },
    {
      displayName: 'Shaped Glass',
      description: 'Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).',
      rarity: 'Lunar',
      effects: [
        {
          effect: 'Damage',
          value: '100%',
          stackType: 'Exponential',
          stackValue: '+100%'
        },
        {
          effect: 'Health Reduction',
          value: '50%',
          stackType: 'Exponential',
          stackValue: '-50%'
        }
      ]
    },
    {
      displayName: 'Brittle Crown',
      description: '30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.',
      rarity: 'Lunar',
      effects: [
        {
          effect: 'Chance',
          value: '2',
          stackType: 'Linear',
          stackValue: '+2'
        }
      ]
    },
    {
      displayName: 'Transcendence',
      description: 'Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.',
      rarity: 'Lunar',
      effects: [
        {
          effect: 'Maximum Health',
          value: '50%',
          stackType: 'Linear',
          stackValue: '+25%'
        }
      ]
    },
    {
      displayName: 'Soulbound Catalyst',
      description: 'Kills reduce equipment cooldown by 4s (+2s per stack).',
      rarity: 'Legendary',
      Unlock: 'Newtist',
      effects: [
        {
          effect: 'Cooldown',
          value: '4s',
          stackType: 'Linear',
          stackValue: '+2s'
        }
      ]
    },
    {
      displayName: 'Titanic Knurl',
      rarity: 'Boss',
      description: 'Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).',
      Boss: 'Stone Titan',
      effects: [
        {
          effect: 'Maximum Health',
          value: '40',
          stackType: 'Linear',
          stackValue: '+40'
        },
        {
          effect: 'Health Regen',
          value: '1.6',
          stackType: 'Linear',
          stackValue: '+1.6'
        }
      ]
    },
    {
      displayName: 'Queen\'s Gland',
      rarity: 'Boss',
      description: 'Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.',
      Boss: 'Beetle Queen',
      effects: [
        {
          effect: 'Beetle Guard',
          value: '1',
          stackType: 'Linear',
          stackValue: '+1'
        }
      ]
    },
    {
      displayName: 'BurnNearby',
      rarity: 'NoTier'
    },
    {
      displayName: 'CritHeal',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Critical Chance',
          value: '5%',
          stackType: 'None',
          stackValue: '+0%'
        }
      ]
    },
    {
      displayName: 'CrippleWardOnLevel',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Radius',
          value: '16m',
          stackType: 'Linear',
          stackValue: '+8m'
        }
      ]
    },
    {
      displayName: 'Dio\'s Best Friend',
      description: 'Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.',
      rarity: 'Legendary',
      Unlock: 'The Lone Survivor',
      effects: [
        {
          effect: 'Uses',
          value: '1',
          stackType: 'Linear',
          stackValue: '+1'
        }
      ]
    },
    {
      displayName: 'Hardlight Afterburner',
      description: 'Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Charges',
          value: '2',
          stackType: 'Linear',
          stackValue: '+2'
        }
      ]
    },
    {
      displayName: 'Wake of Vultures',
      description: 'Gain the power of any killed elite monster for 8s (+5s per stack).',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Duration',
          value: '8s',
          stackType: 'Linear',
          stackValue: '+5s'
        }
      ]
    },
    {
      displayName: 'Brainstalks',
      description: 'Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have no cooldowns.',
      rarity: 'Legendary',
      Unlock: 'Deicide',
      effects: [
        {
          effect: 'Duration',
          value: '4s',
          stackType: 'Linear',
          stackValue: '+4s'
        }
      ]
    },
    {
      displayName: 'Rejuvenation Rack',
      description: 'Heal +100% (+100% per stack) more.',
      rarity: 'Legendary',
      Unlock: 'Naturopath',
      effects: [
        {
          effect: 'Heal',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+100%'
        }
      ]
    },
    {
      displayName: 'Corpsebloom',
      description: 'Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (reduced by 50% per stack) of your health per second.',
      rarity: 'Lunar',
      effects: [
        {
          effect: 'Heal',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+100%'
        },
        {
          effect: 'Maximum Heal',
          value: '10%',
          stackType: 'Exponential',
          stackValue: '-50%'
        }
      ]
    },
    {
      displayName: 'Gesture of the Drowned',
      description: 'Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.',
      rarity: 'Lunar',
      Unlock: 'The Demons And The Crabs',
      effects: [
        {
          effect: 'Cooldown',
          value: '-50%',
          stackType: 'Exponential',
          stackValue: '-15%'
        }
      ]
    },
    {
      displayName: 'DrizzlePlayerHelper',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Armor',
          value: '70',
          stackType: 'Linear',
          stackValue: '+70'
        },
        {
          effect: 'Regen Multiplier',
          value: '+0.5',
          stackType: 'None',
          stackValue: '0'
        }
      ]
    },
    {
      displayName: 'Ghost',
      rarity: 'NoTier'
    },
    {
      displayName: 'HealthDecay',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Health Regen',
          value: '- Health/Stacksize',
          stackType: 'Special',
          stackValue: '-'
        }
      ]
    },
    {
      displayName: 'MageAttunement',
      rarity: 'NoTier'
    },
    {
      displayName: 'Tonic Affliction',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Most',
          value: '5%',
          stackType: 'Exponential',
          stackValue: '-5%'
        }
      ]
    },
    {
      displayName: 'Halcyon Seed',
      rarity: 'Boss',
      description: 'Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.',
      Boss: 'Aurelionite',
      effects: [
        {
          effect: 'Health',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+100%'
        },
        {
          effect: 'Damage',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+50%'
        }
      ]
    },
    {
      displayName: 'Little Disciple',
      rarity: 'Boss',
      description: 'Fire a tracking wisp for 100% (+100% per stack) damage. Fires every 0.5 seconds while sprinting.',
      Boss: 'Grovetender',
      effects: [
        {
          effect: 'Damage',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+100%'
        }
      ]
    },
    {
      displayName: 'Shattering Justice',
      description: 'After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Duration',
          value: '8s',
          stackType: 'Linear',
          stackValue: '+8s'
        }
      ]
    },
    {
      displayName: 'Strides of Heresy',
      description: 'Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 25% (+25% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.',
      rarity: 'Lunar',
      Unlock: 'Blockade Breaker',
      effects: [
        {
          effect: 'Heal',
          value: '25%',
          stackType: 'Linear',
          stackValue: '+25%'
        },
        {
          effect: 'Duration',
          value: '3s',
          stackType: 'Linear',
          stackValue: '+3s'
        }
      ]
    },
    {
      displayName: 'MonsoonPlayerHelper',
      rarity: 'NoTier',
      effects: [
        {
          effect: 'Regen Multiplier',
          value: '-0.4',
          stackType: 'None',
          stackValue: '0'
        }
      ]
    },
    {
      displayName: 'Pearl',
      rarity: 'Boss',
      description: 'Increases maximum health by 10% (+10% per stack).',
      Boss: 'Cleansing Pool',
      effects: [
        {
          effect: 'Health',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        }
      ]
    },
    {
      displayName: 'Irradiant Pearl',
      rarity: 'Boss',
      description: 'Increases ALL effects by 10% (+10% per stack).',
      Boss: 'Cleansing Pool',
      effects: [
        {
          effect: 'Health',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        },
        {
          effect: 'Regen multiplier',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        },
        {
          effect: 'Movespeed',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        },
        {
          effect: 'Damage',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        },
        {
          effect: 'Attack Speed',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        },
        {
          effect: 'Crit Chance',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        },
        {
          effect: 'Armor Multiplier',
          value: '10%',
          stackType: 'Linear',
          stackValue: '+10%'
        }
      ]
    },
    {
      displayName: 'Resonance Disc',
      description: 'Killing enemies charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn\'t kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Damage',
          value: '300%',
          stackType: 'Linear',
          stackValue: '+300%'
        },
        {
          effect: 'Explosion',
          value: '1000%',
          stackType: 'Linear',
          stackValue: '+1000%'
        }
      ]
    },
    {
      displayName: 'Visions of Heresy',
      description: 'Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).',
      rarity: 'Lunar',
      Unlock: 'Blockade Breaker',
      effects: [
        {
          effect: 'Charges',
          value: '12',
          stackType: 'Linear',
          stackValue: '+12'
        },
        {
          effect: 'Reload',
          value: '2s',
          stackType: 'Linear',
          stackValue: '+2s'
        }
      ]
    },
    {
      displayName: 'Genesis Loop',
      description: 'Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 seconds (-50% per stack).',
      rarity: 'Boss',
      Boss: 'Wandering Vagrant',
      effects: [
        {
          effect: 'Recharge Speed',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+50%'
        }
      ]
    },
    {
      displayName: 'Beads of Fealty',
      description: 'Seems to do nothing... but...',
      rarity: 'Lunar',
    },
    {
      displayName: 'Artifact Key',
      description: 'A stone shard with immense power.',
      rarity: 'Boss',
      Boss: 'Bulwark\'s Ambry',
    },
    {
      displayName: 'Interstellar Desk Plant',
      description: 'On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% of maximum health every second to all allies within 3m (+1.5m per stack). Lasts 10 seconds',
      rarity: 'Legendary',
      effects: [
        {
          effect: 'Radius',
          value: '3m',
          stackType: 'Linear',
          stackValue: '+1.5m'
        }
      ]
    },
    {
      displayName: 'Ancestral Incubator',
      description: '7% chance (+1% per stack) on kill to summon an Ancestral Pod that distracts enemies. Once it fully grows, it will hatch into an allied Parent with 100% health (+100% per stack).',
      rarity: 'NoTier',
      Boss: 'Grandparent',
      effects: [
        {
          effect: 'Chance',
          value: '7%',
          stackType: 'Linear',
          stackValue: '+1%'
        },
        {
          effect: 'Parent Health',
          value: '100%',
          stackType: 'Linear',
          stackValue: '+100%'
        }
      ]
    },
    {
      displayName: 'Focused Convergence',
      description: 'Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller. ',
      rarity: 'Lunar',
      Unlock: 'Never Back Down',
      effects: [
        {
          effect: 'Charge Speed',
          value: '30%',
          stackType: 'Linear',
          stackValue: '+30%'
        },
        {
          effect: 'Teleporter Zone',
          value: '50%',
          stackType: 'Hyperbolic',
          stackValue: '-50%'
        }
      ]
    }
  ] */