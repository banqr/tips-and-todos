const db = require('./connection')

//Kreiram tips kolekciju u kojoj ću da čuvam tipsove sa
const tips = db.get('tips')

const insertTip = (tip) => {
    return tips.insert(tip)
}

const getTips = () => {
    return tips.find()
}

module.exports = {
    insertTip,
    getTips,
    db
}