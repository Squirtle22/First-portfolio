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

// Get the link container element by its ID
const linkContainer = document.getElementById("links");

// Create a function to generate and display the links
function createLinks() {
    links.forEach(linkData => {
        const linkElement = document.createElement("a");
        linkElement.href = linkData.link;
        linkElement.className = "link";
        linkElement.target = "_blank";

        const imageElement = document.createElement("img");
        imageElement.src = linkData.image;



        // Append the image, name, and icon to the link element
        linkElement.appendChild(imageElement);

        // Append the link element to the link container
        linkContainer.appendChild(linkElement);
    });
}

// Call the function to generate and display the links
createLinks();