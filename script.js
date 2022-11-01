// document.getElementById("counter").innerText = 5;




//inialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the countMe in the HTML to reflect the new count

let count =0;
let countMe = document.getElementById("countMe")

//1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

console.log(saveEl);
function increaseMe(){
    // console.log("clicked");
    count +=  1
    countMe.innerText = count

}

//create a function, saveMe(), which logs out the count when it's called


//3, Render the variable in the saveEl using innerText
//NB: Make sure to note delete the exisiting content of the parapgraph
function saveMe(){
    //2, create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "


    //using innnerText prevents space between number 
//    saveEl.innerText += countStr 
   //to fix that we are using textContent or innerHTML
   saveEl.textContent += countStr;
countMe.textContent = 0; //to set the value back to 0 after save it
count=0; //to set the value starting from 0, not from where it left off

}





