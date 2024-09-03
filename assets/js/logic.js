// Select the theme switcher button and container element
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// Initialize the variable to track the current theme, defaulting to "dark"
let mode = "dark";

// Event listener for the theme switcher button
themeSwitcher.addEventListener("click", function () {
  // Toggle the theme mode between "dark" and "light"
  if (mode === "dark") {
    // Switch to light mode
    mode = "light";
    // Update the container's class to "light" and change the switcher button emoji
    container.setAttribute("class", "light");
    themeSwitcher.textContent = "🌒"; // Moon emoji for light mode
  } else {
    // Switch to dark mode
    mode = "dark";
    // Update the container's class to "dark" and change the switcher button emoji
    container.setAttribute("class", "dark");
    themeSwitcher.textContent = "☀️"; // Sun emoji for dark mode
  }
  // Log the current mode (optional for debugging)
  console.log(`Current mode: ${mode}`);
});
