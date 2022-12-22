const express = require('express')
const router = express.Router()

const record = require('../../models/record')
// 定義首頁路由
router.get('/', (req, res) => {
    const userId = req.user._id   // 變數設定
    record.find({ userId })
        .lean()
        .sort({ _id: 'asc' }) // desc
        .then(records => res.render('index', { records }))
        .catch(error => console.error(error))
})
router.get("/search", (req, res) => {
    const categoryId = req.query.categoryId
    const userId = req.user._id
    record.find({ userId })
    record.find({ categoryId })
        .lean()
        .sort({ _id: 'asc' }) // desc
        .then(records => res.render('index', { records }))
        .catch(error => console.error(error))
})
module.exports = router