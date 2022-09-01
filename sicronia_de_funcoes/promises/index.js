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

const getAddress= (ddd, callback) => {
   if(ddd) {
    setTimeout(() => {
        return callback(null, {
            address: 'Salvador',
            uf: 'BA' 
        })
    }, 3000)
   }
}

const asyncGetAddress = util.promisify(getAddress)

const user = getUser()

user
.then((user) => {
    return getTelephone(user.id)
    .then((telephone) => {
        return asyncGetAddress(telephone.ddd)
        .then((address) => {
            return {user, telephone, address}
        })
    })
})
.then((response) => {
    console.log('response', response)
})
.catch((error) => {
    console.log('error', error)
})