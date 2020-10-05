function Algo() {}

Algo.prototype.reverse = function(str) {
    if(typeof str !== "string"){
        return ("only strings please");
    }
    else{
        let tempStr = "";
        for (let i = str.length-1; i >= 0; i--){
            tempStr += str.charAt(i);
        }
        return tempStr;
    }
};

Algo.prototype.isPalindrome = function(str) {
    if(typeof str !== "string"){
        return ("only strings please");
    }
    else{
        let tempStr = this.reverse(str);
        if(tempStr.toLowerCase() === str.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    }
};

Algo.prototype.capitalize = function(str) {
    if(typeof str !== "string"){
        return ("only strings please");
    }
    else{
        let tempStr = "";
        let caseChange = false;
        for (let i = 0; i < str.length; i++){
            if((i === 0)){
                if((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 122)){
                    const newCode = str.charCodeAt(i) - 32;
                    tempStr += String.fromCharCode(newCode);
                }
                else{
                    tempStr += str.charAt(i);
                }
            }
            else if(caseChange){
                caseChange = false;
            }
            else{
                tempStr += str.charAt(i);
                if((str.charAt(i) === " ")){
                    if((str.charCodeAt(i+1) >= 97) && (str.charCodeAt(i+1) <= 122)){
                        const newCode = str.charCodeAt(i+1) - 32;
                        tempStr += String.fromCharCode(newCode);
                        caseChange = true;
                    }
                }
            }
        }
        return tempStr;
    }
};

module.exports = Algo;
