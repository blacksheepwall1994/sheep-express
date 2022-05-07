const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
})
router.get('/commands', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'commands.html'));
})
router.get('/invite', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'invite.html'));
})
router.get('/vote', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'vote.html'));
})

module.exports = router;