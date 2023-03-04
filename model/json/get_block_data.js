export function getBlockIndices(structureData) {
    return structureData.block_indices.value.value[0].value;
}

export function getPalette(structureData) {
    return structureData.palette.value.default.value.block_palette.value.value;
}