# ⚡️ Contador de Calorías

Contador de Calorías es una aplicación web que permite a los usuarios registrar y gestionar sus actividades diarias, ya sean de consumo de alimentos o ejercicios. La aplicación calcula las calorías consumidas y quemadas, proporcionando un resumen claro del balance calórico.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **TailwindCSS**: Framework para los estilos del proyecto
- **LocalStorage**: Para persistir el estado del carrito de compras
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación

## 📁 Estructura del Proyecto

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

## 🚀 Características Principales

- **Registro de Actividades**: Permite a los usuarios agregar actividades de consumo de alimentos y ejercicios, especificando las calorías.
- **Cálculo de Calorías**: Calcula automáticamente las calorías consumidas y quemadas, mostrando un resumen claro.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Persistencia de Datos**: Utiliza `localStorage` para mantener el registro de actividades incluso después de recargar la página.
- **Manejo de Estado**: Utiliza `useReducer` para gestionar el estado de las actividades de manera eficiente.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## 🛠️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JMatochePascual/ContadorCalorias-React-TS.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```bash
   http://localhost:5173
   ```

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
   git remote add upstream https://github.com/JMatochePascual/ContadorCalorias-React-TS.git
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request desde tu repositorio al repositorio original.

Por favor, antes de realizar cambios importantes:

- Abre un Issue para discutir las modificaciones propuestas.
- Asegúrate de que tu código sigue las convenciones del proyecto.
- Incluye tests si es necesario.
- Actualiza la documentación según corresponda.

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>
