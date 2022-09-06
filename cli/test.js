const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_INSERTED = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () => {
    // it('deve cadastrar um Heroi usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_INSERTED

    //     ok(null, expected)
    // })

    it('deve pesquisar um Heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_INSERTED
        const [result] = await database.get(expected.id)

        deepEqual(result, expected)
    })
})

