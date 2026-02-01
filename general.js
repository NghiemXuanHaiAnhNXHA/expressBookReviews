const axios = require('axios');

/**
 * Helper function to handle HTTP responses consistently.
 * Prints user-friendly messages depending on the status code.
 */
function handleResponse(response, context) {
  if (response.status === 200) {
    console.log(`${context}:`, response.data);
  } else if (response.status === 404) {
    console.log(`${context}: Not found`);
  } else {
    console.log(`${context}: Unexpected error (status ${response.status})`);
  }
}

/**
 * Retrieves all books written by a given author.
 * @param {string} author - The name of the author to search for.
 */
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/books?author=${author}`);
    handleResponse(response, "Books by author");
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

/**
 * Retrieves all books that match a given title.
 * @param {string} title - The title of the book to search for.
 */
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/books?title=${title}`);
    handleResponse(response, "Books by title");
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

/**
 * Retrieves a book by its ISBN number.
 * @param {string} isbn - The ISBN of the book to search for.
 */
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:5000/books/${isbn}`);
    handleResponse(response, "Book by ISBN");
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
  }
}

// Example calls (comment out before submission if not needed)
getBooksByAuthor("John Doe");
getBooksByTitle("Node Basics");
getBooksByISBN("1234567890");
