const API_URL = 'http://localhost:5000/tips'
const API_URL_DEL = 'http://localhost:5000/tips/'
const tips_div = document.querySelector('#tips')
import { callAPI } from './utils.js'

const check = (ajdi) => {
        console.log(ajdi)  
}

const kreiraj_tips = (data) => {
    data.forEach((el, i) => {
        const dugme_div = document.createElement('div')
        const li = document.createElement('li')

        //naslov
        const naslov = document.createElement('h5')
        naslov.textContent = el.naslov

        //progr. jezik
        const jezik = document.createElement('h6')
        jezik.textContent = el.jezik

        //opis tipsa
        const opis = document.createElement('textarea')
        opis.textContent = el.opis
        
        //dugmence
        const dugme = document.createElement('button')
        const id = data[i]._id
        dugme.className = 'button-primary'
        dugme.id = id
        dugme.textContent = 'Delete'

        //ovako se dodaje event kad dinamički kreiraš DOM element!!!!
        dugme.onclick = (() => {
            fetch(API_URL_DEL + dugme.id, {
            method: 'DELETE'
        }).then(() => document.location.reload(true))}) 
        dugme_div.appendChild(dugme)

        //sve apendujem na li
        li.appendChild(naslov)
        li.appendChild(jezik)
        li.appendChild(opis)
        li.appendChild(dugme_div)

        //na kraju lijeve lepim na #tips
        tips_div.appendChild(li)   
    })
}



callAPI(API_URL_DEL + 'Python')
    .then(result => kreiraj_tips(result))
    .then(() => console.log('uspeh!'))
    .catch(err => {
        console.log(`Greška je ${err}`)
    })


