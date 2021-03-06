let bids = [];


function placeBid() {
    let firstbid = document.getElementById('bid1').valueAsNumber;
    bids.push(firstbid);
    console.log(bids);
    saveLocStorage('bidded', bids);
    updateBid(document.getElementById('displaybid'), bids);
    
}

function placeBid2() {
    let secondbid = document.getElementById('bid2').valueAsNumber;
    bids.push(secondbid);
    console.log(bids);
    saveLocStorage('bidded', bids);
    updateBid(document.getElementById('displaybid'), bids);
}

function updateBid(element, array) {
    let div = document.createElement('div');
    div.innerHTML = `$${array[array.length - 1]}`;
    element.appendChild(div);
    highestBid();
}

function highestBid() {
    retrieveLocStorage('bidded');
    let highest = Math.max(...bids);
    document.getElementById('topHighest').innerHTML = `$${highest}`;
}

function saveLocStorage(name, array) {
    window.localStorage.setItem(name, JSON.stringify(array));
}

function retrieveLocStorage(name) {
    bids = JSON.parse(window.localStorage.getItem(name));
}

console.log(retrieveLocStorage);




// Create a function that will retrieve the array of bids from localStorage