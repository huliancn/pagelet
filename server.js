var express = require("express");
var app = express();

app.use(express.static("./",{maxAge: 3600000}));


require('./pagelet-login/server/controller.js')(app);

// var admin = express(); // the sub app

// admin.get('/', function (req, res) {
//   console.log(admin.mountpath); // /admin
//   res.send('Admin Homepage');
// })

// app.use('/admin', admin); // mount the sub app


app.listen(8080,function(){
    console.log("server started!");
});