import { error } from 'console';
import fs from 'fs';
import { v4 as uuid } from 'uuid';

const DB_FILE_PATH = './core/db';

interface todo {
date: string,
content: string,
done:boolean,
id:string
}

function create(content: string):todo{

   const todo:todo = {
   id:uuid(),
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
     
   return todo;
};


function read():Array<todo>{;
   const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8");
   const db = JSON.parse(dbString || "{}")

   if(!db.todos){
      return []
   }

   return db.todos
}

function update(id:string, partialTodo:Partial<todo>){
   let updatedTodo;
   const todos = read();

   todos.forEach((currentTodo) => {
     const isUpdating = currentTodo.id === id;
     if(isUpdating){
      updatedTodo = Object.assign(currentTodo, partialTodo)
     }

   })

   fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
      todos,
   }, null, 2))

   if(!update){
      throw new Error('Please, provide another ID!')
   }
   
   return updatedTodo
}

function clearDB (){
   fs.writeFileSync(DB_FILE_PATH, "")
}

clearDB()
create("primeiro crud de qualidade")
create(" segundo novo crud com mais qualidade")
const thirdTodo =  create("terceiro novo crud com mais qualidade")
console.log(read());

update(thirdTodo.id, {
   content: "22222222222222"
})

