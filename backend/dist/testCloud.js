"use strict";
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
const s3Client = new S3Client({
    endpoint: "http://localhost:9000",
    region: "auto",
    credentials: {
        accessKeyId: "armaanaura",
        secretAccessKey: "armaandeepsingh"
    },
    forcePathStyle: true
});
async function uploadAudio() {
    const filePath = path.join(__dirname, "./Assets/demoaudio1.mp3");
    const uploadParams = {
        Bucket: "podcasts",
        Key: "demoaudio1.mp3",
        Body: fs.createReadStream(filePath),
        ContentType: "audio/mpeg"
    };
    try {
        await s3Client.send(new PutObjectCommand(uploadParams));
        console.log("✅ Audio uploaded successfully to MinIO");
    }
    catch (err) {
        console.error("❌ Upload failed:", err);
    }
}
uploadAudio();
