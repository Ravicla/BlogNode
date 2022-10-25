const {executeQuery, executeQueryOne} = require('../helpers/utils')


const getById = (autorId) => {
    return executeQueryOne ('select * from blog.autores where id = ?', [autorId]);
}

module.exports = {
    getById
} 