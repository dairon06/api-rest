import { Router } from "express";
import {
  borrarPersonajes,
  crearPersonajes,
  obtenerPersonajes,
  obtenerPersonajesPorId,
  modificarPersonajes,
} from "../controllers/personajes.js";

export const personajesRouter = Router();

// Obtener todos los usuarios
personajesRouter.get("/", obtenerPersonajes);

// Obtener un usuario por su id
personajesRouter.get("/:id", obtenerPersonajesPorId);

// Crear un usuario
personajesRouter.post("/", crearPersonajes);

// Modificar un usuario
personajesRouter.patch("/:id", modificarPersonajes);

// Borrar un usuario
personajesRouter.delete("/:id", borrarPersonajes);
