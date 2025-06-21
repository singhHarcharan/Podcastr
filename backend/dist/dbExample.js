"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAudioMetadata = addAudioMetadata;
const db_1 = require("./db");
async function addAudioMetadata(audio) {
    const audios = await (0, db_1.getCollection)("audios");
    await audios.insertOne(audio);
}
// Create a sample audio document
const audioExample = {
    _id: "audio2",
    title: "Sample Audio",
    description: "This is a sample audio file.",
    userId: "armaanaura",
    fileUrl: "https://example.com/audio/sample.mp3",
    duration: 120,
    createdAt: new Date(),
};
// Call it properly with error handling
addAudioMetadata(audioExample)
    .then(() => console.log("Audio metadata inserted"))
    .catch((err) => console.error("Error inserting audio metadata:", err));
