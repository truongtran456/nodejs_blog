var express = require('express');
var router = express.Router();

const siteController= require('../app/controllers/SiteController');

router.get('/search',siteController.search)//den file show ben controller
router.get('/',siteController.index )

module.exports=router;
