const express = require('express');
const bodyParser = require('body-parser');
//need to import book router
const bookRouter = require('./routes/book.router');
const movieRouter = require('./routes/movie.router');

const app = express();
const PORT = process.env.PORT || 5000;

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
// GO FIND THE ROUTER YOU WANT

//still need to use the bookRouter that we have brought in
app.use('/book', bookRouter);

app.use('/movie', movieRouter);

