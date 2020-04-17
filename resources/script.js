// Data and calculation

/* Section notes and ideas:

Perhaps effects should be further nested as an object or array within the itemName object so we can have multiple effects that are better organized on each item.

**Possible to move entire section to a different file?

***Create an effects sub object in the data object?  A place to store all the effects and their values.

*/

var itemCalculation = (function () {

    var data = {
        items: [
            {
                itemName: 'soldiers-syringe',
                displayName: 'Soldier\'s Syringe', 
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
                itemName: 'tougher-times',
                displayName: 'Tougher Times', 
                rarity: 'common',
                effect: 'block-chance', 
                stackType: 'hyperbolic',
                percentage: true,
                //actual value is around 0.13 
                value: 0.15, 
                stackValue: 0.15,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'monster-tooth',
                displayName: 'Monster Tooth', 
                rarity: 'common',
                //drops a healing orb on kill
                effect: 'heal', 
                stackType: 'linear', 
                value: 4, 
                stackValue: 4,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'lens-makers-glasses',
                displayName: 'Lens-Maker\'s Glasses', 
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
                itemName: 'pauls-goat-hoof',
                displayName: 'Paul\'s Goat Hoof',
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
                itemName: 'bustling-fungus',
                displayName: 'Bustling Fungus',
                rarity: 'common',
                effect: 'heal',
                stackType: 'linear',
                percentage: true,
                value: 0.045,
                stackValue: 0.0225,
                stackNumber: 0,
                total: 0,
                //aoe is a radius in meters
                secondEffect: 'aoe',
                secondStackType: 'linear',
                secondValue: 3,
                secondStackValue: 1.5,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'crowbar',
                displayName: 'Crowbar',
                rarity: 'common',
                //damage only to enemies above 90% health
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 1.50,
                stackValue: 0.30,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'tri-tip-dagger',
                displayName: 'Tri-Tip Dagger',
                rarity: 'common',
                //bleed effect. 240% base damage
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
                rarity: 'common',
                //effects increased 30%
                effect: 'damage',
                effect2: 'movement-speed',
                //aoe increased radius per stack in meters
                stackType: 'linear',
                value: 16,
                stackValue: 8,
                stackNumber: 0,
                total: 0  
            },
            {
                itemName: 'cautious-slug',
                displayName: 'Cautious Slug',
                rarity: 'common',
                //heal when out of combat
                effect: 'heal',
                stackType: 'linear',
                percentage: true,
                value: 2.50,
                stackValue: 1.50,
                stackNumber: 0,
                total: 0 
            },
            {
                itemName: 'personal-shield-generator',
                displayName: 'Personal Shield Generator',
                rarity: 'common',
                effect: 'shield',
                stackType: 'linear',
                value: 25,
                stackValue: 25,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'medkit',
                displayName: 'Medkit',
                rarity: 'common',
                //effect applies 1.1s after injury
                effect: 'heal',
                stackType: 'linear',
                value: 10,
                stackValue: 10,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'gasoline',
                displayName: 'Gasoline',
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
                itemName: 'stun-grenade',
                displayName: 'Stun Grenade',
                rarity: 'common',
                effect: 'stun-chance',
                // chance to stun on hit for 2s
                stackType: 'linear',
                percentage: true,
                value: 0.05,
                stackValue: 0.05,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'bundle-of-fireworks',
                displayName: 'Bundle of Fireworks',
                rarity: 'common',
                effect: 'fireworks',
                // launch fireworks on chest open.  300% base damage
                stackType: 'linear',
                value: 8,
                stackValue: 4,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'energy-drink',
                displayName: 'Energy Drink',
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
                itemName: 'backup-magazine',
                displayName: 'Backup Magazine',
                rarity: 'common',
                effect: 'secondary-charge',
                // add additional charge to secondary skill
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'sticky-bomb',
                displayName: 'Sticky Bomb',
                rarity: 'common',
                effect: 'damage',
                stackType: 'linear',
                percentage: true,
                value: 2.50,
                stackValue: 1.25,
                stackNumber: 0,
                total: 0,
                secondEffect: 'trigger-chance',
                // secondEffect is chance for first effect to trigger
                secondStackType: 'linear',
                secondPercentage: true,
                secondValue: 0.05,
                secondStackValue: 0.025,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'rusted-key',
                displayName: 'Rusted Key',
                rarity: 'common',
                effect: 'drop-chance',
                stackType: 'special',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'armor-piercing-rounds',
                displayName: 'Armor-Piercing Rounds',
                rarity: 'common',
                effect: 'damage',
                // damage from effect is dealt to bosses only
                stackType: 'linear',
                percentage: true,
                value: 0.20,
                stackValue: 0.20,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'atg-missile-mk-1',
                displayName: 'AtG Missile Mk. 1',
                rarity: 'uncommon',
                effect: 'damage',
                // 10% chance to trigger item on hit
                stackType: 'linear',
                percentage: true,
                value: 3.00,
                stackValue: 3.00,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'will-o-the-wisp',
                displayName: 'Will-o\'-the-wisp',
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
            {
                itemName: 'hopoo-feather',
                displayName: 'Hopoo Feather',
                rarity: 'uncommon',
                effect: 'extra-jump',
                stackType: 'linear',
                value: 1,
                stackValue: 1,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'ukulele',
                displayName: 'Ukulele',
                rarity: 'uncommon',
                effect: 'targets',
                // 25% chance to trigger chain lightning.  80% TOTAL damage
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
                operation: function(itemIndex, hasSecondEffect) {
                    let itemGroup = data.items[itemIndex];
                    if (hasSecondEffect === false) {
                        itemGroup.stackNumber += 1;
                        if (itemGroup.total === 0) {
                            itemGroup.total += itemGroup.value;
                        } else {
                            itemGroup.total += itemGroup.total;
                        }
                    } else if (hasSecondEffect === true) {
                        itemGroup.secondStackNumber += 1;
                        if (itemGroup.secondTotal === 0) {
                            itemGroup.secondTotal += itemGroup.secondValue;
                        } else {
                            itemGroup.secondTotal += itemGroup.secondStackTotal;
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
             if (itemName === 'soldiers-syringe') {
                 itemIndex = 0;
             } else {
                 data.items.forEach(function(element) {
                     if (itemName === element.itemName) {
                         itemIndex = data.items.indexOf(element);
                         return itemIndex;
                     }
                 })
             }
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
                    <img src="dist/img/nobg-img/${dataItems[itemIndex].itemName}.png" alt="${dataItems[itemIndex].itemName}" class="item-list-img ${dataItems[itemIndex].rarity}">
                    <div class="item-description">
                        <h3>${dataItems[itemIndex].displayName}</h3>
                        <div class="item-effect">
                            ${dataItems[itemIndex].effect}: 
                            <span class="item-total">${itemTotal}</span>
                        </div>
                    </div>
                    <div class="stack-number">x${dataItems[itemIndex].stackNumber}</div>
                </div>`);

                if (dataItems[itemIndex].secondEffect) {
                    
                    document.querySelector(`.${itemName} .item-description`).insertAdjacentHTML('beforeend', `<div class="second-item-effect">${dataItems[itemIndex].secondEffect}: <span class="second-item-total">${secondItemTotal}</span></div></div>`);

                    document.querySelector(`.${itemName} .stack-number`).classList.add('stack-number-mod');

                    document.querySelector(`.${itemName} .stack-number`).classList.remove('stack-number');
                }

            } else if (dataItems[itemIndex].stackNumber > 1) {
                
                // modify item stack number
                let normalStackSelect = document.querySelector(`.${itemName} .stack-number`);
                let modStackSelect = document.querySelector(`.${itemName} .stack-number-mod`);
                let stackCounter = dataItems[itemIndex].stackNumber;
                
                if (normalStackSelect) {
                    normalStackSelect.innerHTML = `x${dataItems[itemIndex].stackNumber}`;
                    // change position of # on digit count (could make into a callable function)
                    if (stackCounter > 9 && stackCounter < 100) {
                        normalStackSelect.style.left = '-35px';
                    } else if (stackCounter > 99) {
                        normalStackSelect.style.left = '-45px';
                    }
                } else if (modStackSelect) {
                    modStackSelect.innerHTML = `x${dataItems[itemIndex].stackNumber}`;
                    // change position of # on digit count
                    if (stackCounter > 9 && stackCounter < 100) {
                        modStackSelect.style.left = '-35px';
                    } else if (stackCounter > 99) {
                        modStackSelect.style.left = '-45px';
                    }
                }

                
                // modify effect total
                document.querySelector(`.${itemName} .item-description div span.item-total`).innerHTML = `${itemTotal}`;

                // modify secondary effect total
                if (dataItems[itemIndex].secondEffect) {
                    document.querySelector(`.${itemName} .item-description div span.second-item-total`).innerHTML = `${secondItemTotal}`;
                }
                
            }
                   
        },
    }
})();

// App

var appController = (function(itemCalc, UICtrl) {

    var data = itemCalc.getData();

    var itemID;

    var setUpEventListeners = function() {
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

    /* var displayItems = function() {
        UICtrl.updateValues(data.items);
    } */

    return {
        init: () => {
            setUpEventListeners();
        }
    }

})(itemCalculation, UIController);

appController.init();























