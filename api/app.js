const express = require("express")
const app = express()
const routing = require("./router")

routing(app)

app.listen(9527,() => console.log("服务启动 localhost:9527"))