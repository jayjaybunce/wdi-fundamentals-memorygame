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
	let numbers = shuffle();
	for(let i = 0; i < cards.length ;i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		// let randomNum = getRandomInt(4);
		cardElement.setAttribute('data-id',numbers[i]);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Add reset function - resets cardsInPlay array and 'src' attribute of selevted game pieces.

function shuffle() {
    let numbers = [0,1,2,3]
    for(var j, x, i = numbers.length; i; j = parseInt(Math.random() * i), x = numbers[--i], numbers[i] = numbers[j], numbers[j] = x);
    return numbers;
};




function resetBoard(){
	let numbers = shuffle();
	for(let i =0;i < cards.length;i++){
	let cardElement = document.getElementsByTagName('img')[i];
	cardElement.setAttribute('src','images/back.png');
	let resetCard = document.getElementsByTagName('img')[i];
	resetCard.setAttribute('data-id',numbers[i]);
	console.log(numbers[i])
	if(i === 3){		
		return cardsInPlay = [];
	}

	};
};

function flipCard(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank +" of " + cards[cardId].suit + " located at " + "'" +cards[cardId].cardImage+"'");
	this.setAttribute('src',cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
	checkForMatch(cardId);
	};
}




document.getElementById('reset').addEventListener('click',resetBoard);

createBoard();







