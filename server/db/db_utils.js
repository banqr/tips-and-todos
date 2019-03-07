//const Joi = require('joi')

/*Treba mi f-ja koja upisuje json u kolekciju*/
/*Ta f-ja treba da primi db, kolekciju i json obj */



const insertData = (db, collection, data, schema, validator) => {
    
    const result = validator.validate(data, schema)
    if (result.error === null){
        const kolekcija = db.get(collection)
        return kolekcija.insert(data)
    }else{
        return Promise.reject(result.error)
    }
    
}

/*Treba mi f-ja koja vraća kolekciju*/
/*Ta f-ja treba da primi db i kolekciju */

const getData = (db, collection) => {
    const kolekcija = db.get(collection)

    return kolekcija.find()
}

/*Treba mi f-ja koja briše obj iz kolekcije */
/*Ta f-ja treba da ima parametre db, kolekcija i id iz mongo objekta */

const deleteData = (db, collection, id) => {
    //document => db.languages.remove({name: "C++"})
    const kolekcija = db.get(collection)
    const mongo_id = id
    
    return kolekcija.remove({_id: mongo_id})
}

module.exports = {
    insertData,
    getData,
    deleteData
}