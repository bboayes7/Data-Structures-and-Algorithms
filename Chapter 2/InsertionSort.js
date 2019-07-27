let a = [5, 2, 4, 6, 1, 3]
let b = [31, 41, 59, 26, 41, 58]

function insertionSort(a){
    let key, i
    for(let j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1
        while(i >= 0 && a[i] > key){
            a[i + 1] = a[i]
            i = i - 1
        }
        a[i+1] = key
    }
    arrayPrinter(a)
}

function arrayPrinter(a){
    console.log(a);
}

arrayPrinter(a);
insertionSort(a);
arrayPrinter(b);
insertionSort(b);