const express = require("express");
require("dotenv").config({path:"src/.env"});
const cors = require("cors");
const userRouter = require("./routes/user/user-auth.js");
const projectRouter = require("./routes/project/project-route.js");
const connect = require("./lib/dbconfig.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/user/user-model.js");
const passportSetup = require("./lib/passport-setup.js");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const app = express();
const profileRouter = require("./routes/profile/profile-route.js")


const port = process.env.PORT;
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
    origin:[process.env.VITE_APP_URL],
    credentials:true
}))

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URI,
        collectionName:"sessions"
    }),
    cookie:{
        maxAge:60*60*24*1000,
        secure:false // without https
    }
}))

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());


//   shadab code start

app.use('/profile',profileRouter);

//  shadab code end

app.use("/auth",userRouter);
app.use("/project",projectRouter);

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})