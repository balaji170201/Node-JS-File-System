const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const folderPath = '\Files'; 

app.get('/get-text-files', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      throw err;
    }

    const textFiles = files.filter((file) => path.extname(file) === '.txt');
    res.json(textFiles);
  });
});

const port = 8000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
