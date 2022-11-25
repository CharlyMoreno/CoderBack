const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const dotenv = require('dotenv').config();
const advancedOptions = {useNewUrlParser:true,useUnifiedTopology:true}
const app = express()
const auth = require('./auth/auth')

const sessionRoutes = require('./routes/session/session.routes')

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(process.env.SECRET))
app.use(session({
    store: MongoStore.create({mongoUrl:process.env.MONGOURL,mongoOptions:advancedOptions}),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge:60 * 1000
    }
}))
app.use('/session', sessionRoutes)

module.exports =app;