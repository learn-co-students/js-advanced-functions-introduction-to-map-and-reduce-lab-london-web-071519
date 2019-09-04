const mapToNegativize = (sourceArray) => {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(-1 * sourceArray[i]);
    }
    return result
}

const mapToNoChange = (sourceArray) => {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i]);
    }
    return result
}

const mapToDouble = (sourceArray) => {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * 2);
    }
    return result
}

const mapToSquare = (sourceArray) => {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * sourceArray[i]);
    }
    return result
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    let result = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        result = result + sourceArray[i];
    }
    return result
}

const reduceToAllTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false;
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true;
    }
    return false
}