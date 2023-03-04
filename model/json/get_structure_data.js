//getStructureSize(json:String)<{}>
//returns the structure size.
export function getStructureSize(json) {
    return json.value.size.value.value;
}

//getStructureSize(json:String)<{}>
//returns the structure data.
export function getStructureData(json) {
    return json.value.structure.value;
}
