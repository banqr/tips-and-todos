//const db = require('./connection')

/*Treba mi f-ja koja upisuje json u kolekciju*/
/*Ta f-ja treba da primi db, kolekciju i json obj */

const insertData = (db, collection, data) => {
    const kolekcija = db.get(collection)

    return kolekcija.insert(data)
}

/*Treba mi f-ja koja vraća kolekciju*/
/*Ta f-ja treba da primi db i kolekciju */

const getData = (db, collection) => {
    const kolekcija = db.get(collection)

    return kolekcija.find()
}

module.exports = {
    insertData,
    getData
}