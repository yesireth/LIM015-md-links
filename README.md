# Markdown Links

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

En este proyecto se creó una interfaz de línea de comando (CLI) que permite extraer links dentro de archivos markdown, donde evalua su estatus haciendo una petición HTTP así como tambien muestra las estadísticas mostrando: total de los links, la cantidad de links sin ser repetidos y links rotos.

## 3. Plan de acción

Este proyecto se elaboró un plan de acción en Github Projects asignando tareas para cada sprint y los issues necesarios para poder hacer seguimiento del progreso de acuerdo a las tareas, además se usó la plataforma de diagrams para elaborar el diagrama de flujo con los siguentes procesos, el cual presentamos a continuación:

[![Api-2.jpg](https://i.postimg.cc/CMfVNZym/Api-2.jpg)](https://postimg.cc/vDMj8ZZV)
[![Cli.jpg](https://i.postimg.cc/6QjNHn51/Cli.jpg)](https://postimg.cc/cKnjCK3Q)

## 3 Guia de uso 
 
 La librería se puede ejecutar de la siguiente manera a través de la terminal:

 #### `md-links <path-to-file> [options] `

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### 4 Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

Podemos combinar `--stats` y `--validate` o `--validate` y `--stats` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
También es posible obtener un mensaje con información de los comandos a traves del comando  --help.

```sh
$ md-links  --help
(◕‿‿◕｡)━━ INGRESE UNA RUTA VALIDA━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ O ━━━ --HELP  ━━━ ˚(◕‿‿◕｡)
```

Es posible obtener un mensaje con información de los comandos a traves md-links  

```sh
$ md-links  
(◕‿‿◕｡) ━━ -- HELP ━━   ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ ━━━ INGRESA LOS SIGUIENTES CAMPOS ━━━  ˚(◕‿‿◕｡)
(❣◕ ‿ ◕❣)━━ UNA RUTA ━━   ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧   ━━━ --VALIDATE   ━━━ ˚(❣◕ ‿ ◕❣)
(◕‿‿◕｡) ━━ --STATS ━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧    ━━━     --VALIDATE --STATS━━━  ˚(◕‿‿◕｡)
```

## 5 Instalación
Para instalar la librería use el comando:


## Creada: Yesireth Suarez 💗👩‍💻
## En : Laboratoria, generación LIM-015 de Perú 


