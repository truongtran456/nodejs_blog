var express = require('express');
var router = express.Router();

const courseController= require('../app/controllers/CourseController');
 
// newsController.index
router.get('/create',courseController.create)//den file create ben controller
router.post('/store',courseController.store)//them
router.get('/:id/edit',courseController.edit)//den file edit ben controller
router.post('/handle-form-actions', courseController.handleFormActions)
router.put('/:id',courseController.update)//an luu lai khi edit xong se thuc hien update
router.patch('/:id/restore',courseController.restore)//khoi phuc
router.delete('/:id',courseController.destroy)//Xoa mem
router.delete('/:id/force',courseController.forceDestroy)//XOA THAT
router.get('/:slug',courseController.show)//den file show ben controller


    
module.exports=router;