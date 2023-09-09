## GET /personajes
### Obtener todos los personajes
http://localhost:3001/personajes
Devuelve un array con todos los personajes.

## GET /personajes/:id
### Obtener un personaje por ID
http://localhost:3001/personajes/1
Devuelve el objeto del personaje cuyo id es 1, o null si no existe ese personaje en la base de

## POST /personajes
### Crear un personaje
http://localhost:3001/personajes
Crea y devuelve un nuevo personaje, requiere de la siguiente estructura en JSON:

## PATCH /personajes/:id
### Actualizar un personaje
http://localhost:3001/personajes/:id
Actualiza al personaje con ese id, recibe como parámetro un objeto JSON que contiene la información a actualizar del personaje.

## DELETE /personajes/:id
### Eliminar un personaje
http://localhost:3001/personajes/:id
Elimina al personaje con ese id de la base de datos.

### Ejemplo

http://localhost:3001/personajes

```json
[
  {
    "id": 1,
    "nombre": "Pain Deva",
    "sexo": "Masculino",
    "edad": 35,
    "estado": "muerto",
    "imagen": "https://www.lifeder.com/wp-content/uploads/2019/01/Pain-im.jpg"
  },
  {
    "id": 2,
    "nombre": "Goku Black",
    "sexo": "Masculino",
    "edad": 39,
    "estado": "muerto",
    "imagen": "https://pm1.aminoapps.com/6748/35e1a6845df4d23c70687fd6c93ebadeeb7251b5v2_hq.jpg"
  },
  {
    "id": 3,
    "nombre": "Roronnoa Zoro",
    "sexo": "Masculino",
    "edad": 21,
    "estado": "Vivo",
    "imagen": "https://www.friking.es/img/cms/ronroa_zoro_one_piece_hakai_conquistador_kaido-jpg_743561205.jpg"
  },
  {
    "id": 4,
    "nombre": "Asta",
    "sexo": "Masculino",
    "edad": 18,
    "estado": "Vivo",
    "imagen": "https://a-static.besthdwallpaper.com/black-clover-asta-new-demon-form-wallpaper-3554x1999-53335_53.jpg"
  },
  {
    "id": 5,
    "nombre": "Saitama",
    "sexo": "Masculino",
    "edad": 25,
    "estado": "Vivo",
    "imagen": "https://img1.wallspic.com/previews/6/0/4/1/7/171406/171406-un_golpe_hombre_dp-saitama-un_golpe_de_hombre-anime-manga-x750.jpg"
  }
]
```