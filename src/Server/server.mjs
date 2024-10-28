import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config(); // Load environment variables
console.log(process.env.DB_URI);

connectToCluster(process.env.DB_URI); // Failed last time I tried - Mason

export async function connectToCluster(uri) { // Call this when I need to connect to cluster. 
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


 // Tutorial: https://www.mongodb.com/resources/languages/mongodb-and-npm-tutorial