let res = document.querySelector(".result");

let btnClr = document.querySelector("#btnClr");

let btns = document.querySelectorAll(".btn");

let evaluate = document.querySelector(".btnEql");

let btnDel = document.getElementById("btnDel");

let operator = false;

btnClr.addEventListener("click", function () {
  res.innerHTML = "";
});

btnDel.addEventListener("click", function () {
  let a = res.innerHTML.slice(0, -1);
  res.innerHTML = a;
});

for (let i = 0; i < btns.length; i++) {
  let b = btns[i];
  b.addEventListener("click", function () {
    if (
      (res.innerHTML.includes("+") && b.innerHTML == "+") ||
      (res.innerHTML.includes("-") && b.innerHTML == "-") ||
      (res.innerHTML.includes("/") && b.innerHTML == "/") ||
      (res.innerHTML.includes("*") && b.innerHTML == "*") ||
      (res.innerHTML.includes(".") && b.innerHTML == ".")
    ) {
      return;
    }


    if (
      (res.innerHTML == "" && b.innerHTML == "/") ||
      (res.innerHTML == "" && b.innerHTML == "*")
    ) {
      return;
    }

    if (
      b.innerHTML === "+" ||
      b.innerHTML === "-" ||
      b.innerHTML == "*" ||
      b.innerHTML == "/"
    ) {
      if (operator && res.innerHTML.length > 0) {
        return;
      }
      if(!res.innerHTML.includes("+")|| !res.innerHTML.includes("-") || !res.innerHTML.includes("*") || !res.innerHTML.includes("/")){
          operator=true
     }
  }

    res.innerHTML += b.innerHTML;
  });
}

evaluate.addEventListener("click", function () {
  let a = eval(res.innerHTML).toFixed(2);
  operator = false;
  res.innerHTML = a;
});
