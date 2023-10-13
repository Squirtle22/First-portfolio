document.addEventListener("DOMContentLoaded", function () {
    const textSlider = document.querySelector(".text-slider");
    const textItems = document.querySelector(".text-slider-items").textContent.split(", "); // Split the text into an array of items
    let currentItemIndex = 0;
    let currentText = "";
    let charIndex = 0;

    function animateText() {
        currentText = textItems[currentItemIndex];
        textSlider.textContent = currentText.substring(0, charIndex);
        charIndex++;

        if (charIndex <= currentText.length) {
            setTimeout(animateText, 100); // Adjust the typing speed as needed
        } else {
            charIndex = 0;
            currentItemIndex = (currentItemIndex + 1) % textItems.length;
            setTimeout(animateText, 1000); // Delay before typing the next item (adjust as needed)
        }
    }

    animateText();
});
