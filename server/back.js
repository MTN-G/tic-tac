const express = require('express');
const app = express();

const fs = require("fs").promises

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static('../tic-tac-toe/build/index'))


app.get('/api/v1/records', async (req, res) => {
    const script = await fs.readFile('./records.json');
    const json = JSON.parse(script)
    res.send(json)
  })

app.post('/api/v1/records', async (req, res)=>{
    if (req.body){
        const script = await fs.readFile('./records.json');
        const json = JSON.parse(script);
        req.body.id = json.length + 1
        json.push(req.body);
        await fs.writeFile('./records.json', JSON.stringify(json));
        res.send(req.body);
    } else res.send('failed')
})







app.listen(8080);