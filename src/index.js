const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'))

//route
app.get('/trang-chu', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news') 
})

app.get('/search', (req, res) => {
  res.render('search') 
})

// 127.0.0.1 - localhost  
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})