//es5 and es6
// console.log(a)
// const a = 10;
// let b = 10
//
// //es5
// var c = "asadfasbn";
// console.log(c)
//
// c = "adf"
//
// console.log(c)


//string expression - интерполяция строк

const first_name = "jack";
const last_name = "Barbaro";
//
// console.log("Full Name" + first_name + ' ' + last_name )
//
// console.log(Full Name: ${first_name} ${last_name})


// const getFullName = (user) => {
//     // return "First Name: " + user.first_name + "\n" + "Last Name: "  + " "+ user.last_name;
//     return First Name: ${user.first_name}\nLast Name: ${user.last_name}
// }
//
// const user = {
//     first_name: "Atai",
//     last_name: "Zaplach"
// }
//
// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [{...mass}]

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)

const obj = {
    username: "Beks",
    age: 15,
    last_name: "Bekmamatov",
    full_name: "Beks Bekmamatov"
}

const obj2 = [{...obj}]
console.log(obj2)

// деструктуризация

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key2: 'value2'
        },
        {
            key3: 'value3'
        }
    ]
}
const {data, onSubmit} = props;

console.log(data) ;

onSubmit();


console.log(props.data[1].key2)//es5 and es6
// console.log(a)
// const a = 10;
// let b = 10
//
// //es5
// var c = "asadfasbn";
// console.log(c)
//
// c = "adf"
//
// console.log(c)


//string expression - интерполяция строк

const first_name = "jack";
const last_name = "Barbaro";
//
// console.log("Full Name" + first_name + ' ' + last_name )
//
// console.log(Full Name: ${first_name} ${last_name})


// const getFullName = (user) => {
//     // return "First Name: " + user.first_name + "\n" + "Last Name: "  + " "+ user.last_name;
//     return First Name: ${user.first_name}\nLast Name: ${user.last_name}
// }
//
// const user = {
//     first_name: "Atai",
//     last_name: "Zaplach"
// }
//
// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [{...mass}]

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)

const obj = {
    username: "Beks",
    age: 15,
    last_name: "Bekmamatov",
    full_name: "Beks Bekmamatov"
}

const obj2 = [{...obj}]
console.log(obj2)

// деструктуризация

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key2: 'value2'
        },
        {
            key3: 'value3'
        }
    ]
}
const {data, onSubmit} = props;

console.log(data) ;

onSubmit();
console.log(props.data[1].key2)













