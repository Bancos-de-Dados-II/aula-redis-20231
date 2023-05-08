const redis = require('redis');
const client = redis.createClient();

conectar();

async function conectar(){
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    console.log(await client.ping());
}

const pessoa = {
    nome: 'João',
    email: 'joao@gmail.com'
}

salvar(pessoa);

async function salvar(pessoa){
    // await client.connect();
    const retorno = await client.set(pessoa.email, JSON.stringify(pessoa),{
        EX: 30
    });
    console.log(retorno);
}

// buscar('joao@gmail.com');

async function buscar(email){
    const retorno = await client.get(email);
    console.log(retorno);
    const pessoa = JSON.parse(retorno);
    console.log(pessoa);
}