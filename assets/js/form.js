// Select form input elements and error message display
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitInput = document.querySelector("#submit");
const errorMessage = document.querySelector("#error-message");

// Initialize an empty array to store form entries
let entries = [];

// Function to initialize the form by loading stored entries from local storage
function init() {
  const storedEntries = JSON.parse(localStorage.getItem("blogForm"));

  // If there are stored entries, merge them into the current entries array
  if (storedEntries !== null) {
    entries = entries.concat(storedEntries);
  }
}

// Function to redirect the user to the blog page
function goToBlog() {
  window.location.href = "blog.html";
}

// Function to handle form submission
function handleInput(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  console.log(usernameInput.value, titleInput.value, contentInput.value);
  
  // Create a new blog form object with trimmed values from the input fields
  const blogForm = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim()
  };
  
  // Check if any form fields are empty
  if (blogForm.username === "" || blogForm.title === "" || blogForm.content === "") {
    // Display error message if any field is empty
    errorMessage.style.display = "block";
  } else {
    // Add the new blog form entry to the entries array
    entries.push(blogForm);
    // Store the updated entries array in local storage as a JSON string
    localStorage.setItem("blogForm", JSON.stringify(entries));
    // Redirect to the blog page
    goToBlog();
  }
}

// Add event listener to the submit button to handle form submission
submitInput.addEventListener("click", handleInput);

// Initialize the form by loading any existing entries from local storage
init();