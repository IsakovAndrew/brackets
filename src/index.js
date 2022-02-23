module.exports = function check(str, bracketsConfig) {
let brackets = bracketsConfig.join('').replace(/,/g, '');
let stack = [];
for (let bracket of str) {
    let braketsBra = brackets.indexOf(bracket)

    if (braketsBra % 2 === 0) {
        stack.push(braketsBra)
        if (bracket === brackets[braketsBra+1]){
            stack.pop();
        }
    }
    else {
        if (stack.pop() !== braketsBra-1){
            return false;
        }
    }
}
return stack.length === 0

}
