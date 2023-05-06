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
    
  // Send a 200 OK response if this is a page webhook

  if (body.object === "page") {
    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
    //console logs
    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
