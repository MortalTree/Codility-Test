/*
    a matrix does not seem to behave like an array in that 
    if I log A[0], it doesn't return the inner array
    so truthfully I have no idea how to work with this :/
*/

function solution(K, A) {
    let shops = 0
    let spaceCnt = 0

    for (let i = 0; i <= A.length -1; i++) {
        
        let B = A[i]
        
        for (let k = 0; k <= B.length - 1; k ++) {

            // increment spaces
            spaceCnt++

            // check where we are
            let thisPlace = ((i + 1) + ',' + (k + 1))

            // check if there is a house here
            if (B[k] == 1) {

                // if the distance hasn't exceeded K, we can have a shop here
                if (spaceCnt <= K) {
                    shops++
                }
                let housePlot = ((i + 1) + ',' + (k + 1))                
            }
        }
    }
    return shops
}

solution(2, [[0,0,0,0],[0,0,1,0],[1,0,0,1]])