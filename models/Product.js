import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    img: {
        type:String,
        required:true,
    },
    title: {
        type:String,
        required:true,
        maxlength:100,
    },
    price: {
        type:Number,
        required:true,
    },
    desc: {
        type:String,
        required:true,
        maxlength:1000,
    },
    howto: {
        type:String,
        required:true,
        maxlength:1000,
    },
    ingredients: {
        type:String,
        required:true,
        maxlength:1000,
    },
},
{timestamps: true}
);

export default mongoose.models.Product || 
    mongoose.model("Product", ProductSchema);