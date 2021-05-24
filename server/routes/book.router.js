//Still need to get express, doesn't exist outside of server page
const express = require('express');
//This doesnt create a full server, but rather a router widget that can access the server
const router = express.Router();

//import array from server
const bookList = [];

//change from app.get to router.get
//matches /book in server so we don't need to repeat it. We only care what comes after
// everything here is after that /book
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

//Need to make the router available outside of this file
module.exports = router;