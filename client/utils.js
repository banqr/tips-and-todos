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
