// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the static files in the public directory
app.use(express.static('public'));

// Use the comments.js file
app.use('/comments', require('./comments'));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});