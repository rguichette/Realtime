import { Request, Response, Router } from "express"

var express = require('express')
var app = express()
var router:Router = express.Router()


export default router.post('/',(req:Request,res: Response)=>{
res.send("logged in...")

})


