const express = require("express")
const router = express.Router()
router.get("/", (req,res) => {
    res.send("222")
})

module.exports = router