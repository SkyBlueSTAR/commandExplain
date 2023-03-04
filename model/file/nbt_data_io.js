import pnbt from './pnbt.js';

//nbtToJSON(reader:FileReader): Promise<String>
//This function can throw error.
export async function nbtToJSON(reader) {
    try {
        const { parsed } = await pnbt.parse(Buffer.from(reader.result), 'little');
        return JSON.stringify(parsed, null, 2);
    } catch (e) {
        return e;
    }
}

//JSONToNbt(json:String)
//Returns a buffer with a serialized nbt value.
//This function can throw error.
export async function JSONToNbt(json) {
    try {
        const obj = JSON.parse(json);
        return await pnbt.writeUncompressed(obj, 'little')
    } catch (e) {
        return e;
    }
}

//nbtToJSON(reader:FileReader): Promise<Object>
//This function can throw error.
export async function nbtToObject(reader) {
    try {
        const { parsed } = await pnbt.parse(Buffer.from(reader.result), 'little');
        return parsed;
    } catch (e) {
        return e;
    }
}

//objectToNbt(obj:Object)
//Returns a buffer with a serialized nbt value.
//This function can throw error.
export async function objectToNbt(obj) {
    try {
        return await pnbt.writeUncompressed(obj, 'little')
    } catch (e) {
        return e;
    }
}