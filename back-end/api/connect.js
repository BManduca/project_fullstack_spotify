import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const URI = `mongodb+srv://${process.env.name_user}:${process.env.password_user}@mydatabase.8vdqilo.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase`

if (!URI) {
    throw new Error('Problema na definição da URI! Verificar as credenciais...')
}

const client = new MongoClient(URI);

// criando nosso db
export const db = client.db("spotifyDB")

async function conectarDB() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB!')
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

conectarDB()