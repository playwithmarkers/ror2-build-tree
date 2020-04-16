// Data and calculation

/* Section notes and ideas:

Perhaps effects should be further nested as an object or array within the itemName object so we can have multiple effects that are better organized on each item.

Possible to move entire section to a different file?

Perhaps we should add an object property and value of {percentage: boolean} and then pass it into the method UIController.updateValues() to determine the var itemTotal in a more precise way.

*/

var itemCalculation = (function () {

    var data = {
        items: [
            {
                itemName: 'soldiers-syringe',
                displayName: 'Soldier\'s Syringe', 
                rarity: 'common',
                //effect1: {
                    effect: 'attack-speed', 
                    //stackType: 'linear'}, 
                stackType: 'linear', 
                value: 0.15, 
                stackValue: 0.15,
                stackNumber: 0,
                total: 0, 
            },
            {
                itemName: 'tougher-times',
                displayName: 'Tougher Times', 
                rarity: 'common',
                effect: 'block-chance', 
                stackType: 'hyperbolic',
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
                rarity: 'commom',
                effect: 'critical-chance', 
                stackType: 'linear', 
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
                value: 0.14,
                stackValue: 0.14,
                stackNumber: 0,
                total: 0,
            },
            {
                itemName: 'bustling-fungus',
                rarity: 'common',
                effect: 'heal',
                stackType: 'linear',
                value: 0.045,
                stackValue: 0.0225,
                stackNumber: 0,
                total: 0,
                //aoe is a radius in meters
                secondEffect: 'aoe',
                secondType: 'linear',
                secondValue: 3,
                secondStackValue: 1.5,
                secondStackNumber: 0,
                secondTotal: 0
            },
            {
                itemName: 'crowbar',
                rarity: 'common',
                //damage only to enemies above 90% health
                effect: 'damage',
                stackType: 'linear',
                value: 1.50,
                stackValue: 0.30,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'tri-tip-dagger',
                rarity: 'common',
                //bleed effect. 240% base damage
                effect: 'bleed-chance',
                stackType: 'linear',
                value: 0.15,
                stackValue: 0.15,
                stackNumber: 0,
                total: 0
            },
            {
                itemName: 'warbanner',
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
                rarity: 'common',
                //heal when out of combat
                effect: 'heal',
                stackType: 'linear',
                value: 2.50,
                stackValue: 1.50,
                stackNumber: 0,
                total: 0 
            },
            {
                itemName: 'personal-shield-generator',
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
                rarity: 'common',
                //effect applies 1.1s after injury
                effect: 'heal',
                stackType: 'linear',
                value: 10,
                stackValue: 10,
                stackNumber: 0,
                total: 0
            }

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
                    if (itemGroup.secondType === element.stackType) {
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
            //dataItems = data.items

            /* var itemClass = document.querySelector(`.${itemName}`); */
            var itemTotal;
            
            //checks if number is a float and converts to a percentage.  may not be the best solution to convert percentage numbers if numbers that are not percentages have decimals!! see itemController section notes.

            if (!(Number.isInteger(dataItems[itemIndex].value))) {
                itemTotal = Math.round((dataItems[itemIndex].total + Number.EPSILON) * 1000) / 10 + '%';
            } else {
                itemTotal = dataItems[itemIndex].total;
            }

            /* var formatItemName;
            formatItemName = dataItems[itemIndex].itemName.replace('-', ' ');

            console.log(formatItemName);
            formatItemName = formatItemName.replace('-', ' ');

            console.log(formatItemName);


            function capital_letter(str) {
                str = str.split(" ");

                for (var i = 0, x = str.length; i < x; i++) {
                    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
                }

                return str.join(" ");
            }

            formatItemName = capital_letter(formatItemName);
            console.log(formatItemName); */
        
            if (dataItems[itemIndex].stackNumber === 1) {
            
                document.querySelector('.item-list').insertAdjacentHTML('beforeend', `<div class="${itemName} item-list-item"><img src="dist/img/${dataItems[itemIndex].itemName}.png" alt="${dataItems[itemIndex].itemName}" class="item-list-img"><div class="item-description"><h3>${dataItems[itemIndex].itemName}</h3><br>x${dataItems[itemIndex].stackNumber}
                <br>${dataItems[itemIndex].effect}: ${itemTotal}</div></div>`);
            
            } else if (dataItems[itemIndex].stackNumber > 1) {
                
                document.querySelector(`.${itemName}`).innerHTML = 
                
                
                
                `Item: ${dataItems[itemIndex].itemName} Effect: ${dataItems[itemIndex].effect} Number of Items: ${dataItems[itemIndex].stackNumber} Total: ${itemTotal}`;

            }
                   
        }
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























