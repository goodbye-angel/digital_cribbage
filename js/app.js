// console.log("heyyyyy cat");

//window onload
$(() => {

  //Make deck
  const deckOfCards = [];
  const cardSuits = ["hearts", "diamonds", "clubs", "spades"];
  const cardValues = [
    {face: "ace", num: 1},
    {face: "two", num: 2},
    {face: "three", num: 3},
    {face: "four", num: 4},
    {face: "five", num: 5},
    {face: "six", num: 6},
    {face: "seven", num: 7},
    {face: "eight", num: 8},
    {face: "nine", num: 9},
    {face: "ten", num: 10},
    {face: "jack", num: 10},
    {face: "queen", num: 10},
    {face: "king", num: 10}
  ];

  const createDeck = () => {
    for (let i = 0; i < cardSuits.length; i++) {
      for (let a = 0; a < cardValues.length; a++) {
        deckOfCards.push({face: cardValues[a].face, suit: cardSuits[i], value: cardValues[a].num});
      }
    }
  }

  createDeck();
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

  shuffleDeck();
  // console.log(newDeck);














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
