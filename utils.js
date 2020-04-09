console.log('utils.js');
const name = "Joaquín Ayala"

/* 
    CUALQUIER COSA QUE ASIGNEMOS A 
    MODULE.EXPORTS ESTÁRA DISPONIBLE
    AL MOMENTO DE REQUERIR EL ARCHIVO
    EN OTRO ARCHIVO 
*/
const add = function(a,b){
    return a + b
}


module.exports = add;
