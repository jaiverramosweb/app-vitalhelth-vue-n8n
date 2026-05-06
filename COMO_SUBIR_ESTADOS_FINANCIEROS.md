# Cómo subir el cambio de Estados Financieros

## Qué se cambió

- Se agregó en el footer, sección **Información**, el enlace **Estados Financieros**.
- Ese enlace abre en otra pestaña el archivo:
  - `public/SMVH ESTADOS FINANCIEROS A DIC 2025 Y 2024.pdf`

## Por qué funciona también en producción

El proyecto usa Vite y el enlace quedó construido con `import.meta.env.BASE_URL`.

Eso hace que:

- en local apunte al PDF local
- en producción apunte al PDF publicado junto al sitio

O sea: si el archivo está dentro de `public/`, cuando hagas deploy también quedará disponible en producción.

## Cómo subir este cambio

### Opción 1: subir exactamente este PDF

1. Verificá que el archivo exista en:
   - `public/SMVH ESTADOS FINANCIEROS A DIC 2025 Y 2024.pdf`
2. Subí los cambios del proyecto a tu repositorio o al medio que uses para despliegue.
3. Ejecutá tu proceso normal de deploy.
4. Cuando el sitio quede publicado, probá el link del footer y debería abrir el PDF en otra pestaña.

### Opción 2: reemplazar el PDF por una nueva versión

Si querés subir otro PDF más adelante, tenés dos caminos:

#### Camino A — recomendado

Reemplazá el archivo dentro de `public/` usando **el mismo nombre**:

- `SMVH ESTADOS FINANCIEROS A DIC 2025 Y 2024.pdf`

Así no tenés que tocar código.

#### Camino B

Si el nuevo archivo tiene otro nombre:

1. Copiá el nuevo PDF dentro de `public/`
2. Actualizá esta línea en `src/components/Footer.vue`:

```js
const financialStatementsPdf = encodeURI(`${import.meta.env.BASE_URL}NOMBRE-DEL-NUEVO-ARCHIVO.pdf`)
```

3. Subí nuevamente el proyecto a producción.

## Archivos involucrados

- `src/components/Footer.vue`
- `public/SMVH ESTADOS FINANCIEROS A DIC 2025 Y 2024.pdf`
