import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: String ,
     desc: String,
     age:Number
  });
  export const Todo = mongoose.model('Todo', TodoSchema);