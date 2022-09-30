const axios = require('axios')
const BASE_URL = 'https://swapi.dev/api/people'

const getUser = async (name) => {
    const endpoint = `${BASE_URL}/?search=${name}&format=json`
    const {data} = await axios.get(endpoint)

    return data
} 

module.exports = {
    getUser
}