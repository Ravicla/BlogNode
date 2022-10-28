const router = require('express').Router();
const {body, validationResult, checkSchema} = require('express-validator');

const { getAll, getByPage, getById, create, deleteById, update} = require('../../models/autor.model');
const {nuevoAutor, checkError} = require('../../helpers/validators');


/*router.get('/', (req, res) => {
    getAll()
        .then(autores => {
            res.json(autores);
        })
        .catch((error) => {
            res.json({ fatal: error.message });
        }); 
}); */


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


router.put('/:autorId', async (req, res) => {
    const { autorId } = req.params;
    const result = await update (autorId, req.body);
    res.json(result);

});


router.delete('/:autorId', async (req, res) => {
    const {autorId} = req.params;
    const result = await deleteById(autorId);
    res.json(result)
    
});


module.exports = router;