# Confirmación de citas por WhatsApp

Página estática para preparar confirmaciones de citas y abrirlas en WhatsApp para enviarlas manualmente. No requiere servidor backend, base de datos, API, dependencias externas ni instalación. Los datos se procesan únicamente en el navegador y no se guardan ni se transmiten.

## Uso

1. Abre la página desde la URL de GitHub Pages en un navegador.
2. Escribe el nombre del paciente y solo los 9 dígitos de su número de WhatsApp, por ejemplo `991234567`. El prefijo `5930` se agrega automáticamente.
3. Selecciona la especialidad y luego el médico; la lista muestra solo médicos de esa especialidad, ordenados por primer apellido. Después, elige la fecha y una hora disponible.
4. Revisa la vista previa del mensaje y pulsa **Ir a WhatsApp para enviar**.
5. WhatsApp abrirá la conversación con el mensaje preparado en la pestaña actual. Revísalo y pulsa **Enviar** dentro de WhatsApp. Para preparar otro mensaje, vuelve al formulario con el botón **Atrás** del navegador.

El mensaje de vista previa se actualiza al cambiar los campos y no se puede editar desde el formulario. Las especialidades se muestran en orden alfabético; al elegir una, los médicos disponibles aparecen ordenados por su primer apellido. Para cambiar los médicos disponibles, modifica la lista `doctors` al inicio de `app.js`.

## Publicar con GitHub Pages

1. Inicia sesión en GitHub y crea un repositorio nuevo.
2. Sube estos cuatro archivos a la raíz del repositorio: `index.html`, `styles.css`, `app.js` y `README.md`.
3. En el repositorio, abre **Settings** y selecciona **Pages** en el menú.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama donde subiste los archivos y la carpeta `/(root)`; luego pulsa **Save**.
6. Espera a que GitHub Pages publique el sitio. La URL estará disponible en la misma sección de configuración de **Pages**.

Una vez publicado, podrás abrir la página desde su URL de GitHub Pages y usarla en el navegador.
