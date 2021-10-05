let notes = [
  {
    id: 1,
    content: 'Me tengo que subscribir a midudev en Youtube',
    date: '2019-03-30T17:30:33.098z',
    important: true
  },

  {
    id: 2,
    content: 'Tengo que estudiar las clases del Fullstack bootcamp',
    date: '2019-05-20T18:30:33.098z',
    important: false
  },

  {
    id: 3,
    content: 'Repasar los retos de JS de midudev',
    date: '2019-03-30T19:20:33.098z',
    important: true
  }
]

const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')

app.use(express.json())

app.use(logger)

/* const http = require('http')

const app = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'application/json'})

    response.end(JSON.stringify(jsonFile))

}) */

app.get('/', (request, response) => {
  response.send('<h1>Bienvenido a la API de bootcamp</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)

  const note = notes.filter((note) => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter((note) => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map((note) => note.id)
  const maxId = Math.max(...ids)
  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  }

  notes = [...notes, newNote]

  response.status(201).json(newNote)
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  })
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
