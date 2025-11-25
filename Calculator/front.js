function Vals(){
    return{
        num1: Number(document.getElementById("input1").value),
        num2: Number(document.getElementById("input2").value)
    };
}
let finalResult = 0;
function addition(){
    let {num1, num2} = Vals();
    solution(num1 + num2 );
}
function subtraction(){
    let {num1, num2} = Vals();
    solution(num1 - num2);
}
function multiplication(){
    let {num1, num2} = Vals();
    solution(num1 * num2);
}
function division(){
    let {num1, num2} = Vals();
    solution(num1 / num2);
}
function solution(finalResult){
document.getElementById("result").innerHTML = "Result "+finalResult;
} 