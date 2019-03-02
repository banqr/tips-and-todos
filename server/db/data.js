const db = require('./connection')

const languages = db.get('languages')

//f-ja za unos prog. jezika ili sličnog u "languages" kolekciju
const insertLanguage = (jezik_obj) => {
    return languages.insert(jezik_obj)
}

//f-ja za čitanje iz "languages" kolekcije
const returnLanguages = () => {
    return languages.find()
}

module.exports = {
    insertLanguage,
    returnLanguages,
    db
}