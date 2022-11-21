import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:true,
        maxlength:200,
    },
    products: [
        {
            img: {type:String},
            title: {type:String},
            price: {type:Number},
            quantity: {type:Number},
            total: {type:Number},
        },
    ],
    orderTotal: {
        type:Number,
        required:true,
    },
    method: {
        type:Number,
        required: true,
    },
},
{timestamps: true}
);

export default mongoose.models.Order || 
    mongoose.model("Order", OrderSchema);