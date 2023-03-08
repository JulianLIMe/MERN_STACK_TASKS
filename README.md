MERN stack.
Esta es una aplicacion que utiliza principalmente las siguientes tecnologias: MongoDB, Express, React, NodeJS.
Link de video tutorial part 1: https://www.youtube.com/watch?v=DqpL5UtJHus&ab_channel=Fazt
Link de video tutorial part 1: https://www.youtube.com/watch?v=204v5QXHlmc&list=WL&index=3&ab_channel=Fazt


COMENTARIOS DE CODIGO

{1}: Se config la varible de entorno 'port', dependiendo el entorno donde se ejecute la app dicho entorno define el
puerto donde el servidor debe escuchar, y si no hay puerto por defecto sera 3001.

{2}: Modulo morgan: Permite registrar o ver las peticiones, en la consola, que se hacen al Servidor las cuales provienen
del navegador o aplicaciones cliente.

{3}: Se ejecuta el Middleware el cual se encarga de interpretar los datos que llegan al servidor por medio de 
peticiones, dichos datos bienen en formato json

{4}: express.static() busca y devuelve los archivos estáticos solicitados por el usuario y recibe como parámetro la ruta 
del folder donde están esos archivos. En este caso busca el archivo estatico html index.html ya que es ete archivo el que
va contener toda la aplicacion.
Referencia: (https://dev.to/ricardochl/como-servir-archivos-estaticos-en-express-271k)

// La carpeta 'app' contiene el codigo de frontend, ahi se utliza React JS y esta el archivo principal de react que
   apunta al html especificamente al elmento con id 'app'
// La carpeta 'models' contiene el schema/modelo de los documentos que se guardan en la base de datos mongoDB Alas
// La carpeta 'public' contiene el HTML que renderiza toda la aplicacion
// La carpeta 'routes' contine las rutas CRUD a la base de datos
// El archivo 'database.js' contiene la conexion a la base de datos
// El archivo 'index.js' contiene la creacion y conexion al Servidor


// webpack: Webpack es una herramienta de compilación (una build tool en la jerga) que coloca en un grafo de
   dependencias a todos los elementos que forman parte de tu proyecto de desarrollo: código JavaScript, HTML, CSS,
   plantillas, imágenes, fuentes... Esta idea central es la que lo convierte en una herramienta tan poderosa.
   fuente: https://www.campusmvp.es/recursos/post/webpack-que-es-para-que-sirve-y-sus-ventajas-e-inconvenientes.aspx
   Webpack estará trabajando en similtaneo/watching mientras se codea igual que nodemon pero para el frontend, estara
   transpilando codigo frontend: react, javascript, html, css.
   QUE ES WEBPACK ?: https://www.youtube.com/watch?v=SSuycjlgtd8&ab_channel=codigofacilito

// Materialize: framework desarrollado por Google y se puede utlizar por medio de una CDN
   Esta herramienta se utlizo para stylizar los componentes de react



