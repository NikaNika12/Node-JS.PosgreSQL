const express = require ("express")
const userRouter = require("./routes/user.routes")
const postRouter = require("./routes/post.routes")
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json()); //порядок написание хжесь очень важен!!!
app.use("/api", userRouter)
app.use("/api", postRouter)


// app.get("/", (req,res) => { //проверка работы сервера
//     res.send ("App is working")
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))