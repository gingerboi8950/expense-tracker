import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config(); // Load environment variables
console.log(process.env.DB_URI);

export async function connectToCluster(uri) { 
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

 export async function executeOperations() { // Call this when I need to connect to cluster. 
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('Expenses');
        const collection = db.collection('Users');
    } finally {
        await mongoClient.close();
    }
 }


 // Tutorial: https://www.mongodb.com/resources/languages/mongodb-and-npm-tutorial