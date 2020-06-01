// Data and calculation

/* Section notes and ideas:

**Possible to move entire section to a different file?

***Create an effects sub object in the data object?  A place to store all the effects and their values.

*/

const itemCalculation = (function () {

    const data = {
        items: [

            /* -------------- COMMON ITEMS ------------- */

            {
                itemName: 'armor-piercing-rounds',
                displayName: 'Armor-Piercing Rounds',
                description: 'Deal an additional 20% damage (+20% per stack) to bosses.',
                rarity: 'common',
                effects: [{
                    effect: 'Damage to Boss',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.20,
                    stackValue: 0.20,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'backup-magazine',
                displayName: 'Backup Magazine',
                description: 'Add +1 (+1 per stack) charge of your Secondary skill.',
                rarity: 'common',
                effects: [{
                    effect: 'Secondary Skill Charge',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'bundle-of-fireworks',
                displayName: 'Bundle of Fireworks',
                description: 'Opening a chest launches 8 (+4 per stack) fireworks that deal 300% base damage.',
                rarity: 'common',
                effects: [{
                    effect: 'Number of Fireworks',
                    stackType: 'linear',
                    value: 8,
                    stackValue: 4,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'bustling-fungus',
                displayName: 'Bustling Fungus',
                description: 'After standing still for 2 seconds, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Healing',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.045,
                    stackValue: 0.0225,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Area of Effect',
                    stackType: 'linear',
                    value: 3,
                    stackValue: 1.5,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'cautious-slug',
                displayName: 'Cautious Slug',
                description: 'Increases passive health regeneration by 250% (+150% per stack) while outside of combat.',
                rarity: 'common',
                effects: [{
                    effect: 'Healing',
                    stackType: 'linear',
                    percentage: true,
                    value: 2.50,
                    stackValue: 1.50,
                    stackNumber: 0,
                    total: 0 
                }]
            },
            {
                itemName: 'crowbar',
                displayName: 'Crowbar',
                description: 'Deal 150% (+30% per stack) damage to enemies above 90% health.',
                rarity: 'common',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 1.50,
                    stackValue: 0.30,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'energy-drink',
                displayName: 'Energy Drink',
                description: 'Sprint speed is improved by 30% (+20% per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Sprint Speed',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.30,
                    stackValue: 0.20,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'focus-crystal',
                displayName: 'Focus Crystal',
                description: 'Increase damage to enemies within 13m by 15% (+15% per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.15,
                    stackValue: 0.15,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'fresh-meat',
                displayName: 'Fresh Meat',
                description: 'Increases base health regeneration by +2 hp/s for 3s (+3s per stack) after killing an enemy.',
                rarity: 'common',
                effects: [{
                    effect: 'Healing Duration',
                    stackType: 'linear',
                    value: 3,
                    stackValue: 3,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'gasoline',
                displayName: 'Gasoline',
                description: 'Killing an enemy ignites all enemies within 12m (+4m per stack).  Enemies burn for 150% (+75% per stack) base damage.',
                rarity: 'common',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 1.50,
                    stackValue: 0.75,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Area of Effect',
                    stackType: 'linear',
                    value: 12,
                    stackValue: 4,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'lens-makers-glasses',
                displayName: 'Lens-Maker\'s Glasses', 
                description: 'Your attacks have a 10% (+10% per stack) chance to Critically Strike, dealing double damage.',
                rarity: 'common',
                effects: [{
                    effect: 'Critical Chance', 
                    stackType: 'linear',
                    percentage: true, 
                    value: 0.10, 
                    stackValue: 0.10,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'medkit',
                displayName: 'Medkit',
                description: 'Heal for 10 (+10 per stack) health 1.1 seconds after getting hurt.',
                rarity: 'common',
                effects: [{
                    effect: 'Healing',
                    stackType: 'linear',
                    value: 10,
                    stackValue: 10,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'monster-tooth',
                displayName: 'Monster Tooth', 
                description: 'Killing an enemy spawns a healing orb that heals for 4 (+4 per stack) health.',
                rarity: 'common',
                effects: [{
                    effect: 'Healing', 
                    stackType: 'linear', 
                    value: 4, 
                    stackValue: 4,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'pauls-goat-hoof',
                displayName: 'Paul\'s Goat Hoof',
                description: 'Increases movement speed by 14% (+14% per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Movement Speed',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.14,
                    stackValue: 0.14,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'personal-shield-generator',
                displayName: 'Personal Shield Generator',
                description: 'Gain a 25 (+25 per stack) health shield. Recharges outside of danger.',
                rarity: 'common',
                effects: [{
                    effect: 'Shield Health',
                    stackType: 'linear',
                    value: 25,
                    stackValue: 25,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'repulsion-armor-plate',
                displayName: 'Repulsion Armor Plate',
                description: 'Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.',
                rarity: 'common',
                effects: [{
                    effect: 'Damage Reduction',
                    stackType: 'linear',
                    value: 5,
                    stackValue: 5,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'rusted-key',
                displayName: 'Rusted Key',
                description: 'A hidden cache containing an item will appear in a random location in each stage. (Increases rarity of the item per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Rarity Chance',
                    stackType: 'special',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'soldiers-syringe',
                displayName: 'Soldier\'s Syringe', 
                description: 'Increases attack speed by 15% (+15% per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Attack Speed', 
                    stackType: 'linear',
                    percentage: true, 
                    value: 0.15, 
                    stackValue: 0.15,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'sticky-bomb',
                displayName: 'Sticky Bomb',
                description: '5% (+2.5% per stack) chance on hit to attach a bomb to an enemy, detonating for 250% damage (+125% per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 2.50,
                    stackValue: 1.25,
                    stackNumber: 0,
                    total: 0,
                },
                {
                    effect: 'Trigger Chance',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.05,
                    stackValue: 0.025,
                    stackNumber: 0,
                    total: 0,
                }]
            },
            {
                itemName: 'stun-grenade',
                displayName: 'Stun Grenade',
                description: '5% (+5% per stack) chance on hit to stun enemies for 2 seconds.',
                rarity: 'common',
                effects: [{
                    effect: 'Stun Chance',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.05,
                    stackValue: 0.05,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'topaz-brooch',
                displayName: 'Topaz Brooch',
                description: 'Gain a temporary barrier on kill for 15 health (+15 per stack).',
                rarity: 'common',
                effects: [{
                    effect: 'Barrier',
                    stackType: 'linear',
                    value: 15,
                    stackValue: 15,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'tougher-times',
                displayName: 'Tougher Times', 
                description: '15% (+15% per stack) chance to block incoming damage. Unaffected by luck.',
                rarity: 'common',
                effects: [{
                    effect: 'Block Chance', 
                    stackType: 'hyperbolic',
                    percentage: true,
                    value: 0.15, 
                    stackValue: 0.15,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'tri-tip-dagger',
                displayName: 'Tri-Tip Dagger',
                description: '15% (+15% per stack) chance to bleed an enemy for 240% base damage.',
                rarity: 'common',
                effects: [{
                    effect: 'Bleed Chance',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.15,
                    stackValue: 0.15,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'warbanner',
                displayName: 'Warbanner',
                description: 'On level up drop a banner that strengthens all allies within 16m (+8m per stack).  Raise attack and movement speed by 30%.',
                rarity: 'common',
                effects: [{
                    effect: 'Area of Effect',
                    stackType: 'linear',
                    value: 16,
                    stackValue: 8,
                    stackNumber: 0,
                    total: 0  
                }]
            },
            
            /* -------------- UNCOMMON ITEMS ------------- */

            {
                itemName: 'atg-missile-mk-1',
                displayName: 'AtG Missile Mk. 1',
                description: '10% chance to fire a missile that deals 300% (+300% per stack) damage.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 3.00,
                    stackValue: 3.00,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'bandolier',
                displayName: 'Bandolier',
                description: '18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Drop Chance',
                    stackType: 'special',
                    percentage: true,
                    value: 0.18,
                    stackValue: 0.10,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'berzerkers-pauldron',
                displayName: 'Berzerker\'s Pauldron',
                description: 'Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Frenzy Duration',
                    stackType: 'linear',
                    value: 6,
                    stackValue: 4,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'chronobauble',
                displayName: 'Chronobauble',
                description: 'Slow enemies on hit for -60% movement speed for 2s (+2s per stack).',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Slow',
                    stackType: 'linear',
                    value: 2,
                    stackValue: 2,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'death-mark',
                displayName: 'Death Mark',
                description: 'Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% (+50% per stack) from all sources for 7 seconds.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.50,
                    stackValue: 0.50,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'fuel-cell',
                displayName: 'Fuel Cell',
                description: 'Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Equipment Charge',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Equipment Cooldown',
                    stackType: 'exponential',
                    percentage: true,
                    value: 0.15,
                    stackValue: 0.15,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'ghors-tome',
                displayName: 'Ghor\'s Tome',
                description: '4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Drop Chance',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.04,
                    stackValue: 0.04,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'harvesters-scythe',
                displayName: 'Harvester\'s Scythe',
                description: 'Gain 5% critical chance (+0% per stack). Critical strikes heal for 8 (+4 per stack) health.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Healing on Crit',
                    stackType: 'linear',
                    value: 8,
                    stackValue: 4,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'hopoo-feather',
                displayName: 'Hopoo Feather',
                description: 'Gain +1 (+1 per stack) maximum jump count.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Extra Jump',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'infusion',
                displayName: 'Infusion',
                description: 'Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Health Increment',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Health Increase Cap',
                    stackType: 'linear',
                    value: 100,
                    stackValue: 100,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'kjaros-band',
                displayName: 'Kjaro\'s Band',
                description: '8% chance on hit to strike an enemy with a runic flame tornado, dealing 500% (+250% per stack) TOTAL damage.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 5.00,
                    stackValue: 2.50,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'leeching-seed',
                displayName: 'Leeching Seed',
                description: 'Dealing damage heals you for 1 (+1 per stack) health.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Healing',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'lepton-daisy',
                displayName: 'Lepton Daisy',
                description: 'Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Healing Nova',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'old-guillotine',
                displayName: 'Old Guillotine',
                description: 'Instantly kill Elite monsters below 20% (+20% per stack) health.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Elite Execution Threshold',
                    stackType: 'hyperbolic',
                    percentage: true,
                    value: 0.20,
                    stackValue: 0.20,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'old-war-stealthkit',
                displayName: 'Old War Stealthkit',
                description: 'Chance on taking damage to gain 40% movement speed and invisibility for 3s (+1.5s per stack). Chance increases the more damage you take.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Effect Duration',
                    stackType: 'linear',
                    value: 3,
                    stackValue: 1.5,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'predatory-instincts',
                displayName: 'Predatory Instincts',
                description: 'Gain 5% critical chance (+0% per stack). Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Attack Speed Cap',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.36,
                    stackValue: 0.24,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'razorwire',
                displayName: 'Razorwire',
                description: 'Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Targets Hit',
                    stackType: 'linear',
                    value: 5,
                    stackValue: 2,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Area of Effect',
                    stackType: 'linear',
                    value: 25,
                    stackValue: 10,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'red-whip',
                displayName: 'Red Whip',
                description: 'Leaving combat boosts your movement speed by 30% (+30% per stack).',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Movement Speed',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.30,
                    stackValue: 0.30,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'rose-buckler',
                displayName: 'Rose Buckler',
                description: 'Increase armor by 30 (+30 per stack) while sprinting.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Armor',
                    stackType: 'linear',
                    value: 30,
                    stackValue: 30,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'runalds-band',
                displayName: 'Runald\'s Band',
                description: '8% chance on hit to strike an enemy with a runic ice blast, slowing them by 80% and dealing 250% (+125% per stack) TOTAL damage.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 2.50,
                    stackValue: 1.25,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'squid-polyp',
                displayName: 'Squid Polyp',
                description: 'Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Attack Speed',
                    stackType: 'linear',
                    percentage: true,
                    value: 1.00,
                    stackValue: 1.00,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'ukulele',
                displayName: 'Ukulele',
                description: '25% chance to fire chain lightning for 80% damage up to 3 (+2 per stack) targets within 20m (+2m per stack).',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Targets Affected',
                    stackType: 'linear',
                    value: 3,
                    stackValue: 2,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Area of Effect',
                    stackType: 'linear',
                    value: 20,
                    stackValue: 2,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'war-horn',
                displayName: 'War Horn',
                description: 'Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Attack Speed Duration',
                    stackType: 'linear',
                    value: 8,
                    stackValue: 4,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'wax-quail',
                displayName: 'Wax Quail',
                description: 'Jumping while sprinting boosts you forward by 10m (+10m per stack).',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Jump Boost',
                    stackType: 'linear',
                    value: 10,
                    stackValue: 10,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'will-o-the-wisp',
                displayName: 'Will-o\'-the-wisp',
                description: 'On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.',
                rarity: 'uncommon',
                effects: [{
                    effect: 'Damage',
                    stackType: 'linear',
                    percentage: true,
                    value: 3.50,
                    stackValue: 2.80,
                    stackNumber: 0,
                    total: 0
                },
                {
                    effect: 'Area of Effect',
                    stackType: 'linear',
                    value: 12,
                    stackValue: 2.4,
                    stackNumber: 0,
                    total: 0
                }]
            },

            /* -------------- LEGENDARY ITEMS ------------- */
            
            {
                itemName: 'fifty-seven-leaf-clover',
                displayName: '57 Leaf Clover',
                description: 'All random effects are rolled +1 (+1 per stack) times for a favorable outcome.',
                rarity: 'legendary',
                effects: [{
                    effect: 'Luck',
                    stackType: 'linear',
                    value: 1,
                    stackValue: 1,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'aegis',
                displayName: 'Aegis',
                description: 'Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.',
                rarity: 'legendary',
                effects: [{
                    effect: 'Barrier from Heal',
                    stackType: 'linear',
                    percentage: true,
                    value: 0.50,
                    stackValue: 0.50,
                    stackNumber: 0,
                    total: 0
                }]
            },
            {
                itemName: 'alien-head',
                displayName: 'Alien Head',
                description: 'Reduce skill cooldowns by 25% (+25% per stack).',
                rarity: 'legendary',
                effects: [{
                    effect: 'Skill Cooldowns',
                    stackType: 'exponential',
                    percentage: true,
                    value: 0.25,
                    stackValue: 0.25,
                    stackNumber: 0,
                    total: 0
                }]
            }

        ],
        calculation: [
            {
                stackType: 'linear', 
                operation: function(itemIndex, effIndex) {
                    console.log(`itemIndex is ${itemIndex}, effIndex is ${effIndex}`);
                    let itemEffectGroup = data.items[itemIndex].effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    if (itemEffectGroup.total === 0) {
                        itemEffectGroup.total += itemEffectGroup.value;
                    } else {
                        itemEffectGroup.total += itemEffectGroup.stackValue;
                    }
                    
                    console.log(data.items);
                }
            },
            {
                stackType: 'hyperbolic',
                operation: function(itemIndex, effIndex) {
                    console.log(`itemIndex is ${itemIndex}, effIndex is ${effIndex}`);
                    let itemEffectGroup = data.items[itemIndex].effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    itemEffectGroup.total = 1 - 1 / (1 + itemEffectGroup.stackValue * itemEffectGroup.stackNumber);

                    console.log(data.items);
                }
            },
            {
                stackType: 'exponential',
                operation: function(itemIndex, effIndex) {
                    console.log(`itemIndex is ${itemIndex}, effIndex is ${effIndex}`);
                    let itemGroup = data.items[itemIndex];
                    let itemEffectGroup = itemGroup.effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    if (itemGroup.itemName === 'fuel-cell' || itemGroup.itemName === 'alien-head') {
                        if (itemEffectGroup.total === 0) {
                            itemEffectGroup.total = itemEffectGroup.value;
                        } else {
                            itemEffectGroup.total = 1 - (Math.pow((1 - itemEffectGroup.stackValue), itemEffectGroup.stackNumber));
                        }
                    }

                    console.log(data.items);
                }
            },
            {
                stackType: 'special',
                operation: function(itemIndex, effIndex) {
                    let itemGroup = data.items[itemIndex];
                    let itemEffectGroup = itemGroup.effects[effIndex];
                    if (itemGroup.itemName === 'bandolier') {
                        itemEffectGroup.stackNumber += 1;
                        itemEffectGroup.total = 1 - 1 / Math.pow((1 + itemEffectGroup.stackNumber), 0.33);
                    } else if (itemGroup.itemName === 'rusted-key') {
                        // do we want to get into item chance?
                        itemEffectGroup.stackNumber += 1;
                        itemEffectGroup.total += itemEffectGroup.stackValue;
                    }

                    console.log(data.items);
                }
            }
        ]
    };

    return {

        getData: function() {
            return data;
        },

        calculate: function(itemIndex, effIndexes) {

            const itemGroup = data.items[itemIndex];
            let calcIndex;

            data.calculation.forEach(function(calcElement) {
                effIndexes.forEach(function(effIndex) {
                    if (calcElement.stackType === itemGroup.effects[effIndex].stackType) {

                        calcIndex = data.calculation.indexOf(calcElement);
                        data.calculation[calcIndex].operation(itemIndex, effIndex);
                    }
                })
            })
        },

        getItemIndex: function(itemName) {

             let itemIndex;
             console.log(itemName);
                 data.items.forEach(function(element) {
                     if (itemName === element.itemName) {
                         itemIndex = data.items.indexOf(element);
                         return itemIndex;
                     }
                 })
             console.log('itemIndex is: ',itemIndex);
             return itemIndex;
        },

        getEffectIndexes: function(itemIndex) {

            const itemGroup = data.items[itemIndex];
            let effArray = [];
            let effIndex;
            itemGroup.effects.forEach(function(element) {
                if (element) {
                    effIndex = itemGroup.effects.indexOf(element);
                    effArray.push(effIndex);
                }
            })
            return effArray;

        }
    }

})();

// UI

/* Section notes and ideas:

See Figma prototype.

*/  

const UIController = (function() {



    return {
        displaySelectedItem: function(itemIndex, effIndexes, dataItems) {

            let itemName, stackCounter;
            
            itemName = dataItems[itemIndex].itemName;

            stackCounter = dataItems[itemIndex].effects[0].stackNumber;
            
            if (stackCounter === 1) {
            
                // display initial image, title and stack count
                document.querySelector('.item-list').insertAdjacentHTML('beforeend', `
                
                <div class="${itemName} item-list-item">
                    <div class="item">
                        <img src="dist/img/nobg-img/${dataItems[itemIndex].itemName}.png" alt="${dataItems[itemIndex].itemName}" class="item-list-img item-img ${dataItems[itemIndex].rarity}" data-tippy-content="${dataItems[itemIndex].description}">
                    </div>
                    <div class="item-description">
                        <h3>${dataItems[itemIndex].displayName}</h3>
                    </div>
                    <div class="stack-number">x${dataItems[itemIndex].effects[0].stackNumber}</div>
                </div>
                
                `);

                // run tooltips package on new content
                tippy('[data-tippy-content]');

            } else if (stackCounter > 1) {
                
                // modify item stack number
                let normalStackSelect = document.querySelector(`.${itemName} .stack-number`);
                normalStackSelect.innerHTML = `x${stackCounter}`;
                
                // change position of # on digit count
                if (stackCounter > 9 && stackCounter < 100) {
                    normalStackSelect.style.left = '33px';
                } else if (stackCounter > 99) {
                    normalStackSelect.style.left = '23px';
                }

            }

            this.displayItemTotals(itemIndex, effIndexes, dataItems);

            if (dataItems[itemIndex].effects[1]) {
                document.querySelector(`.${itemName} .stack-number`).style.top = '-82px';
            }
                   
        },

        getItemTotals: function(itemIndex, effIndexes, dataItems) {

            const itemTotalArray = [];

            effIndexes.forEach(function(element) {

                let itemTotal; 
                const itemEffectGroup = dataItems[itemIndex].effects[element];
                
                /* ----- Display floating numbers as percentage where needed ----- */
                if (itemEffectGroup.percentage) {
                    itemTotal = Math.round((itemEffectGroup.total + Number.EPSILON) * 1000) / 10 + '%';
                } else {
                    itemTotal = itemEffectGroup.total;                 
                }

                itemTotalArray.push(itemTotal)
                /* ----- ------------------------------------------------ ----- */
            })
            return itemTotalArray;

        },

        displayItemTotals: function(itemIndex, effIndexes, dataItems) {

            const itemTotalArray = this.getItemTotals(itemIndex, effIndexes, dataItems);
            console.log(itemTotalArray);
            const itemGroup = dataItems[itemIndex];
            
            effIndexes.forEach(function(effIndex) {

                itemTotalArray.forEach(function(itemTotal) {

                    if (itemTotalArray.indexOf(itemTotal) === effIndex) {

                        if (itemGroup.effects[0].stackNumber === 1) {
                            console.log('init works');
                            document.querySelector(`.${itemGroup.itemName} .item-description`).insertAdjacentHTML('beforeend', `
                                
                                <div class="item-effect">
                                    ${itemGroup.effects[effIndex].effect}: <span class=${'item-total-' + (effIndex + 1)}>${itemTotal}</span>
                                </div>
                                
                            `);
                        } else {
                            console.log('secondary works');
                            document.querySelector(`.${itemGroup.itemName} .item-description div span.${'item-total-' + (effIndex + 1)}`).innerHTML = `${itemTotal}`;
                        }


                    }
                    
                })

            })

        },

        loadItems: function(items) {

            items.forEach((element) => {
                
                document.querySelector('.grid-container').insertAdjacentHTML('beforeend', `
                    
                    <div class="item">
                        <img src="dist/img/nobg-img/${element.itemName}.png" alt="${element.itemName}" class="item-img ${element.rarity}" data-tippy-content="${element.description}">
                    </div>
                    
                `);
                
            })


        }
    }
})();

// App

const appController = (function(itemCalc, UICtrl) {

    const data = itemCalc.getData();

    let itemID, itemName, itemIndex, effIndexes;

    const setUpEventListeners = function() {
        window.addEventListener('load', UICtrl.loadItems(data.items));
        tippy('[data-tippy-content]');
        document.querySelector('.container-left').addEventListener('click', addItem);
    }

    const addItem = function() {
        itemName = getItemName(event);
        itemIndex = itemCalc.getItemIndex(itemName);
        effIndexes = itemCalc.getEffectIndexes(itemIndex);
        itemCalc.calculate(itemIndex, effIndexes);
        UICtrl.displaySelectedItem(itemIndex, effIndexes, data.items);
    }
    
    const getItemName = function(event) {
        itemID = event.target.alt;
        return itemID;
    }

    return {
        init: () => {
            setUpEventListeners();
        }
    }

})(itemCalculation, UIController);

appController.init();























