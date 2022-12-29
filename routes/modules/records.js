const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/new', (req, res) => {
    return res.render('new')
})

router.post('/', (req, res) => {
    const userId = req.user._id
    const { name, date, categoryId, amount } = req.body
    return Record.create({ name, date, categoryId, amount, userId })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
    const userId = req.user._id   // 變數設定
    Record.find({ userId })
        .lean()
        .sort({ _id: 'asc' }) // desc
        .then(records => {
            totalAmount = records.reduce((total, Record) => { return total + Record.amount }, 0)
            res.render('index', { records, totalAmount })
        })
        .catch(error => console.error(error))
})

router.get('/:id/edit', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id

    return Record.findOne({ _id, userId })
        .lean()
        .then(record => {
            const categoryId = record.categoryId
            res.render('edit', { record, categoryId })
        })
        .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    const { name, date, categoryId, amount } = req.body
    return Record.findOne({ _id, userId })
        .then(record => {
            record.name = name
            record.date = date
            record.categoryId = categoryId
            record.amount = amount
            return record.save()
        })
        .then(() => res.redirect(`/records/${_id}`))
        .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id

    return Record.findOne({ _id, userId })
        .then(record => record.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})
module.exports = router