const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "455468457016-mrrggba8nj44qjo55a4dfm5t4g4ph7ju.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "168d44683c8b9f8f6c58";
GITHUB_CLIENT_SECRET = "2347aea4c7e5371c18834f8357b4f8b3c6c5aeb2";

FACEBOOK_APP_ID = "419952926593658";
FACEBOOK_APP_SECRET = "24ac7e6be7366c9ce47f8490b2a17cd6";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
