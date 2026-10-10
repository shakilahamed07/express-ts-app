import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default {
    port: process.env.PORT || 3000,
    db: process.env.DB,
    node_env: process.env.node_env || 'development'
}