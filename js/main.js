//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let flag = false;

function findWords(dog_names, dog_string){
    for (dog of dog_names){
        if (dog_string.toLowerCase().includes(dog.toLowerCase())){
            console.log("Matched dog_name" + " " +Math.random()) //did this for stupid reason in FireFox
            flag = true;
        }
    }
    if (flag != true) {
        console.log("No Matches")
    }
}

//Call method here with parameters
findWords(dog_names, dog_string)





//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    
    for (let i = 0; i<arr.length; i++){
        if (i%2 == 0){
            arr.splice(i, 1, "even index")
        };
    };
    return arr
}

console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]





/**
 * ======== CODE WARS ==========
 */

/**
 * Sum of positive
 * 
 * You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.

 */

    function positiveSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
            sum += arr[i];
          }
        }
        return sum;
      }

/**
 * Convert a Number to a String
 * 
 * We need a function that can transform a number (integer) into a string.

    What ways of achieving this do you know?
    Examples (input --> output):

    123  --> "123"
    999  --> "999"
    -100 --> "-100"


 */

    function numberToString(num) {
        return num.toString()
      }