const forma = document.querySelector("form")
const API_TIP_URL = 'http://localhost:5000/tips'

forma.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Submitted!")

    const formData = new FormData(forma)
    
    const naslov = formData.get('naslov')
    const jezik = formData.get('selektor')
    const opis = formData.get('opis')

    if (naslov.trim() && jezik.trim() && opis.trim()){
        const data = {
            naslov,
            jezik,
            opis
        }
        console.log(data)
        
        postTip(API_TIP_URL, data, 'POST')
        
        forma.reset()

    }else{
        console.log('Moraš sva polja da popuniš!')
    }
    
})

const postTip = (url, postData, method) => {
    const obj = {
        method: method,
        body: JSON.stringify(postData),
        headers: {
            'content-type': 'application/json'
        }
    }
    return fetch(url, obj)
}