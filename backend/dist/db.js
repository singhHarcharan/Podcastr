"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = connectToDB;
exports.getCollection = getCollection;
// db.ts
const mongodb_1 = require("mongodb");
const uri = "mongodb://127.0.0.1:27017"; // 👈 Local MongoDB URI
const client = new mongodb_1.MongoClient(uri);
let db;
async function connectToDB() {
    if (!db) {
        await client.connect();
        db = client.db("podcastr"); // 👈 your new DB name
    }
    return db;
}
async function getCollection(name) {
    const database = await connectToDB();
    return database.collection(name); // e.g., "audios"
}
