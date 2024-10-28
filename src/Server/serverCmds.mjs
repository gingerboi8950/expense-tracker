import { config } from 'dotenv';
import { executeStudentCrudOperations } from './server.mjs';

config();
await executeStudentCrudOperations();