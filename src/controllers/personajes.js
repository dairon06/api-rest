import {personajesDB} from "../models/personajes.js";

let idCount = personajesDB.length;

export const getPersonajes = (req, res) => {
  if (req.query.nombre) {
    // Buscar el personaje con el mismo nombre que llega por parametro con el metodo find
    const personaje = personajesDB.filter(
      (personaje) => personaje.nombre === req.query.nombre
    );
    // Si no existe
    if (!personaje) {
      return res.status(404).json({ error: "personaje no encontrado" });
    }
    // Si existe
    return res.json(personaje);
  }
  // Si no hay personajes
  if (personajesDB.length === 0) {
    return res.status(404).json({ error: "No hay personajes" });
  }
  res.json(personajesDB);
};

export const getPersonajesById = (req, res) => {
  // Obtener el id
  const id = parseInt(req.params.id);
  // Buscar el personaje con el mismo id que llaga por parametro con el metodo find
  const personaje = personajesDB.find((personaje) => personaje.id === id);
  // Si no hay personajes
  if (!personaje) {
    return res.status(404).json({ error: "Personaje no encontrado" });
  }
  // Si hay personaje
  return res.json(personaje);
};

export const crearPersonajes = (req, res) => {
  if (!req.body.nombre || !req.body.edad) {
    return res.status(400).json({ error: "Error en la peticion" });
  }
  const personaje = req.body;
  const id = ++idCount;
  personajesDB.push({ id, ...personaje });
  return res.status(201).json(personaje);
};

export const modificarPersonajes = (req, res) => {
  const id = parseInt(req.params.id);
  const index = personajesDB.findIndex((personaje) => personaje.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  } else {
    const personajeUpdated = { ...personajesDB[index], ...req.body };
    personajesDB[index] = personajeUpdated;
    res.json(personajeUpdated);
  }
};

export const borrarPersonajes = (req, res) => {
  const id = parseInt(req.params.id);
  // Encontrar el indice del personaje en la db por su id
  const index = personajesDB.findIndex((personaje) => personaje.id === id);
  // Si no existe ningun personaje con ese id
  if (index === -1) {
    return res.status(404).json({ error: "Personaje no encontrado" });
  } else {
    // Eliminar el personaje de la base de datos segun su id
    personajesDB.splice(index, 1);
    // Responder con un mensaje
    res.json({ message: "Personaje eliminado correctamente" });
  }
};
