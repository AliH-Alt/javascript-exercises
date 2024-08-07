const repeatString = function(input = '', number = 0) {
    if (number < 0){
        return 'ERROR'
    }
    
    repeatedStr = ''
    for(number; number > 0; number--){
        repeatedStr += input;
    }

    return repeatedStr
};

// Do not edit below this line
module.exports = repeatString;
