// Data and calculation

/* Section notes and ideas:

Perhaps effects should be further nested as an object or array within the itemName object so we can have multiple effects that are better organized on each item.

**Possible to move entire section to a different file?

***Create an effects sub object in the data object?  A place to store all the effects and their values.

*/

var itemCalculation = (function () {

    var data = {
        items: [

/* -------------- COMMON ITEMS ------------- */

            {
                itemName: 'armor-piercing-rounds',
                displayName: 'Armor-Piercing Rounds',
                description: 'Deal an additional 20% damage (+20% per stack) to bosses.',
                rarity: 'common',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 0.20,
                stackValue: 0.20,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'backup-magazine',
                displayName: 'Backup Magazine',
                description: 'Add +1 (+1 per stack) charge of your Secondary skill.',
                rarity: 'common',
                effect: 'secondary-charge',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'bundle-of-fireworks',
                displayName: 'Bundle of Fireworks',
                description: 'Opening a chest launches 8 (+4 per stack) fireworks that deal 300% base damage.',
                rarity: 'common',
                effect: 'fireworks',
                stackType: 'linear',
                value: 8,
                stackValue: 4,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'bustling-fungus',
                displayName: 'Bustling Fungus',
                description: 'After standing still for 2 seconds, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).',
                rarity: 'common',
                effect: 'healing',
                stackType: 'linear',
                percentage: true,
                value: 0.045,
                stackValue: 0.0225,
                stackNumber: 0,
                total: 0,
                secondEffect: 'aoe',
                secondStackType: 'linear',
                secondValue: 3,
                secondStackValue: 1.5,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'cautious-slug',
                displayName: 'Cautious Slug',
                description: 'Increases passive health regeneration by 250% (+150% per stack) while outside of combat.',
                rarity: 'common',
                effect: 'healing',
                stackType: 'linear',
                percentage: true,
                value: 2.50,
                stackValue: 1.50,
                stackNumber: 0,
                total: 0 
            },
            {
                itemName: 'crowbar',
                displayName: 'Crowbar',
                description: 'Deal 150% (+30% per stack) damage to enemies above 90% health.',
                rarity: 'common',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 1.50,
                stackValue: 0.30,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'energy-drink',
                displayName: 'Energy Drink',
                description: 'Sprint speed is improved by 30% (+20% per stack).',
                rarity: 'common',
                effect: 'sprint-speed',
                stackType: 'linear',
                percentage: true,
                value: 0.30,
                stackValue: 0.20,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'focus-crystal',
                displayName: 'Focus Crystal',
                description: 'Increase damage to enemies within 13m by 15% (+15% per stack).',
                rarity: 'common',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 0.15,
                stackValue: 0.15,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'fresh-meat',
                displayName: 'Fresh Meat',
                description: 'Increases base health regeneration by +2 hp/s for 3s (+3s per stack) after killing an enemy.',
                rarity: 'common',
                effect: 'healing',
                stackType: 'linear',
                value: 3,
                stackValue: 3,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'gasoline',
                displayName: 'Gasoline',
                description: 'Killing an enemy ignites all enemies within 12m (+4m per stack).  Enemies burn for 150% (+75% per stack) base damage.',
                rarity: 'common',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 1.50,
                stackValue: 0.75,
                stackNumber: 0,
                total: 0,
                secondEffect: 'aoe',
                secondStackType: 'linear',
                secondValue: 12,
                secondStackValue: 4,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'lens-makers-glasses',
                displayName: 'Lens-Maker\'s Glasses', 
                description: 'Your attacks have a 10% (+10% per stack) chance to Critically Strike, dealing double damage.',
                rarity: 'common',
                effect: 'critical-chance', 
                stackType: 'linear',
                percentage: true, 
                value: 0.10, 
                stackValue: 0.10,
                stackNumber: 0,
                total: 0, 
            },
            {
                itemName: 'medkit',
                displayName: 'Medkit',
                description: 'Heal for 10 (+10 per stack) health 1.1 seconds after getting hurt.',
                rarity: 'common',
                effect: 'healing',
                stackType: 'linear',
                value: 10,
                stackValue: 10,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'monster-tooth',
                displayName: 'Monster Tooth', 
                description: 'Killing an enemy spawns a healing orb that heals for 4 (+4 per stack) health.',
                rarity: 'common',
                effect: 'healing', 
                stackType: 'linear', 
                value: 4, 
                stackValue: 4,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'pauls-goat-hoof',
                displayName: 'Paul\'s Goat Hoof',
                description: 'Increases movement speed by 14% (+14% per stack).',
                rarity: 'common',
                effect: 'movement-speed',
                stackType: 'linear',
                percentage: true,
                value: 0.14,
                stackValue: 0.14,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'personal-shield-generator',
                displayName: 'Personal Shield Generator',
                description: 'Gain a 25 (+25 per stack) health shield. Recharges outside of danger.',
                rarity: 'common',
                effect: 'shield',
                stackType: 'linear',
                value: 25,
                stackValue: 25,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'repulsion-armor-plate',
                displayName: 'Repulsion Armor Plate',
                description: 'Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.',
                rarity: 'common',
                effect: 'damage-reduction',
                stackType: 'linear',
                value: 5,
                stackValue: 5,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'rusted-key',
                displayName: 'Rusted Key',
                description: 'A hidden cache containing an item will appear in a random location in each stage. (Increases rarity of the item per stack).',
                rarity: 'common',
                effect: 'drop-chance',
                stackType: 'special',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'soldiers-syringe',
                displayName: 'Soldier\'s Syringe', 
                description: 'Increases attack speed by 15% (+15% per stack).',
                rarity: 'common',
                effect: 'attack-speed', 
                stackType: 'linear',
                percentage: true, 
                value: 0.15, 
                stackValue: 0.15,
                stackNumber: 0,
                total: 0 
            },
            {
                itemName: 'sticky-bomb',
                displayName: 'Sticky Bomb',
                description: '5% (+2.5% per stack) chance on hit to attach a bomb to an enemy, detonating for 250% damage (+125% per stack).',
                rarity: 'common',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 2.50,
                stackValue: 1.25,
                stackNumber: 0,
                total: 0,
                secondEffect: 'trigger-chance',
                secondStackType: 'linear',
                secondPercentage: true,
                secondValue: 0.05,
                secondStackValue: 0.025,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'stun-grenade',
                displayName: 'Stun Grenade',
                description: '5% (+5% per stack) chance on hit to stun enemies for 2 seconds.',
                rarity: 'common',
                effect: 'stun-chance',
                stackType: 'linear',
                percentage: true,
                value: 0.05,
                stackValue: 0.05,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'topaz-brooch',
                displayName: 'Topaz Brooch',
                description: 'Gain a temporary barrier on kill for 15 health (+15 per stack).',
                rarity: 'common',
                effect: 'barrier',
                stackType: 'linear',
                value: 15,
                stackValue: 15,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'tougher-times',
                displayName: 'Tougher Times', 
                description: '15% (+15% per stack) chance to block incoming damage. Unaffected by luck.',
                rarity: 'common',
                effect: 'block-chance', 
                stackType: 'hyperbolic',
                percentage: true,
                value: 0.15, 
                stackValue: 0.15,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'tri-tip-dagger',
                displayName: 'Tri-Tip Dagger',
                description: '15% (+15% per stack) chance to bleed an enemy for 240% base damage.',
                rarity: 'common',
                effect: 'bleed-chance',
                stackType: 'linear',
                percentage: true,
                value: 0.15,
                stackValue: 0.15,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'warbanner',
                displayName: 'Warbanner',
                description: 'On level up drop a banner that strengthens all allies within 16m (+8m per stack).  Raise attack and movement speed by 30%.',
                rarity: 'common',
                effect: 'aoe',
                stackType: 'linear',
                value: 16,
                stackValue: 8,
                stackNumber: 0,
                total: 0  
            },
            
/* -------------- UNCOMMON ITEMS ------------- */

            {
                itemName: 'atg-missile-mk-1',
                displayName: 'AtG Missile Mk. 1',
                description: '10% chance to fire a missile that deals 300% (+300% per stack) damage.',
                rarity: 'uncommon',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 3.00,
                stackValue: 3.00,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'bandolier',
                displayName: 'Bandolier',
                description: '18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.',
                rarity: 'uncommon',
                effect: 'drop-chance',
                stackType: 'special',
                percentage: true,
                value: 0.18,
                stackValue: 0.10,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'berzerkers-pauldron',
                displayName: 'Berzerker\'s Pauldron',
                description: 'Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.',
                rarity: 'uncommon',
                effect: 'frenzy-duration',
                stackType: 'linear',
                value: 6,
                stackValue: 4,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'chronobauble',
                displayName: 'Chronobauble',
                description: 'Slow enemies on hit for -60% movement speed for 2s (+2s per stack).',
                rarity: 'uncommon',
                effect: 'slow',
                stackType: 'linear',
                value: 2,
                stackValue: 2,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'death-mark',
                displayName: 'Death Mark',
                description: 'Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% (+50% per stack) from all sources for 7 seconds.',
                rarity: 'uncommon',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 0.50,
                stackValue: 0.50,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'fuel-cell',
                displayName: 'Fuel Cell',
                description: 'Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).',
                rarity: 'uncommon',
                effect: 'equipment-charge',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0,
                secondEffect: 'equipment-cooldown',
                secondStackType: 'exponential',
                secondPercentage: true,
                secondValue: 0.15,
                secondStackValue: 0.15,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'ghors-tome',
                displayName: 'Ghor\'s Tome',
                description: '4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.',
                rarity: 'uncommon',
                effect: 'drop-chance',
                stackType: 'linear',
                percentage: true,
                value: 0.04,
                stackValue: 0.04,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'harvesters-scythe',
                displayName: 'Harvester\'s Scythe',
                description: 'Gain 5% critical chance (+0% per stack). Critical strikes heal for 8 (+4 per stack) health.',
                rarity: 'uncommon',
                effect: 'healing',
                stackType: 'linear',
                value: 8,
                stackValue: 4,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'hopoo-feather',
                displayName: 'Hopoo Feather',
                description: 'Gain +1 (+1 per stack) maximum jump count.',
                rarity: 'uncommon',
                effect: 'extra-jump',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'infusion',
                displayName: 'Infusion',
                description: 'Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.',
                rarity: 'uncommon',
                effect: 'health-increase',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0,
                secondEffect: 'health-addition',
                secondStackType: 'linear',
                secondValue: 100,
                secondStackValue: 100,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'kjaros-band',
                displayName: 'Kjaro\'s Band',
                description: '8% chance on hit to strike an enemy with a runic flame tornado, dealing 500% (+250% per stack) TOTAL damage.',
                rarity: 'uncommon',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 5.00,
                stackValue: 2.50,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'leeching-seed',
                displayName: 'Leeching Seed',
                description: 'Dealing damage heals you for 1 (+1 per stack) health.',
                rarity: 'uncommon',
                effect: 'healing',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'lepton-daisy',
                displayName: 'Lepton Daisy',
                description: 'Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.',
                rarity: 'uncommon',
                effect: 'healing-nova',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'old-guillotine',
                displayName: 'Old Guillotine',
                description: 'Instantly kill Elite monsters below 20% (+20% per stack) health.',
                rarity: 'uncommon',
                effect: 'execution-threshold',
                stackType: 'hyperbolic',
                percentage: true,
                value: 0.20,
                stackValue: 0.20,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'old-war-stealthkit',
                displayName: 'Old War Stealthkit',
                description: 'Chance on taking damage to gain 40% movement speed and invisibility for 3s (+1.5s per stack). Chance increases the more damage you take.',
                rarity: 'uncommon',
                effect: 'duration',
                stackType: 'linear',
                value: 3,
                stackValue: 1.5,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'predatory-instincts',
                displayName: 'Predatory Instincts',
                description: 'Gain 5% critical chance (+0% per stack). Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.',
                rarity: 'uncommon',
                effect: 'attack-speed-cap',
                stackType: 'linear',
                percentage: true,
                value: 0.36,
                stackValue: 0.24,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'razorwire',
                displayName: 'Razorwire',
                description: 'Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius.',
                rarity: 'uncommon',
                effect: 'targets-hit',
                stackType: 'linear',
                value: 5,
                stackValue: 2,
                stackNumber: 0,
                total: 0,
                secondEffect: 'aoe',
                secondStackType: 'linear',
                secondValue: 25,
                secondStackValue: 10,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'red-whip',
                displayName: 'Red Whip',
                description: 'Leaving combat boosts your movement speed by 30% (+30% per stack).',
                rarity: 'uncommon',
                effect: 'movement-speed',
                stackType: 'linear',
                percentage: true,
                value: 0.30,
                stackValue: 0.30,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'rose-buckler',
                displayName: 'Rose Buckler',
                description: 'Increase armor by 30 (+30 per stack) while sprinting.',
                rarity: 'uncommon',
                effect: 'armor',
                stackType: 'linear',
                value: 30,
                stackValue: 30,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'runalds-band',
                displayName: 'Runald\'s Band',
                description: '8% chance on hit to strike an enemy with a runic ice blast, slowing them by 80% and dealing 250% (+125% per stack) TOTAL damage.',
                rarity: 'uncommon',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 2.50,
                stackValue: 1.25,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'squid-polyp',
                displayName: 'Squid Polyp',
                description: 'Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.',
                rarity: 'uncommon',
                effect: 'attack-speed',
                stackType: 'linear',
                percentage: true,
                value: 1.00,
                stackValue: 1.00,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'ukulele',
                displayName: 'Ukulele',
                description: '25% chance to fire chain lightning for 80% damage up to 3 (+2 per stack) targets within 20m (+2m per stack).',
                rarity: 'uncommon',
                effect: 'targets',
                stackType: 'linear',
                value: 3,
                stackValue: 2,
                stackNumber: 0,
                total: 0,
                secondEffect: 'aoe',
                secondStackType: 'linear',
                secondValue: 20,
                secondStackValue: 2,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'war-horn',
                displayName: 'War Horn',
                description: 'Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).',
                rarity: 'uncommon',
                effect: 'duration',
                stackType: 'linear',
                value: 8,
                stackValue: 4,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'wax-quail',
                displayName: 'Wax Quail',
                description: 'Jumping while sprinting boosts you forward by 10m (+10m per stack).',
                rarity: 'uncommon',
                effect: 'jump-boost',
                stackType: 'linear',
                value: 10,
                stackValue: 10,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'will-o-the-wisp',
                displayName: 'Will-o\'-the-wisp',
                description: 'On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.',
                rarity: 'uncommon',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 3.50,
                stackValue: 2.80,
                stackNumber: 0,
                total: 0,
                secondEffect: 'aoe',
                secondStackType: 'linear',
                secondValue: 12,
                secondStackValue: 2.4,
                secondStackNumber: 0,
                secondTotal: 0
            },

        ],
        calculation: [
            {
                stackType: 'linear', 
                operation: function(itemIndex, hasSecondEffect) {
                    let itemGroup = data.items[itemIndex];
                    if (hasSecondEffect === false) {
                        itemGroup.stackNumber += 1;
                        if (itemGroup.total === 0) {
                            itemGroup.total += itemGroup.value;
                        } else {
                            itemGroup.total += itemGroup.stackValue;
                        }
                    } else if (hasSecondEffect === true) {
                        itemGroup.secondStackNumber += 1;
                        if (itemGroup.secondTotal === 0) {
                            itemGroup.secondTotal += itemGroup.secondValue;
                        } else {
                            itemGroup.secondTotal += itemGroup.secondStackValue;
                        }
                    }
                    
                    console.log(data.items);
                }
            },
            {
                stackType: 'hyperbolic',
                operation: function(itemIndex, hasSecondEffect) {
                    let itemGroup = data.items[itemIndex];
                    if (hasSecondEffect === false) {
                        itemGroup.stackNumber += 1;
                        itemGroup.total = 1 - 1 / (1 + itemGroup.stackValue * itemGroup.stackNumber);
                        console.log(itemGroup);
                    } else if (hasSecondEffect === true) {
                        itemGroup.secondStackNumber += 1;
                        itemGroup.secondTotal = 1 - 1 / (1 + itemGroup.secondStackValue * itemGroup.secondStackNumber);
                    }
                }
            },
            {
                stackType: 'exponential',
                operation: function(itemIndex) {
                    let itemGroup = data.items[itemIndex];
                    if (itemGroup.itemName === 'fuel-cell') {
                        itemGroup.secondStackNumber += 1;
                        if (itemGroup.secondTotal === 0) {
                            itemGroup.secondTotal = itemGroup.secondValue;
                        } else {
                            itemGroup.secondTotal = 1 - (Math.pow((1 - itemGroup.secondStackValue), itemGroup.secondStackNumber));
                        }
                    }
                }
            },
            {
                stackType: 'special',
                operation: function(itemIndex) {
                    let itemGroup = data.items[itemIndex];
                    if (itemGroup.itemName === 'bandolier') {
                        itemGroup.stackNumber += 1;
                        itemGroup.total = 1 - 1 / Math.pow((1 + itemGroup.stackNumber), 0.33);
                    } else if (itemGroup.itemName === 'rusted-key') {
                        // do we want to get into item chance?
                        itemGroup.stackNumber += 1;
                        itemGroup.total += itemGroup.stackValue;
                    }
                }
            }
        ]
    };

    return {

        getData: function() {
            return data;
        },

        calculate: function(itemIndex) {

            let itemGroup = data.items[itemIndex];
            let calcIndex, secondCalcIndex, hasSecondEffect;

            data.calculation.forEach(function(element) {
                if (itemGroup.stackType === element.stackType) {
                    calcIndex = data.calculation.indexOf(element);
                    return calcIndex;
                }
            })
            hasSecondEffect = false;
            data.calculation[calcIndex].operation(itemIndex, hasSecondEffect);

            if (itemGroup.secondEffect) {
                data.calculation.forEach(function(element) {
                    if (itemGroup.secondStackType === element.stackType) {
                        secondCalcIndex = data.calculation.indexOf(element);
                    }
                })
                hasSecondEffect = true
                data.calculation[secondCalcIndex].operation(itemIndex, hasSecondEffect);
            }
        },

        getItemIndex: function(itemName) {

             var itemIndex;
             console.log(itemName);
                 data.items.forEach(function(element) {
                     if (itemName === element.itemName) {
                         itemIndex = data.items.indexOf(element);
                         return itemIndex;
                     }
                 })
             //}
             console.log('itemIndex is: ',itemIndex);
             return itemIndex;
        }
    }

})();

// UI

/* Section notes and ideas:

See Figma prototype.

Display item image to the left in the item container and item name to its right.

Display each effect with its stack number and total underneath item name on separate lines.

*/  

var UIController = (function() {



    return {
        updateValues: function(itemIndex, dataItems, itemName) {
            
            // this is ugly af and should probably be refactored into some DRY functions
            
            /* ----- Display floating numbers as percentage where needed ----- */
            var itemTotal, secondItemTotal;
            
            if (dataItems[itemIndex].percentage) {
                itemTotal = Math.round((dataItems[itemIndex].total + Number.EPSILON) * 1000) / 10 + '%';
            } else {
                itemTotal = dataItems[itemIndex].total;
            }

            if (dataItems[itemIndex].secondEffect) {
                if (dataItems[itemIndex].secondPercentage) {
                    secondItemTotal = Math.round((dataItems[itemIndex].secondTotal + Number.EPSILON) * 1000) / 10 + '%';
                } else {
                    secondItemTotal = dataItems[itemIndex].secondTotal;
                }
            }
            /* ----- ------------------------------------------------ ----- */

            if (dataItems[itemIndex].stackNumber === 1) {
            
                document.querySelector('.item-list').insertAdjacentHTML('beforeend', `
                
                <div class="${itemName} item-list-item">
                <div class="item tooltip">
                    <img src="dist/img/nobg-img/${dataItems[itemIndex].itemName}.png" alt="${dataItems[itemIndex].itemName}" class="item-list-img item-img ${dataItems[itemIndex].rarity}" data-tippy-content="${dataItems[itemIndex].description}"><span class="tooltiptext"></span>
                </div>
                    <div class="item-description">
                        <h3>${dataItems[itemIndex].displayName}</h3>
                        <div class="item-effect">
                            ${dataItems[itemIndex].effect}: 
                            <span class="item-total">${itemTotal}</span>
                        </div>
                    </div>
                    <div class="stack-number">x${dataItems[itemIndex].stackNumber}</div>
                </div>
                
                `);

                tippy('[data-tippy-content]');

                if (dataItems[itemIndex].secondEffect) {
                    
                    document.querySelector(`.${itemName} .item-description`).insertAdjacentHTML('beforeend', `<div class="second-item-effect">${dataItems[itemIndex].secondEffect}: <span class="second-item-total">${secondItemTotal}</span></div></div>`);

                    //document.querySelector(`.${itemName} .stack-number`).style.position = 'relative';
                    document.querySelector(`.${itemName} .stack-number`).style.top = '-82px';
                }

            } else if (dataItems[itemIndex].stackNumber > 1) {
                
                // modify item stack number
                let normalStackSelect = document.querySelector(`.${itemName} .stack-number`);
                let stackCounter = dataItems[itemIndex].stackNumber;
                
                normalStackSelect.innerHTML = `x${dataItems[itemIndex].stackNumber}`;
                // change position of # on digit count (could make into a callable function)
                if (stackCounter > 9 && stackCounter < 100) {
                    normalStackSelect.style.left = '33px';
                } else if (stackCounter > 99) {
                    normalStackSelect.style.left = '23px';
                }

                
                // modify effect total
                document.querySelector(`.${itemName} .item-description div span.item-total`).innerHTML = `${itemTotal}`;

                // modify secondary effect total
                if (dataItems[itemIndex].secondEffect) {
                    document.querySelector(`.${itemName} .item-description div span.second-item-total`).innerHTML = `${secondItemTotal}`;
                }
                
            }
                   
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

var appController = (function(itemCalc, UICtrl) {

    var data = itemCalc.getData();

    var itemID;

    var setUpEventListeners = function() {
        window.addEventListener('load', UICtrl.loadItems(data.items));
        tippy('[data-tippy-content]');
        document.querySelector('.container-left').addEventListener('click', addItem);
    }

    var addItem = function() {
        let itemName = getItemName(event);
        let itemIndex = itemCalc.getItemIndex(itemName);
        itemCalc.calculate(itemIndex);
        UICtrl.updateValues(itemIndex, data.items, itemName);
    }
    
    var getItemName = function(event) {
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























