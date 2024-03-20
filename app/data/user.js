import clientPromise from '../lib/mongodb'

export async function getUserByEmail(email) {
    try {
        console.log("got here");
        const client = await clientPromise; // Wait for the MongoDB client to connect
        const db = client.db('qalltest'); // Access the database
        const collection = db.collection('User');
        
        const user = await collection.findOne({ email: email });
        return user; // Returns the user object if found, otherwise null
    } catch (error) {
        return null;
    }
}
