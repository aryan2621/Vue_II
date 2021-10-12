const equal =document.querySelector("#equal")
const clear =document.querySelector("#clear")
const inputField =document.querySelector(".value-box input")
const appendableCells =document.querySelectorAll(".cell.appendable")


appendableCells.forEach((cell)=>{
    cell.addEventListener('click',(e)=>{
        const cellValue= e.target.innerText;
        inputField.value += cellValue
    })
})

equal.addEventListener('click',()=>{
    const lastValue =inputField.value
    const result =eval(lastValue)
    inputField.value =""
    if(result){
        inputField.value =result
    }
})

clear.addEventListener('click',()=>{
inputField.value =""
})