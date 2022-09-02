const service = require('../../service')

const main = async () => {
    try {
        const result = await service.getUser('a')
        const names = []

        console.time('for')
        for(let i = 0; i <= result.results.length -1; i++) {
            const user = result.results[i]

            names.push(user.name)
        }
        console.timeEnd('for')

        console.time('forIn')
        for(let i in result.results) {
            const user = result.results[i]

            names.push(user.name)
        }
        console.timeEnd('forIn')

        console.time('forOf')
        for(user of result.results) {
            names.push(user.name)
        }
        console.timeEnd('forOf')

        console.log('names:', names)
    }catch(error) {
        console.error('Error:', error)
    }
}

main()