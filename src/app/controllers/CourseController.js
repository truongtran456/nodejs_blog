
const Course= require('../models/Course');
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose');


class CourseController {
    //[GET] /show
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course : mongooseToObject(course)});
            })
            .catch(next);
    };

    create(req, res, next){
       res.render('courses/create');
    };


    store(req, res, next){
        req.body.image=`https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;//link video tu dong tach ra o link anh
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {

            })
    };

    //[GET] /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course:mongooseToObject(course)
            }))//den trang edit.hbs va goi cai course ra dc
            .catch(next);
     };

    //  [PUT] /courses/:id
    update(req, res, next){//update khi luu lai chinh sua
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))//chuyen toi view tip theo
            .catch(next);
     }

     
    //  [DELETE] /courses/:id =>===>>>>>> XOA THAT
    // destroy(req, res, next) {
    //     const id_product = req.path.replace('/', '');
    //     Course.deleteOne({ _id: id_product })
    //     .then(() => res.redirect('back'))//chuyen toi view tip theo
    //     .catch(next);
    // }
    
     //  [DELETE] /courses/:id
        destroy(req, res, next) {// Xoa mem'
            const id_product = req.path.replace('/', '');
            Course.delete({ _id: id_product })
            .then(() => res.redirect('back'))//chuyen toi view tip theo
            .catch(next);
        }
//  [DELETE] /courses/:id/force =>>>> XOA THAT
        forceDestroy(req, res, next){
            Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))//chuyen toi view tip theo
            .catch(next);
        }

        //khoi phuc [PATCH] /course/:id/restore
        restore(req, res, next){
            Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))//chuyen toi view tip theo
            .catch(next);
        }

        // [POST] /course/handle-form-actions
        handleFormActions(req, res, next){
            switch(req.body.action){
                case 'delete':
                    Course.delete({ _id: { $in: req.body.courseIds }})
                        .then(() => res.redirect('back'))//chuyen toi view tip theo
                        .catch(next);
                    break;
                default:
                    res.json({message :' Action is invalid' });
            }
        }




}
module.exports = new CourseController;
  
