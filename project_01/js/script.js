 // 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote
// 5. display random quote

// Navigation
var p = document.querySelector('.text-quote');
var button = document.querySelector('button');

var quotes = [
  'Be yourself; everyone else is already taken.',
  'So many books, so little time.',
  'Be the change that you wish to see in the world.',
  'A room without books is like a body without a soul.',
  'In three words I can sum up everything I've learned about life: it goes on.',
  'If you tell the truth, you don't have to remember anything.',
  'A friend is someone who knows all about you and still loves you.',
];

function getRandomQuote(){
    // logic here
 	var getNumber = Math.floor(Math.random() * quotes.length);
    p.innerHTML = quotes[getNumber];
}


// Get random quote on init
getRandomQuote();
console.log(getRandomQuote());

// Add event listener for random quote button
button.addEventListener('click', getRandomQuote);

