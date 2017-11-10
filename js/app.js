console.log("heyyyyy cat");

//window onload
$(() => {

//Elements
  //Deck of cards
    //array of objects
    //properties:
      //face value
      //suit
      //numeric value
  //Player 1's hand
    //push cards to an array
  //Player 2's hand
    //push cards to an array
  //Crib
    //push cards to an array
  //The cut
    //store in a variable
  //Deck
    //visual only
  //Board
    //visual only
  //Player 1's score
    //each hand
    //entire game
  //Player 2's score
    //each hand
    //entire game

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
