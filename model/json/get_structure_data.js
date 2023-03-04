exports.getStructureSize = function (json) {
    return json.value.size.value.value;
}

exports.getStructureData = function (json) {
    return json.value.structure.value;
}