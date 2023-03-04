const fs = require('fs/promises')
const { nbtToObject } = require('../model/file/nbt_data_io');
const { getStructureData } = require('../model/json/get_structure_data');
const { getBlockIndices, getBlockName, getBlockConditionalBit, getBlockFacingDirection, getBlockCommand, getBlockCustomName, getBlockExecuteOnFirstTick, getBlockLPCommandMode, getBlockLPCondionalMode, getBlockLPRedstoneMode, getBlockTickDelay, getBlockconditionalMode } = require('../model/json/get_block_data');

async function test() {
    const testData = await fs.readFile('test_data/CommandBloks.mcstructure');
    const obj = await nbtToObject(testData);
    const structureData = getStructureData(obj);
    const blockIndices = getBlockIndices(structureData, 0);
    const blockName = getBlockName(structureData, 0);
    const conditionalBit = getBlockConditionalBit(structureData, 0);
    const blockFacingDirection = getBlockFacingDirection(structureData, 0);
    const blockCommand = getBlockCommand(structureData, 0);
    const blockCustomName = getBlockCustomName(structureData, 0);
    const blockExecuteOnFirstTick = getBlockExecuteOnFirstTick(structureData, 0);
    const blockLPCommandMode = getBlockLPCommandMode(structureData, 0);
    const blockLPCondionalMode = getBlockLPCondionalMode(structureData, 0);
    const blockLPRedstoneMode = getBlockLPRedstoneMode(structureData, 0);
    const blockTickDelay = getBlockTickDelay(structureData, 0);
    const blockconditionalMode = getBlockconditionalMode(structureData, 0);

    console.log(obj);
    console.log(structureData);
    console.log(blockIndices);
    console.log(blockName);
    console.log(conditionalBit);
    console.log(blockFacingDirection);
    console.log(blockCommand);
    console.log(blockCustomName);
    console.log(blockExecuteOnFirstTick);
    console.log(blockLPCommandMode);
    console.log(blockLPCondionalMode);
    console.log(blockLPRedstoneMode);
    console.log(blockTickDelay);
    console.log(blockconditionalMode);
}
test();