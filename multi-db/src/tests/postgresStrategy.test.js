const assert = require('assert')
const Postgres = require('../database/strategies/postgres')
const Context = require('../database/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HERO_INSERT = {
    name: 'Doende verde',
    power: 'Anel verde'
}

describe('Postgres Strategy', () => {
    beforeEach(async () => {
        await context.connect()
    })
    it('Postgres Connection', async () => {
        const result = await context.isConnected()

        assert.equal(result, true)
    })

    it('cadastrar', async () => {
        const result = await context.create(MOCK_HERO_INSERT)
        delete result.id
        
        assert.deepEqual(result, MOCK_HERO_INSERT)
    })
})



    