
import { NextResponse } from 'next/server'

import clientPromise from '../../../../lib/mongodb'

export const dynamic = 'force-dynamic' // defaults to auto

export async function HEAD(request) { }

export async function POST(request) { }

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) { }

export async function GET(request, { params }) {
    try {
        const client = await clientPromise; // Wait for the MongoDB client to connect
        const db = client.db('qalltest'); // Access the database
        const collection = db.collection('Profile');
        try {
            const user = await collection.findOne({ user_id: params.id });
            const data = {user};
            const info = { status: 200 };
            return Response.json(data, info);
        }
        catch (error) {
            const data = {};
            const info = { status: 404, statusText: 'Error fetching user' };
            return Response.json(data, info);
        }
    } catch (error) {
        const data = {};
        const info = { status: 500, statusText: 'Error connecting to database' };
        return Response.json(data, info);
    }


}
