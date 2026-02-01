/**
 * general.js
 * 
 * This module demonstrates how to retrieve book details from the ExpressBookReview API
 * using async/await with Axios. It includes functions to query books by author, title,
 * and ISBN, plus additional helper functions for reviews and error handling.
 * 
 * Requirements covered:
 * - getBooksByAuthor
 * - getBooksByTitle
 * - getBooksByISBN
 * 
 * Extra features:
 * - getAllBooks
 * - getBookReviews
 * - addOrUpdateReview
 * - deleteReview
 * - centralized error handling
 */

const axios = require('axios');

// Base URL for the API
const BASE_URL = "http://localhost:5000";

/**
 * Centralized error handler to ensure consistent logging.
 * @param {Error} error - The error object thrown by Axios or runtime.
 * @param {string} context - Description of the operation being attempted.
 */
function handleError(error, context) {
  if (error.response) {
    // Server responded with a status code outside 2xx
    console.error(`${context} failed with status ${error.response.status}:`, error.response.data);
  } else if (error.request) {
    // Request was made but no response received
    console.error(`${context} failed: No response received`, error.request);
  } else {
    // Something else happened
    console.error(`${context} failed:`, error.message);
  }
}

/**
 * Retrieves all books in the database.
 */
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("All books:", response.data);
  } catch (error) {
    handleError(error, "Fetching all books");
  }
}

/**
 * Retrieves books written by a specific author.
 * @param {string} author - The author name to filter by.
 */
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books?author=${author}`);
    console.log(`Books by author "${author}":`, response.data);
  } catch (error) {
    handleError(error, "Fetching books by author");
  }
}

/**
 * Retrieves books that match a specific title.
 * @param {string} title - The book title to filter by.
 */
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books?title=${title}`);
    console.log(`Books with title "${title}":`, response.data);
  } catch (error) {
    handleError(error, "Fetching books by title");
  }
}

/**
 * Retrieves a book by its ISBN.
 * @param {string} isbn - The ISBN identifier of the book.
 */
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${isbn}`);
    console.log(`Book with ISBN "${isbn}":`, response.data);
  } catch (error) {
    handleError(error, "Fetching book by ISBN");
  }
}

/**
 * Retrieves reviews for a specific book.
 * @param {string} isbn - The ISBN identifier of the book.
 */
async function getBookReviews(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/review/${isbn}`);
    console.log(`Reviews for ISBN "${isbn}":`, response.data);
  } catch (error) {
    handleError(error, "Fetching book reviews");
  }
}

/**
 * Adds or updates a review for a specific book.
 * @param {string} isbn - The ISBN identifier of the book.
 * @param {string} username - The user submitting the review.
 * @param {string} review - The review text.
 */
async function addOrUpdateReview(isbn, username, review) {
  try {
    const response = await axios.put(`${BASE_URL}/review/${isbn}`, {
      username,
      review
    });
    console.log(`Review added/updated for ISBN "${isbn}":`, response.data);
  } catch (error) {
    handleError(error, "Adding/updating review");
  }
}

/**
 * Deletes a review for a specific book.
 * @param {string} isbn - The ISBN identifier of the book.
 */
async function deleteReview(isbn) {
  try {
    const response = await axios.delete(`${BASE_URL}/review/${isbn}`);
    console.log(`Review deleted for ISBN "${isbn}":`, response.data);
  } catch (error) {
    handleError(error, "Deleting review");
  }
}

// Example calls (comment out before submission if not needed)
getAllBooks();
getBooksByAuthor("George Orwell");
getBooksByTitle("1984");
getBooksByISBN("3");
getBookReviews("3");
addOrUpdateReview("3", "hai", "A timeless classic!");
deleteReview("3");

// Export functions for testing or reuse
module.exports = {
  getAllBooks,
  getBooksByAuthor,
  getBooksByTitle,
  getBooksByISBN,
  getBookReviews,
  addOrUpdateReview,
  deleteReview
};
