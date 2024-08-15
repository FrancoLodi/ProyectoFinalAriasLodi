# E-Commerce - Tienda Pixi

## Descripción

**Tienda Pixi** es una aplicación web para una tienda de ropa en San Salvador de Jujuy. Permite a los usuarios navegar a través de una lista de productos, ver detalles de cada producto y realizar compras en línea. La aplicación carga los productos desde una base de datos en Firebase y almacena las órdenes de compra también en Firebase. La aplicación está diseñada como una Single Page Application (SPA), proporcionando una experiencia de usuario fluida y sin recargas de página.

## Tecnologías y Librerías Usadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción para aplicaciones modernas, usada para el desarrollo y empaquetado del proyecto.
- **Firebase**: Plataforma de desarrollo de aplicaciones que proporciona servicios como autenticación, almacenamiento de datos y bases de datos en tiempo real. Se utiliza para cargar productos y almacenar órdenes de compra.
- **Toastify**: Biblioteca para mostrar notificaciones de tipo toast en la aplicación, utilizada para mostrar mensajes informativos y de error.
- **React DOM**: Biblioteca que permite la manipulación del DOM y la integración con React.
- **React Router DOM**: Biblioteca para la gestión de rutas y navegación en aplicaciones React, utilizada para la navegación entre diferentes vistas (páginas) de la aplicación.

## Instalación y Configuración

Para comenzar con el proyecto, sigue estos pasos:

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. **Instalar Dependencias**

    Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias del proyecto con:

    ```bash
    npm install

3. **Configurar Firebase**

    Crea un proyecto en Firebase Console.
    Copia las credenciales de configuración de Firebase y pégalos en el archivo Context.jsx dentro de la constante firebaseConfig.

4. **Iniciar la Aplicación**

    Inicia el servidor de desarrollo con:
    
    ```bash
    npm run dev

## Funcionalidades

- **Visualización de Productos**: Los productos se cargan desde Firebase y se muestran en una lista.
- **Detalles del Producto**: Al seleccionar un producto, se muestra una vista detallada con la opción de agregarlo al carrito.
- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, ver el resumen y confirmar la compra.
- **Formulario de Compra**: Los usuarios completan un formulario con sus datos para finalizar la compra.
- **Notificaciones**: Se muestran notificaciones de éxito y error utilizando Toastify.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
- **components**/: Componentes de React utilizados en la aplicación.
- **Context.jsx**: Contexto de React que maneja el estado global de la aplicación y las interacciones con Firebase.
- **App.jsx**: Componente principal que configura las rutas y la estructura de la aplicación.
- **index.html**: Archivo HTML principal.

## Herramientas y Librerías Usadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y minimalista para construir aplicaciones web.
- **Firebase**: Plataforma de Google utilizada para la base de datos y el almacenamiento de órdenes de compra.
- **React Toastify**: Librería para mostrar notificaciones y alertas de manera sencilla y elegante.
- **React Router DOM**: Utilizado para manejar las rutas y la navegación dentro de la aplicación.
- **React DOM**: Paquete que proporciona métodos específicos del DOM que se usan en la mayoría de las aplicaciones web de React.

## Contribuciones

Las contribuciones al proyecto son bienvenidas. Por favor, abre un problema o una solicitud de extracción si deseas contribuir o informar sobre un problema.