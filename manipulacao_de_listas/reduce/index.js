const{ getUser } = require('../../service')

Array.prototype.myReduce = (callback, initialValue) => {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
    for(let index = 0; index <= this.length -1; index++) {
        finalValue = callback(finalValue, this[index], this)
    }

    return finalValue
}
   

const main = async() => {
    try {
        const { results } = await getUser('a')
        
        const heights = results.map((user) => parseInt(user.height))
        const total = heights.myReduce((prev, next) => prev+next)

        console.log('total:', total)
    }catch(error) {
        console.error('error:', error)
    }
}

main()