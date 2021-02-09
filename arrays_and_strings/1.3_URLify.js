/*
Write a method to replace all spaces in a string with '%20'. You are given the length of true length
of the string.
*/

//if first idx is space, skip marked = false;
//if first idx is letter, subtract from length marked = false;
// if find a space, check if already marked space marked = true;
//if next is space, skip => check previous and end

const URLify = (str, len) => {
    let res = '';
    const replacement = '%20';
    let marked = false, temp = len;

    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        if (i === 0 && currChar === ' ') {
            continue;
        }
        if (currChar !== ' ') {
            res += currChar;
            temp -= 1;
            marked = false;
        }
        if (currChar === ' ' && marked === false && temp > 0 && temp < len) {
            res += replacement
            marked = true;
            temp -= 1;
        }
    }
    return res;
}

//test cases
console.log(URLify('Mr John Smith   ', 13)); //Mr%20John%20Smith
console.log(URLify('    Mr John Smith', 13)); //Mr%20John%20Smith
console.log(URLify('Mr  John  Smith', 13)); //Mr%20John%20Smith
console.log(URLify(' a ', 1))