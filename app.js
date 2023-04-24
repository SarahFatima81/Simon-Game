// var buttonColors = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];

// //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
// var started = false;

// //2. Create a new variable called level and start at level 0.
// var level = 0;

// //1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
// $(document).keydown(function() {
//   if (!started) {

//     //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });


// // Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function() {

//   //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//   var userChosenColor = $(this).attr("id");
//   userClickedPattern.push(userChosenColor);
    
//   playSound(userChosenColor);
//   animatePress(userChosenColor);
//    checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//     //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){

//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);

//       }

//     } else {

//       console.log("wrong");

//       playSound("wrong");

//       //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       startOver();
//     }

//     }



// function nextSequence(){
    
//     var randomNumber = Math.floor(Math.random()*4) ;
//     var randomChosenColor = buttonColors[randomNumber];

//     gamePattern.push[randomChosenColor];

// $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);;
   
//     playSound(randomChosenColor);
// }

// function playSound(name){
//     var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor){
//    $("#" + currentColor).addClass("pressed");

// setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// checkAnswer(currentLevel){

// }
// function startOver() {

//   //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//   level = 0;
//   gamePattern = [];
//   started = false;
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


