module.exports = function check(str, bracketsConfig)  {
    let brackets = bracketsConfig.join('').replace(/,/g, '');
        let stack = [];
    for (let bracket of str) {
            let bracketsBra = brackets.indexOf(bracket)
            if (bracketsBra % 2 === 0) {
                if (bracket === brackets[bracketsBra + 1] && stack[stack.length - 1] === bracketsBra){
                    stack.pop();
                } else if (bracket === brackets[bracketsBra + 1] && stack[stack.length - 1] !== bracketsBra) {
                    stack.push(bracketsBra)
                }
                else{
                    stack.push(bracketsBra)
                }
            }
            else {
                if (stack.pop() !== bracketsBra-1){
                    return false;
                }
            }
        }
        return stack.length === 0
}
