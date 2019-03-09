const selektor = document.querySelector('#selektor')
const API_URL = 'http://localhost:5000/insert_languages'
import { callAPI } from './utils.js'

/* Ovde kreiram option tagove za select na maim formi!*/
const kreiraj_listu = (data) => {
    data.forEach(el => {
        const opcija = document.createElement("option")
        
        opcija.value = el.name
        opcija.textContent = el.name

        selektor.appendChild(opcija)
    })
}

callAPI(API_URL)
    .then(result => kreiraj_listu(result))
    .catch(error => {
        console.log('Oh shit, no result!')
    })
