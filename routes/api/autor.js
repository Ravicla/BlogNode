const router = require('express').Router();
const {body, validationResult, checkSchema} = require('express-validator');

const { getAll, getByPage, getById, create} = require('../../models/autor.model');
const {nuevoAutor, checkError} = require('../../helpers/validators');

router.get('/', async (req, res) => {
    const { page = 1, limit = 4 } = req.query;

    try {
        const autores = await getByPage(parseInt(page), parseInt(limit));
        res.json(autores);
    } catch (error) {
        res.json({fatal: error.message});
    }    
});

router.get('/:autorId', async (req, res) => {
    const {autorId} = req.params;
    const autor = await getById(autorId);
    if(autor) {
        res.json(autor)
    } else {
        res.json({error: 'No existe un autor con ese ID'});
    } 
});

router.post('/', 
    checkSchema(nuevoAutor),
    checkError
    , async (req, res) => {     
        try {
        const result = await create (req.body);
        const autor = await getById(result.insertId);
        res.json(autor);
    } catch (error) {
        res.json({fatal: error.message});
    }
    
});




router.put('/:postId', (req, res) => {
    res.send('Edito un autor');
});

router.delete('/:postId', (req, res) => {
    res.send('Borro un autor');
});

module.exports = router;