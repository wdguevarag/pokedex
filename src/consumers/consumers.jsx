export const ConsumerPokeApi = async (url, type, body) => {
    let responce = await fetch(url, setHeaders(type, body))
    let data = await responce.json();
    return data;
}

function setHeaders (type, body) {
    switch (type) {
        case 'GET'   : return { method: type, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
        case 'POST'  : return { method: type, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
        case 'PUT'   : return { method: type, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
        case 'DELETE': return { method: type, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };

        default:
            break;
    }
}