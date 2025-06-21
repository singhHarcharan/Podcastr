import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function testConnection() {
    try {
        await client.connect();
        console.log("✅ Successfully connected to MongoDB Atlas!");
        await client.close();
    } catch (error) {
        console.error("❌ Connection failed:", error);
    }
}

testConnection();
