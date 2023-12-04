// const hungName = prompt("What is your name?");
// console.log("Hello " + hungName);

// const hungName1 = prompt("What is your name?");
// console.log("Hello " + hungName1);

// const hungName2 = prompt("What is your name?");
// console.log("Hello " + hungName2);


function getAndConsoleUserName() {
  const userName = prompt("What is your name?");
  console.log("Xin chào " + userName + "!");
}

function whereDoYouLive() {
  const location = prompt("Where do you live?");
  console.log("Are you  in " + location + "?");
}

function whatIsYourHobby() {
  const hobby = prompt("What is your hobby?");
  console.log("Your hobby: " + hobby + "!!!");
}

// getAndConsoleUserName()

// whereDoYouLive()

// whatIsYourHobby()

function getAndConsoleUserAnswer(question, label, lichSu) {
  const answer = prompt(question);
  console.log(label + answer + lichSu);
}

// getAndConsoleUserAnswer("What is your name?", "Xin chào ","!" );
// getAndConsoleUserAnswer("Where do you live?", "You are in ", "?");
// getAndConsoleUserAnswer("What is your hobby?", "Your hobby: ","!!!");

function sum(a, b) {
  const result = a + b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

// cho 2 số a và b. Tính kết quả: (a * b) + (a + b)



// định nghĩa
function nhanVaCong(a, b) {
  // a = 1 
  // b = 2
  const result = sum(multiply(a, b), sum(a, b)); // 2 + 3
  console.log(result);
  return result;
}

// gọi hàm ra để sử dụng
let soA = 1;
let soB = 2;
nhanVaCong(soA, soB);

// Tạo 1 function cho phép người dùng nhập vào 2 số a,b. sau đó tính kết quả: 
// ((a - b) * (a * a) * (b * b) ) / (a + b))
// em phải tạo các hàm: sum, subtract, multiply, divide

