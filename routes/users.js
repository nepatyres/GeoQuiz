const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync')
const passport = require('passport');
const Stats = require('../models/stats');

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
};

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsync(async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to GeoQuiz!')
            res.redirect('/profile');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
}));

router.get('/login', isAuthenticated, (req, res) => {
    req.session.returnTo = req.get('Referer') || '/profile';
    res.render('users/login');
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = res.locals.returnTo || '/profile';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
});

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/login');
    });
});

router.get('/profile', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const userId = req.user._id;
            const user = await User.findById(userId);
            const userStats = await Stats.find({ user: userId });
            res.render('users/profile', { user, userStats });
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/update-score', catchAsync(async (req, res) => {
    try {
        const { continent, score, time, attempts } = req.body;

        const userId = req.user._id;
        const stats = new Stats({
            user: userId,
            continent: continent,
            score: score,
            time: time,
            attempts: parseInt(attempts),
        });

        const savedStats = await stats.save();

        if (savedStats) {
            console.log('Game stats saved successfully');
            res.json({ success: true, stats: savedStats });
        } else {
            console.error('Failed to save game stats');
            res.status(500).json({ success: false, message: 'Failed to save game stats' });
        }
    } catch (error) {
        console.error('Error updating stats:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}));

module.exports = router;
