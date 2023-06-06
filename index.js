const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./config/passport-local-strategy')

app.use(express.urlencoded());
app.use(cookieParser());


app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScript', true);

//use express router
app.use(expressLayouts);


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'codeial',
    secret: 'fuckyoubitch',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running thr server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})