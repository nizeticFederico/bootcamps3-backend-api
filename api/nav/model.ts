import { Schema , model } from "mongoose";

const navSchema = new Schema({

    label:{
        type: String,
        required: true
    },

    link:{
        type:String,
        required:true
    }
})

const Nav = model("Nav", navSchema);

export default Nav;