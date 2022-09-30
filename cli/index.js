const { Command } = require('commander');
const Database = require('./database')
const Hero = require('./hero')

const main = async () => {
    const program = new Command()

    // program
    //     .version('v1')

    program
        .option('-n, --name [value]', "Nome do herói")
        .option('-p, --power [value]', "Poder do herói")
        .option('-i, --id [value]', "Id do herói")

        .option('-r, --registry', "Cadastrar novo herói")
        .option('-l, --list', "Listar todos os heróis")
        .option('-d, --delete [value]', "Deleta um herói")
        .option('-u, --update [value]', "Atualiza um herói por id")

        program.parse(process.argv);

    const options = program.opts();
    const hero = new Hero(options)

    try{
        
        if(options.registry) {
            delete hero.id
            const result = await Database.post(hero)

            if(!result) {
                console.error('O Herói não foi cadastrado')
                return;
            }

            console.log('Herói cadastrado com sucesso!')
        }

        if(options.list) {
            const result = await Database.get()
            console.log(result)

            return;
        }

        if(options.delete) {
            const result = await Database.delete(hero.id)
            
            if(!result) {
                console.error('Não foi possível remover o herói')
                return;
            }

            console.log('Herói removido com sucesso!')
        }

        if(options.update) {
            const currentId = parseInt(options.update)
            const data = JSON.stringify(hero)
            const heroDataUpdate = JSON.parse(data)

            const result = await Database.update(currentId, heroDataUpdate)
            
            if(!result) {
                console.error('Não foi possível atualizar o herói')
                return;
            }

            console.log('Herói atualizado com sucesso!')
        }

    }catch(error) {
        console.error('Error:', error)
    }
}

main()