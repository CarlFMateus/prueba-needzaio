# Proyecto Prueba Needzaio

Este proyecto consiste en dos servicios: 
    - **Servicio de consulta usuarios**
    - **Servicio de login**


### Servicio Consulta Usuario
Consiste en obtener el listado de usuarios se hace de esta forma.
```gnuplot {cmd=true output="html"}
  query{
    users{
      username
      names
    }
  }
```


### Servicio de login
Consiste en validar si el usuario existe en el sistema, si llega existir envia un true si no un false. Se hace de esta forma.
```gnuplot {cmd=true output="html"}
  mutation($username: String!, $password: String!){
    login(args: {
      username: $username
      password: $password
    }){
      result
    }
  }
```


**Variables:**  { "username": "hla", "password": "1234" }

# Como arrancar el proyecto

  1. Primero instale las dependencias con npm i o npm install en la consola.
  2. Luego de terminar de instalar las dependencias puede arrancar el proyecto de dos formas.
      - Con el comando npm run api que solo lo arranca con node
      - Con el comando npm run api-dev que lo arranca con nodemon en caso de desarrollo.
  3. Cuando haya arrancado asegurese que indique la url y el puerto
  4. Puede ver en el navegador ya se Chrome, con la url el IDE (Entorno de Desarrollo Intergrado) en este caso GraphQL Playground.
  5. Inserte las queries mencionadas anteriormente.

