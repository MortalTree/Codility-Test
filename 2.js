/*

integer: push into stack
POP: remove topmost number from stack
DUP: push duplicate of topmost number into stack
+  : pops 2 topmost elements from the stack, adds them, pushes result to stack
-  : pops 2 topmost elements from the stack, subtracts 1st from 2nd, pushes result to stack

*/

function solution(S) {

    // split the string into an array
    let str = S.split(' ')
    // our stack
    let arr = []
    // our integer variables
    let maxaOne
    let maxaTwo
    // our constants
    const min = 0
    const max = 1048576
    
    // loop through the array representing each command in the string
    for (i = 0; i <= str.length - 1; i++) {

        let ex = str[i]
        // console.log(ex);

        switch (ex) {

            case 'DUP':            
                // get topmost number and push a duplicate
                let toppy = arr[arr.length - 1]
                arr.push(toppy)
                
                break

            case 'POP':
                
                // remove the topmost number from the stack
                arr.pop()

                break

            case '+':                
                // get 2 topmost numbers 
                maxaOne = Number(arr.pop())
                maxaTwo = Number(arr.pop())
                
                let prod = maxaOne + maxaTwo

                // check for overflow
                if (prod <= max) {
                    arr.push(prod)
                } else {
                    return -1    
                }
                                                
                break

            case '-': 

                // get 2 topmost numbers 
                maxaOne = Number(arr.pop())
                maxaTwo = Number(arr.pop())
                
                let subt = maxaOne - maxaTwo

                // check for underflow
                if (subt >= min) {
                    arr.push(subt)
                } else {
                    return -1
                } 
                
                break

            default:
                arr.push(ex)

        }

    }

    return arr[arr.length - 1]
}

console.log(solution('13 DUP 4 POP 5 DUP + DUP + -'))
// console.log(solution('13 DUP 4 POP 5 DUP + DUP + -'))