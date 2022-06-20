// Write a program to reverse an array or string
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}


////////////////////////// BEGINNER SOLUTION //////////////////////////
function reverse(input) {
    let elementsArray = typeof(input) === 'string' ? input.split('') : input;
    let result = [];

    elementsArray.forEach(element => {
        result.unshift(element);
    });

   let final = typeof(input) === 'string' ? result.join('') : result;
   console.log(final);
}
reverse([1,5,8,6,3,4,5]);

////////////////////////////////////////////////////////////////////////////

//////////////////////// PRO SOLUTION ///////////////////////////////////////
// 1) Initialize start and end indexes as start = 0, end = n-1 
// 2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
// start = start +1, end = end – 1

// Complexity O(n)

function reversePro(inputArr) {
    let startIndex = 0;
    let endIndex = inputArr.length-1;
    
    while (startIndex < endIndex) {
        let temp = inputArr[startIndex];
        inputArr[startIndex] = inputArr[endIndex];
        inputArr[endIndex] = temp;
        startIndex++;
        endIndex--;
    }

    console.log(inputArr);
}

reversePro([1,2,3,4,5,6,7,8]);


////////////////////////////////////////////////////////////////////////////

//////////////////////// RECURSIVE SOLUTION ///////////////////////////////////////
/// COMPLEXITY O(n)


function reverseRecursive(array, start, end){
    if(start >= end ){
        console.log(array);
        return;
    }
        let temp = array[start];
         array[start] = array[end];
         array[end] = temp;
        reverseRecursive(array, start+1, end-1);
}

reverseRecursive([4,5,6,7,8,9],0,5);