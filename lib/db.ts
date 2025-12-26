export interface CachedType {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: CachedType;
}

/////////////////////////////////////////////////////////

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

let cached: CachedType = globalThis.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
}

export default async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error("NO MONGO DB URI.");
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
