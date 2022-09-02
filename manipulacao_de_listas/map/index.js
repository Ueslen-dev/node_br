const service = require('../../service')

Array.prototype.myMap = (callback) => {
    const newArrayMaping = []
    for(let indice = 0; indice <= this.length -1; indice++) {
        const result = callback(this[indice], indice)
        newArrayMaping.push(result)
    }

    return newArrayMaping
}

const main = async () => {
    try {
        const result = await service.getUser('a')
        const names = []
        console.time('forEach')
        result.results.forEach((user) => {
            names.push(user.name)
        });
        console.timeEnd('forEach')

        console.time('map')
        const namesMap = result.results.map((user) => user.name)
        console.timeEnd('map')

        console.time('myMap')
        const namesMyMap = result.results.myMap((user) => user.name)
        console.timeEnd('myMap')

        console.log('names:', namesMap)
        console.log('names:', namesMyMap)
        console.log('names:', names)
    }catch(error) {
        console.error('error:', error)
    }
}

main()