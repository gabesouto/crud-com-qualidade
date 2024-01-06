const fs = require('fs');

const DB_FILE_PATH = './core/db';

function create(content){
   //salvar o content no sistema

   fs.writeFileSync(DB_FILE_PATH, content);
      return content
}

create('crudao da massa');

console.log('CRUD ciado com sucesso');