const selektor = document.querySelector('#selektor')
const API_URL = 'http://localhost:5000/insert_languages'

/* Ovde samo pozivam languages kolekciju za glavnu formu sa url-a iznad!*/
const poziv_prog_jezik = async (url_server) => {
    const response = await fetch(url_server)
    const data = await response.json()

    kreiraj_listu(data)
}

/* Ovde kreiram option tagove za select na maim formi!*/
const kreiraj_listu = (data) => {
    data.forEach(el => {
        const opcija = document.createElement("option")
        
        opcija.value = el.name
        opcija.textContent = el.name

        selektor.appendChild(opcija)
    })
}

poziv_prog_jezik(API_URL)