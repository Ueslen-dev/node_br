const{ getUser } = require('../../service')

Array.prototype.myFilter = (callback) => {
    const list = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)

        if(!result) continue;
        list.push(item)
    }

    return list
}
const main = async () => {
    try {
        const { results } = await getUser('a')

        console.time('filterAndMap')
        const larsFamily = results.filter((user) => {
            const result = user.name.toLowerCase().indexOf('lars') !== -1

            return result
        })

        const names = larsFamily.map((user) => user.name)
        console.timeEnd('filterAndMap')

        const larsFamilyMyFilter = results.myFilter((user) => {
            const result = user.name.toLowerCase().indexOf('lars') !== -1

            return result
        })

        console.log('names:', names)
        console.log('names:', larsFamilyMyFilter)
    }catch(error) {
        console.error('error:', error)
    }
}

main()