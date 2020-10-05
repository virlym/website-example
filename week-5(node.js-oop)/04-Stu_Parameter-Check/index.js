/*
## Instructions

[1]  Create a file, `index.js`, in your working directory.

[1] Write a script using `process.argv` to accept two command line arguments and compare their values.

 -take in 2 variables
 -compare the values

*/

//console.log(process.argv);

// compare the 2 arguments to see if they are the same
if(process.argv[2] === process.argv[3]){
    // show they are equal
    console.log(`"${process.argv[2]}" is the same as "${process.argv[3]}"`);
}
// if they are not the same
else{
    // show they are not equal
    console.log(`"${process.argv[2]}" is different from "${process.argv[3]}"`);
}