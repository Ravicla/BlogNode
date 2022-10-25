const router = require('express').Router();
const {body, validationResult} = require('express-validator');

const { getById} = require('../../models/autor.model');


router.get('/:autorId', async (req, res) => {
    const {autorId} = req.params;
    const autor = await getById(autorId);
    if(autor) {
        res.json(autor)
    } else {
        res.json({error: 'No existe un autor con ese ID'});
    } 
});