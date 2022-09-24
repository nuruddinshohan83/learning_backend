import express from "express"
import connectDB from "./db.js"
import testRouter from "./routes/test.js"
import regRouter from "./auth/router.js"
const PORT = 5000

const app = express()
app.use(express.json())
connectDB()
app.listen(PORT, () => {
    console.log("Server is listening to port:" + PORT)
})
// app.use(express.urlencoded({ extended: false }))
app.get("/api", (req, res) => {
    console.log("api is running")
    res.end()
    // console.log(req, "body")
    // res.status(200).json(req.body)
})
app.post("/api", (req, res) => {
    console.log(req.body, "body")
    res.status(200).json(req.body)
    res.end()
})

app.use("/test", testRouter)
app.use("/auth", regRouter)
//mongoose.set("useFindAndModify", false)
//console.log("Nodemon is working")
