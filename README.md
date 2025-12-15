# ✅ To-Do List – Gestión de Tareas Full Stack

Este proyecto es una **aplicación Full Stack** para la gestión de tareas (To-Do List), desarrollada como práctica académica y técnica. El sistema está dividido en **dos repositorios independientes**: uno para el **backend (API REST)** y otro para el **frontend (interfaz web)**, siguiendo una arquitectura desacoplada. Permite a los usuarios **crear, listar, editar, marcar como completadas y eliminar tareas**, siguiendo una arquitectura cliente-servidor y buenas prácticas de desarrollo.

El **backend** está construido con **Node.js y Express**, utiliza **PostgreSQL** como sistema de base de datos y se encuentra desplegado en **Railway**. El **frontend** está planteado para ser desarrollado y conectado posteriormente.

---

## 📌 Funcionalidades

* Crear nuevas tareas
* Listar todas las tareas registradas
* Marcar tareas como completadas
* Editar tareas existentes
* Eliminar tareas
* Persistencia de datos en PostgreSQL
* API REST estructurada

---

## 🛠️ Tecnologías Utilizadas

| Área                   | Tecnologías                    |
| ---------------------- | ------------------------------ |
| Backend                | Node.js, Express, CORS, Dotenv |
| Base de Datos          | PostgreSQL (Railway)           |
| Frontend *(pendiente)* | HTML, CSS, JavaScript / React  |
| Control de versiones   | Git, GitHub                    |
| Deployment             | Railway                        |

---

## 📂 Estructura del Proyecto

### 📁 Repositorio Backend – `back-todo`

```bash
├── app.py
├── db.py
├── requirements.txt
├── runtime.txt
├── Procfile
├── .env
└── README.md
```

### 📁 Repositorio Frontend – `despliegue-todo`

```bash
├── public
├── src
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

---

## 🔐 Variables de Entorno

Crea un archivo **.env.local** (para entorno local) o configura las variables directamente en **Railway**:

```env
DB_HOST=tramway.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=AXTxLbdYRDhKbCjCcGiuiLkjuWwmuglD
DB_NAME=railway
DB_PORT=35810
```

> ⚠️ **Nota:** En un entorno real de producción, estas credenciales no deben exponerse públicamente.

---

## 🔗 Endpoints de la API

| Método | Endpoint            | Descripción                  |
| ------ | ------------------- | ---------------------------- |
| GET    | /tasks              | Obtener todas las tareas     |
| POST   | /tasks              | Crear una nueva tarea        |
| PUT    | /tasks/:id/complete | Marcar tarea como completada |
| DELETE | /tasks/:id          | Eliminar una tarea           |

### 📄 Ejemplo de JSON

```json
{
  "id": 1,
  "title": "Mi primera tarea",
  "completed": false
}
```

---

## 🚀 Instalación y Ejecución Local

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/sebastianmanriquetorres
```

2️⃣ Instala las dependencias:

```bash
npm install
```

3️⃣ Configura las variables de entorno en `.env.local`

4️⃣ Ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor se iniciará correctamente y quedará listo para recibir peticiones.

---

## ☁️ Deploy Backend (Railway / Render)

El backend está configurado para ejecutarse correctamente en servicios de nube como **Railway** o **Render**.

Pasos generales:

1. Conectar el repositorio **back-todo** desde GitHub
2. Configurar las variables de entorno
3. El servicio realiza el deploy automáticamente

---

## 🌐 Deploy Frontend (Netlify)

El frontend se encuentra desplegado en **Netlify**, consumiendo la API del backend.

Pasos:

1. Conectar el repositorio **despliegue-todo**
2. Configurar el archivo `netlify.toml`
3. Netlify realiza el build y deploy automático

---

## 🎨 Frontend

El frontend ya cuenta con una estructura base y despliegue funcional.

Incluye:

* Interfaz web para la gestión de tareas
* Consumo de la API mediante **fetch**
* Arquitectura moderna con **Vite**
* Preparado para escalar a frameworks como **React**

---

## 🔮 Próximos Pasos

* Desarrollar interfaz web completa
* Conectar frontend con backend
* Validaciones de formulario
* Manejo de errores
* Mejorar seguridad y estructura

---

## 👨‍💻 Autor

Desarrollado por **Sebastián Manrique** como práctica de desarrollo **Full Stack**.

🔗 Enlaces:

* GitHub: [https://github.com/sebastianmanriquetorres](https://github.com/sebastianmanriquetorres)
* Netlify: [https://proyecto-sebastian-manrique.netlify.app](https://proyecto-sebastian-manrique.netlify.app)
* Render: [https://bd-practicas-despliegue.onrender.com/](https://bd-practicas-despliegue.onrender.com/)

---

📘 *Proyecto académico enfocado en la aplicación de arquitectura REST, despliegue en la nube y buenas prácticas de desarrollo.*
