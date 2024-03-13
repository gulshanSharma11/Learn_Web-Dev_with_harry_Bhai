import mongoose from "mongoose";
import express from "express";
import { Todo } from "./modelss/Todo.js";
const app = express();
let a = await mongoose.connect("mongodb://localhost/todo");
app.get("/", (req, res) => {
  const todo = new Todo({ title: "test", desc: "test",age:4 });
  todo.save();
  res.send("Hello Ji db-ex");
})
app.get("/", (req, res) => {
    const todo = new Todo({ title: "test", desc: "test",age:4 });
    todo.save();
    res.send("Hello Ji db-ex");
  })
  app.get("/about",async (req, res) => {
    // const todo = new Todo({ title: "test", desc: "test",age:4 });
    let a= await Todo.findOne({ });
     
    // todo.save();
    res.send(a);
  })

app.listen(9000, () => console.log("Connection with db to express"));
