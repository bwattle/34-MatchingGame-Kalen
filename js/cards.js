// List of all cards icons
var CardsBeginner = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-paper-plane-o",
    "fa fa-cube", "fa fa-bicycle", "fa fa-diamond", "fa fa-bicycle", "fa fa-anchor",
    "fa fa-cube"];

var CardsIntermediate = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt",
    "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle",
    "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb",
    "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

var CardsAdvanced = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt",
    "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle",
    "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb",
    "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube", "fa fa-bug", "fa fa-apple",
    "fa fa-book", "fa fa-money", "fa fa-book", "fa fa-money", "fa fa-apple", "fa fa-bug"];

// An empty array where values of open cards are pushed to compare.
var OpenCards = [];
//An empty array of cards where shuffled cards are stored.
var shuffleCards = [];
var tilesFlipped = 0;
var numOfmoves = 0;

// Function to shuffle an array of cards.
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

