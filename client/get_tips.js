const API_URL = 'http://localhost:5000/tips'
const tips_div = document.querySelector('#tips')
import { callAPI } from './utils.js'

const kreiraj_tips = (data) => {
    data.forEach(el => {
        const li = document.createElement('li')

        const naslov = document.createElement('h5')
        naslov.textContent = el.naslov

        const jezik = document.createElement('h6')
        jezik.textContent = el.jezik

        const opis = document.createElement('textarea')
        opis.textContent = el.opis
        
        const dugme = document.createElement('button')
        dugme.className = 'button-primary'
        dugme.id = 'delete_tip'
        dugme.textContent = 'Delete'

        li.appendChild(naslov)
        li.appendChild(jezik)
        li.appendChild(opis)
        li.appendChild(dugme)

        tips_div.appendChild(li)
        
    })
}

callAPI(API_URL)
    .then(result => kreiraj_tips(result))
    .catch(err => {
        console.log(`Greška je ${err}`)
    })
