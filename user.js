

// import mongoose from "mongoose";
// const userSubTodo = new mongoose.Schema({});  // in the object, we write the data
// export const User = mongoose.model("Subtodo",userSubTodo)

import mongoose from "mongoose";


 //There are two ways of writing it-

// const userSubTodo = new mongoose.Schema(
//     {
//         username: String,
//         isActive: Boolean,
//         email:String
//     }
// )

//In another approach we write an object for every specific field which gives us better clarity and more fields to understand


const userSubTodo = new mongoose.Schema({
    username:{
        type:String,
        unique: true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:true
        // required:[true,"Password is required"]   -> this is another approach in which if you dont give password then this given custom msg will appear in user's screen
    }
},{timestamps:true}   //this will give you time when user logged in or updated. createdAt and updatedAt
)



 

export const User = mongoose.model("SubToDo", userSubTodo)
