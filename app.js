// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')
const PORT = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')
require('./config/mongoose')
const app = express()


app.engine('hbs', exphbs({
  defaultLayout: 'main', extname: '.hbs', helpers: {
    dateTransform(date) {
      let Date = date.getDate()
      let Month = date.getMonth() + 1
      if (Date < 10) {
        Date = '0' + Date
      }
      if (Month < 10) {
        Month = '0' + Month
      }
      let formatted_date = date.getFullYear() + "-" + Month + "-" + Date
      return formatted_date
    },
    getIcon(categoryId) {
      switch (categoryId) {
        case 1:
          return 'fa-house'
          break;
        case 2:
          return 'fa-van-shuttle'
          break;
        case 3:
          return 'fa-face-grin-beam'
          break;
        case 4:
          return 'fa-utensils'
          break;
        case 5:
          return 'fa-pen'
          break;
      }
    }
  }
}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  // 你可以在這裡 console.log(req.user) 等資訊來觀察
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})
app.use(routes)
// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})