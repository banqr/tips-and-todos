const toDo_forma = document.querySelector("form")
const API_TODO_URL = 'http://localhost:5000/todos'

toDo_forma.addEventListener('submit', (event) => {
    event.preventDefault()

    const formaData = new FormData(toDo_forma)
    const to_do = formaData.get('to_do')

    if (to_do.trim()){
        const data = {
            to_do
        }
    
        console.log(data);
        
        postTodo(API_TODO_URL, data)
    
        toDo_forma.reset()
    }else{
        console.log('Moraš da popuniš polje!');
    }
    
})

const postTodo = (url, data) => {
    const obj = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    }
    return fetch(url, obj)
}
