//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
//import mongoose from "mongoose";
//import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server id running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
console.log(`Mongo db connection failed!! : ${err}`);
})

/*import express from "express";
const app = express()*/

/**
 * Professional approach
 * IIFE Approach
 * An IIFE (Immediately Invoked Function Expression) is a Javascript
 *  function that runs as soon as function is defined.
 * Example:
 * (function () {
    // …
    })();
------------------------------------
    (() => {
    // …
    })();
------------------------------------
    (async () => {
    // …
    })();

    Here we are using async () approach:
    An async () IFFE allows you to use await and for-await even in old browsers and
    javascript runtimes that has no top-level await
 */
/*( async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errr", (error) =>{
            console.log("ERRR: ", error);
            throw error
        })
        app.listen(process.env.port, () =>{
            console.log(`It is running on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()*/