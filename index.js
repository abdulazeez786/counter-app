// Set initial count
let count = 0;

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
            // Only increase if count is less than 10
            if (count < 10) {
                count++;
            } else {
                alert("Maximum limit of 10 reached!");
            }
        } else {
            count = 0;
        }

        // Visual feedback
        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "#222";

        // If it hits 10, maybe make it bold and gold?
        if (count === 10) {
            value.style.color = "orange";
        }

        value.textContent = count;
    });
});
