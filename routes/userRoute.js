

const express = require('express')
const router = express.Router()

const {
   authMiddleware,
   authPermission } = require('../middlewares/auth')



const {
   getAllUser,
   getSingleUser,
   showCurrentUser,
   updateUser,
   updateUserPassword
} = require('../controllers/userController')


router.get('/getAllUser', authMiddleware, authPermission, getAllUser)
router.get('/getSingleUser/:id', authMiddleware, authPermission, getSingleUser)
router.get('/showMe', authMiddleware, showCurrentUser)
router.patch('/updateUser', authMiddleware, updateUser)
router.patch('/updateUserPassword', authMiddleware, updateUserPassword)



module.exports = router















