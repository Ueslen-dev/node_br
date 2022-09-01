const getUser = (callback) => {
    setTimeout(() => {
        return callback(null, 
            {
                id: 1,
                name: 'Ueslen'
            }
        )
    }, 1000)
}

const getTelephone = (userId, callback) => {
    if(userId) {
        setTimeout(() => {
            return callback(null, {
                telephone: '+557135658',
                ddd: 71 
            })
        }, 2000)
    }
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

const resolveCall = (error, user) => {
    if(error)  {
        console.log(`error:${error}`)
        return
    }

    console.log('user:', user)

    getTelephone(user.id, (error, telephone) => {
        if(error)  {
            console.log(`error:${error}`)
            return
        }

        console.log('telephone:', telephone)
    
        getAddress(telephone.ddd, (error, address) => {
            if(error)  {
                console.log(`error:${error}`)
                return
            }

            console.log('address:', address)
        })
    })
} 

getUser(resolveCall)