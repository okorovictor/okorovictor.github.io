// Declare Variable
var count = 0;

// Grab DOMs
const btn_up = document.querySelector('[data-btn-up]');
const btn_down = document.querySelector('[data-btn-down]');
const show_count = document.querySelector('[data-text]');


// Handle Event
btn_up.addEventListener("click", addOne);
btn_down.addEventListener("click", minusOne);

// Functions 
function addOne() {
    count += 1;
    show_count.textContent = count;
}

function minusOne() {
    count -= 1;
    show_count.textContent = count;
}