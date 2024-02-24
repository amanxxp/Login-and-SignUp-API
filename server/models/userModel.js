import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        type:String,
        minLength:6,
        require:true
    }
},{
    timestamps:true
});
const User = mongoose.model("User",userSchema);
export default User