const util = require('util')

const getUser = () => {
    //resolve: quando for sucesso
    //reject: quando ocorrer algumerro
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve( 
                {
                    id: 1,
                    name: 'Ueslen'
                }
            )
        }, 1000)
    })   
}

const getTelephone = (userId) => {
   return new Promise((resolve, reject) => {
    if(userId) {
       return (
        setTimeout(() => {
            return resolve({
                telephone: '+557135658',
                ddd: 71 
            })
        }, 2000)
       )
    }
   })
}

const getAddress= (userId) => {
   return new Promise((resolve, reject) => {
    if(userId) {
        return (
            setTimeout(() => {
                return resolve({
                    address: 'Salvador',
                    uf: 'BA' 
                })
            }, 3000) 
        )
        }
   })
}

const main = async () => {
    try {
        console.time('medida-promise')

        const user = await getUser()

        const promiseAll = await Promise.all([
            getTelephone(user.id),
            getAddress(user.id),
        ])

        console.log({
            user,
            telephone: promiseAll[0],
            address: promiseAll[1]
        }, 'retorno')

        console.timeEnd('medida-promise')
    } catch(error) {
        console.log('error:', error)
    }
}

main()
