# Function

## Function là gì?

- Function là một khối code (block code) để gom nhóm các khối code lặp đi lặp lại thành 1 cụm để sử dụng nhiều lần sau này.

## Cú pháp

- Cú pháp khai báo function

```js
function functionName(){
  // block code
  // logic code 
}
```

- Cú pháp call/invoke/gọi hàm

```js
functionName();
```

- Cú pháp khai báo tham số / parameter

```js
function functionName($parameters){
  // block code
  // logic code 
}

function functionName($parameter1, $parameter2){
  // block code
  // logic code 
}
```


- Ví dụ 

```js
function getAndConsoleUserName(){
  const userName = prompt("What is your name?");
  console.log("Hello " + userName);
}

getAndConsoleUserName()
```

