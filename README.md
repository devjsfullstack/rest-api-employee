# REST API

PATRÓN DE DISEÑO INYECCIÓN DE DEPENDENCIAS

## Descripción

Plantilla estándar para construir una Rest API con Typecript y Express utilizando el patrón inyección de dependencias.

### Desarrollado con:

![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)

### Tabla de contenido

- [Dependencias](#dependencias)

  [TypeScript@5.2.2](https://www.npmjs.com/package/typescript/v/5.2.2)

  [concurrently@8.2.1](https://www.npmjs.com/package/concurrently/v/8.2.1)

  [mysql2@3.6.1](https://www.npmjs.com/package/mysql2/v/3.6.1)

  [sequelize@6.33.0](https://www.npmjs.com/package/sequelize/v/6.33.0)

- [Instalación](#instalación)

  Descargar el repositorio con git clone e instalar las dependencias.

  ```
    npm i
  ```

- [Uso](#uso)

  Para correr el proyecto, ejecutar el comando:

  ```
    npm run start 
  ```

  <strong> 
     Nota:

     En el archivo tsconfing.json ya se encuentra configurado, el directorio donde se almacenan los archivos transpilados de .ts a .js
  </strong>

  En la raiz del proyecto se debe generar un archivo .env que contenga las variables de entorno.

  | Variable    	| Ejemplo                   	|
  |-------------	|---------------------------	|
  | HOST        	| http://localhost          	|
  | PORT        	| 8009                      	|
  | API_ROOT    	| /v1                       	|
  | URL_CONTEXT 	| /api                      	|
  | DBNAME      	| mydbname                  	|
  | DBUSER      	| mydbuser                  	|
  | BDPASS      	| mydbpass                  	|
  | DBHOST      	| http://mydbhost o ip      	|
  | DIALECT     	| mysql                     	|
  | WHITELIST   	| http://localhost o domain 	|