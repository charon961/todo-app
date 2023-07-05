const express =require('express');
const app=express();
const port=3000;
const body=require('body-parser');



//this is a comment

app.use('/',require('./routes'));


//setting view engine
app.set('view engine','ejs');
app.set('views','./views');



//for static files like css
app.use("/public", express.static(__dirname + '/public'));




app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    else{
        console.log(`Server is running at port : ${port}`);
    }
})