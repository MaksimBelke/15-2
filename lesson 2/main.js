// const array = [
//     {
//         username: 'Jack',
//         full_name: 'Jack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Jack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Jack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Jack Koin'
//     },
// ]
//
// for( let i = 0; i < array.length; i++) {
//     if ( i === 2){
//         break;
//     } else {
//         console.log(array[i])
//     }
// }
// for (let user of array){
//     console.log(user)
// }
//  const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//  }
//
// for(let key in obj){
//     console.log(obj[key])
// }
// const users = [
//     {
//         user:"jack",
//         salary: 500
//     },
//     {
//         user: "john",
//         salary: 1000
//     },
//     {
//         user: "shaman",
//         salary: 10000
//     }
// ]
//  const filteredUser = users.filter(user => user.salary>500)
//    console.log(filteredUser)

const robots = [
    {
        name:"jack",
        power: 500
    },
    {
        name: "john",
        power: 1000
    },
    {
        name: "king",
        power: 10000
    },
    {
        name: "jordan",
        power: 30000
    },
    {
        name: "max",
        power:3000
    }
]
 const filteredRobots = robots.filter(user => user.power>5000)
   console.log(filteredRobots)

