// Data and calculation

/* Section notes and ideas:

If I add random JS files to the backup folder with global variables, will it mess things up?  They're not linked to the HTML... so I would think not...

Modify individual effects for more clarity?

*/

const itemCalculation = (function() {

    const data = useItemData.getItemData();

    const calculation = {
        
        getCalculation: [
            {
                stackType: 'linear', 
                operation: function(itemIndex, effIndex) {
                    //console.log(`itemIndex is ${itemIndex}, effIndex is ${effIndex}`);
                    const itemEffectGroup = data.items[itemIndex].effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    const linearCalc = function() {
                        if (itemEffectGroup.total === 0) {
                            itemEffectGroup.total += itemEffectGroup.value;
                        } else {
                            itemEffectGroup.total += itemEffectGroup.stackValue;
                        }
                    };
                    if (itemEffectGroup.stackCap) {
                        if (itemEffectGroup.stackNumber <= itemEffectGroup.stackCap) {
                            linearCalc();
                        }
                    } else {
                        linearCalc();
                    }
                    
                    //console.log(data.items);
                }
            },
            {
                stackType: 'hyperbolic',
                operation: function(itemIndex, effIndex) {
                    //console.log(`itemIndex is ${itemIndex}, effIndex is ${effIndex}`);
                    const itemGroup = data.items[itemIndex];
                    const itemEffectGroup = itemGroup.effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    if (itemGroup.itemName === 'focused-convergence') {
                        if (itemEffectGroup.stackNumber <= itemEffectGroup.stackCap) {
                            itemEffectGroup.total = 1 / (2 * itemEffectGroup.stackNumber);
                        }
                    } else {
                        itemEffectGroup.total = 1 - 1 / (1 + itemEffectGroup.stackValue * itemEffectGroup.stackNumber);
                    }

                    //console.log(data.items);
                }
            },
            {
                stackType: 'exponential',
                operation: function(itemIndex, effIndex) {
                    //console.log(`itemIndex is ${itemIndex}, effIndex is ${effIndex}`);
                    const itemGroup = data.items[itemIndex];
                    const itemEffectGroup = itemGroup.effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    if (itemEffectGroup.total === 0) {
                        itemEffectGroup.total = itemEffectGroup.value;
                    } else {
                        if (itemGroup.itemName === 'fuel-cell' || itemGroup.itemName === 'alien-head') {
                                itemEffectGroup.total = 1 - (Math.pow((1 - itemEffectGroup.stackValue), itemEffectGroup.stackNumber));
                        } else if (itemGroup.itemName === 'h3ad-5t-v2' || itemGroup.itemName === 'corpsebloom') {
                            itemEffectGroup.total = itemEffectGroup.total * itemEffectGroup.stackValue;
                        } else if (itemGroup.itemName === 'gesture-of-the-drowned') {
                            itemEffectGroup.total = 1 - (itemEffectGroup.value * Math.pow((1 - itemEffectGroup.stackValue), (itemEffectGroup.stackNumber - 1)));
                        } else if (itemGroup.itemName === 'shaped-glass') {
                            if (itemEffectGroup.effect === 'Damage') {
                                itemEffectGroup.total = Math.pow(2, itemEffectGroup.stackNumber);
                            } else {
                                itemEffectGroup.total = Math.pow(0.5, itemEffectGroup.stackNumber);
                            }
                        }

                    }

                    //console.log(data.items);
                }
            },
            {
                stackType: 'special',
                operation: function(itemIndex, effIndex) {
                    const itemGroup = data.items[itemIndex];
                    const itemEffectGroup = itemGroup.effects[effIndex];
                    itemEffectGroup.stackNumber += 1;
                    if (itemGroup.itemName === 'bandolier') {
                        itemEffectGroup.total = 1 - 1 / Math.pow((1 + itemEffectGroup.stackNumber), 0.33);
                    } else if (itemGroup.itemName === 'rusted-key') {
                        // do we want to get into item chance?
                        itemEffectGroup.total += itemEffectGroup.stackValue;
                    }

                    //console.log(data.items);
                }
            },
            {
                stackType: 'equipment',
                operation: function(itemIndex, effIndex) {
                    // *******run a console.log on the data.items to see if stackNumber is working correctly for the equipment*****
                    
                    const itemGroup = data.items[itemIndex];
                    const itemEffectGroup = itemGroup.effects[effIndex];
                    //const itemName = itemGroup.itemName;
                    
                    if (itemEffectGroup.stackNumber === 0) {
                        // loop over equipment objects and check if any other stackNumber > 0
                        for (let i = 0; i < data.items.length; i++) {
                            if (data.items[i].rarity === 'equipment') {
                                // notice - hard coded to effects[0]
                                if (data.items[i].effects[0].stackNumber > 0) {
                                    // if so, change that stackNumber to 0
                                    data.items[i].effects[0].stackNumber = 0;
                                }
                            }
                        }
                        // change the new equipment stack to 1
                        itemEffectGroup.stackNumber = 1; 
                    }
                    // only equipment with stackNumber > 0 will be displayed in the UICtrl
                    
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

            calculation.getCalculation.forEach(function(calcElement) {
                effIndexes.forEach(function(effIndex) {
                    if (calcElement.stackType === itemGroup.effects[effIndex].stackType) {

                        calcIndex = calculation.getCalculation.indexOf(calcElement);
                        calculation.getCalculation[calcIndex].operation(itemIndex, effIndex);
                    }
                })
            })
        },

        getItemIndex: function(itemName) {

             let itemIndex;
             //console.log(itemName);
                 data.items.forEach(function(element) {
                     if (itemName === element.itemName) {
                         itemIndex = data.items.indexOf(element);
                         return itemIndex;
                     }
                 })
             //console.log('itemIndex is: ',itemIndex);
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
        // this is not working....................
        displayEquipment: function(itemIndex, effIndexes, dataItems) {
            let itemName, stackCounter;
            
            itemName = dataItems[itemIndex].itemName;

            stackCounter = dataItems[itemIndex].effects[0].stackNumber;
            
            if (stackCounter === 1) {
            
                // display initial image, title and stack count
                document.querySelector('.item-list').insertAdjacentHTML('afterbegin', `
                
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
                this.displayItemTotals(itemIndex, effIndexes, dataItems);
            } 
        },
        // ........................

        getItemTotals: function(itemIndex, effIndexes, dataItems) {

            const itemTotalArray = [];

            effIndexes.forEach(function(element) {

                let itemTotal; 
                const itemEffectGroup = dataItems[itemIndex].effects[element];
                
                /* ----- Display floating numbers with up to 2 decimals where needed ----- */
                if (itemEffectGroup.percentage) {
                    itemTotal = Math.round((itemEffectGroup.total + Number.EPSILON) * 1000) / 10 + '%';
                } else if (itemEffectGroup.value % 1 !== 0 || itemEffectGroup.stackValue % 1 !== 0) {
                    itemTotal = Math.round((itemEffectGroup.total + Number.EPSILON) * 100) / 100;                 
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
                let effArrayIndex = effIndexes.indexOf(effIndex);
                console.log(effIndex, effArrayIndex);
                
                
                for (let i = 0; i < itemTotalArray.length; i++) {
                    
                    let totalArrayIndex = i;
                    let itemTotal = itemTotalArray[i];
                    console.log(itemTotal, totalArrayIndex);
                    
                    if (totalArrayIndex === effArrayIndex) {

                        if (itemGroup.effects[0].stackNumber === 1) {
                            console.log('init works');
                            console.log(itemGroup.itemName, effArrayIndex, itemTotal, itemGroup.effects[effArrayIndex].effect);
                            // this is not working...

                            // **********removing an equipment item should be just as simple as calling a querySelector on 'cooldown' and removing its parent div if the target doesn't equal the existing element (based on itemName)**********
                            
                            if (itemGroup.rarity === 'equipment') {
                                document.querySelector(`.${itemGroup.itemName} .item-description`).insertAdjacentHTML('beforeend', `
                                    
                                    <div class="cooldown">
                                        Cooldown: ${itemGroup.effects[effArrayIndex].cooldown}
                                    </div>
                                    
                                `);
                            } else {
                                document.querySelector(`.${itemGroup.itemName} .item-description`).insertAdjacentHTML('beforeend', `
                                    
                                    <div class="item-effect">
                                        ${itemGroup.effects[effArrayIndex].effect}: <span class=${'item-total-' + (effArrayIndex + 1)}>${itemTotal}</span>
                                    </div>
                                    
                                `);
                            }
                        } else if (itemGroup.effects[0].stackNumber > 1) {
                            console.log('secondary works');
                            console.log(itemGroup.itemName, effArrayIndex, itemTotal);
                            document.querySelector(`.${itemGroup.itemName} .item-description div span.${'item-total-' + (effArrayIndex + 1)}`).innerHTML = `${itemTotal}`;
                        }


                    }
                }
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

    const data = useItemData.getItemData();

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























