const reverse = (str) => {
    let result = "";

    for (let i = str.length -1; i >= 0; i--) {
        const letter = str[i];
        result += letter;
    }
    return result;
}