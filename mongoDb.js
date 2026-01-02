// Mongodb --> is a popular open source document oriented no- sql database. instead of using  tables and rows like traditional database , it uses JSON like object to store data

// DataBase --> collection --> Document(data)

// collection --> a collection is a grouping of mongodb documents it is equivalent of a table in relational database

// Document --> a document is a record in mongodb collection and the basic uinit of data in mongodb


// Commands -->

//1) to view all database  -->   show dbs
//2) Create new Database or use any existing Database -->  use DatabaseName
//3) create a collection inside Database --> db.createCollection('collectionName')

// 4) Insert Data inside Collection 
        // a)insert Single Data --> db.collectionName.insertOne({key:values})
        // b)insert Many Data --> db.collectionName.insertMany([{key:values} , {key:value}])

// 5) get all data present inside a collection --> db.collectionName.find()
// 6) get all filtered Data inside a collection-->  db.collectionName.find({key:value})

//7) get a single data present inside collection -->  db.collectionName.findOne({key:value})

// 8) update Data -->
//   a) update single Data --> db.collectionName.updateOne({key:value} , {$set:{key:value}})
// example  --> db.product.updateOne( {_id: ObjectId(6954a3f3bd45b932658348d6)}  , {$set:{name:"samsung"}})
// example  --> db.product.updateMany( {category: "beauty"}  , {$set:{category:"beauty plus"}})

//9) delete Data --> 
        // a) delete Single Data --> db.collectionName.deleteOne({key:value})
        // a) delete Multiple Data --> db.collectionName.deleteMany({key:value})

// 10) delete collection  --> db.collectionName.drop()
// 11) delete DataBase  --> db.dropDataBase()


// 12) other filter methods --> gte, lte, lt ,gt, ne ,eq
// example-->   db.collectionName.find({key:{$gte:value}})
// example-->   db.products.find({rating:{$gte:4.3}})

// let obj =[
//         {
//         name:"one",
//         email:"one@gmail.com",
//         password:"1234567",
//         details:{
//                 city:"kanpur",
//                 state:"up"
//                 }
//         },
//         {
//         name:"two",
//         email:"two@gmail.com",
//         password:"1234567",
//         details:{
//                 city:"kanpur",
//                 state:"up"
//                 }
//         },
//         {
//         name:"three",
//         email:"three@gmail.com",
//         password:"1234567",
//         details:{
//                 city:"lucknow",
//                 state:"up"
//                 }
//         },
// ]