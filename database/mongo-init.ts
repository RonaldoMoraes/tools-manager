import mongoose from 'mongoose';

export const connect = () => {
    let uri: string;
    const { MONGO_URI_TYPE, MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DB, MONGO_PORT, DEBUG_MODE } = process.env
    if (MONGO_URI_TYPE === 'mongodb+srv'){
        uri = `${MONGO_URI_TYPE}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}`;
    } else {
        uri = `${MONGO_URI_TYPE}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
    }
    mongoose.set("debug", Boolean(DEBUG_MODE) || false);
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.Promise = global.Promise;
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
}

// Not being used yet. It may be used by single script executions like seeding or testing
export const disconnect = async () => {
    await mongoose.disconnect();
}