const mongoose=require('mongoose');

const listschema=new mongoose.Schema({
  task:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  }
})

const List=mongoose.model('List',listschema);

module.exports=List;