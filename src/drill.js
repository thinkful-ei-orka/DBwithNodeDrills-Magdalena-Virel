const knex = require('knex');
require('dotenv').config();

const db=knex({
    client:'pg',
    connection: process.env.DB_URl
});

console.log('knex and driver installed correctly');

// function knexinfo(searchTerm){
//     db
//         .select('*')
//         .from('shopping_list')
//         .where('name', 'ILIKE', `%${searchTerm}%`)
//         .then(result=>{console.log(result)})
//         .finally(()=>db.destroy());
// }

// knexinfo('loaf')

// function paginateItems(pageNumber) {
//     const itemsPerPage = 6
//     const offset = itemsPerPage * (pageNumber - 1)
//     db  
//         .select('*')
//         .from('shopping_list')
//         .limit(itemsPerPage)
//         .offset(offset)
//         .then(result => {
//             console.log(result)
//         })
//         .finally(()=>db.destroy());
// }

// paginateItems(2)

function resentItems(daysAgo) {
    db
    .select('*')
    .from('shopping_list')
    .where(
        'date_added',
        '>',
        db.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then(result => {
        console.log(result)
      })
    .finally(()=>db.destroy());
}

resentItems(2)

