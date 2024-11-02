import { config } from 'dotenv';
import { executeOperations } from './server.mjs';

config();
await executeOperations(); 

export async function createStudentDocument(collection) { // Creates a new document. 
    const studentDocument = {
        expense_name: "Apple",
        expense_cost: "5",
        user_id: "u6yug5hvbj",
    };
 
    await collection.insertOne(studentDocument);
 }