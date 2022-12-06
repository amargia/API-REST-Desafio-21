import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { usuariosDao } from "../contenedores/daos/index.js";
import bcrypt from "bcrypt";

passport.use(
    new LocalStrategy(async (username, password, done) => {
        const userExists = await usuariosDao.findByEmail(username);
        if (!userExists) return done(null, false);
        bcrypt.compare(password, userExists.password, (err, isMatch) => {
          if (err) console.log(err);
          if (isMatch) return done(null, userExists);
          return done(null, false);
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await usuariosDao.findById(id);
    return done(null, user);
});

export default passport;