const ContextStrategy = require('./database/strategies/base/contextStrategy')
const MongoDB = require("./database/strategies/mongodb");
const Postgres = require("./database/strategies/postgres");

const contextMongoDb = new ContextStrategy(new MongoDB())
contextMongoDb.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()