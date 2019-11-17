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

var score = 0;
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
		score = score + 1;
		document.getElementById('score').textContent = "Score: "+score;
		alert("You've found a match! Great Job!");
		return score;

}	else{
		alert("Sorry! Try Again!");
	}

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



function createBoard(){
	for(let i = 0; i < cards.length ;i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		let randomNum = getRandomInt(4);
		cardElement.setAttribute('data-id',randomNum);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);


	}
}

//Add reset function - resets cardsInPlay array and 'src' attribute of selevted game pieces.

function resetBoard(){
	for(let i =0;i < cards.length;i++){
	let cardElement = document.getElementsByTagName('img')[i];
	cardElement.setAttribute('src','images/back.png');
	let randomNum = getRandomInt(4);
	let resetCard = document.getElementsByTagName('img')[0];
	resetCard.setAttribute('data-id',randomNum);
	if(i === 3){

		
		return cardsInPlay = [];
	}

	};
};





document.getElementById('reset').addEventListener('click',resetBoard);

createBoard();







