var cards = [{
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
}];



var cardsInPlay = [];
var score = 0;



//-----------
//shuffle is pulled from https://github.com/Daplie/knuth-shuffle
function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//----------



var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById("score").textContent = score+=1;
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(){
	var cardId=this.getAttribute('data-id');
	
	cardsInPlay.push(cards[cardId].rank);
	// console.log(cards[cardId].cardImage + " and " + cards[cardId].suit);

	this.setAttribute('src',cards[cardId].cardImage);
	this.setAttribute('class',"flipped")

	if(cardsInPlay.length===2){
		checkForMatch();
	}
}

var createBoard = function(){
	
	for(var i = 0;i<cards.length;i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png')
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);

		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetButton = function(){
	var flippedCards = document.getElementsByClassName("flipped");
	for (var i = 0; i < flippedCards.length; i++){
		flippedCards[i].setAttribute("src","images/back.png");
		//flippedCards[i].classList.remove("flipped");
	}
	for (var i = flippedCards.length-1; i >= 0; i--){
		flippedCards[i].classList.remove("flipped");
	}


	cardsInPlay = [];
}
var shuffleCards = function(){
	resetButton();
	shuffle(cards);
}







createBoard();