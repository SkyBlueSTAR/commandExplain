const fs = require('fs/promises')
const { nbtToObject } = require('../model/file/nbt_data_io');
const { getStructureData } = require('../model/json/get_structure_data');
const { getBlockIndices, getBlockName, getBlockConditionalBit, getBlockFacingDirection, getBlockCommand, getBlockCustomName, getBlockExecuteOnFirstTick, getBlockLPCommandMode, getBlockLPCondionalMode, getBlockLPRedstoneMode, getBlockTickDelay, getBlockconditionalMode } = require('../model/json/get_block_data');

async function test() {
    const testData = await fs.readFile('test_data/CommandBloks.mcstructure');
    const obj = await nbtToObject(testData);
    const structureData = getStructureData(obj);
    const blockIndices = getBlockIndices(structureData);
    const blockName = getBlockName(structureData);
    const conditionalBit = getBlockConditionalBit(structureData);
    const blockFacingDirection = getBlockFacingDirection(structureData);
    const blockCommand = getBlockCommand(structureData);
    const blockCustomName = getBlockCustomName(structureData);
    const blockExecuteOnFirstTick = getBlockExecuteOnFirstTick(structureData);
    const blockLPCommandMode = getBlockLPCommandMode(structureData);
    const blockLPCondionalMode = getBlockLPCondionalMode(structureData);
    const blockLPRedstoneMode = getBlockLPRedstoneMode(structureData);
    const blockTickDelay = getBlockTickDelay(structureData);
    const blockconditionalMode = getBlockconditionalMode(structureData);

    // console.log(obj);
    // console.log(structureData);
    // console.log(blockIndices);
    // console.log(blockName);
    // console.log(conditionalBit);
    // console.log(blockFacingDirection);
    // console.log(blockCommand);
    // console.log(blockCustomName);
    // console.log(blockExecuteOnFirstTick);
    // console.log(blockLPCommandMode);
    // console.log(blockLPCondionalMode);
    // console.log(blockLPRedstoneMode);
    // console.log(blockTickDelay);
    // console.log(blockconditionalMode);
}
test();