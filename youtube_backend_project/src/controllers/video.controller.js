import mongoose, {isValidObjectId} from "mongoose";
import {Video, video} from "../models/video.model.js"
import {User, user} from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const publishVideo = asyncHandler(async(req,res) => {
    const { title, description} = req.body

    if([title, description].some((field) => field?.trim() === "")){
        new ApiError(400, "All fields are required")
    }

    const videoLocalPath = req.files?.videoFile[0]?.path;
    const videoThumbnailLocalPath = req.files?.thumbnail[0]?.path

    if(!videoLocalPath){
        new ApiError(400, "Video local path is needed")
    }

    const videoFile = await uploadOnCloudinary(videoLocalPath)
    const thumbnail = await uploadOnCloudinary(videoThumbnailLocalPath)

    const userId = req.user?._id
    const video = await Video.create(
        {
            videoFile: videoFile.url,
            thumbnail: thumbnail?.url || "",
            title,
            description,
            duration: "",
            views: "",
            isPublished: false,
            owner: mongoose.Types.ObjectId(userId)
        }
    )

    const publishedVideo = await Video.findById(video._id);

    if(!publishedVideo){
        new ApiError(500, "Something went wrong while uploading video")
    }

    return res.status(201).json(200, "Video uploaded successfully")

})