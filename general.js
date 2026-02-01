const axios = require('axios');

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/books?author=${author}`);
    console.log("Books by author:", response.data);
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/books?title=${title}`);
    console.log("Books by title:", response.data);
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

// Get books by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:5000/books/${isbn}`);
    console.log("Book by ISBN:", response.data);
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
  }
}

// Example calls (you can comment these out before submission)
getBooksByAuthor("John Doe");
getBooksByTitle("Node Basics");
getBooksByISBN("1234567890");
