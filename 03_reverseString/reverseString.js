const reverseString = function(input = "") {
    const finArr = []
    let splitArr = input.split(" ")
    for(let wordIndex in splitArr){
        let revStr = ""
        for(let i = splitArr.at(wordIndex).length - 1; i >= 0; i--){
            revStr += splitArr.at(wordIndex).at(i)
        }
        finArr.unshift(revStr)
    }
    return finArr.join(" ")
};

// Do not edit below this line
module.exports = reverseString;
