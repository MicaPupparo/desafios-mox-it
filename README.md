# Desafíos Mox It

Los desafíos fueron propuestos con el fin de evaluar a los entrevistados para la obtención de una Beca Tecnológica. Consisten en 2 pequeños proyectos: Vuelos y Colores.

A continuación, paso a detallar las consignas de cada uno de ellos y a enumerar los temas tratados dentro de mi código.

## Secciones

- [Inicio](#desafíos-mox-it)
- [Consignas](#consignas)
- [Aclaración](#aclaración)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Temas tratados](#temas-tratados)
- [Documentación utilizada](#documentación-utilizada)

---

## Consignas

### Vuelos

    Se debe desarrollar una solución web que permita realizar el alta, baja y modificación de vuelos.
    Dicha información se debe visualizar en forma de tabla.
    Cada registro de vuelo contiene la siguiente información:
        • Numero de vuelo (Texto)
        • Horario de llegada (Fecha)
        • Línea Aérea (Texto)
        • Demorado (Booleano)

### Colores

    Se debe desarrollar un juego web que ponga a prueba las habilidades para detectar un color según su código hexadecimal. 
    Por ejemplo, si el juego indica el nombre #ff0000 el jugador deberá elegir uno de los colores mostrados.
    El color para adivinar y los colores para elegir deben ser generados de forma automática cada vez que se refresca la página.
    De forma adicional se valorará la existencia de un menú inicial para elegir dificultad. En caso de ser más fácil, serán menos 
    colores para elegir y más diferentes entre sí. En caso de jugar en modo difícil serán mas colores y con menos diferencia.

## Aclaración

> Para correr el desafío Vuelos se debe posicionar en la carpeta vuelos, poner en concola `npm i` (teniendo instalado previamente **Node**) y luego poner el comando `npm run start` para levantar el servidor. Podrás ver el contenido en localhost:3000

> Para correr el desafío Colores yo utilicé la extensión de VSCode llamada **Live Server**. Con la extensión instalada haz click derecho a index.html y selecciona *Open with Live Server*

## Tecnologías utilizadas

Para la resolución del desafío Vuelos, utilicé el lenguaje **JavaScript** tanto para frontend como backend (con la ayuda de **Node.js**). Además utilicé el framework **Express.js**, la biblioteca **SQLite** como base de datos ligera, la biblioteca **Sequelize** (ORM), **Handlebars** como sistema de plantillas y el framework **Bootstrap** para diseñar la página.

Para Colores utilicé el lenguaje **JavaScript**, el framework **Bootstrap**, **HTML** y la librería **TinyColor** para la obtención y manipulación de los colores.

## Temas tratados

### Para el desafío Vuelos

+ Configuración de un servidor utilizando Node.js
+ Manejo de rutas con Express.js
+ Solicitudes HTTP
+ Definicion de Modelo "Vuelo" con Sequelize
+ CRUD
+ Manejo de parámetros
+ Renderizado de vistas basadas en datos del servidor
+ Vistas responsive
+ Validación de formulario desde el lado del front
+ Envío de datos al servidor
+ Validación de formulario desde el lado del back
+ Reutilización de componentes gracias a layouts y partials
+ Creación de variables/funciones con nombre intuitivo para la facilitación de lectura

### Para el desafío Colores

+ Manipulación de objetos y estilos desde JavaScript
+ Modularización de la lógica del juego
+ Manejo de librería TinyColor
+ Utilización de sessionStorage para almacenar los puntos
+ JSON.parse y JSON.stringify para guardar en una sola *key* un objeto, utilizado para los puntos
+ Recorrido de un objeto mediante el método .forEach()
+ if ternario
+ Vistas responsive

#### Documentación utilizada

1. [Node.js](https://nodejs.org/docs/latest/api/)
2. [Express.js](https://expressjs.com/en/guide/routing.html)
3. [Sequelize](https://sequelize.org/docs/v6/getting-started/)
4. [JavaScript Cheat-Sheet](https://developer.mozilla.org/es/docs/Web/JavaScript)
5. [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)