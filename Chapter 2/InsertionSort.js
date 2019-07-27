let a = [5, 2, 4, 6, 1, 3]
let b = [31, 41, 59, 26, 41, 58]

function insertionSortAscending(a){
    let key, i
    for(let j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1
        while(i >= 0 && a[i] > key){
            a[i + 1] = a[i]
            i--
        }
        a[i+1] = key
    }
    console.log(a)
}

function insertionSortDescending(a){
    let key, i
    for(let j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1
        while(i >= 0 && a[i] < key){
            a[i+1] = a[i]
            i--
        }
        a[i+1] = key
    }
    console.log(a);
}

console.log(a)
insertionSortAscending(a)
insertionSortDescending(a)
console.log(b)
insertionSortAscending(b)
insertionSortDescending(b)