const fs= require('fs')

const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(json =>{
        fs.writeFile('posts.json',JSON.stringify(json), () => {
            console.log('File written to posts.json');
         }); 
}).catch(err => console.error("Error occured : ", err));
