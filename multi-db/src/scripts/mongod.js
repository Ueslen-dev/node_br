// docker ps

// docker exec -it 02b9ad49991b mongo -u ueslensantana -p devmongo3689 --authenticationDatabase heros

//databases
show dbs

//mudando o contexto para uma database
use heros

//mostrar coleções
show collections

db.person.count()
db.person.findOne()
db.person.find().limit(1000).sort({ name: -1 })
db.person.find({}, { power: 1, _id: 0})

// create
db.person.insert({
    name: 'Falsh',
    power: 'Velocidade',
    birthData: '1998-01-01'
})

// read
db.person.find()

//update
db.person.update({ _id: objectId('633e3e8c37662c60651763b9') }, 
{$set: { name: 'Mulher maravilha' } })