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
    const retorno = await client.set(pessoa.email, JSON.stringify(pessoa));
    console.log(retorno);
}