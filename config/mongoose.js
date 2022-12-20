
//require lib
const mongoose=require('mongoose');


//connect to database;
mongoose.connect('mongodb://localhost/todo_list_db');

//accquiring connection

const db=mongoose.connection;

//checking for error

db.on('error',console.error.bind(console,'error is there to connect databse'));

//if up and running

db.once('open',function(){
    console.log("Database started");
})