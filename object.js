// Object is used to store collection of data in key and value form.

// let data = {
//     name:"one",
//     age:34,
//     course:"fullstack"
// }


// access any value in object --> using .(dot) or ['keyName']
// console.log(data.name)  // --> one
// console.log(data['name'])  // --> one
// console.log(data.age)  // --> 34
// console.log(data['age'])  // --> 34
// console.log(data.course)  // --> fullstack
// console.log(data['course'])  // --> fullstack


// let obj = {
//     name:"one",
//     age:23,
//     languages:['hindi','english','spanish'],
//     details:{
//         houseNo:44,
//         city:"kanpur",
//         state:"UP"
//     }
// }

// access english
// console.log(obj.languages[1])  // english


// access UP
// console.log(obj.details.state)  // UP


// Add data or repalce a value in object --> 

let obj = {
    name:"one",
    age:23,
    languages:['hindi','english','spanish'],
    details:{
        houseNo:44,
        city:"kanpur",
        state:"UP"
    }
}

obj.age = 44;
obj.marks = 80;
console.log(obj)

