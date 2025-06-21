import { getCollection } from "./db";

export interface AudioMetadata {
    _id: string; 
    title: string;
    description?: string;
    userId: string;            // ID of the user who uploaded it
    fileUrl: string;
    duration: number;          // In seconds
    createdAt: Date;
}

export async function addAudioMetadata(audio: AudioMetadata): Promise<void> {
    const audios = await getCollection<AudioMetadata>("audios");
    await audios.insertOne(audio);
}

// Create a sample audio document
const audioExample: AudioMetadata = {
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
