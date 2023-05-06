const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('/opt/render/project/src/api/index.html')
});

app.post("/webhook", (req, res) => {
    let body = req.body;
    res.send('It works');
    
  
    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
