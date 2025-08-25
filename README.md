# SmartTasks Frontend

Aplicación web desarrollada en Angular para gestionar tareas (CRUD) conectada a una API en Flask.

## Requisitos

- Node.js 18+
- Angular CLI
- Python 3.12 (para el backend)
- Git

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/camilariquelme/smarttasks-frontend.git
   cd smarttasks-frontend
2. Instala dependencias:

            npm install

3. Levanta la aplicación en modo desarrollo:

            ng serve --open --proxy-config proxy.conf.json

         La app se abrirá automáticamente en http://localhost:4200.

## Funcionalidades

- Listar tareas existentes

- Crear nuevas tareas

- Marcar tareas como completadas o pendientes

- Eliminar tareas

## Estructura

   - src/app/services/tareas.service.ts → comunicación con la API Flask

   - src/app/features/tareas/ → componente principal de tareas

   - proxy.conf.json → evita problemas CORS durante el desarrollo

## Conexión con el backend

   La API de Flask debe ejecutarse en http://127.0.0.1:5000:

      python run.py

La aplicación Angular se comunica con el backend a través del proxy configurado.