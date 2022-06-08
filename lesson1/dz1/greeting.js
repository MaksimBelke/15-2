// let name=prompt("Укажите своё имя:"),
//      surname=prompt("Укажите свою фамилию:"),
//      age=prompt("Укажите свой возраст:");
// alert("Здравствуйте "+name+" "+surname);
// alert(age<18?"Вы не совершеннолетний":"Вы совершеннолетний");


const arr1 = [0,1,2,3,4,5,7,];
const arr2 = [1,2,3,4,5,6,3,4];
if (arr1.length > arr2.length){
    console.log('первый массив больше')
}else if (arr2.length > arr1.length) {
    console.log('второй массив больше')
}else {
    console.log('они равны')
}

const colors = 'red';
switch (colors){
    case "yellow":
        console.log('yellow');
        break;
    case 'red':
        console.log('red');
        break;
    case 'green':
        console.log('green');
        break;
}


const arr4 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]];
console.log(arr4[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0])