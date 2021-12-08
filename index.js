const express = require('express')
const teams = require('./teams')
const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.send({ teams })
})

app.get('/:id', (request, response) => {
  const { id } = request.params
  const findId = teams.filter(team => team.id === Number(id))

  return response.send(findId)
})



app.listen(1344)
