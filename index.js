const express = require('express')
const bodyParser = require('body-parser')
const teams = require('./teams')
const app = express()
const { saveNewTeam } = require('./controller/teams')

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.send({ teams })
})

app.get('/:id', (request, response) => {
  const { id } = request.params
  const findId = teams.filter(team => team.id === Number(id))

  return response.send(findId)
})

app.post('/', bodyParser.json(), saveNewTeam)



app.listen(1345)
