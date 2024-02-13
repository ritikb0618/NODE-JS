const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const database= "devices"

async function read_data()
{
    let result = await client.connect()
    let db = result.db(database)
    let collection = db.collection('mobiles')
    let promise = await collection.find({}).toArray()
    console.log(promise)
}

read_data()