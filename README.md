# NodeJS 分层的目录
1. 分层主要是为了让每个目录只处理相应的逻辑
2. 这里使用`express`的`NodeJS`的一个框架
3. 文件基本结构： `app.js`是用来开启服务器，`router` 是用来放置所有的路由地址，`controller`是用来处理所有的业务逻辑
    ![avator] (https://img-blog.csdnimg.cn/20200318114123388.png)
4. `app.js` `routing(app)`是为了给`router/index.js`文件中传入`app`
	```js
	const express = require("express")
	const app = express()
	const routing = require("./router")
	
	routing(app)
	
	app.listen(9527,() => console.log("服务启动 localhost:9527"))
	```
5. `router/index.js` 这里是为了将`router`文件夹下面的文件全部自动导入，再使用`app.use()`将路由注册成为中间件
	```js
	const fs = require("fs")
	module.exports = (app) => {
	    fs.readdirSync(__dirname).forEach(item => {
	        if(item === "index.js") return
	        const file = require(`./${item}`)
	        app.use(file)
	    })
	}
	```
	+ `router`文件夹下的其他文件代码差不多
		```js
		const express = require("express")
		const router = express.Router()
		const userCtl = require("../controller/user")
		router.get("/user/:id", userCtl.read)
		router.post("/user/updata", userCtl.updata)
		router.get("/user/delete", userCtl.delete)
		router.post("/user/created", userCtl.created)
		
		module.exports = router
		```

6. `controller`文件夹主要处理逻辑方面
	```js
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
	```