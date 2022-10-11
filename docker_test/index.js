const express = require('express');

const app = express();

app.get('/', (req,res) =>{
	res.send('express start');
})

app.listen(3002, ()=> console.log("3002 server running"))
