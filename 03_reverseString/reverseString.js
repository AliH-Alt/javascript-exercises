const reverseString = function(input = "") {
    let revStr = ""
    let splitArr = input.split(" ")
    for(let wordIndex in splitArr){
        for(let i = splitArr.at(wordIndex).length - 1; i >= 0; i--){
            revStr += splitArr.at(wordIndex).at(i)
        }
    }
    console.log(revStr)
};

reverseString("hello world")

// Do not edit below this line
module.exports = reverseString;
