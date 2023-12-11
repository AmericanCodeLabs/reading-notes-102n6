// array 
const animal = ["Dog", "Cat", "Lion", "Tiger"];

console.log(animal);

// kiểm tra xem trong mảng này có con Tiger không?

// Lặp qua từng phần tử của mảng animal và kiểm tra giá trị hiện tại có bằng "Tiger" không?
// - Có trả về "Có con tiger"
// - Không trả về "Không có con tiger"


// cú pháp lấy phần tử thức i của array là 
//  array[i] , phần tử đầu tiên i = 0;

let hasTiger = false;
for (let i = 1; i <= 4; i = i + 1) {
  console.log(i);
  const currentAnimal = animal[i - 1];

  console.log(currentAnimal);

  if (currentAnimal == 'Tiger') {
    hasTiger = true;
  }
}

if (hasTiger == true) {

  hasTiger = true;

  console.log("Có con tiger")
  alert("Có con tiger")

} else {

  console.log("Không có con tiger")
  alert("Không có con tiger")
}