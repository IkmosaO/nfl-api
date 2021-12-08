const teams = require('../teams')

const saveNewTeam = (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('A field is missing')
  }
  const newTeam = {
    id, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = {
  saveNewTeam
}
