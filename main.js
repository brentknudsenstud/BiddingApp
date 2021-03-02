let bids = [];


function placeBid() {
    let firstbid = document.getElementById('bid1').valueAsNumber;
    bids.push(firstbid);
    console.log(bids);
    updateBid(document.getElementById('displaybid'), bids);
    saveLocStorage('bidded', bids);
    
}

function placeBid2() {
    let secondbid = document.getElementById('bid2').valueAsNumber;
    bids.push(secondbid);
    console.log(bids);
    updateBid(document.getElementById('displaybid'), bids);
    saveLocStorage('bidded', bids);
}

function updateBid(element, array) {
    let div = document.createElement('div');
    div.innerHTML = `$${array[array.length - 1]}`;
    element.appendChild(div);

}

function highestBid() {
    retrieveLocStorage('bidded', bids);
    let highest = Math.max(...bids);
    let printHighest = document.createElement('div');
    div.innerHTML = `$${highest}`;
    element.appendChild(printHighest);


}


function saveLocStorage(name, array) {
    window.localStorage.setItem(name, JSON.stringify(array));
}

function retrieveLocStorage(name, array) {
    bids = JSON.parse(window.localStorage.getItem(name));
}

console.log(retrieveLocStorage);



// Create an element that will display an array of bids
// Create two input boxes and two “Place Bid” buttons
// Create a function that will add the array of bids to the element (1)
// Create a function that will take the text in an input box and add it to the array of bids
// Add the function above to the click event of the “Place Bid” buttons 
// Create a function that will save the array of bids to localStorage
// Create a function that will retrieve the array of bids from localStorage