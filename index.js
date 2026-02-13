let count = 0;

const value = document.querySelector("#value");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");

// Function to update the display and check limits
function updateDisplay() {
    value.textContent = count;

    // 1. Handle Colors
    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count === 0) value.style.color = "#222";

    // 2. The Stop Logic (The Lock)
    if (count >= 10) {
        count = 10; // Force it to stay at 10
        value.textContent = count;
        value.style.color = "orange";
        btnIncrease.disabled = true; // Physically disable the button
        btnIncrease.style.opacity = "0.5";
        btnIncrease.style.cursor = "not-allowed";
    } else {
        // Re-enable if we are below 10
        btnIncrease.disabled = false;
        btnIncrease.style.opacity = "1";
        btnIncrease.style.cursor = "pointer";
    }
}

// Event Listeners
btnIncrease.addEventListener("click", () => {
    count++;
    updateDisplay();
});

btnDecrease.addEventListener("click", () => {
    count--;
    updateDisplay();
});

btnReset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
