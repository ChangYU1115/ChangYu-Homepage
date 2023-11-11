// const password = 123456;
// var input;
// let i = 0;

// while (input != password) {
//   input = prompt("請輸入密碼");
//   i++;
//   if (i > 3) {
//     alert("嘗試太過次囉");
//     i = 0;
//   }
// }
// alert("登入成功");
// i = 0;

// 問答程式

// input = [
//   { prompt: "香蕉是什麼顏色 \n (a)黃色 \n (b)紫色  \n (c)彩色", answer: "a" },
//   { prompt: "香蕉是什麼顏色 \n (a)黃色 \n (b)紫色  \n (c)彩色", answer: "b" },
//   { prompt: "香蕉是什麼顏色 \n (a)黃色 \n (b)紫色  \n (c)彩色", answer: "c" },
// ];

// var score = 0;

// for (i = 0; i < input.length; i++) {
//   var question = prompt(input[i].prompt);
//   if (question == input[i].answer) {
//     score++;
//   }
// }

// console.log("您答對了 " + score + " 題");

// 二維陣列

// var a = [[1, 2, 3], [4, 5, 6], [7, 8], [9]];

// 巢狀迴圈 (多個迴圈)

// for (i = 0; i <br a.length; i++) {
//   for (j = 0; j < a[i].length; j++) {
//     document.write(a[i][j]);
//   }
//   document.write("<br/>");
// }

// class (物件的模板)

// class PHONE {
//   constructor(number, years, is_wasterproof) {
//     this.number = number;
//     this.years = years;
//     this.is_wasterproof = is_wasterproof;
//   }
//   phone_age() {
//     return 2023 - this.years;
//   }
// }

// var Phone1 = new PHONE(30, 2022, false);
// var Phone2 = new PHONE(50, 2011, true);

// document.write(Phone1.is_wasterproof);
// document.write("</br>");
// document.write(Phone2.phone_age());

// 取得 HTML 元素

var input = document.getElementById("title");
var btn = document.getElementById("btn");
var content = document.getElementById("content");
var list = document.getElementById("list");

btn.addEventListener("click", function () {
  list.innerHTML =
    list.innerHTML +
    `
    <div class="box">
      <h2>${input.value}</h2>
      <p>${content.value}</p>
    </div>
    `;
  input.value = " ";
  content.value = " ";
});

// alert(資料);
// prompt(提示語, 預設值);

// continue 強制進行下一次迴圈
// break 強制跳出迴圈
