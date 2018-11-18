const axios = require('axios')

const getFighters = () => {
  try {
    return axios.get('http://ufc-data-api.ufc.com/api/v3/us/fighters')
  } catch (error) {
    console.error(error)
  }
}

const getImages = async () => {
  const fighters = getFighters()
    .then(response => {
      if (response.fighter.id) {
        console.log(
          `Got ${Object.entries(response.fighter.id).length} fighters`
        )
      }
    })
    .catch(error => {
      console.log(error)
    })
}

getImages()