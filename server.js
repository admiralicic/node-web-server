const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({name: 'Admir', likes: [
        'biking',
        'cities'
    ]});
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({errorMessage: 'Unable to fulfill this request.'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});