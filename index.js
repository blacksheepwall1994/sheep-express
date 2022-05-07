const express = require('express');
const bodyParser = require('body-parser');
const home = require('./routes/home')
// const commands = require('./routes/commands')
const app = express();
const path = require('path')

// app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'data')));

// app.use(commands)
app.use(home);

app.use('/', (rep, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(80, () => {
    console.log('Server is running on port 80');
});


