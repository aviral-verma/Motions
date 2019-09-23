const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(___dirname + '/dist'));

app.listen(process.env.PORT || 4200);

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname + '/dist/YouTube/index.html'));
})

console.log('Console Listening');