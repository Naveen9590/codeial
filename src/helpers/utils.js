

export function getFormBody(params){
    let formbody=[]
    for(let property in params){
        let encodedKey=encodeURIComponent(property)
        let encodedValue=encodeURIComponent(params[property])

        formbody.push(encodedKey+'='+encodedValue)
    }

    return formbody.join('&');
}