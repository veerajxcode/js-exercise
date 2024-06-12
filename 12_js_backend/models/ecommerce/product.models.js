import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        required: true,
        type: String,
    },
    price:{
        type: Number,
        default:0
    },
    stock:{
        type: Number,
        default:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    productImage:{
        type: String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{timestamps: true})

export const Product = mongoose.model("Product", productSchema)