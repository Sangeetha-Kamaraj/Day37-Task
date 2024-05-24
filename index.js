const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; 

// Endpoint to create a text file with current timestamp
app.get('/createFile', (req, res) => {
  const timestamp = new Date().toISOString().replace(/:/g, '-'); // Replace colons with dashes in the timestamp
  const filename = `./files/${timestamp}.txt`;

  fs.writeFile(filename, timestamp, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      console.log('File created successfully:', filename);
      res.send('File created successfully');
    }
  });
});

// Endpoint to retrieve all text files in the folder
app.get('/getAllFiles', (req, res) => {
  fs.readdir('./files', (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading folder');
    } else {
      res.send(files.filter(file => file.endsWith('.txt')));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
