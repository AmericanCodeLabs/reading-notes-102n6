
// 1. Cho người dùng nhập vào số a
const soA = prompt("Nhập vào số a");
console.log(soA);

// 2. Cho người dùng nhập vào số b
const soB = prompt("Nhập vào số b");
console.log(soB);

// 3. Tạo hàm sum dùng để nhận 2 số đầu vào là số 1 và số 2 sau đó cộng 2 số này và trả về kết quả
function tong(soThu1, soThu2) {
  const ketqua = Number(soThu1) + Number(soThu2);
  return ketqua;
}

// 4. Tạo hàm subtract dùng để nhận 2 số đầu vào là số 1 và số 2 sau đó trừ 2 số này và trả về kết quả

function tru(soThu1, soThu2) {
  const ketqua = Number(soThu1) - Number(soThu2);
  return ketqua;
}

// 5. Tạo hàm multiply dùng để nhận 2 số đầu vào là số 1 và số 2 sau đó nhân 2 số này và trả về kết quả

function nhan2So(soThu1, soThu2) {
  const ketqua = Number(soThu1) * Number(soThu2);
  return ketqua;
}


function nhan3So(soThu1, soThu2, soThu3) {
  const ketqua = Number(soThu1) * Number(soThu2) * Number(soThu3);
  return ketqua;
}


// 6. Tạo hàm divide dùng để nhận 2 số đầu vào là số 1 và số 2 sau đó chia 2 số này và trả về kết quả

function chia(soThu1, soThu2) {
  const ketqua = Number(soThu1) / Number(soThu2);
  return ketqua;
}

// 7. Tạo ra hàm caculate nhận vào 2 số là số 1 và số 2 sau đó dùng sum, subtract, multiply, divide để tính các biểu thức nhỏ trong biểu thức đề bài và trả về kết quả
//  ((a - b) * (a * a) * (b * b) ) / (a + b))

function tinhToan(soThu1, soThu2) {
  // (a - b) : tru(soThu1, soThu2)
  // (a * a) : nhan2So(soThu1, soThu1)
  // (b * b) : nhan2So(soThu2, soThu2)
  // (a + b) : cong(soThu1, soThu2)
  // (a - b) * (a * a) * (b * b) : nhan3So( tru(soThu1, soThu2) ,nhan2So(soThu1, soThu1),nhan2So(soThu2, soThu2) )

  // soThu1 = 1 ; soThu2 = 2 ; 
  //  ( (1 - 2) * (1 * 1) * (2 * 2) ) / (1 + 2 )
  //  -4 / 3 = -1.333333
  const ketqua = chia(

    nhan3So(
      tru(soThu1, soThu2),
      nhan2So(soThu1, soThu1),
      nhan2So(soThu2, soThu2)
    ),

    tong(soThu1, soThu2)
  )

  return ketqua;
}

const ketqua = tinhToan(soA, soB)
console.log(ketqua);


//   a. sum dùng để tính: (a + b)
//   b. subtract dùng để tính: (a - b)
//   c. multiply dùng để tính: (b * b), (a * a), (a - b) * (a * a), (a - b) * (a * a) * (b * b)
//   d. divide dùng để tính: ((a - b) * (a * a) * (b * b) ) / (a + b))