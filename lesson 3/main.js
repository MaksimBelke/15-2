// function getFullName(user,age) {
//     if(age < 18){
//         alert("close")
//     }else{
//         alert(user.first_name +""+ user.last_name + "" + "open")
//     }
// }
// const user = {
//     first_name: "john",
//     last_name: "barboro"
// }
// const age = promt("Сколько вам лет?")
//
// getFullName(user,age)
//
// const anonym = function (users){
//     console.log(user,users)
// }
// anonym()

// function numbers(number1,number2){
//     if (number1 > number2){
//         console.log("Первое больше")
//     } else if (number2 > number1){
//         console.log("Второе больше")
//     } else {
//         console.log("Они ровны")
//     }
// }
// const number = {
//     number1: prompt("число?"),
//     number2: prompt("число?")
// }
// numbers(number.number1,number.number2)

const input = document.getElementById("input")
const  button = document.getElementById("button")
button.onclick = function (){
    console.log(input.value)
}

