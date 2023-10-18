const zero = document.getElementById("zero")
const zeroZero = document.getElementById("zero-zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const divide = document.getElementById("divide")
const dot = document.getElementById("dot")
const equals = document.getElementById("equals")
const del = document.getElementById("delete")
const clear = document.getElementById("clear")


var past = document.getElementById("past")
var current = document.getElementById("current")
var currentCal = "2"

zero.addEventListener("click", () => {
    current.innerHTML += "0"
    currentCal += "0"
});

zeroZero.addEventListener("click", () => {
    current.innerHTML += "00"
    currentCal += "00"
});

one.addEventListener("click", () => {
    current.innerHTML += "1"
    currentCal += "1"
});

two.addEventListener("click", () => {
    current.innerHTML += "2"
    currentCal += "2"
});

three.addEventListener("click", () => {
    current.innerHTML += "3"
    currentCal += "3"
});

four.addEventListener("click", () => {
    current.innerHTML += "4"
    currentCal += "4"
});

five.addEventListener("click", () => {
    current.innerHTML += "5"
    currentCal += "5"
});

six.addEventListener("click", () => {
    current.innerHTML += "6"
    currentCal += "6"
});

seven.addEventListener("click", () => {
    current.innerHTML += "7"
    currentCal += "7"
});

eight.addEventListener("click", () => {
    current.innerHTML += "8"
    currentCal += "8"
});

nine.addEventListener("click", () => {
    current.innerHTML += "9"
    currentCal += "9"
});

plus.addEventListener("click", () => {
    current.innerHTML += " &plus; "
    currentCal += "+" 
});

minus.addEventListener("click", () => {
    current.innerHTML += " &minus; ";
    currentCal += "-";
});

times.addEventListener("click", () => {
    current.innerHTML += " &times; ";
    currentCal += "*";
});

divide.addEventListener("click", () => {
    current.innerHTML += " &divide; ";
    currentCal += "/";
});

dot.addEventListener("click", () => {
    current.innerHTML += "."
    currentCal += "."
});

del.addEventListener("click", () => {
    current.innerHTML = current.innerHTML.slice(0, -1);
    currentCal = currentCal.slice(0, -1);
});

clear.addEventListener("click", () => {
    past.innerHTML = "0"
    current.innerHTML = ""
    currentCal = ""
});

equals.addEventListener("click", () => {
    past.innerText = current.innerText;
    currentCal = eval(currentCal);
    current.innerText = currentCal;
});

