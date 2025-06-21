// db.ts
import { MongoClient, Db, Collection, type Document } from "mongodb";

const uri = "mongodb://127.0.0.1:27017"; // 👈 Local MongoDB URI
const client = new MongoClient(uri);
let db: Db;

export async function connectToDB(): Promise<Db> {
    if (!db) {
        await client.connect();
        db = client.db("podcastr"); // 👈 your new DB name
    }
    return db;
}

export async function getCollection<T extends Document = Document>(name: string): Promise<Collection<T>> {
    const database = await connectToDB();
    return database.collection<T>(name); // e.g., "audios"
}
