# 🏋️‍♂️ FitFlow - Sistema Integral de Gestión Deportiva

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

**🔗 https://wclarosvargas.github.io/fitflow-appweb/** *(<-- Reemplazá el # con tu link)*

## 🎓 Contexto Académico
Este proyecto fue desarrollado como entrega final integradora para la carrera de **Ingeniería en Informática** en la **Universidad Argentina de la Empresa (UADE)**. 

El objetivo principal es la implementación de una arquitectura Frontend sólida, aplicando semántica web, estándares de accesibilidad y manipulación del DOM mediante Vanilla JavaScript (arquitectura libre de jQuery), cumpliendo con los requerimientos de la cátedra.

## 🔑 Credenciales de Acceso (Testing)
El sistema cuenta con un ruteo simulado basado en el rol del usuario. Para evaluar cada módulo de la aplicación, utilice las siguientes credenciales en la pantalla de inicio de sesión (`index.html`):

| Rol | Correo Electrónico | Contraseña | Vista Principal |
| :--- | :--- | :--- | :--- |
| **Socio** | `socio@fitflow.com` | `1234` | Dashboard, Pase QR, Reservas y Rutinas |
| **Profesor** | `profesor@fitflow.com` | `1234` | Panel de control, Asistencia de Alumnos |
| **Recepción** | `recepcion@fitflow.com` | `1234` | Monitoreo de Aforo e Ingresos diarios |

## ✨ Módulos del Sistema

La plataforma digitaliza y optimiza los flujos de trabajo dentro de un ecosistema de gimnasios:

1. **Módulo Socio:** Autogestión del usuario final. Incluye métricas de progreso, generación de código QR dinámico para acceso por molinetes y gestión de reservas de clases.
2. **Módulo Profesor:** Herramienta de administración de clases. Permite visualizar el aforo de la sesión, identificar el estado de cuenta de los alumnos y tomar asistencia en tiempo real.
3. **Módulo Recepción:** Panel de control administrativo. Brinda un monitoreo en tiempo real de la capacidad del establecimiento (aforo) y un reporte de ingresos y recaudación diaria.

## 🛠️ Tecnologías y Estándares

* **Estructura Documental:** HTML5 semántico (jerarquías validadas `h1`-`h6`, landmarks estructurales como `main`, `section`, `article`).
* **Diseño y Estilos:** CSS3 nativo mediante variables globales (`:root`) para estandarización de la paleta de colores corporativa, complementado con el framework **Bootstrap 5** para diseño responsive.
* **Lógica de Negocio:** Vanilla JavaScript (ES6+). Manipulación directa del DOM, simulación de persistencia de datos y renderizado dinámico de vistas.
* **Librerías de Terceros:** `qrcode.js` (implementada exclusivamente para la renderización en canvas del código de acceso).

## 📂 Estructura de Directorios

```text
fitflow-app/
├── index.html              # Punto de entrada (Login)
├── README.md               # Documentación del proyecto
├── enlace.txt              # Enlaces de entrega y repositorio
├── secciones/              # Vistas HTML organizadas por rol
│   ├── socio/
│   ├── profesor/
│   └── recepcion/
└── assets/                 
    ├── css/                # Hojas de estilo y variables (style.css)
    └── js/                 # Controladores lógicos (login.js, qr.js, etc.)
