# Prueba técnica - Flat 101

Este proyecto es una aplicación web desarrollada con **Next.js** que consume la API pública de **Rick and Morty** para mostrar episodios, localizaciones y detalles de cada entidad. Ha sido realizada como parte del proceso de selección para **Flat 101**.

## 🔧 Tecnologías usadas

- [Next.js (App Router)](https://nextjs.org/)
- React (con `use client`)
- CSS Modules / estilos en línea
- API de [Rick and Morty](https://rickandmortyapi.com/)
- HTML5 y JavaScript

## 🚀 Características implementadas

- Listado de **episodios** y **localizaciones**
- Detalle de cada episodio:
  - Nombre, fecha, número
  - Carrusel horizontal con imágenes de los personajes
  - Formulario de comentarios (nombre, email, texto)
- Navegación mediante rutas dinámicas (`/episode/[id]`, `/location/[id]`)
- Uso de `useState`, `useEffect`, `useParams`, y componentes cliente
- Loader mientras se cargan los datos
- Estilos responsive

## 📦 Instalación

```bash
git clone https://github.com/JoseMartinezLTN/jose-martinez-flat101.git
cd jose-martinez-flat101
npm install
npm run dev
```
