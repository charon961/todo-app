const body=require('body-parser');
const db=require('../config/mongoose')
const List=require('../models/list')


module.exports.home=function(req,res){

    List.find({},function(err,list){
        if(err){console.log(err);}
        else{
            return res.render('home',{
                title:"Todo-app",
                list:list
                
            });

        }
    })
    
}




module.exports.post=function(req,res){
    let giventask=req.body.task;
    let gcategory=req.body.category;
    let gdate=req.body.date;
     List.create({
        task:giventask,
        date:gdate,
        category:gcategory

     },function(err,newlist){
        if(err){console.log(err);}
        else{
             return res.redirect("/");
        }
     })
}


module.exports.delete=function(req,res){

    let id=Object.keys(req.body);
    for(let i of id){
        List.findByIdAndDelete(id,function(err){
            if(err){
                console.log(err);
            }
        })
    }
  
    return res.redirect("/");
}