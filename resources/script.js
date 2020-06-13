// Data and calculation

/* Section notes and ideas:

Items that obviously need reworking (calculations not working):



- head-st v2
- corpsebloom
- focused convergence
- gesture of the drowned
- shaped glass
- halcyon seed
- irradiant pearl

*/

const itemCalculation = (function() {

    const data = useItemData.getItemData();

    const calculation = {
        
        getCalculation: [
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
                    } else if (itemGroup.itemName === 'h3ad-5t-v2') {
                        if (itemEffectGroup.total === 0) {
                            itemEffectGroup.total = itemEffectGroup.value;
                        } else {
                            itemEffectGroup.total = itemEffectGroup.total * itemEffectGroup.stackValue;
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
            },
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























