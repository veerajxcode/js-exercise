import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideoComments = asyncHandler(async(req,res) =>{
    console.log("we are inside comment");
    })
const addComment = asyncHandler(async(req,res) =>{
console.log("we are inside comment");
})



export {
    addComment,
    getVideoComments
}