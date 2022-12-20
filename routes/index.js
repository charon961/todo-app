const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const body=require('body-parser');

router.use(body.urlencoded({extended:true}));



router.use('/users',require('./users'));
console.log("hello")
router.get('/',homeController.home);

router.post('/',homeController.post);


router.post('/delete',homeController.delete);




module.exports=router