const express = require("express")
const PORT = 9001

const app = express()

// app.use((req, _, next) => {
//     console.log("neue request", req.method, req.url);
//     next()
// })

app.use(express.static("public"))

app.use((_, res) => {
    res.status(404)
    res.sendFile(__dirname + "/public/404.html")
})

app.listen(PORT, console.log("Server is listing to Port ", PORT))