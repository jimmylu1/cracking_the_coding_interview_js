/*
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

//assuming only letters
*/

const isUnique = (str) => {
    const check = new Array(122);

    if (str.length > 122) return false;

    for (let i = 0; i < str.length; i++) {
        const currCharCode = str.charCodeAt(i);
        if (check[currCharCode] === false) return false;
        check[currCharCode] = false;
    }
    return true;
}

//test cases
console.log(isUnique('')) //true
console.log(isUnique('abc')) //true
console.log(isUnique('abcdef')) //true
console.log(isUnique('AaBbCc')) //true
console.log(isUnique('aabbcc')) //false
console.log(isUnique('AAaBBCcC')) //false