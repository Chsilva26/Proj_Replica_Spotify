import { MongoClient } from "mongodb";

const URI = "mongodb+srv://chsilvaperes_db_user:Ii0LHiBbYqhISuok@spotifyaula.rv4yzkx.mongodb.net/?appName=spotifyaula";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);