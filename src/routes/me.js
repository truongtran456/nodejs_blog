var express = require('express');
var router = express.Router();

const meController= require('../app/controllers/MeController');
 
// newsController.index
router.get('/stored/courses',meController.storedCourses)//den file storedCourses ben controller
router.get('/trash/courses',meController.trashCourses)//den file storedCourses ben controller

    
module.exports=router;