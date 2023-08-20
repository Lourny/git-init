//validate input without regex
let input = document.getElementById("input");
let button = document.getElementById("btn");
let warning = document.getElementById("warning");

button.addEventListener("click", function () {
  if (input.value == "" || input.value == " ") {
    warning.innerHTML = "pls fill the input";
  } else {
    warning.innerHTML = "";
  }
});

//validate inout with regex
let input2 = document.getElementById("input2");
let button2 = document.getElementById("btn2");
let warning2 = document.getElementById("warning2");

//regex with .match() function
let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
button2.addEventListener("click", function () {
  if (input2.value.match(emailPattern)) {
    warning2.innerHTML = " ";
  } else {
    warning2.innerHTML = "pls enter the form in the correcy way";
  }
});

//regex with .test() function
button2.addEventListener("click", function () {
  if (emailPattern.test(input2.value)) {
    warning2.innerHTML = " ";
  } else {
    warning2.innerHTML = "pls enter the form in the correcy way";
  }
});
