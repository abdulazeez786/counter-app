// Set initial count
let count = 0;
const MAX_LIMIT=10;

// Select the value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        // Logic for each button
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        // Change color based on number
        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "#222";

        value.textContent = count;
    });
});
