exports.getBlockIndices = function (structureData) {
    return structureData.block_indices.value.value[0].value;
}

exports.getBlockName = function (structureData) {
    return structureData.palette.value.default.value.block_palette.value.value[0].name.value;
}

exports.getBlockConditionalBit = function (structureData) {
    return structureData.palette.value.default.value.block_palette.value.value[0].states.value.conditional_bit.value;
}

exports.getBlockFacingDirection = function (structureData) {
    return structureData.palette.value.default.value.block_palette.value.value[0].states.value.facing_direction.value;
}

exports.getBlockCommand = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.Command.value;
}

exports.getBlockCustomName = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.CustomName.value;
}

exports.getBlockExecuteOnFirstTick = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.ExecuteOnFirstTick.value;
}

exports.getBlockLPCommandMode = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.LPCommandMode.value;
}

exports.getBlockLPCondionalMode = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.LPCondionalMode.value;
}

exports.getBlockLPRedstoneMode = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.LPRedstoneMode.value;
}

exports.getBlockTickDelay = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.TickDelay.value;
}

exports.getBlockconditionalMode = function (structureData) {
    return structureData.palette.value.default.value.block_position_data.value[0].value.block_entity_data.value.conditionalMode.value;
}