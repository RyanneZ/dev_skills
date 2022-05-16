let skills_database = [
    {id: '0', skill: 'thinking', ranking: '10/10'},
    {id: '1', skill: 'typing', ranking: '8/10'},
    {id: '2', skill: 'dreaming', ranking: '10/10'}
]
function getAll() {
    return skills_database
}
function getOne(id) {
    return skills_database.find(skill => skill.id === id)
}
function create(skill) {
   
    skill.id = (Date.now() % 1000000).toString()
    skill.ranking = "10/10"
    skills_database.push(skill)

}

function deleteOne (id) {
    const idx = skills_database.findIndex( skill => skill.id == id)
    skills_database.splice(idx, 1)
}

function getOne(id) {
    console.log(skills_database)
    return skills_database.find(skill => skill.id == id);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}