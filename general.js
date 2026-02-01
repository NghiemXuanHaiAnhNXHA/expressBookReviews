const axios = require('axios');

// Helper function to handle responses
function handleResponse(response, context) {
  if (response.status === 200) {
    console.log(`${context}:`, response.data);
  } else if (response.status === 404) {
    console.log(`${context}: Not found`);
  } else {
    console.log(`${context}: Unexpected error (status ${response.status})`);
  }
}

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/books?author=${author}`);
    handleResponse(response, "Books by author");
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/books?title=${title}`);
    handleResponse(response, "Books by title");
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

// Get books by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:5000/books/${isbn}`);
    handleResponse(response, "Book by ISBN");
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
  }
}

// Example calls (comment out before submission if needed)
getBooksByAuthor("John Doe");
getBooksByTitle("Node Basics");
getBooksByISBN("1234567890");
