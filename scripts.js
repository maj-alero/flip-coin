let head = document.getElementById("coin-head");
let tail = document.getElementById("coin-tail");
let result_head = document.getElementById("head");
let result_tail = document.getElementById("tail");
let flipButton = document.getElementById("flip-button");
flipButton.addEventListener("click", flipCoin);
function flipCoin() {
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
        head.style.display = "block";
        tail.style.display = "none";
        result_head.style.display = "block";
        result_tail.style.display = "none";
    } else {
        head.style.display = "none";
        tail.style.display = "block";
        result_tail.style.display = "block";
        result_head.style.display = "none";
    }
}