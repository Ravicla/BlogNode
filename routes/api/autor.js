const router = require('express').Router();
const {body, validationResult} = require('express-validator');

const { getByPage, getById} = require('../../models/autor.model');

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

module.exports = router;