const quotes = [
  " “Be yourself; everyone else is already taken.” ",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
  "“So many books, so little time.” "
];

const authors = [
  "― Oscar Wilde ",
  " ― Marilyn Monroe ",
  " ― Albert Einstein ",
  " ― Frank Zappa "
];
var previousIndex = -1; 

var quoteOutput = document.getElementById('quoteOutput');
var authorOutput = document.getElementById('authorOutput');
 function generateQuote() {
  let randomIndex;
  
  // Generate a new random index until it's different from the previous one
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousIndex);
  
  // Update the content of the quote and author elements with the randomly selected quote and author
  quoteOutput.innerText = quotes[randomIndex];
  authorOutput.innerText = authors[randomIndex];

  // Store the current random index as the previous index for the next comparison
  previousIndex = randomIndex;
};