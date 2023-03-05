const fs = require('fs/promises')
const { nbtToObject } = require('../file/nbt_data_io');
const { getStructureData } = require('./get_structure_data');
const { getBlockIndices, getBlockName, getBlockConditionalBit, getBlockFacingDirection, getBlockCommand, getBlockCustomName, getBlockExecuteOnFirstTick, getBlockLPCommandMode, getBlockLPCondionalMode, getBlockLPRedstoneMode, getBlockTickDelay, getBlockconditionalMode } = require('./get_block_data');

exports.createBlockData = async function (binarryData, index) {
    const obj = await nbtToObject(binarryData);
    const structureData = getStructureData(obj);
    const blockIndices = getBlockIndices(structureData, index);
    const blockName = getBlockName(structureData, index);
    const blockFacingDirection = getBlockFacingDirection(structureData, index);
    const blockCommand = getBlockCommand(structureData, index);
    const blockCustomName = getBlockCustomName(structureData, index);
    const blockExecuteOnFirstTick = getBlockExecuteOnFirstTick(structureData, index);
    const blockTickDelay = getBlockTickDelay(structureData, index);
    const blockconditionalMode = getBlockconditionalMode(structureData, index);

    return { blockIndices: blockIndices, blockName: blockName, blockFacingDirection: blockFacingDirection, blockCommand: blockCommand, blockCustomName: blockCustomName, blockExecuteOnFirstTick: blockExecuteOnFirstTick, blockTickDelay: blockTickDelay, blockconditionalMode: blockconditionalMode }
}