const url = 'http://www.mocky.io/v2/5c7db5e13100005a00375fda'

async function postResponse() {
    let response = await fetch(url)
    let responseData = await response.json() 

    responseData = JSON.parse(JSON.stringify(responseData).replace(/ /g, '_'))
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: responseData       
    })
    console.log(responseData)
}
postResponse()