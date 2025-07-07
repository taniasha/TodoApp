const express =  require('express');
const router = express.Router(); //using built-in router func of express
// const todoControllers = require('../controllers/todoControllers');
const {getTodo, saveTodo,deleteTodo} = require('../controllers/todoControllers');

router.get('/',getTodo)

router.post('/save',saveTodo);

router.post('/delete',deleteTodo);

module.exports = router;