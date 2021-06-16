// api/net-meetup - endpoint
import {MongoClient } from 'mongodb'
async function handler(req, res) {
if(req.method === 'POST') {
    const data = req.body;
    // const {title, url, details } = data
    const client = await MongoClient.connect('mongodb+srv://pushpendray2011:mypassword@cluster0.wy8gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollection = db.collection('meetups')
    const result = await meetupCollection.insertOne(data)
    console.log(result)
    client.close()
    res.status(201).json({message: 'Meetup inserted', data: data})
}
}

export default handler;