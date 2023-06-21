// Code your solutions in this file
//For loop
function writeCards (cards, eventName) {
    const newMessages = [];

    for (let i = 0; i < cards.length; i++){
        let message = (`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
        newMessages.push(message);
    }
    return newMessages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

//While Loop
function countDown(n){

    while (n >= 0) {
        console.log(n--);
    }
}
countDown(10);
