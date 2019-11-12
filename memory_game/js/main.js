var cards = ["queen","queen","king","king"];
var cardsInPlay =[];

var cardOne = cards[2];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("Use flipped " +cardOne+ " and " + cardTwo);

if (cardsInPlay.length === 2){
	console.log("Two cards have been played");
}	if(cardOne === cardTwo){
		alert("You've found a match");
}	else{
		alert("Sorry, try again!");
}
