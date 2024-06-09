# Desafío Sugerencias de videos

# Para este desafío se implementó el patrón de módulo IIFE

## Se Crea una función privada (#url) que recibe la url del video y el id de la equiqueta "iframe" con el que se podrán ver los videos incrustados en el DOM. Y retorne una función pública que reciba los siguientes parametros, 'url, id' en ese orden y realiza el llamado a la función privada para insertar los elementos (parametros recibidos).

## Se crea una clase padre "Multimedia" que recibe la propiedad url

## Se crea una clase 'Reproductor' que sería hija de 'Multimedia'

### La cual recibe el 'id' del DOM par aagregar la 'url' en la etiqueta 'iframe' que corresponda (si es musica, en musica por ej.)

### Crear un método llamado 'playMultimedia' que permita hacer el llamado a la función pública de la IIFE, enviando los atributos url y id.

### Agregar un metodo denominado 'setInicio' para poder controlar el tiempo de inicio del video 

## Se instancia la clase hija y se pasan como argumento cada una de las url + id para cada etiqueta del iframe.

## Se invaca el metodo "playMultimedia" para cada instancia creada.

## Se utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas (en este caso de música y peliculas).