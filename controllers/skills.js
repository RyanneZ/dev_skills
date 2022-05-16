const res = require('express/lib/response')
let Skill = require('../models/skill')


function index(req, res) {
    res.render('skills-index.ejs', {skills: Skill.getAll()})
}

function show(req, res) {
    res.render('skill-show.ejs', {skill: Skill.getOne(req.params.id)})
}

function newSkill(req, res) {
    res.render('skills-new.ejs')
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')

}
function updateForm(req, res) {
    let skill = Skill.getOne(req.params.id)
    res.render('skills-update.ejs', { skill })
      
}

function updateSkill(req, res) {
    let skill = Skill.getOne(req.params.id)
    console.log(Skill.getOne(req.params.id))
    skill.skill = req.body.newerSkill
    console.log(req.body)
    console.log(skill.name)
    res.redirect('/skills')
}
module.exports = {
    index,
    show,
    newSkill,
    create,
    delete: deleteSkill,
    updateForm,
    updateSkill
}