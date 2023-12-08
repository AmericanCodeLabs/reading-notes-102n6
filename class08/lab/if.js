const gender = prompt("Nhập giới tính của bạn: Nam/Nữ");

// toán tử so sánh == 
const isMale = gender == 'Nam';
console.log(isMale)
/*

if(condition){
  logic code của if
}else{
  logic khi condition = false
}
*/

if (gender == 'Nam') {
  console.log('Tôi là con trai')
} else {
  console.log("Tôi không phải là con trai")
}

