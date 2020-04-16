// the following is a method of the itemCalculation function changed on 4/10/20 @ 00:39

var calculate = function(itemName) {

    ///////////get itemIndex section
    var itemIndex;
    console.log(itemName);
    if (itemName === 'soldiers-syringe') {
        itemIndex = 0;
    } else {
        data.items.forEach(function(element) {
            if (itemName === element.itemName) {
                itemIndex = data.items.indexOf(element);
            }
        })
    }
    console.log('itemIndex is: ',itemIndex);

    //////////get calcIndexes and run operation section
    let itemGroup = data.items[itemIndex];
    let calcIndex, secondCalcIndex, hasSecondEffect;

    data.calculation.forEach(function(element) {
        if (itemGroup.stackType === element.stackType) {
            calcIndex = data.calculation.indexOf(element);
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
}
