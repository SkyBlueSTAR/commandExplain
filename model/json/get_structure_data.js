exports.getStructureSize = function (object) {
    return object.value.size.value.value;
}

exports.getStructureData = function (object) {
    return object.value.structure.value;
}