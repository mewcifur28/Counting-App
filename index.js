let count = 0;
let countEl = document.getElementById("count-el");

function displayCount() {
    countEl.textContent = count;
}

displayCount();

function inc() {
    count += 1;
    displayCount();
}

function dec() {
    count -= 1;
    displayCount();
}

function save() {
    document.getElementById("history").textContent += ` ${count},`;
    count = 0;
    displayCount();
}

function reset() {
    document.getElementById("history").textContent = "History:";
    count = 0;
    displayCount();
}

