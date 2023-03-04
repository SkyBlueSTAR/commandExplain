const pnbt = require('prismarine-nbt');

//nbtToJSON(reader:Buffer object): Promise<String>
//This function can throw error.
exports.nbtToJSON = async function (file) {
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
exports.JSONToNbt = async function (json) {
    try {
        const obj = JSON.parse(json);
        return await pnbt.writeUncompressed(obj, 'little')
    } catch (e) {
        return e;
    }
}

//nbtToObject(file:Buffer object): Promise<Object>
//This function can throw error.y
exports.nbtToObject = async function (file) {
    try {
        const { parsed } = await pnbt.parse(Buffer.from(file), 'little');
        return parsed;
    } catch (e) {
        return e;
    }
}

//objectToNbt(obj:Object)
//Returns a buffer with a serialized nbt value.
//This function can throw error.
exports.objectToNbt = async function (obj) {
    try {
        return await pnbt.writeUncompressed(obj, 'little')
    } catch (e) {
        return e;
    }
}