// import dependencies (#1)
const express = require('express');
const app = express();
const path = require('path');

const PORT = 3001;
const pathToDist = '';  // TODO: replace with relative path to dist directory

const handleGetRequest = function(req, res) {
  res.send('Get request is working, this is a placeholder please send data!')
}
// use middleware (#3 if testing client connection first)
app.use(express.static(path.join(__dirname, pathToDist)))

// create routes (#3 if testing server first)
app.get('/foo', handleGetRequest)

// start server (#2)
app.listen(PORT, () => {console.log('Server is now listening on PORT:', PORT)})