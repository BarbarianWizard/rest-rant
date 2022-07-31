// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))




app.get('/', (req, res) => {
    res.render('Home')
  })
  app.get('*', (req, res) => {
    res.render('error404')
  })



  app.listen(process.env.PORT)

/*
Photo by <a href="https://unsplash.com/@ahungryblonde_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sara Dubler</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  Photo by <a href="https://unsplash.com/@foodfaithfit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Kiser</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  */
