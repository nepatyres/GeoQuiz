if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const User = require('./models/user');
const LocalStrategy = require('passport-local');
const MongoStore = require('connect-mongo');
const { MongoClient, ServerApiVersion } = require('mongodb');

const userRoutes = require('./routes/users.js');

const sessionSecret = process.env.SESSION_SECRET || 'fallbackSecret';

const uri = process.env.URI;

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function () {
//     console.log('Connected to MongoDB');
// });

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(methodOverride('_method'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));
app.use('/GeoQuiz/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     touchAfter: 24 * 60 * 60,
//     crypto: {
//         secret: sessionSecret,
//     }
// });

// store.on('error', function (e) {
//     console.log('session store error', e)
// })

// const sessionConfig = {
//     name: 'session',
//     store,
//     secret: sessionSecret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }
// }

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/profile', catchAsync(async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    res.render('users/profile');
}));

app.get('/check-authentication', (req, res) => {
    res.json({ isAuthenticated: req.isAuthenticated() });
});

app.get('/world', (req, res) => {
    res.render('continents/world');
});

app.get('/af', (req, res) => {
    res.render('continents/africa');
});

app.get('/as', (req, res) => {
    res.render('continents/asia');
});

app.get('/eu', (req, res) => {
    res.render('continents/europe');
});

app.get('/am', (req, res) => {
    res.render('continents/americas');
});

app.get('/oc', (req, res) => {
    res.render('continents/oceania');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log('serving on port 3000');
});