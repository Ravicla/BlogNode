const {validationResult} = require('express-validator');


const nuevoAutor = {
    nombre: {
        exists: true,
        errorMessage: 'El nombre del autor es requerido',
        isLength: {
            options: {max: 15},
            errorMessage: 'El nombre del autor debe tener como maximo 15 caracteres'
        }
    },
    email: {
        exists: {
            errorMessage: 'El email del autor es obligatorio'
        },
        isEmail: {
            errorMessage: 'El campo email debe ser valido'
        }, 
    },
    imagen: {
        exists: {
            errorMessage: 'La imagen del autor es requerida'
        },
       
    }
    
}
const nuevoPost = {
    titulo: {
        exists: true,
        errorMessage: 'El titulo del post es requerido',
        isLength: {
            options: {max: 25},
            errorMessage: 'El titulo debe tener como maximo 25 caracteres'
        }
    },
    descripcion: {
        exists: {
            errorMessage: 'La descripcion del post es requerida'
        },
    },
    fecha_creacion: {
        exists: {
            errorMessage: 'La fecha de creacion es requerida'
        },
    },
    categoria: {
        exists: {
            errorMessage: 'La categoria del post es requerida'
        },
    },
    autores_id: {
        exists: {
            errorMessage: 'El ID del autor es requerido'
        },
    }
}


const checkError = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.mapped());
    }
    next();
}

module.exports = {
    nuevoAutor, nuevoPost, checkError
}