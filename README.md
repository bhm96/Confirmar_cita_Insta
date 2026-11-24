# Confirmación de citas por WhatsApp

Página estática para preparar confirmaciones de citas y abrirlas en WhatsApp para enviarlas manualmente. No requiere servidor backend, base de datos, API, dependencias externas ni instalación. Los datos se procesan únicamente en el navegador y no se guardan ni se transmiten.

## Uso

1. Abre la página desde la URL de GitHub Pages en un navegador.
2. Escribe el nombre del paciente y solo los 9 dígitos de su celular, sin el cero inicial, por ejemplo `991234567`. El prefijo internacional `+593` se agrega automáticamente.
3. Selecciona la especialidad y luego el médico; la lista muestra solo médicos de esa especialidad, ordenados alfabéticamente por primer apellido y con los apellidos al inicio. Después, elige la fecha y una hora disponible.
4. Marca la casilla de autorización solo si la persona aceptó recibir recordatorios por WhatsApp. Revisa la vista previa del mensaje y pulsa **Ir a WhatsApp para enviar**.
5. WhatsApp abrirá la conversación con el mensaje preparado en la pestaña actual. Revísalo y pulsa **Enviar** dentro de WhatsApp. Para preparar otro mensaje, vuelve al formulario con el botón **Atrás** del navegador.

La autorización debe obtenerse antes de marcar la casilla; marcarla no sustituye el consentimiento real. La herramienta solo prepara mensajes para enviarlos manualmente y no puede garantizar que WhatsApp no limite una cuenta. Envía únicamente mensajes esperados por la persona, respeta las solicitudes de baja y utiliza la plataforma/API oficial de WhatsApp Business para envíos a escala, siguiendo sus políticas y las plantillas aprobadas que correspondan.

El saludo cambia según la hora local del dispositivo: «¡Buenos días!» de 5:00 a 11:59, «¡Buenas tardes!» de 12:00 a 18:59 y «¡Buenas noches!» el resto del día. La vista previa se actualiza al cambiar los campos y cuando se vuelve a la pestaña. Las especialidades se muestran en orden alfabético; al elegir una, los médicos disponibles aparecen ordenados por su primer apellido y sus apellidos se muestran antes que sus nombres. Para cambiar los médicos disponibles, modifica la lista `doctors` al inicio de `app.js`.

## Publicar con GitHub Pages

1. Inicia sesión en GitHub y crea un repositorio nuevo.
2. Sube estos cuatro archivos a la raíz del repositorio: `index.html`, `styles.css`, `app.js` y `README.md`.
3. En el repositorio, abre **Settings** y selecciona **Pages** en el menú.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama donde subiste los archivos y la carpeta `/(root)`; luego pulsa **Save**.
6. Espera a que GitHub Pages publique el sitio. La URL estará disponible en la misma sección de configuración de **Pages**.

Una vez publicado, podrás abrir la página desde su URL de GitHub Pages y usarla en el navegador.
