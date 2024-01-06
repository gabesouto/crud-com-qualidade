import fs from 'fs';
import { encode } from 'punycode';

const DB_FILE_PATH = './core/db';

interface todo {
date: string,
content: string,
done:boolean
}

function create(content: string){

   const todo:todo = {
   date: new Date().toISOString(),
   content: content,
   done:false
  };

  const todos: Array<todo> = [
   ...read(),
   todo,
  ];

   fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
      todos,
      dogs: [],
   }, null, 2));
      return content;
};


function read():Array<todo>{;
   const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8");
   const db = JSON.parse(dbString || "{}")

   if(!db.todos){
      return []
   }

   return db.todos
}

function clearDB (){
   fs.writeFileSync(DB_FILE_PATH, "")
}
clearDB()
create("crud de qualidade")
create("novo crud com mais qualidade")
console.log(read());
