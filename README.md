# Earthquake Data Visualization App

Este proyecto proporciona una visualización de datos sísmicos a través de una API REST desarrollada con Ruby on Rails y un frontend interactivo construido con React y Vite. La aplicación permite visualizar información detallada sobre terremotos y realizar comentarios en una interfaz de usuario moderna y responsiva.

## Descripción de la API

La API del backend no solo sirve datos sobre terremotos sino que también persiste estos datos en una base de datos SQLite. Los datos son extraídos de una fuente externa, la USGS (United States Geological Survey), y almacenados localmente para permitir un acceso rápido y eficiente, además de facilitar funcionalidades adicionales como la adición de comentarios a eventos específicos de terremotos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Ruby (versión 3.3.0 recomendada)
- Rails (versión 7.1.3.2)
- Node.js y npm
- Yarn (para la gestión de paquetes del frontend)
- SQLite3 (para la base de datos de desarrollo)

## Configuración del Backend

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/nscando/earthquake-app.git
   cd earthquake-app/backend
   ```

2. **Instalar gemas:**

   Asegúrate de estar en el directorio del backend y ejecuta:

   ```bash
   bundle install
   ```

3. **Configurar la base de datos:**

   Ejecuta las migraciones para configurar la base de datos SQLite:

   ```bash
   rails db:create db:migrate
   ```

4. **Poblar la base de datos:**

   Para poblar la base de datos con datos iniciales de terremotos, puedes ejecutar una tarea rake personalizada:

   ```bash
   rails earthquake_data:fetch
   ```

5. **Iniciar el servidor Rails:**

   Inicia el servidor Rails en el puerto predeterminado 3000:

   ```bash
   rails s
   ```

## Configuración del Frontend

1. **Navega al directorio del frontend:**

   ```bash
   cd ../frontend
   ```

2. **Instalar dependencias:**

   Usa Yarn para instalar las dependencias:

   ```bash
   yarn install
   ```

3. **Iniciar el servidor de desarrollo de Vite:**

   Para iniciar el servidor de desarrollo y abrir la aplicación en tu navegador por defecto:

   ```bash
   yarn dev
   ```

## Pruebas con Curl

Para probar la API del backend directamente, puedes usar comandos `curl` para realizar solicitudes HTTP. Aquí tienes algunos ejemplos:

- **Obtener la lista de features:**

  ```bash
  curl -X GET 'http://127.0.0.1:3000/api/features' -H 'Content-Type: application/vnd.api+json' -H 'cache-control: no-cache'
  ```

- **Publicar un comentario en un feature específico:**

  ```bash
  curl -X POST http://localhost:3000/api/features/1/comments -H "Content-Type: application/json" -d '{"body": "Este es un nuevo comentario"}'
  ```

## Contribuir

Si deseas contribuir al proyecto, considera clonar el repositorio y enviar pull requests con tus sugerencias y mejoras. Asegúrate de seguir las convenciones del proyecto y agregar pruebas si es posible.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` en el directorio raíz del proyecto para más detalles.

```

```
