use('students_52');

// db.user.insertOne({
//     name: 'Alex'
// });

// db.user.insertOne({
//     name: 'Bob',
//     isStudent: true,
//     address: {
//         city: 'Wuppertal',
//         land: 'NRW'
//     }
// });

// db.user.insertMany([{
//     name: 'Dick',
//     isStudent: true,
//     address: {
//         city: 'Berlin',
//         land: 'Berlin'
//     }
// },
// {
//     name: 'Jack',
//     isStudent: true,
//     address: {
//         city: 'Leipzig',
//         land: 'Saxony'
//     }
// }]);

// db.user.find().limit(2);
db.user.find().sort({name: -1});