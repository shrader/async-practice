/* 
Asynchronous Code in JavaScript»
Let’s have some fun working with callbacks, promises, and async / await!

Use what you’ve learning about asynchronous operations for these.

Part 2: Deck of Cards»
Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. 
Once you have the card, console.log the value and the suit (eg “5 of spades”, “queen of diamonds”).

Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
Once you have the card, make a request to the same API to get one more card from the same deck.

Once you have both cards, console.log the values and suits of both cards.

Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck,
 and show a button on the page that will let you draw a card. 
Every time you click the button, display a new card, until there are no cards left in the deck. */

let deckId;


async function getDeckId() {
    let deckObj = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
    console.log(deckObj);
    deckId = deckObj.data['deck_id'];
    
}

async function getCard() {
    if (deckId) {
        let card1 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        card1Info = card1.data["cards"][0];
        console.log(card1Info["value"], card1Info['suit']);
    }
    

}

getDeckId();

$('#draw-card-button').on('click', getCard);