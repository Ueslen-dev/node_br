const { readFile } = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(readFile)

class Database {
    constructor() {
        this.FILE_NAME = 'herois.json'
    }

   async getDataFile() {
        const file = await readFileAsync (this.FILE_NAME, 'utf8')

        return JSON.parse(file.toString())
    }

    postDataFile() {

    }
    
    async get(heroiId) {
        const data = await this.getDataFile()
        const dataFilter = data.filter(({ id }) => 
        heroiId ? id === heroiId : true)

        return dataFilter
    }
}

module.exports = new Database()