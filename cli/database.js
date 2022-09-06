const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.FILE_NAME = 'herois.json'
    }

   async getDataFile() {
        const file = await readFileAsync (this.FILE_NAME, 'utf8')

        return JSON.parse(file.toString())
    }

    async postDataFile(data) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data))

        return true
    }

    async post (hero) {
        const data = await this.getDataFile()
        const id = hero.id <= 2 ? hero.id : Date.now()

        const heroData = [
            ...data,
            {
                id,
                ...hero
            }
        ]


        const result = await this.postDataFile(heroData)

        return result
    }

    async get(heroId) {
        const data = await this.getDataFile()
        const dataFilter = data.filter(({ id }) => 
        heroId ? id === heroId : true)

        return dataFilter
    }

    async delete(heroId) {
        if(!heroId) {
           return await this.postDataFile([])
        }

        const data = await this.getDataFile()
        const dataFiltered = data.filter(({ id }) => id !== heroId)

        return await this.postDataFile(dataFiltered)
    }
}

module.exports = new Database()