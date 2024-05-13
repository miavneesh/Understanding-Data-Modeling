import mongoose from "mongoose";

const userTodo = new mongoose.Schema({},{timestamps:true})

export const Todo = mongoose.model("Todo",userTodo)
