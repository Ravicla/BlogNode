const {executeQuery, executeQueryOne} = require('../helpers/utils')

const getByPage = (page, limit) => {
    return executeQuery ('select * from autores limit ? offset ?', [limit, (page -1) * limit]);
}

const getById = (autorId) => {
    return executeQueryOne ('select * from blog.autores where id = ?', [autorId]);
}



module.exports = {
    getById, getByPage
} 