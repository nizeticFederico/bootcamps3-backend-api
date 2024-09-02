
import mongoose, { Schema } from "mongoose";


const orderShcema = new mongoose.Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },


    products: [
        {
            product_id:{
            type: Schema.Types.ObjectId,
            ref: "Product",
            require: true
        },
            quantity: {
                type: Number,
                require: true,
                
            },

            sub_total:{
                type: Number,
                require: true
            }
    }
    ],

    total_price: {
        type: Number,
        require:true
    }

},
{
    timestamps: true
})


const orders = mongoose.model("Orders" , orderShcema);


export default orders;

