var express = require('express');
var router = express.Router();
let {index,registro,login,admin}= require('../controllers/mainControllers');
let accesAdmin = require('../middlewares/accesMiddleware')

router.get('/', index);
router.get('/register', registro);
router.get('/login', login);
router.get('/admin', accesAdmin, admin);



module.exports = router;