document.addEventListener("DOMContentLoaded", function() {
  function doStuff() {
    console.log("hello!");
  };
  setInterval(doStuff, 1000);


  adjustTimer();
}); 

function runTimer() {
  window.setInterval(console.log('second'), 1000);
};
// As a user, I should see the timer increment every second once the page has loaded.

function incrementTimer() {
  let counter = document.getElementById('counter');
  let count = parseInt(counter.innerText, 10);
  counter.innerText = `${++count}`;
};

function decrementTimer() {
  let counter = document.getElementById('counter');
  let count = parseInt(counter.innerText, 10);
  counter.innerText = `${--count}`;
}


// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

function adjustTimer() {

  let minusButton = document.getElementById('minus');
  let plusButton = document.getElementById('plus');

  minusButton.addEventListener('click', function(e){
    console.log(e.id)
    decrementTimer()
  });

  plusButton.addEventListener('click', function(e) {
    console.log(e.id)
    incrementTimer()
  })
};

// As a user, I can 'like' an individual number of the counter. 
// I should see count of the number of 'likes' associated with that number.

// As a user, I can pause the counter, which should
  // pause the counter
  // disable all buttons except the pause button
  // the pause button should then show the text "resume."