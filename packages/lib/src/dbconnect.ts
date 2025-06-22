import dotenv from "dotenv";
dotenv.config({ path : '../../../.env' });

import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number
};

const connection: connectionObject = {};

async function dbConnect() : Promise<void> {
    if(connection.isConnected) {
        console.log("already a connection in database");
        return;
    }

    try{
        const db = await mongoose.connect(process.env.BACKEND_URL as string);
        connection.isConnected = db.connections[0]?.readyState;

        console.log(`mongoose ka db connection :
            ${db} `);     //  REMOVE LATER  ----------------

    } catch(err) {
        console.log("connection failed");
        process.exit(1);
    }
}

export default dbConnect;