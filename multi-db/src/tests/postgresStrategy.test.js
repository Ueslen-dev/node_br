const assert = require('assert')
const Postgres = require('../database/strategies/postgres')
const Context = require('../database/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HERO_INSERT = {
    name: 'Doende verde',
    power: 'Anel verde'
}
const MOCK_HERO_UPDATE = {
    name: 'Goku',
    power: 'Sayjin'
}

describe('Postgres Strategy', () => {
    beforeEach(async () => {
        await context.connect()
        await context.create(MOCK_HERO_UPDATE)
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

    it('listar', async () => {
        const [result] = await context.read({
            name: MOCK_HERO_INSERT.name
        })

        delete result.id

        assert.deepEqual(result, MOCK_HERO_INSERT)
    })

    it('atualizar', async () => {
        const [heroUpdate] = await context.read({
            name: MOCK_HERO_UPDATE.name
        })

        const newHero = {
            ...MOCK_HERO_UPDATE,
            name: 'Vegeta'
        }

        const [result] = await context.update(heroUpdate.id, newHero)
        const [heroUpdated] = await context.read({
            id: heroUpdate.id
        })

        assert.deepEqual(result, 1)
        assert.deepEqual(heroUpdated.name, newHero.name)
    })

    it('remover por id', async () => {
        const [item] = await context.read({})
        const result = await context.delete(item.id)

        assert.deepEqual(result, 1)
    })
})



    