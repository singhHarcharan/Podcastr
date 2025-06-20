# MinIO as a Local Cloud Audio Server

## Overview

This document explains how to use MinIO to simulate a cloud audio server for uploading, storing, and streaming audio files (e.g., podcasts) during development.

## Objective

Use MinIO as a local, S3-compatible storage server to mimic cloud behavior while developing an audio-sharing platform.

## Why MinIO?

* S3-compatible API (same as AWS S3 or Cloudflare R2)
* No billing or internet needed
* Supports chunked audio streaming via HTTP Range Requests
* Easy local deployment with Docker
* Web-based management console

## Why Not Other Options?

### Firebase Storage

* Limited to 1 GB free
* Chunked streaming not reliable
* No native support for pre-signed URLs
* Not suitable for large audio files

### Cloudflare R2

* Requires a credit/debit card to activate
* Best suited for production
* Not necessary during early development

## How It Works

1. MinIO runs locally and stores files in a directory (e.g., `/data`)
2. You create a bucket (e.g., `audios`)
3. Upload audio files using S3-compatible SDK
4. Access them via a URL (e.g., `http://localhost:9000/audios/file.mp3`)
5. Audio players can stream and seek via HTTP Range Requests

## Setup Instructions

### Start MinIO using Docker:

```bash
docker run -p 9000:9000 -p 9001:9001 \
  -e MINIO_ROOT_USER=minioadmin \
  -e MINIO_ROOT_PASSWORD=minioadmin \
  minio/minio server /data --console-address ":9001"
```

* Port 9000: S3 API
* Port 9001: Web UI

### Web Interface

* Web Console: [http://localhost:9001](http://localhost:9001)
* Create a bucket (e.g., `audios`)

## Node.js Integration Example

```js
const { S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  endpoint: "http://localhost:9000",
  region: "auto",
  credentials: {
    accessKeyId: "minioadmin",
    secretAccessKey: "minioadmin"
  },
  forcePathStyle: true
});
```

## Example Audio Playback

```html
<audio controls>
  <source src="http://localhost:9000/audios/sample.mp3" type="audio/mpeg">
</audio>
```

## Simulate Cloud Access

### Using Ngrok to Expose MinIO

```bash
ngrok http 9000
```

* This will give you a public URL like `https://abcd.ngrok.io`
* Use that URL in your frontend for streaming

## Summary

* MinIO is a local storage solution that mimics real cloud behavior
* Suitable for development and testing of audio upload/streaming
* No internet, billing, or account setup required
* Can be replaced with Cloudflare R2 or AWS S3 in production with no code changes
