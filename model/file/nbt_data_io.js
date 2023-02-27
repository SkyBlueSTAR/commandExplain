import pnbt from './pnbt.js';
//nbtToJson(reader:FileReader)
//This function can throw error.
export async function nbtToJson(reader){
    try{
        const {parsed} = await nbt.parse(Buffer.from(reader.result));
        return JSON.stringify(parsed, null, 2);
    }catch(e){
        return e;
    }
}