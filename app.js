const input = document.getElementById("take-input");
const buttonn = document.getElementById("buttonn");
const textt = document.getElementById("resultt");
console.log(textt);
console.log(buttonn);
let filterInput = '';

console.log(input);
input.addEventListener('keyup',()=>{
    console.log(input.value);
    filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    // console.log(filterInput);


})
buttonn.addEventListener("click", () => {
    console.log("clicked");
    let reverseInput = filterInput.split("").reverse().join("");
    if(filterInput != reverseInput) {
        textt.innerHTML = `No, ${input.value} isn't a palindrome!`;
    }else{
    textt.innerHTML = `Yes, ${input.value} is a palindrome!`;
    }
});