# Práctica: Desarrollo con Angular y React

## 1. Descripción

El objetivo de esta práctica es desarrollar una misma aplicación web utilizando dos frameworks diferentes, Angular y React, con el propósito de experimentar sus estructuras, herramientas y formas de implementar componentes, servicios y gestión de estado.

La aplicación consiste en un listado de usuarios que obtiene información desde una API pública y permite realizar búsquedas y gestionar usuarios favoritos.

**API utilizada:** [JSONPlaceholder - Users](https://jsonplaceholder.typicode.com/users)

## 2. Tecnologías utilizadas

### Angular
- Angular
- TypeScript
- HTML5
- CSS3
- HttpClient

### React
- React
- JavaScript
- HTML5
- CSS3
- Fetch API
- Vite

## 3. Funcionalidades implementadas

Ambas aplicaciones implementan las siguientes funcionalidades:

- **Consulta de usuarios:** obtiene los usuarios desde JSONPlaceholder.
- **Estado de carga:** muestra un mensaje mientras se realiza la petición.
- **Manejo de errores:** informa cuando ocurre un problema al consultar la API.
- **Componentes reutilizables:** cada usuario se representa mediante una tarjeta que muestra su nombre, correo electrónico y ciudad.
- **Búsqueda dinámica:** permite filtrar usuarios por nombre mientras se escribe.
- **Gestión de favoritos:** permite marcar usuarios como favoritos.
- **Contador de favoritos:** muestra la cantidad de usuarios marcados como favoritos.
- **Pruebas unitarias:** incluye pruebas para verificar el funcionamiento de la aplicación.

## 4. Estructura del repositorio

```text
practica-frameworks/
│
├── angular/
│   ├── public/
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       ├── services/
│   │       └── ...
│   ├── package.json
│   └── angular.json
│
├── react/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── evidencias/
│   ├── angular/
│   ├── react/
│   └── pruebas/
│
└── README.md
```

## 5. Instalación y ejecución

### Requisitos previos

- Node.js
- npm
- Navegador web

### Ejecutar Angular

Desde una terminal:

```bash
cd angular
npm install
npm start
```

Abrir en el navegador:

```text
http://localhost:4200
```

### Ejecutar React

Desde otra terminal:

```bash
cd react
npm install
npm run dev
```

Abrir la dirección local que proporciona Vite en la terminal, normalmente:

```text
http://localhost:5173
```

**Nota:** No es necesario levantar un servidor backend. Ambas aplicaciones consultan directamente la API pública de JSONPlaceholder.

## 6. Evidencias de funcionamiento

Las capturas de pantalla de las aplicaciones y sus pruebas se encuentran en la carpeta `evidencias/` de este repositorio.

- Angular: funcionamiento de la aplicación, búsqueda y favoritos.
- React: funcionamiento de la aplicación, búsqueda y favoritos.
- Pruebas: ejecución satisfactoria de las pruebas unitarias.

## 7. Pruebas unitarias

Se implementaron pruebas unitarias en ambos frameworks
para comprobar el funcionamiento de sus servicios y componentes.

### Angular
- Creación del componente principal.
- Filtrado de usuarios por nombre.

Resultado: 2 pruebas aprobadas.

### React
- Consulta correcta de usuarios.
- Manejo de errores en la respuesta de la API.

Resultado: 2 pruebas aprobadas.