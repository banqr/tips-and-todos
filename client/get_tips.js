const API_URL = 'http://localhost:5000/tips'
const API_URL_DEL = 'http://localhost:5000/tips/'
const tips_div = document.querySelector('#tips')
import { callAPI } from './utils.js'

const check = (ajdi) => {
        console.log(ajdi)  
}

const kreiraj_tips = (data) => {
    data.forEach((el, i) => {
        const li = document.createElement('li')

        const naslov = document.createElement('h5')
        naslov.textContent = el.naslov

        const jezik = document.createElement('h6')
        jezik.textContent = el.jezik

        const opis = document.createElement('textarea')
        opis.textContent = el.opis
        
        const dugme = document.createElement('button')
        const id = data[i]._id
        dugme.className = 'button-primary'
        dugme.id = id
        dugme.textContent = 'Delete'

        //ovako se dodaje event kad dinamički kreiraš DOM element!!!!
        dugme.onclick = (() => {fetch(API_URL_DEL + dugme.id, {
            method: 'DELETE'
        })}) 
        
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


