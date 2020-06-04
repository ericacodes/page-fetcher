const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2)
const url = args[0];
const localPath = args[1];

request(url, (error, body) => {
  if (error) console.log('error:', error);
  fetch(body); 
});


const fetch = body => {
  fs.writeFile(localPath, body, error => {
    if (error) console.log('error:', error);
    request(url, (error, response) => {
      if (error) console.log('error', error);
    const size = response.headers['content-length'];
    console.log(`Downloaded and saved ${size} bytes to ${url}`);
    });
  });
};