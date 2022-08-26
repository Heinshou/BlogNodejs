const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const userServices = require('./users.http')
const postServices = require('../posts/posts.http')

router.route('/') //* /api/v1/users/
    .get(userServices.getAll)


router.route('/me')
    .put(passport.authenticate('jwt',{session: false}) ,userServices.editMyUser)
    .get(passport.authenticate('jwt',{session: false}), userServices.getMyUser)
    .delete(passport.authenticate('jwt',{session: false}), userServices.removeMyUser)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),userServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, userServices.remove)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware ,userServices.edit)

router.route('/me/posts')
    .get(passport.authenticate('jwt',{session: false}), postServices.getAllUserPosts)
    
router.route('/me/posts/:id')
    .get(passport.authenticate('jwt',{session: false}), postServices.getEspecificUserPost)
    .put(passport.authenticate('jwt',{session: false}), postServices.edit)
    .delete(passport.authenticate('jwt',{session:false}), postServices.remove)

exports.router = router