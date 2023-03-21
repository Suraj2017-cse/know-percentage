let inputValue = document.getElementById("input");
const maxValue = document.getElementById("max");
const progress = document.querySelector(".progress");
const progressEl = document.querySelector(".progress_2");

let input = 0;
let max = 0;


function changeheight() {
    if (input > max) {
        alert(`Error: Input value exceeds maximum value  ${maxValue.value}`);
        progress.style.height = `0%`;
    } else {
        progress.style.height = `${(input / max) * 100}%`;
        progress.innerHTML = `${Math.ceil((input / max) * 100)}%`;
    }
}

function changeheightEl() {
    if (input > max) {
        alert(`Error: Input value exceeds maximum value  ${maxValue.value}`);
        progress.style.height = "0%";
    } else {
        progressEl.style.height = `${(input / max) * 100}%`;
        progressEl.innerHTML = `${Math.ceil((input / max) * 100)}%`;
    }
}

inputValue.addEventListener("keyup", () => {
    input = parseInt(inputValue.value, 10);
    changeheight();
    changeheightEl();
})
maxValue.addEventListener("keyup", () => {
    max = parseInt(maxValue.value, 10);
    changeheight();
    changeheightEl()
})