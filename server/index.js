const express = require('express');
const app = express();
const PORT = 5500;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log('Server is up and listening at port 5500.')
})