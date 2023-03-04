//getStructureSize(json:String)<{}>
//returns the structure size.
exports.getStructureSize = function (json) {
    return json.value.size.value.value;
}

//getStructureSize(json:String)<{}>
//returns the structure data.
exports.getStructureData = function (json) {
    return json.value.structure.value;
}