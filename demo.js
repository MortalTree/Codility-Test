// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    A.sort()
    let max = Math.max(...A)
    
    if (max <= 0) {
        return 1
    }

    let c = max -1    
    let found = false

    for (let k = 1; k <= max; k++) {        
        found = false
        for (let i = 0; i <= A.length - 1; i++) {
            
            if (A[i] == k) {                
                found = true
                break
            }            
        }
        if (found == false) {
            return k
        }
    }
}

// console.log(solution([1, 3, 6, 4, 1, 2]))
// console.log(solution([1, 6, 4, 5, 2, 7]))
console.log(solution([1, 2, 4]))