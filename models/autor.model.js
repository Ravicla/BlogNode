const {executeQuery, executeQueryOne} = require('../helpers/utils')

const getAll = () => {
    return executeQuery ('select * from autores', []);
}

const getByPage = (page, limit) => {
    return executeQuery ('select * from autores limit ? offset ?', [limit, (page -1) * limit]);
}

const getById = (autorId) => {
    return executeQueryOne ('select * from blog.autores where id = ?', [autorId]);
}

const create = ({ nombre, email, imagen }) => {
    return executeQuery('insert into autores (nombre, email, imagen) values (?, ?, ?)', [ nombre, email, imagen ]);
}

module.exports = {
    getAll, getById, getByPage, create
} 