const itemData = useItemData.getItemData();
console.log(useItemData);
const wikiData = useWikiData.getItems();
//console.log(wikiData);
//const appData = useAppData();
//console.log(wikiData, appData);

const newBigArray = wikiData.items;
/* console.log(bigArray);

function deleteExistingItemsFromArray() {
    bigArray.forEach(wikiElement => {
        let wikiName = wikiElement.displayName;
        appData.items.forEach(appElement => {
            let appName = appElement.displayName;
            if (wikiName === appName) {
                console.log(wikiName, appName);
                let wikiIndex = bigArray.indexOf(wikiElement);
                console.log(wikiIndex);
                bigArray.splice(wikiIndex, 1);
            }
        })
    })
    return bigArray;
}
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
deleteExistingItemsFromArray();
let newBigArray = deleteExistingItemsFromArray(); */

//console.log(newBigArray);


function getItemName() {
    // convert displayName to lowercase with dashes, without apostraphes
    newBigArray.forEach(element => {
        element.itemName = element.displayName.toLowerCase();
        element.itemName = element.itemName.replace(/'/gm,"");
        element.itemName = element.itemName.replace(/\s/gm,"-");
    })
    //console.log(newBigArray);
    return newBigArray;
}

getItemName();

function deleteNoTier() {
    // for some reason using forEach on newBigArray doesn't work well.  it seems the order of operation with forEach and splice goes - it validates if index item is NoTier, deletes it if so, array changes (ie if another NoTier item follows, it becomes the deleted item's index, but then forEach moves to the following index.  so items that should be deleted are skipped if sequential.)
    for (let i = 0; i < newBigArray.length; i++) {
        let element = newBigArray[i];
        if (element.rarity === 'NoTier') {
            let index = newBigArray.indexOf(element);
            newBigArray.splice(index, 1);
            i = i - 1;
        }
    }
    //console.table(newBigArray);
    return newBigArray;
}

deleteNoTier();

function modifyEffects() {
    newBigArray.forEach(arrElement => {
        // rarity to lower case.
        arrElement.rarity = arrElement.rarity.toLowerCase();
        // effect values to numbers.  detect percentages
        arrElement.effects.forEach(effectElement => {
            effectElement.stackType = effectElement.stackType.toLowerCase();
            if (effectElement.value.includes('%')) {
                effectElement.percentage = true;
                effectElement.value = parseFloat(effectElement.value, 10) / 100;
                effectElement.stackValue = parseFloat(effectElement.stackValue, 10) / 100;
            } else {
                effectElement.value = parseFloat(effectElement.value, 10);
                effectElement.stackValue = parseFloat(effectElement.stackValue, 10);
            }
            effectElement.stackNumber = 0;
            effectElement.total = 0;
        })
    })
    //console.log(newBigArray);
    //console.table(newBigArray);
    return newBigArray;
}

modifyEffects();

let sortedArray;

function sortByRarity() {
    let [common, uncommon, legendary, lunar, boss, equipment] = [[],[],[],[],[],[]];
    
    newBigArray.forEach(element => {
        if (element.rarity === 'common') {
            common.push(element);
        }
    })
    common.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    //console.log(common);
    
    newBigArray.forEach(element => {
        if (element.rarity === 'uncommon') {
            uncommon.push(element);
        }
    })
    uncommon.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    //console.log(uncommon);
    
    newBigArray.forEach(element => {
        if (element.rarity === 'legendary') {
            legendary.push(element);
        }
    })
    legendary.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    //console.log(legendary);
    
    newBigArray.forEach(element => {
        if (element.rarity === 'lunar') {
            lunar.push(element);
        }
    })
    lunar.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    //console.log(lunar);
    
    newBigArray.forEach(element => {
        if (element.rarity === 'boss') {
            boss.push(element);
        }
    })
    boss.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    //console.log(boss);
    
    /* newBigArray.forEach(element => {
        if (element.rarity === 'equipment') {
            equipment.push(element);
        }
    })
    equipment.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    console.log(equipment); */

    sortedArray = common.concat(uncommon, legendary, lunar, boss);
    //console.log(sortedArray);
    return sortedArray;
    
}

sortByRarity();



// display in HTML on page
const insertArr = document.querySelector('.big-array');

insertArr.innerHTML = JSON.stringify(itemData, null, 4);

