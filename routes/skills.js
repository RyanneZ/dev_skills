var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const skillsCtrl = require('../controllers/skills.js')


/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill)
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
router.get('/:id/edit', skillsCtrl.updateForm)
router.put('/:id', skillsCtrl.updateSkill)


module.exports = router;
