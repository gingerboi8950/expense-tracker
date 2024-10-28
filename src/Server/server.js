import { config } from 'dotenv';
const { MongoClient } = require('mongodb');

config(); // Load environment variables.
console.log(process.env.DB_URI);

// Connection URL from .env
const uri = process.env.MONGODB_URI;

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

export async function executeStudentCrudOperations() {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('ExpenseTracker');
        const collection = db.collection('Users');
    } finally {
        await mongoClient.close();
    }
 }