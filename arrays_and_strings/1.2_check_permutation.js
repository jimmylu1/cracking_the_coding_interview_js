/* 
Given two strings, write a method to decide if one is a permutation of another 
*/

const isPermutation = (str1, str2) => {
    const letterCount = {};

    for (const letter of str1) {
        letterCount[letter] = letterCount[letter] + 1 || 1
    }

    for (const letter of str2) {
        if ((letter in letterCount) && letterCount[letter] > 0) {
            letterCount[letter] -= 1;
        } else {
            return false;
        }
    }
    for (const key in letterCount) {
        if (letterCount[key] !== 0) return false;
    }
    return true;
}

//test cases
console.log(isPermutation('', '')); //true
console.log(isPermutation('racecar', 'carrace')); //true
console.log(isPermutation('cat', 'mouse')) //false
console.log(isPermutation('carraces','racecar' )) //false