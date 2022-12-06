import express from "express";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

import MongoStore from "connect-mongo";

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cookieParser());

app.use(
  session({
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/test",
      mongoOptions: advancedOptions
    }),
    secret: 'coder',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 60000000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

import router from "./src/router/index.js";

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", router);

import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

import { getChat, sendMessage } from "./src/controllers/chat.js";

io.on('connection', async (socket) => {
  console.log('User connected');
  const message = await getChat();
  socket.emit('message', message);
  
  io.sockets.emit('productos');

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on('new-message', async (msg) => {
    sendMessage(msg)
    .then(async (newMsg) => {
      const message = await getChat();
      io.sockets.emit('message', message);
    })
    .catch((err) => {
      console.log(err);
    });
  });
});

const port = process.env.PORT || 8080

const server = httpServer.listen(port, () => {
  console.log(`Server up on port ${server.address().port}`);
})

server.on("Error", (error) => `${error}`);

export default app;