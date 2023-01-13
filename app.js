// Express
const express = require('express');
// const cron = require("node-cron");

// const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
// pathToRegexp(path, keys?, options?)
// match(path)
// parse(path)
// compile(path)

const app = express();

//  It parses incoming JSON requests and puts the parsed data in req.body.

// router
const UserRouter = require("./router/UserRoute/userRoute");
const liveScore = require("./router/livescoreRoute");
const spotify = require("./router/spotifyRoute");
const products = require("./router/Products");
const customer = require("./router/Customer");
const prac1 = require("./router/prac1");
const prac2 = require("./router/prac2");
const practise = require("./router/practise");
app.use(express.json());
app.use(UserRouter);
app.use(liveScore);
app.use(spotify);
app.use('/products/',products);
app.use('/customers/',customer);
app.use('/',prac1);
app.use('/',prac2);
app.use('/',practise);

// dotenv
const dotenv = require('dotenv');
dotenv.config({path:"./.env"})
const port = process.env.PORT || 3200;

// database
require("./db/conn");


// // Creating a cron job which runs on every 10 second
// cron.schedule("*/10 * * * * *", function() {
//     console.log("running a task every 10 second");
// });




// path-to-regex starts

// const regexp = pathToRegexp("/:foo/:bar");
// console.log(regexp);
// // keys = [{ name: 'foo', prefix: '/', ... }, { name: 'bar', prefix: '/', ... }]

// regexp.exec("/test/route");
// //=> [ '/test/route', 'test', 'route', index: 0, input: '/test/route', groups: undefined ]


// // Make sure you consistently `decode` segments.
// const fn = match("/user/:id", { decode: decodeURIComponent });
// console.log(fn("/user/123"),"fn data");

// const data = fn('/user/abcd12');
// console.log(data,"data1");
// console.log(data.path,"data2");
// console.log(data.index,"data3");
// console.log(data.params,"data4");
// console.log(data.params.id,"data5");

// fn("/user/123"); //=> { path: '/user/123', index: 0, params: { id: '123' } }
// fn("/invalid"); //=> false
// fn("/user/caf%C3%A9"); //=> { path: '/user/caf%C3%A9', index: 0, params: { id: 'café' } }
// // The match function can be used to custom match named parameters. For example, this can be used to whitelist a small number of valid paths:

// const urlMatch = match("/users/:id/:tab(home|photos|bio)", {
//   decode: decodeURIComponent,
// });

// // console.log(urlMatch,"----------dataas1-------");

// const datas = urlMatch("/users/1234/photos");
// console.log(datas,"----------dataas1-------");
// console.log(datas.params.id,"----------dataas2-------");
// console.log(datas.params.tab,"----------dataas3-------");

// //=> { path: '/users/1234/photos', index: 0, params: { id: '1234', tab: 'photos' } }

// const datass = urlMatch("/users/1234/bio");
// console.log(datass,"----------dataas3-------");
// console.log(datass.params.id,"----------dataas4-------");
// console.log(datass.params.tab,"----------dataas5-------");
// //=> { path: '/users/1234/bio', index: 0, params: { id: '1234', tab: 'bio' } }

// const asdf = urlMatch("/users/1234/home");
// console.log(asdf,"----------dataas6-------");
// // console.log(asdf.params.id,"----------dataas7-------");
// // console.log(asdf.params.tab,"----------dataas8-------");
// //=> false

// path-to-regex ends







// listening
app.listen(port,()=>{
    console.log(`connected to the ${port}`);
})  