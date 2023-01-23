const express = require("express")
const addUser = require("./controllers/userControl.js")
const router = express.Router();

router.post('/addUser', addUser);

router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

module.exports = router