const fs = require("fs");

//Sync...
fs.writeFileSync('./test.txt', 'Hey dear!')

//Async
fs.writeFile('./test.txt', 'Hey World Async!', (err) => {})

const result = fs.readFileSync('./contacts.txt', 'utf-8');
console.log(result);

const result = fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log("Error", err);
    }else{
        console.log(result)
    }
})

fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());

//to append
fs.appendFileSync('./test.txt', `${Date.now()}I am Shristi. New to nodeJS\n`);

//to copy
fs.cpSync("./test.txt", "./copy.txt");

// //to delete
fs.unlinkSync("./copy.txt")   

//to get the details
const status = fs.statSync("./test.txt");

console.log(status);

//to make directories, files
fs.mkdirSync('myDocs/a/b', {recursive: true});
