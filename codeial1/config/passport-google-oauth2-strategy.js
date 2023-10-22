const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user");

// Tell passport to use a new strategy for google Login
passport.use(
    new googleStrategy({
            clientID: "513140510541-u1bh8k3g430lknk7qfs28hjhkipi6qcp.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:8000/users/auth/google/callback",
        },
        // Find a users
        async function(accessToken, refreshToken, profile, done) {
            try {
                let userlist = await User.findOne({ email: profile.emails[0].value });
                console.log(accessToken, refreshToken);
                console.log(profile);
                // If found, set this user as req.user
                if (userlist) {
                    return done(null, userlist);
                } else {
                    // If Not Found, create the user and set it as req.user
                    const userData = await User.create({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        password: crypto.randomBytes(20).toString("hex"),
                    });
                    return done(null, userData);
                }
            } catch (err) {
                if (err) {
                    console.log("error in creating user google strategy-passport", err);
                    return;
                }

                return done(null, userData);
            }
        }
    )
);