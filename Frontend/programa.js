//Frontend mínimo
// variable se crea con let--> creamos una variable url
let url = "http://127.0.0.1:8000/sumar"
let url2= "http://127.0.0.1:8000/restar"
// envia a la api parametros a y b
let myAPI = url + "?a=5&b=45"




// async funtion es un proceso asincronico.
// se conecta a la api mediante fetch y guardo la respuesta en response, y await da la espera de respuesta
// se guarda la respuesta en json em la variable datos
async function crearPeticion(){
let response = await fetch(myAPI)
let datos = response.json()
}