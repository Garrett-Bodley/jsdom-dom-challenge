document.addEventListener("DOMContentLoaded", function() {
  runTimer();
  adjustTimer();
  numbersLiker();
  toggleTimer();
  commentSection();
}); 

// As a user, I should see the timer increment every second once the page has loaded.


let counter = document.getElementById('counter');

function runTimer() {
  timer = setInterval(incrementTimer, 1000);
}

function getCount() {
  return parseInt(counter.innerText, 10);
};

function incrementTimer() {
  let count = getCount();
  counter.innerText = `${++count}`;
};

function decrementTimer() {
  let count = getCount();
  counter.innerText = `${--count}`;
};


// As a user, I can manually increment and decrement the counter using the plus and minus buttons.


function adjustTimer() {
  let minusButton = document.getElementById('minus');
  let plusButton = document.getElementById('plus');
  

  minusButton.addEventListener('click', function(){
    decrementTimer()
  }); 

  plusButton.addEventListener('click', function() {
    incrementTimer()
  });
};


// As a user, I can 'like' an individual number of the counter. 
// I should see count of the number of 'likes' associated with that number.


function numbersLiker() {
  let heart = document.getElementById('heart');

  heart.addEventListener('click', function() {
    likeNumber();
  });
};


function likeNumber() {
  let likes = Array.from(document.getElementsByTagName('li'));
  let like = likes.find(matchingCount);

  if (!!like) {
    incrementLikeCount(like);
  } else {
    appendNewLike();
  }


  // helper functions
  function incrementLikeCount(like) {
    let likeCount = parseInt(like.children[0].innerText, 10);
  
    if (likeCount == 1) {
      like.children[0].innerText = ++likeCount;
      like.innerHTML = `${like.innerHTML}s`;
    } else {
      like.children[0].innerText = ++likeCount;
    };
  };

  function matchingCount(like) {
    return like.dataset.num == getCount();
  };

  function appendNewLike() {
    let newNode = createNode();
    document.querySelector('ul').appendChild(newNode);

    function createNode() {
      let node = document.createElement('li');
      node.dataset.num = getCount();
      node.innerHTML = `${getCount()} has been liked <span>1</span> time`;
      return node;
    };
  };
};


// As a user, I can pause the counter, which should
  // pause the counter
  // disable all buttons except the pause button
  // the pause button should then show the text "resume."


function toggleTimer() {
  let pauseButton = document.getElementById('pause');

  pauseButton.addEventListener('click', function(){
    if (pauseButton.innerText == 'pause') {
      clearInterval(timer);
      disableButtons();
      pauseButton.innerText = `resume`;
    } else {
      runTimer();
      enableButtons();
      pauseButton.innerText = `pause`
    };
  });

  function disableButtons() {
    let buttons = getButtons()
    buttons.forEach(function(e){e.disabled = true});
  };

  function enableButtons() {
    let buttons = getButtons()
    buttons.forEach(function(e){e.disabled = false});
  };

  function getButtons() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let pauseIndex = buttons.findIndex(function(e){return e.id == 'pause'});
    buttons.splice(pauseIndex, 1);
    return buttons;
  };
};


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."


function commentSection() {
  let form = document.getElementById('comment-form');
  let commentList = document.getElementById('list');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    let formInput = document.getElementById('comment-input').value
    if (!!formInput){
      let comment = createCommentNode(formInput);
      commentList.appendChild(comment);
    };
  });

  function createCommentNode(text){
    let node = document.createElement('p');
    node.innerText = text;
    return node;
  };
};