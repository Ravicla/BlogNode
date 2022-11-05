const router = require('express').Router();
const { body, validationResult, checkSchema} = require('express-validator');

const {getAll, getByPage, getById, create, deleteById, update} = require('../../models/post.model');
const {getAutorById} = require('../../models/autor.model');
const { nuevoPost, checkError } = require ('../../helpers/validators');



router.get('/', (req, res) => {
    getAll()
        .then(post => {
            res.json(post);
        })
        .catch((error) => {
            res.json({ fatal: error.message });
        }); 
}); 


/*router.get('/', async (req, res) => {
    const { page = 1, limit = 4 } = req.query;
    try {
        const posts = await getByPage(parseInt(page), parseInt(limit));
        res.json(posts);
    } catch (error) {
        res.json({fatal: error.message});
    }    
}); */


router.get('/:postId', async (req, res) => {
    const {postId} = req.params;
    const post = await getById(postId);
    if(post) {
        res.json(post);

    } else {
        res.json({error: 'No existe un post con ese ID'});
    } 
});

router.get('/:postId/:autor', async (req, res) => {
    const {postId} = req.params;
    const post = await getById(postId);
    if(post) {
        const autor = await getAutorById(post.autores_id);
        const respuesta = {
            "id": post.id,
            "titulo": post.titulo,
            "descripcion": post.descripcion,
            "fecha_creacion": post.fecha_creacion,
            "categoria": post.categoria,
            "autores_id": post.autores_id,
            autor
        };
        res.json(respuesta);
    } else {
        res.json({error: 'No existe un post con ese ID'});
    } 
}); 


router.post('/', 
    checkSchema(nuevoPost),
    checkError
    , async (req, res) => {
        try {
        const result = await create (req.body);
        const post = await getById(result.insertId);
        res.json(post);
    } catch (error) {
        res.json({fatal: error.message});
    }
    
});


router.put('/:postId', async (req, res) => {
    const { postId } = req.params;
    const result = await update (postId, req.body);
    res.json(result);
});


router.delete('/:postId', async (req, res) => {
    const {postId} = req.params;
    const result = await deleteById(postId);
    res.json(result)
});


module.exports = router;