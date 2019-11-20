
var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/harder_img/QH.jpg"
},
{
	rank:"queen",
	suit:"clubs",
	cardImage:"images/harder_img/QC.jpg"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/harder_img/QD.jpg"
},
{
	rank:"queen",
	suit:"spades",
	cardImage:"images/harder_img/QS.jpg",
},
{
	rank:"king",
	suit:"clubs",
	cardImage:"images/harder_img/KC.jpg",
},
{
	rank:"kind",
	suit:"spaces",
	cardImage:"images/harder_img/KS.jpg",
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/harder_img/KH.jpg"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/harder_img/KD.jpg"
},
{
	rank:"jack",
	suit:"diamonds",
	cardImage:"images/harder_img/JD.jpg",
},
{
	rank:"jack",
	suit:"clubs",
	cardImage:"images/harder_img/JC.jpg",
},
{
	rank:"jack",
	suit:"spades",
	cardImage:"images/harder_img/JS.jpg",
},
{
	rank:"jack",
	suit:"hearts",
	cardImage:"images/harder_img/JH.jpg",
},
{
	rank:"ace",
	suit:"diamonds",
	cardImage:"images/harder_img/AD.jpg",
},
{
	rank:"ace",
	suit:"clubs",
	cardImage:"images/harder_img/AC.jpg",
},
{
	rank:"ace",
	suit:"spades",
	cardImage:"images/harder_img/AS.jpg",
},
{
	rank:"ace",
	suit:"hearts",
	cardImage:"images/harder_img/AH.jpg",
},
];

var score = 0;
var cardsInPlay =[];




function softReset(){
	for(let i =0;i < cards.length;i++){
	let cardElement = document.getElementsByTagName('img')[i];
	cardElement.setAttribute('src','images/back.png');

}
}


function checkForMatch(cardId){
	if(cardsInPlay[0] === cardsInPlay[1]){
		score = score + 1;
		document.getElementById('score').textContent = "Score: "+score;
		alert("You've found a match! Great Job!");
		return score;

}	else{
		
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
		cardElement.setAttribute('class','harder_img');
		cardElement.setAttribute('data-id',numbers[i]);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Add reset function - resets cardsInPlay array and 'src' attribute of selevted game pieces.

function shuffle() {
    let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    for(var j, x, i = numbers.length; i; j = parseInt(Math.random() * i), x = numbers[--i], numbers[i] = numbers[j], numbers[j] = x);
    return numbers;
}




function resetBoard(){
	let numbers = shuffle();
	for(let i =0;i < cards.length;i++){
	let cardElement = document.getElementsByTagName('img')[i];
	cardElement.setAttribute('src','images/back.png');
	let resetCard = document.getElementsByTagName('img')[i];
	resetCard.setAttribute('data-id',numbers[i]);
	if(i === 15){		
		return cardsInPlay = [];
	}

	}
}

function flipCard(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank +" of " + cards[cardId].suit + " located at " + "'" +cards[cardId].cardImage+"'");
	this.setAttribute('src',cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
	checkForMatch(cardId);
	}
}




document.getElementById('reset').addEventListener('click',resetBoard);

createBoard();