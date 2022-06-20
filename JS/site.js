// Get Values From The Page
// starts or controller function
function getValues() {
    //get values from page
    let startValue = document.getElementById("valueStart").value;
    let endValue = document.getElementById("valueEnd").value;
    // Valadition Is Needed For Input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        numbers = generateNumbers(startValue, endValue);
        //call displaynumbers
        displayNumbers(numbers);
    } else {
        alert("Enter Intergers Only")
    }



}


// Generate Numbers Between Start Value and End Value
// logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];


    // get all numbers fron start to end
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

// Display The Numbers And Mark The Even Nubmers Bold
// display or view function
function displayNumbers(numbers) {

    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        let className = "even";

        let number = numbers[i];
        if(number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
     
        
    }

    document.getElementById("results").innerHTML = templateRows;


}