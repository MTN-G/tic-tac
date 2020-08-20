const express = require('express');
const { express} = require('fs');
const app = express();

app.use();

const records = [
    {
        id: 1,
        name: "Matan G",
        date: "19/08/2020 20:03:56"
    }
]

app.get('/api/v1/records', async function (req, res) {
    const records = await fs.readFile()
    res.send(JSON.parse(records))
  })





app.listen(8080);