var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];

var cardsInPlay =[];

function flipCard(){

	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank +" of " + cards[cardId].suit + " located at " + "'" +cards[cardId].cardImage+"'");
	this.setAttribute('src',cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
	checkForMatch(cardId);
	};
}

function checkForMatch(cardId){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match! Great Job!");
}	else{
		alert("Sorry! Try Again!");
	}

}

function createBoard(){
	for(let i = 0; i < cards.length ;i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}



createBoard();







