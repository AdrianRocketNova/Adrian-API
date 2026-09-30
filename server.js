const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos de la carpeta "public" (index.html, styles.css)
app.use(express.static(path.join(__dirname, 'public')));

// Datos en memoria
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Pedro" }
];

const productos = [
  { id: 1, nombre: "Pizza", precio: 30000 },
  { id: 2, nombre: "Hamburguesa", precio: 25000 },
  { id: 3, nombre: "Coca-Cola", precio: 10000 }
];

// Endpoint 1: Saludo
app.get('/saludo', (req, res) => {
  res.send('HOLA SOY ADRIAN');
});

// Endpoint 2: Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Endpoint 3: Obtener usuario por ID (con control de error 404)
app.get('/usuarios/:id', (req, res) => {
  const idParam = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === idParam);

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

// Endpoint 4: Obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});