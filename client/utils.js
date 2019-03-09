export function postForm(url, data, method){
    const post_obj = {
        method: method,
        body: JSON.stringify(data),
        'headers': {
            'content-type': 'application/json'
        }
    }

    return fetch(url, post_obj)
}

export async function callAPI(url_server){
    try {
        const response = await fetch(url_server)
        return response.json()
    } catch (error) {
        console.log(`Greška je ${error}`)
    }
}


