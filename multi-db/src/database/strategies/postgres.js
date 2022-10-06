const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._heros = null
    }

   async isConnected() {
        try {
            await this._driver.authenticate()

            return true
        } catch(error) {
            console.error('Error:', error)

            return false
        }
    }

   async create(item) {
        const { dataValues } = await this._heros.create(item)

        return dataValues
    }

    async read(item = {}) {
        return await this._heros.findAll({
            where: item,
            raw: true,
        })
    }

    async update(id, item) {
        return await this._heros.update(item, {
            where: { id: id}
        })
    }

    async delete(id) {
        const query = id ? { id } : {}

        return await this._heros.destroy({ where: query })
    }

    async defineModel() {
        this._heros = this._driver.define('heros', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.TEXT,
                required: true,
            },
            power: {
                type: Sequelize.TEXT,
                required: true,
            }
        }, {
            tableName: 'TB_HEROS',
            freezeTableName: false,
            timestamps: false,
        })

        await this._heros.sync()
    }

    async connect() {
        this._driver = new Sequelize(
            'heros',
            'ueslensantana',
            'development3856', {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false,
            }
        )

        await this.defineModel()
    }
}

module.exports = Postgres