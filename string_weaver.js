//Solution
function stringWeaver(str1, str2) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // Write your code here

    //Possible variables
    let numRemoveStr1 = '';
    let numRemoveStr2 = '';

    let finalstring = '';

    let finalCaps = '';

    //Remove the numbers for str1
    for (let i = 0; i < str1.length; i++){
        if(numbers.includes(str1[i])){
        }else{
            numRemoveStr1 += str1[i];
        }
    }

    //Remove the numbers for str2
    for (let j = 0; j < str2.length; j++){
        if(numbers.includes(str2[j])){
        }else{
            numRemoveStr2 += str2[j];
        }
    }

    //Alternating the letters from each str into a new combined str
    if(numRemoveStr1.length < numRemoveStr2.length){
        for(let i = 0; i < numRemoveStr1.length; i++){
            finalstring += numRemoveStr1[i] + numRemoveStr2[i];
        }
        for(let j = numRemoveStr1.length; j < numRemoveStr2.length; j ++){
            finalstring += numRemoveStr2[j];
        }
    }else if(numRemoveStr1.length > numRemoveStr2.length){
        for(let i = 0; i < numRemoveStr2.length; i++){
            finalstring += numRemoveStr1[i] + numRemoveStr2[i];
        }
        for(let j = numRemoveStr2.length; j < numRemoveStr1.length; j ++){
            finalstring += numRemoveStr1[j];
        }
    }else{
        for(let i = 0; i < numRemoveStr1.length; i++){
            finalstring += numRemoveStr1[i] + numRemoveStr2[i];
        }
    }

    //Uppercase the vowels
    for(let i = 0; i < finalstring.length; i++){
        if(vowels.includes(finalstring[i])){
            finalCaps += finalstring[i].toUpperCase();
        }else {
            finalCaps += finalstring[i];
        }
    }

    //Display the result
    console.log(finalCaps);
}
// Do not write anything outside function
