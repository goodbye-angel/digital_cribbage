// console.log("heyyyyy cat");

//window onload
$(() => {

//Game setup
  //Make deck
  const deckOfCards = [];
  const cardSuits = ["hearts", "diamonds", "clubs", "spades"];
  const cardValues = [
    {face: "A", num: 1},
    {face: "2", num: 2},
    {face: "3", num: 3},
    {face: "4", num: 4},
    {face: "5", num: 5},
    {face: "6", num: 6},
    {face: "7", num: 7},
    {face: "8", num: 8},
    {face: "9", num: 9},
    {face: "10", num: 10},
    {face: "J", num: 10},
    {face: "Q", num: 10},
    {face: "K", num: 10}
  ];

  const createDeck = () => {
    for (let i = 0; i < cardSuits.length; i++) {
      for (let a = 0; a < cardValues.length; a++) {
        deckOfCards.push({face: cardValues[a].face, suit: cardSuits[i], value: cardValues[a].num});
      }
    }
  }

  // createDeck();
  // console.log(deckOfCards);

  //Shuffle deck
  const newDeck = [];

  const shuffleDeck = () => {
    for (let i = 0; i < 52; i++) {
      let randomNum = Math.floor(Math.random() * deckOfCards.length);
      newDeck.push(deckOfCards[randomNum]);
      deckOfCards.splice(randomNum, 1);
    }
  }

  // shuffleDeck();
  // console.log(newDeck);

  //Deal cards
  const playerHand1 = [];
  const playerHand2 = [];

  const dealCards = () => {
    for (let i = 0; i < 6; i++) {
      playerHand1.push(newDeck[i]);
      newDeck.splice(i, 1);
    }
    for (let a = 0; a < 6; a++) {
      playerHand2.push(newDeck[a]);
      newDeck.splice(a, 1);
    }
  }

  // dealCards();
  // console.log(playerHand1);
  // console.log(playerHand2);

  //Cut deck
  let cutCard = 0;

  const cutDeck = () => {
      let cut = Math.floor(Math.random() * newDeck.length);
      cutCard = newDeck[cut];
  }

  // cutDeck();
  // console.log(cutCard);

  //Throw cards to crib
  const crib = [];

  const throwCards = (event) => {
    for (let i = 1; i <= 2; i++)
    crib.push(event.currentTarget);
  }


//----------------------------------------------------------------

//Play game
//Create elements
  //Create play area
  const $playArea = $('<div>').attr('id', 'play-area');
  $('body').append($playArea);

  //Create shuffle button
  const $shuffleBtn = $('<button>').text('Shuffle cards').addClass('button');

  //Create play button
  const $playBtn = $('<button>').text('Play!').addClass('button');
  $playArea.append($playBtn);

  //Create deal button
  const $dealBtn = $('<button>').text('Deal cards').addClass('button');

  //Create cut button
  const $cutBtn = $('<button>').text('Cut a card').addClass('button');

  //Create UI for hands of cards
  const $hand1 = $('<div>').text("Player One's Hand")
    .attr('id','hand1');
  const $hand2 = $('<div>').text("Player Two's Hand")
    .attr('id','hand2');

  const displayHand1 = () => {
    for (let i = 0; i < playerHand1.length; i++) {
      let $card = $('<div>').text(playerHand1[i].face + " of " + playerHand1[i].suit);
      $hand1.append($card);
    }
  }

  const displayHand2 = () => {
    for (let i = 0; i < playerHand2.length; i++) {
      let $card = $('<div>').text(playerHand2[i].face + " of " + playerHand2[i].suit);
      $hand2.append($card);
    }
  }


//Actions
  //Create deck and setup event listener for shuffle button
  const startGame = () => {
    createDeck();
    $playArea.append($shuffleBtn);
    $shuffleBtn.on('click', setup1);
    $playBtn.remove();
  }

  //Shuffle deck and setup event listener for deal button
  const setup1 = () => {
    shuffleDeck();
    $playArea.append($dealBtn);
    $dealBtn.on('click', setup2)
    $shuffleBtn.remove();
  }

  //Deal cards, show hands to players, throw cards to crib
  const setup2 = () => {
    dealCards();
    $dealBtn.remove();
    $playArea.append($hand1, $hand2);
    $hand1.append(displayHand1);
    $hand2.append(displayHand2);
    //black out screen, offer button to show player 1's hand and throw cards to the crib
    //repeat for player 2
  }

  //Show/hide players' hands


  $playBtn.on('click', startGame);
















  //Player 1's hand
    //push 6 cards to an array
  //Player 2's hand
    //push 6 cards to an array
  //Crib
    //each player chooses 2 cards to throw
    //push 4 cards to an array
  //The cut
    //1 card
    //store in a variable
  //Player 1's score
    //each hand
    //entire game
  //Player 2's score
    //each hand
    //entire game

//Visual elements
  //Board
  //Deck


//Game flow
  //Setup phase - deal and other initial setup
    //player 1 deals first (poss cut for deal)
    //deals 6 cards to each player
    //each player throws two cards to dealer's crib
    //non-dealer cuts deck
  //Play phase - play through hand
    //non-dealer starts
    //each player chooses a card from their hand to play
    //players score as they play if:
      //the first and second cards played in a count add up to 15
        //2 pts
      //three or more cards played in a row are sequential numbers
        //1 pt for each card
      //two or more cards played in a row have the same face value
        //2 pts for each pair
      //all cards played in a count add up to 31
        //2 pts
      //the last card played in a count if no one can play without going over 31 (a "go")
        //1 pt
      //the last card played in a hand/phase (the 8th card)
        //1 pt
    //phase lasts until all 8 cards have been played
  //Scoring phase - counting the hand
    //non-dealer counts first
    //dealer counts hand and crib
    //cut card from the setup phase is included as part of players' hands and the crib
    //players score if:
      //any two cards in their hand have numeric values that add up to 15
        //2 pts
      //three or more cards in their hand are sequential numbers
        //1 pt for each card
      //two or more cards have the same face value
        //2 pts for each pair
  //Repeat play and scoring phases until one player reaches or exceeds 121 points
































});//
