const knex = require('knex');
require('dotenv').config();

const db=knex({
    client:'pg',
    connection: process.env.DB_URl
});

console.log('knex and driver installed correctly');

function knexinfo(searchTerm){
    db
        .select('*')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result=>{console.log(result)})
        .finally(()=>db.destroy());
}

knexinfo('loaf')