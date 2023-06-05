var express = require('express');
var router = express.Router();

const newsController= require('../app/controllers/NewsController');

// newsController.index

router.get('/:slug',newsController.show)//den file show ben controller
router.get('/',newsController.index )

    
module.exports=router;