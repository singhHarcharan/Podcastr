Schema

For user
{
  _id: ObjectId,
  username: String,
  email: String,
  passwordHash: String,
  createdAt: Date
}

For Content
{
  _id: ObjectId,
  title: String,
  description: String,
  audioUrl: String,        // Link to the uploaded audio (e.g., S3 or local path)
  thumbnailUrl: String,    // Optional image cover
  uploadedBy: ObjectId,    // Reference to users._id
  createdAt: Date,
  tags: [String]           // Optional, e.g. ["tech", "health"]
}

Views
{
  _id: ObjectId,
  podcastId: ObjectId,     // Reference to podcasts._id
  userId: ObjectId,        // Reference to users._id (null if anonymous)
  viewedAt: Date
}



