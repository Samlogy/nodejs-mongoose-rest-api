const router = require('express').Router();

const { create, getOne, getAll, edit, remove } = require('../controllers/user.controller');
        

router.route('/post', create);
router.get('/get/:id', getOne);
router.get('/get', getAll);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);


module.exports = router