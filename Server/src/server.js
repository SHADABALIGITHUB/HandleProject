const express = require("express");
require("dotenv").config({path:"src/.env"});
const cors = require("cors");
const userRouter = require("./routes/user/user-auth.js");
const projectRouter = require("./routes/project/project-route.js");
const connect = require("./lib/dbconfig.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passportSetup = require("./lib/passport-setup.js");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const app = express();
// const fs = require('fs');
// const https = require('https');

// const privateKey = fs.readFileSync(__dirname + '/../ssl/localhost.key', 'utf8');
// const certificate = fs.readFileSync(__dirname + '/../ssl/localhost.crt', 'utf8');
// const credentials = { key: privateKey, cert: certificate };

const port = process.env.PORT;
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
    origin:[process.env.VITE_APP_URL,process.env.Mobile_APP_URL],
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


app.use("/auth",userRouter);
app.use("/project",projectRouter);

// const httpsServer = https.createServer(credentials, app);

// httpsServer.listen(port, '0.0.0.0', () => {
//     console.log(`Server is running on https://0.0.0.0:${port}`);
//   });

// app.listen(port,'0.0.0.0',()=>{
//     console.log(`App is running on port ${port}`);
// })

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})