const router = require('express').Router();
const { body, validationResult, checkSchema} = require('express-validator');

const {getAll, getByPage, getById, create, deleteById} = require('../../models/post.model');
const { nuevoPost, checkError } = require ('../../helpers/validators');

router.get('/', async (req, res) => {
    const { page = 1, limit = 4 } = req.query;
    try {
        const posts = await getByPage(parseInt(page), parseInt(limit));
        res.json(posts);
    } catch (error) {
        res.json({fatal: error.message});
    }    
});

router.get('/:postId', async (req, res) => {
    const {postId} = req.params;
    const post = await getById(postId);
    if(post) {
        res.json(post)
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








router.put('/:postId', (req, res) => {
    res.send('Edito un post');
});

router.delete('/:postId', async (req, res) => {
    const {postId} = req.params;
    const result = await deleteById(postId);
    res.json(result)
});

module.exports = router;