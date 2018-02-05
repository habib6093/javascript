//Declaration .including files




var express = require('express');
var app = express();
var port = 1337;

// Configure
app.set('view engine','ejs');

// Middlewares


// Route


app.get('/',function(req,res){   //req =request ,res =response
	res.send('<h1>Hello from world</h1>');
});

app.get('/login',function(req,res){   //req =request ,res =response
	res.send('<h1>Hello from login</h1>');
});

app.get('/home',function(req,res){   
    res.render('sample');
});


// Server



app.listen(port,function()
{
	 console.log('server started at port '+port);
});
