/*
    hill boolean
    valley boolean

    loop through array check
    - val at 0, 0+1
        - if <>, castle +1




*/

function solution(A) {
    // castle counter
    let castles = 0
    // first castle base length tracker
    let t = 0
    // currently known lowest valley
    let maxV = 0
    // currently known highest hill
    let maxH = 0
    // possible hill
    let hill = false
    // possible valley
    let valley = false
    // to keep track of previous array value
    let g = 0

    // use a reducer to check for a negative array total
    const reducer = (ac, cu) => ac + cu
    let inf = A.reduce(reducer)

    // if negative sum, return 1
    if (inf < 0) {
        return 1
    }

    // check first hill or valley and start next loop at the end of the first castle    
    for (let s = 0; s <= A.length - 1; s++) {
        if (s + 1 != s) {
            castles++            
            t++
            maxV = maxH = A[s]            
            break
        }
    }
    
    // check last hill or valley and shorten the array by the castle
    for (let l = A.length - 1; l >= t; l--) {
        if (l - 1 != l) {            
            castles++            
            break
        }
        A.pop()
    }
    

    // loop through the rest of the array 
    for (let i = t; i <= A.length - 1; i++) {
        let n = i + 1

        // check if next value higher than A[i]
        if (A[n] > A[i]) {
            
            if (valley == true) {
                
                // set highest known hill and build a castle
                // IF hill higher than last known highest
                // if (A[i] < maxV) {
                if (g < maxV) {
                    castles++
                    maxV = A[i]
                    valley = false
                }                

            } else {
                // possibly a hill
                hill = true
            }       

        } else if (A[n] < A[i]) {

            // if hill possible, then hill end, castle built
            if (hill == true) {
                
                // set lowest known valley and build a castle 
                // IF valley lower than last known lowest                
                // if (A[i] > maxH) {
                if (g > maxH) {                    
                    castles++
                    maxH = A[i]
                    hill = false
                }
            } else {
                // possibly a valley
                valley = true
            }

        } 
                
        // to keep track of previous array value
        g = A[i]        
    }
    
    return castles
}

x = [2,2,3,4,3,3,2,2,1,1,2,5]
// x = [-3, -3]
console.log((solution(x)))