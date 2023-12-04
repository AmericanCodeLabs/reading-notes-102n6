// const hungName = prompt("What is your name?");
// console.log("Hello " + hungName);

// const hungName1 = prompt("What is your name?");
// console.log("Hello " + hungName1);

// const hungName2 = prompt("What is your name?");
// console.log("Hello " + hungName2);


function getAndConsoleUserName() {
  const userName = prompt("What is your name?");
  console.log("Xin chào " + userName);
}

function whereDoYouLive() {
  const location = prompt("Where do you live?");
  console.log("You are in " + location);
}

function whatIsYourHobby() {
  const hobby = prompt("What is your hobby?");
  console.log("Your hobby: " + hobby);
}

// getAndConsoleUserName()

// whereDoYouLive()

// whatIsYourHobby()

function getAndConsoleUserAnswer(question){
  const answer = prompt(question);
  console.log(answer);
}

getAndConsoleUserAnswer("What is your name?");
getAndConsoleUserAnswer("Where do you live?");
getAndConsoleUserAnswer("What is your hobby?");

