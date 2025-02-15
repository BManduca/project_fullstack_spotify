import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mydatabase.8vdqilo.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase`

const client = new MongoClient(URI);

// criando nosso db
export const db = client.db("spotifyDB")
// aplicando um find em todos, por isso o objeto vazio
// const songCollection = await db.collection("songs").find({}).toArray()

// console.log(songCollection)