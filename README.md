# Base de conocimiento de soporte

Borrador editorial para preparar una página estática de consulta técnica.

## Estado

Este contenido está normalizado a partir de los documentos Word originales revisados. Las fichas llevan estado **revisado**.

**Importante sobre GitHub Pages:** una página pública es accesible para cualquier persona con la URL. No publicar aquí datos de clientes, identificadores, consultas internas, scripts ni procedimientos que deban quedar restringidos a personal autorizado. GitHub Pages público no aplica permisos por rol.

## Organización

- Las fichas están en `contenido/`, separadas por tema.
- Cada caso tiene un archivo Markdown independiente.
- `contenido/INDICE.md` es el índice editorial de categorías y artículos.
- `contenido/PLANTILLA.md` define el formato común para nuevas fichas.
- `contenido/NOTAS_EDITORIALES.md` describe el alcance de las fuentes y consideraciones de publicación.

## Cómo actualizar contenido

1. Abrir la carpeta del tema y el archivo del procedimiento.
2. Editar el texto sin cambiar los campos entre las marcas `---` del encabezado.
3. Mantener los apartados comunes y escribir pasos cortos, en el orden en que se realizan.
4. Si una fuente no especifica un dato, dejarlo indicado como no especificado; no completar por suposición.
5. Revisar la vista previa de Markdown antes de guardar.
6. Mantener el estado `revisado` y actualizar la fecha si se modifica una ficha.
7. Para agregar un caso, copiar `contenido/PLANTILLA.md`, asignar un nombre de archivo corto y agregar el enlace a `contenido/INDICE.md`.

## Convención editorial

- Un artículo por síntoma o problema.
- Títulos redactados con el lenguaje de la consulta: “No aparecen las cuentas al confeccionar una TEF”.
- Pasos numerados para acciones; listas para evidencias.
- Diferenciar claramente una verificación de una acción que requiere Soporte.
- No publicar SQL, scripts, credenciales, datos reales ni capturas con información identificable.
- Mantener el nombre del sistema o módulo, pero desarrollar siglas la primera vez que aparecen cuando sea posible.
- Mantener responsable y fecha de revisión del contenido.

## Fuentes originales

Los documentos Word y el archivo ZIP de origen se mantienen aparte. No reemplazar ni borrar esas fuentes al editar esta carpeta.

## Página web

La página está implementada como sitio estático Jekyll para GitHub Pages. No necesita servidor, base de datos ni dependencias JavaScript externas. El buscador funciona en el navegador y consulta el contenido de las fichas Markdown.

### Editar una guía

1. En GitHub, abrir `contenido/` y la carpeta de la categoría.
2. Abrir el archivo `.md` de la guía y elegir Editar.
3. Cambiar el texto, previsualizar y guardar el commit en la rama publicada.
4. GitHub Pages vuelve a generar el sitio y el índice del buscador con el contenido nuevo.

Para incorporar una guía, copiar `contenido/PLANTILLA.md` dentro de la carpeta temática y completar sus campos. La portada y el buscador la incorporan automáticamente a partir de `title`, `category` y `summary`. `contenido/INDICE.md` se mantiene como mapa editorial de las fuentes.

### Publicar en GitHub Pages

En el repositorio, abrir Settings > Pages y seleccionar la rama y la carpeta raíz como fuente de publicación. Para un sitio de proyecto alojado en una ruta como `usuario.github.io/nombre-repositorio`, completar `baseurl` en `_config.yml` con `/nombre-repositorio`; dejarlo vacío para un sitio de usuario u organización en la raíz del dominio.

El sitio no tiene autenticación. Si se publica en GitHub Pages público, cualquier visitante con la dirección puede acceder al contenido. Los documentos fuente originales quedan excluidos de la generación del sitio, pero se debe revisar también la visibilidad del repositorio antes de subirlo.

