const express = require("express");
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/app', (req, res) => {
    return res.status(200).send({"message": "app res from server 2"});
});

const port = 5002;

app.listen(port, () => console.log(`server is up and running from ${port}`));
