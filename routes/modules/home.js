const express = require('express')
const router = express.Router()

const record = require('../../models/record')
// 定義首頁路由
router.get('/', (req, res) => {
    const userId = req.user._id   // 變數設定
    record.find({ userId })
        .lean()
        .sort({ _id: 'asc' }) // desc
        .then(records => {
            let totalAmount = records.reduce((total, record) => { return total + record.amount }, 0)
            res.render('index', { records, totalAmount })
        })
        .catch(error => console.error(error))
})
router.get("/search", (req, res) => {
    const categoryId = req.query.categoryId
    const userId = req.user._id
    console.log(categoryId)
    if (categoryId > 0) {
        record.find({ userId, categoryId })
            .lean()
            .sort({ _id: 'asc' }) // desc
            .then(records => {
                let totalAmount = records.reduce((total, record) => { return total + record.amount }, 0)
                res.render('index', { records, categoryId, totalAmount })
            })
            .catch(error => console.error(error))
    } else {
        console.log(1)
        record.find({ userId })
            .lean()
            .sort({ _id: 'asc' }) // desc
            .then(records => {
                let totalAmount = records.reduce((total, record) => { return total + record.amount }, 0)
                res.render('index', { records, totalAmount })
            })
            .catch(error => console.error(error))
    }
})
module.exports = router