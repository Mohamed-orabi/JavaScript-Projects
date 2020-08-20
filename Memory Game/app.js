document.addEventListener('DOMContentLoaded', () => {


//card options
const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardWIns = [];


  function createBoard(){
      for (let i = 0; i<cardArray.length;i++){
          var card = document.createElement('img');
          card.setAttribute('src','./images/blank.png');
          card.setAttribute('data-id',i);
          card.addEventListener('click',flipCard);
          grid.appendChild(card);
      }
  }

  //Check For Match
  function checkForMatch(){
      var imgs = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      if(cardsChosen[0] === cardsChosen[1]){
          alert("You found a match");
          imgs[optionOneId].setAttribute('src','./images/white.png');
          imgs[optionTwoId].setAttribute('src','./images/white.png');
          cardWIns.push(cardsChosen);
      }else{
        imgs[optionOneId].setAttribute('src','./images/blank.png');
        imgs[optionTwoId].setAttribute('src','./images/blank.png');
        alert("Sorry,Try again");
      }

      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent =  cardWIns.length;
      if(cardWIns.length === cardArray.length/2){
          resultDisplay.textContent = 'Congrate, You Found all of them'
      }
  }

  //Flip your card
  function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500);
    }
  }













  createBoard();

















});