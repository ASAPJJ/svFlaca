# Test LA RAMA DESARROLLADA ES ramajuanjo.

Este servidor es para el examen de TLP II, Back-end.

Es necesaria una conexion a una base de datos de mongoDB.

La estructura de user es:
{
    "username":"",
    "password":"",
    "email":"",
    "isActive": true
}

Para ver a los usuarios se usa GET es y la dirección es  "/user"
Para crear una cuenta en POST es "/user"
En POST luego la direccion "/login" es para iniciar sesion y la respuesta va a ser su token de acceso
el token va en headers, va como "token" y a su derecha el token de acceso.

ES NECESARIO TOKEN PARA LO SIGUIENTE 
los verbos HTTP PUT y DELETE la dirección es  "/user/:id". 
AL USAR DELETE TAMBIEN BORRA LAS TAREAS DEL USUARIO.
SOFT DELETE en PUT colocando 
{
    isActive: false
}
-----------------------------------------------------------------------------------------------------------------------
Para usar task es necesario tener un token de acceso.
La estructura de task es:
{
    "title":"",
    "description":"",
    "isActive" true,
    "isDone": false      
}

"/task" funciona para el verbo HTTP de GET y POST
"/task/:id" el id es de tarea especifica. En esta direccion funcionan los verbos HTTP: PUT y DELETE

en PUT se puede realizar un SOFT DELETE usando
{
    "isActive:false"
}

ADVERTENCIA EN DELETE BORRA DE LA BASE DE DATOS (HARD DELETE)