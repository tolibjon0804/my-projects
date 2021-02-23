const symbols = document.querySelectorAll(".symbol button");
const numbers = document.querySelectorAll(".num button");
const message1 = document.querySelector(".msg1");
const message2 = document.querySelector(".msg2");

let problem = "";
let msg3 = "";

numbers.forEach(function (item) {
  item.addEventListener("click", function () {
    msg3 += item.innerHTML;
    message2.textContent = msg3;
  });
});

symbols.forEach(function (item1) {
  item1.addEventListener("click", function () {
    problem += msg3;
    if (item1.innerHTML === "=") {
      message2.textContent = eval(problem);
      message1.textContent = "";
      msg3 = "";
      problem = eval(problem);
    } else if (item1.innerHTML === "C") {
      msg3 = "";
      problem = "";
      message2.textContent = "";
      message1.textContent = "";
    } else if (item1.innerHTML === "^") {
      problem += item1.value;
      message1.textContent = problem;
      message2.textContent = "";
      msg3 = "";
    } else {
      problem += item1.innerHTML;
      message1.textContent = problem;
      message2.textContent = "";
      msg3 = "";
    }
  });
});
