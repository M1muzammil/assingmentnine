
    function factorial() {
        let number = document.getElementById("point0").value;
    
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
    
        document.getElementById(
            "zero"
        ).innerHTML = `The Factorial Of <i>'${number}'</i> IS <i>'${result}'</i>`;
    }
    
    function reVowels() {
        let text = document.getElementById("remove").value;
    
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let result = "";
        for (let i = 0; i < text.length; i++) {
            if (!vowels.includes(text[i])) {
                result += text[i];
            }
        }
    
        document.getElementById("remove1").innerHTML = result;
    }




    function largenumber() {
        let numbers = document.getElementById("first1");
        numbers = numbers.value;
    
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > result) {
                result = numbers[i];
            }
        }
    
        document.getElementById(
            "first"
        ).innerHTML = `The Largest Number Is <i>'${result}'</i>`;
    }
function capital(){

    let text = document.getElementById("seconde2").value
 let result = text.charAt(0).toUpperCase() + text.slice(1)
    document.getElementById("seconde" ).innerHTML = result
}
function average(){

    let number = document.getElementById("third3");
    number = number.value.split(",").map(Number);

    let sum = number.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    let result = sum / number.length;

    document.getElementById("third").innerHTML = `The Average of ${number} Is <i>'${result}'</i>`;



}
    
    