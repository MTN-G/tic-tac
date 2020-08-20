const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static('../tic-tac-toe/build/index'))

const records = [
    {
        id: 1,
        name: "Matan G",
        date: "19/08/2020 20:3:56"
    }
]

app.get('/api/v1/records', (req, res) => {
    res.send(records)
  })

app.post('/api/v1/records', (req, res)=>{
    records.push(req.body);
    res.send(req.body);
})







app.listen(8080);