// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.

    // function sortNum(num){
    //     let newArray = num;
    //     for(let j = 0; j < newArray.length-1; j++){
    //         for(let i = 0; i < newArray.length-1; i++){
    //             if(newArray[i] > newArray[i+1]){
    //                 let tempNum = newArray[i];
    //                 newArray[i] = newArray[i+1];
    //                 newArray[i+1] = tempNum;
    //             }
    //         }
    //     }
    //     return newArray;
    // }

    function sortNum(num){
        let newArray = num;
        let didSwap = false;
        do{
            didSwap = false;
            for(let i = 0; i < newArray.length-1; i++){
                if(newArray[i] > newArray[i+1]){
                    let tempNum = newArray[i];
                    newArray[i] = newArray[i+1];
                    newArray[i+1] = tempNum;
                    didSwap = true;
                }
            }
        }while(didSwap === true);
        return newArray;
    }

    function sortNumDesc(num){
        // make a new array to change cuz cleanliness
        let newArray = num;
        // for each element in the array, we want to make it the highest number first
        for(let j = 0; j < newArray.length-1; j++){
            // at each position in the array, we go through to find a higher number further in
            for(let i = 0; i < newArray.length-1; i++){
                // if a higher number is present further, we swap the numbers
                if(newArray[i] < newArray[i+1]){
                    let tempNum = newArray[i];
                    newArray[i] = newArray[i+1];
                    newArray[i+1] = tempNum;
                }
            }
        }
        return newArray;
    }

    let array1 = [5, 6, 2, 7, 12, 34, 5];
    console.log(`original : ${array1}`);
    array1 = sortNum(array1);
    console.log(`sorted : ${array1}`);

    let array2 = [34, 16, 123, 234, 2, 6, 143];
    console.log(`original : ${array2}`);
    array2 = sortNumDesc(array2);
    console.log(`sorted : ${array2}`);

    let array3 = [34, 16, 123, 234, 2, 6, 143];
    console.log(`original : ${array3}`);
    array3 = array3.sort(function(a, b){return a-b});
    console.log(`sorted : ${array3}`);