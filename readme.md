# Práctica | Crear un Blockchain con node.js

Desarrollo Basado en Plataformas

## Unidad II

Conceptos Básicos de las Plataformas Web

## Instrucciones

Vamos a aplicar nuestros conocimientos adquiridos de Javascript y  de Node.Js para programar un blockchain, para esto sigue los siguientes pasos:

* 1.- Genera una clase Block como modelo con los siguientes atributos: 

   * a. Index = Identificador de la posición del bloque en la cadena.
   * b. Data = El contenido del bloque
   * c. previousHash = Valor del bloque anterior de la cadena

* 2.- Genera una clase Blockchain.

* 3 .- Mediante la clase Blockchain manipula elementos Block para poder generar la cadena de bloques.

* 4 .- Genera un método mine que calcule el nuevo hash del bloque según su dificultad.

Sube la liga de gitlab con el proyecto generado.

## Lenguaje de Programación 

JavaScript (Node.js v18.13.0.)

## Autor

**Juan Antonio Díaz Fernández**

	Usuario: JuanDiazuwu

	Matricula: 348637

* Personal [Github](https://github.com/Fuan200/) 
* Escuela [Github](https://github.com/JuanDiazuwu)

## Funcionamiento

Esta práctica implementa un blockchain básico utilizando Node.js y Javascript. Consiste en una cadena de bloques, cada uno conteniendo un índice, datos y el hash del bloque anterior. 

La implementación incluye dos clases: Block y Blockchain.

La clase `Block` representa un bloque individual de la cadena y tiene tres atributos: `index`, `data` y `previousHash`. El atributo `index` es un identificador para la posición del bloque en la cadena, `data` contiene el contenido del bloque y `previousHash` es el valor hash del bloque anterior en la cadena. 

El programa incluye un método `mine` que calcula el nuevo hash del bloque según su dificultad. Este método es el encargado de "minar" nuevos bloques y agregarlos a la cadena y que el hash empieze con tripe 0 en este caso.

La clase `Blockchain` se encarga de manipular y agregar bloques a la cadena de bloques.
Se inicializa con un primer bloque, que es el primer bloque de la cadena y también se inicializa la dificultad, que en este caso es el string que queremos que tenga como primeros valoras el `hash`. 

La clase cuenta con metodos como:

* `createFirstBlock`: Para crear el primer bloque de la cadena.
* `getLastBlock`: Para obtener el bloque pasado.
* `addBlock`: Para añadir un bloque a la cadena.

## Instrucciones de uso

Para utilizar este script, sigue los siguiente pasos:

* 1 .- Clona el repositorio en tu maquina local.

* 2 .- Abre una terminal en la raíz del repositorio clonado.

* 3 .- Asegurese de tener instalado node.js y las dependencias del proyecto (estas estan en la carpeta de `node_modules`).

* 4 .- Abre el archivo `main.js` y modifique la siguiente linea:
```js
const blockchain = new Blockchain('Hello World');
```
Se deberá cambiar el parametro de: `Hello World` por la cadena de caracteres que usted quiere que se le pase al primer bloque de la cadena.

* 5 .- Ejecute el siguiente comando en la terminal para ejecutar el script:

```
node main.js
```

El programa agregará automáticamente 9 bloques (en este caso) a la cadena de bloques con datos de ejemplo. Puedes modificar el número de bloques que se agregan modificando la variable `i` en el archivo node.js.

Siéntete libre de clonar este repositorio y probar el funcionamiento del blockchain. ¡Espero que te sea útil!