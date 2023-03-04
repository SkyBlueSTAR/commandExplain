const fs = require('fs/promises')
const { nbtToObject } = require('../model/file/nbt_data_io');

async function test() {
    const testData = await fs.readFile('test_data/CommandBloks.mcstructure');
    const obj = await nbtToObject(testData);
    console.log(obj);
}
test();