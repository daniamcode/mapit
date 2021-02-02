# Ejercicios

El primer ejercicio puede encontrarse en la carpeta "theory", en su fichero README.
El segundo ejercicio está en la carpeta "practice", y tiene su propio README donde se explica cómo ejecutar el repositorio una vez clonado e instaladas las dependencias.

En el segundo ejercicio puede verse cómo se pintan todos los puntos que se van introduciendo en el mapa, recalculando el centro y el zoom en cada caso. Además hay 9 tests unitarios en total, tanto de redux (acciones, reducers y store) como de componentes (al ejecutar npm test puede verse el coverage). Es responsive y he modificado los estilos de las sugerencias tal y como se pedía. El estado de redux va guardando todos los puntos introducidos. He limitado los rerenders gracias a los hooks useRef y useCallback, que evitan que se cargue el mapa más veces de las necesarias.