import express from "express"
import register from "./register.js"
const router = express.Router()

import bodyParser from "body-parser"
// var jsonParser = bodyParser.json()
// router.route("/").post(register)

router
    .route("/")
    .get((req, res) => {
        res.send({ message: "Auth api is working" })
        res.end()
    })
    .post(register)
export default router
