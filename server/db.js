import mongoose, { connect } from "mongoose"
import express from "express"
const app = express()

let connectDB = () => {
    mongoose
        .connect("mongodb://localhost/appdb")
        .then(() => {
            console.log("Connected")
        })
        .catch((e) => console.error(e))
}
export default connectDB
