const formidable = require("formidable")
module.exports = {
    created(req,res) {
        res.send("created")
    },
    delete(req,res) {
        res.send("delete")
    },
    updata(req,res) {
        const form = formidable({
            multiples: true
        })
        form.parse(req,(err,fileds,files) => {
            res.send(fileds)
        })
    },
    read(req,res) {
        const {params} = req
        console.log(params)
        res.send("1111")
    }
}