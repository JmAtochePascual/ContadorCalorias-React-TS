# Contador de Calorías

Contador de Calorías es una aplicación web que permite a los usuarios registrar y gestionar sus actividades diarias, ya sean de consumo de alimentos o ejercicios. La aplicación calcula las calorías consumidas y quemadas, proporcionando un resumen claro del balance calórico.

## Características

- **Registro de Actividades**: Permite a los usuarios agregar actividades de consumo de alimentos y ejercicios, especificando las calorías.
- **Cálculo de Calorías**: Calcula automáticamente las calorías consumidas y quemadas, mostrando un resumen claro.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Persistencia de Datos**: Utiliza `localStorage` para mantener el registro de actividades incluso después de recargar la página.
- **Manejo de Estado**: Utiliza `useReducer` para gestionar el estado de las actividades de manera eficiente.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## Tecnologías

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **TailwindCSS**: Framework para los estilos del proyecto
- **LocalStorage**: Para persistir el estado del carrito de compras
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables que forman la interfaz de usuario.
    - `Form.tsx`: Componente para agregar y editar actividades (comidas y ejercicios).
    - `Header.tsx`: Componente que muestra el encabezado de la aplicación y permite reiniciar las actividades.
    - `Activity.tsx`: Componente que representa una actividad individual, mostrando su información y opciones para editar o eliminar.
    - `CalorieTracker.tsx`: Componente que muestra el total de calorías consumidas, quemadas y el balance total.
  - **hooks/**: Contiene hooks personalizados que encapsulan la lógica de la aplicación.
    - `useOrder.ts`: Hook personalizado para la lógica de la orden (si aplica).
  - **data/**: Archivos que contienen datos estáticos utilizados en la aplicación.
    - `categories.ts`: Define las categorías de actividades (comida y ejercicio) y el estado inicial de una actividad.
  - **types/**: Tipos y interfaces compartidos que definen la estructura de los datos.
    - `index.ts`: Tipos y interfaces utilizados en toda la aplicación.
  - **reducers/**: Contiene la lógica de gestión del estado de las actividades.
    - `activityReducer.ts`: Reducer que maneja las acciones relacionadas con las actividades (agregar, editar, eliminar, etc.).
  - `App.tsx`: Componente principal que integra todos los componentes y gestiona el estado global.

## Instalación

> Para trabajar con este proyecto, necesitarás tener instalado:
>
> - **Node.js** (versión 14 o superior)

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/ContadorCalorias-React-TS.git
```

2. Navega al directorio del proyecto:

```
cd ContadorCalorias-React-TS
```

3. Instala las dependencias necesarias:

```
npm install
```

4. Inicia el servidor en modo desarrollo:

```
npm run dev
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto se encuentra disponible bajo la licencia MIT. Puedes consultar los términos completos [aquí](https://opensource.org/licenses/MIT).

Desarrollado con 💚 por JMCode | © 2025 - Transformando ideas en soluciones digitales.
