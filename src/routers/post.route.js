const router = require('express').Router();

const { getAll, create, getOne, updateOne, deleteOne } = require('../controllers/user.controller');
        
router.get('/posts', getAll);
router.get('/posts/:id', getOne);
router.post('/posts', create);
router.patch('/posts/:id', updateOne);
router.delete('/posts/:id', deleteOne);


module.exports = router