// Select the main section element where blog posts will be rendered
const mainSection = document.querySelector("#main-section");
// Select the back button element
const backButton = document.querySelector("#back-button");
// Initialize an empty array to store blog post entries
let entries = [];

// Function to retrieve and render blog posts from local storage
function renderBlog() {
  // Retrieve stored entries from local storage and parse them
  const storedEntries = JSON.parse(localStorage.getItem("blogForm"));

  // If there are stored entries, add them to the entries array
  if (storedEntries !== null) {
    entries = entries.concat(storedEntries);
  }
  
  // Check if there are any blog posts to display
  if (entries.length > 0) {
    // Loop through each blog post object in the entries array
    for (let index = 0; index < entries.length; index++) {
      const post = entries[index];
      console.log(post);
      
      // Create HTML elements for each blog post
      const section = document.createElement("section");
      const blogTitle = document.createElement("h4");
      const blogContent = document.createElement("p");
      const postedBy = document.createElement("p");
      
      // Set the content of the elements using data from the blog post object
      blogTitle.textContent = post.title;
      blogContent.textContent = post.content;
      postedBy.textContent = "Posted by: " + post.username;
      
      // Append the created elements to the section and the section to the main section
      mainSection.appendChild(section);
      section.appendChild(blogTitle);
      section.appendChild(blogContent);
      section.appendChild(postedBy);
      
      // Add CSS classes to the elements for styling
      section.className = "posts";
      blogTitle.className = "blog-title";
      blogContent.className = "blog-content";
      postedBy.className = "posted-by";
    }
  }
}

// Function to handle the back button click event
function handleBack(event) {
  // Prevent the default action of the button
  event.preventDefault();
  // Navigate to the previous page in the browser history
  window.history.back();
}

// Add event listener to the back button
backButton.addEventListener("click", handleBack);

// Call renderBlog to display blog posts when the page loads
renderBlog();