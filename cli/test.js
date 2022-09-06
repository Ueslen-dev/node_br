const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_INSERTED = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () => {
    // before(async () => {
    //     await database.post(DEFAULT_ITEM_INSERTED)
    // })

    it('deve cadastrar um Heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_INSERTED
        const result = await database.post(DEFAULT_ITEM_INSERTED)
        const [currentHero] = await database.get(DEFAULT_ITEM_INSERTED.id)

        ok(currentHero, expected)
    })

    it('deve pesquisar um Heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_INSERTED
        const [result] = await database.get(expected.id)

        deepEqual(result, expected)
    })

    it('deve remover um heroi por id', async () => {
        const expected = true
        const result = await database.delete(DEFAULT_ITEM_INSERTED.id)

        deepEqual(result, expected)
    })
})

