const { Router } = require('express');
const router = Router();

router.get('/', (res) =>{
    res.render('landing');

});

module.exports = router;