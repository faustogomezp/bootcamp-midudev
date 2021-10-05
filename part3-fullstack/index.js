const notes = [
    {
        'id': 1,
        "content": "Me tengo que subscribir a midudev en Youtube",
        "date": "2019-03-30T17:30:33.098z",
        "important": true
    },
    {
        'id': 2,
        "content": "Tengo que estudiar las clases del Fullstack bootcamp",
        "date": "2019-05-20T18:30:33.098z",
        "important": false
    },
    {
        'id': 3,
        "content": "Repasar los retos de JS de midudev",
        "date": "2019-03-30T19:20:33.098z",
        "important": true
    }
]

const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(jsonFile))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)