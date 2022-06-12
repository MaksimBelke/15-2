function arguments (a,b){
    if (a > b){
        console.log("Второй меньше")
    } else if (b > a){
        console.log("Первый меньше")
    } else {
        console.log("Они ровны")
    }
}
arguments(7 ,9)

function count(text){
    console.log(text.length)
}
count('12345')