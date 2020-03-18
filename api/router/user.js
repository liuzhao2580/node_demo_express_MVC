const express = require("express")
const router = express.Router()
const userCtl = require("../controller/user")
router.get("/user/:id", userCtl.read)
router.post("/user/updata", userCtl.updata)
router.get("/user/delete", userCtl.delete)
router.post("/user/created", userCtl.created)

module.exports = router