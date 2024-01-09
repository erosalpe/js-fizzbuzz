const griglia = document.querySelector("div.griglia");
const Fizz = '<div class="bloccoFizz">Fizz</div>';
const Buzz = '<div class="bloccoBuzz">Buzz</div>';
const FizzBuzz = '<div class="bloccoFizzBuzz">FizzBuzz</div>';

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        griglia.innerHTML += FizzBuzz;
        console.log("se divisibile sia per 3 che per 5 : " + i);
    } else {
        if (i % 3 === 0){
            griglia.innerHTML += Fizz;
            console.log("divisibile solo per 3: " + i);
        } else {
            if (i % 5 === 0){
                griglia.innerHTML += Buzz;
                console.log("divisibile solo per 5: " + i);
            } else {
                griglia.innerHTML += `<div class="bloccoNormale" id="numeroBase">${i}</div>`;
                console.log("ultimo else : " + i);
            }
        }
    }
}