import { Router } from "express";
import {publishAVideo

} from "../controllers/video.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import router from "./user.routes";

const router = Router();
router.use(verifyJWT); //Apply verifyJWT in all routes in this file

router.route("/")
    .post(
        upload.fields([
            {
                name: videoFile,
                max: 1
            },
            {
                name: thumbnail,
                max: 1
            }
        ]), publishAVideo
    );

    export {
        publishAVideo
    }