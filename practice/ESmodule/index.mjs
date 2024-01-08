import {odd,even} from './var.mjs';
import checkNumber from './funcs.mjs';

function checkStringOddOrEven(str){
    if (str.length%2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hi'));