// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const todos = require('./modules/todos')

// 準備引入路由模組
// 匯出路由器
router.use('/', home)
router.use('/todos', todos)
module.exports = router