const screenResult = document.querySelector(".result");
const screenHistory = document.querySelector(".history");
const buttons = document.querySelectorAll("button");
let result = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (event) =>{
        if(event.target.classList.contains("equal"))
        {
            screenHistory.textContent = screenResult.textContent;
            screenResult.textContent = operate(screenResult.textContent);

        }
        else if(event.target.classList.contains("operation"))
        {
            screenResult.textContent += " " + event.target.textContent + " ";
        }
        else if(event.target.classList.contains("clear"))
        {
            screenResult.textContent = "";
            screenHistory.textContent = "";
        }
        else {
            screenResult.textContent += event.target.textContent;
        }
    })
})

let multiply = (a, b) => a * b; 
let add = (a, b) => a + b; 
let subtract = (a, b) => a - b; 
let divide = (a, b) => a / b; 

function operate(arithmetic)
{
    let order = arithmetic.split(" ");
    let result = parseInt(order[0]);
    console.log(result);
    for(let i = 1; i < order.length; i += 2)
    {
        if(order[i] == "+")
        {
            result += parseInt(order[i+1]);
        }
        else if(order[i] == "-")
        {
            result -= parseInt(order[i+1]);
        }
        else if(order[i] == "×")
        {
            result *= parseInt(order[i+1]);
        }
        else if(order[i] == "÷")
        {
            result -= parseInt(order[i+1]);
        }
        console.log(result);
    }
    return result;
}