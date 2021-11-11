# Paw2Go

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/icono%20paw2go.png?raw=true)

### Descripcion del proyecto
El proyecto de Paw2Go nace con fines didácticos para la creación de un e-commerce, mezclando diferentes tecnologías utilizadas en el bootcamp Generation Mexico GDL. El objetivo de este proyecto es realizar un proyecto de página web funcional desde el lado del cliente y el servidor.

- Un e-commerce amigable e intuitiva
- Sencilla de navegar entre sus paginas
- Conectado a una base de datos para nuestros diferentes servicios

## Programas necesarios

### Editor de texto
Para este caso se utilizo el editor de texto Visual Studio Code

### Hojas de estilo
Se utlizaron estilos creados mediante CSS y tambien se tomaron estilos ya creados mediante diferentes frameworks como [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/ "Bootstrap") o [Materialize](https://materializecss.com/getting-started.html "Materialize")

### JavaScript
Este lenguaje de programación corre directamente en cualquier navegador de internet y es interpretado por cualquier editor de texto como el mencionado anteriormente.

## Vista del contenido

### Pagina Principal
En la página principal de nuestro proyecto, lo primero que podemos notar es la barra de navegación en la parte superior junto con un carrusel mostrando diferentes imágenes de las mascotas perro y gato que son el mercado a donde va dirigido nuestro proyecto.

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/Inicio_header.PNG?raw=true)

### Ubicación y Footer
En la parte inferior de la página principal nos encontramos con un pequeño mapa extraído de Google Maps donde se puede colocar la ubicación del e-commerce donde estaría localizado (para el ejemplo mostrado aquí, es una ubicación hipotética y no existe).
También podemos encontrar el Footer, donde contiene iconos de las redes sociales y te puede llevar a saber mas del e-commerce

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/mapa_footer.PNG?raw=true)

### Servicios
En la página de servicios podemos encontrar dos iconos donde, al darles click, éstos despliegan una ventana modal donde podremos observar un formulario para que el usuario pueda generar una cita, al llenarlo correctamente se manda un correo de confirmación.

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/servicios-Grooming.PNG?raw=true)
![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/modal-grooming.png?raw=true)

### Pet-shop
En la página de petshop se encuentran los artículos con los que cuenta nuestra e-commerce, cada uno de estos artículos cuenta con diferentes propiedades, como nombre, precio, imagen, descripción, cantidad etc. Estos datos se encuentran en una base de datos construida en mySQL, en la parte del Backend pueden encontrar todos los Script para base de datos y puedan construirla y hacerla ustedes.

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/Articulos-petshop.PNG?raw=true)

### Contacto
En la parte de contacto, podemos encontrar un formulario donde el usuario puede mandar un mensaje al propietario del e-commerce, este trabaja mediante Smtpjs.

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/contacto.PNG?raw=true)

### Registro de usuarios
Aquí se puede hacer login para los usuarios que ya se encuentran en nuestra base de datos, iniciando sesión mediante su nombre de usuario y su contraseña, esta contraseña se encuentra encriptada para la seguridad. Si no se cuenta con una cuenta, se pueden generar nuevas cuentas que se verán reflejadas en nuestra base de datos, todos los campos están protegidos para validar que los datos ingresados son los correctos y en formato necesario.

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/login-usuario.PNG?raw=true)

### Administrador
Esta es una página la cual solo es utilizable por el administrador del e-commerce, aquí el puede crear nuevas cuentas para administradores o iniciar sesión, estos formularios validan todos los campos y cuentan con encriptación de contraseñas.
![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/login-admin.PNG?raw=true)

### Articulos
Una vez iniciada la sesión por el administrador, el puede crear nuevos artículos que esten a la venta en la petshop, basta con solo llenar los campos mostrados(todos son necesarios), para poder dar de alta un nuevo artículo, estos datos se mandan a una tabla en nuestra base de datos y cuando nos movemos a la tienda, este se verá reflejado como un nuevo artículo.

![](https://github.com/santosmc93/Paw2Go/blob/main/capturas/agregar-articulos.PNG?raw=true)

## Cierre
Esta es solo la parte del Frontend de este proyecto, pueden descargar el repositorio y correrlo para visualizar toda nuestra e-commerce, en mi perfil de Github también pueden encontrar la parte del Backend donde encontrar todo lo necesario para que pueda trabajar en conjunto con la base de datos.



