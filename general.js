const axios = require('axios');

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/books?author=${author}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
