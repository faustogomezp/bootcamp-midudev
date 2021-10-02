const csv = require('csvtojson')
var fs = require('fs');

try {
    var data = fs.readFileSync('./Logger_0_2020-02-13_10-18-30_000000.csv', 'utf8');
   var newData = data.replace('This is the header text', '').trim()
    console.log(newData);    
} catch(e) {
    console.log('Error:', e.stack);
}

/* const converter = csv()
    .fromString(newData)
     .fromFile('./Logger_0_2020-02-13_10-18-30_000000.csv') 
    .then((json) => {
        console.log(json)
    }) */

    csv({
        delimiter: '\t'
    })
    .fromString(newData)
    .then((csvRow)=>{ 
        jsonFile = csvRow // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
    })


const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(jsonFile))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)