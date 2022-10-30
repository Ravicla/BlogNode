const {executeQuery, executeQueryOne,executeQueryMany} = require ('../helpers/utils')

const getAll = () => {
    return executeQuery ('select * from autores', []);
}

const getByPage = (page, limit) => {
    return executeQuery ('select * from autores limit ? offset ?', [limit, (page -1) * limit]);
}

const getById = (autorId) => {
    return executeQueryMany ('select * from blog.autores as a inner join blog.posts as p on a.id=p.autores_id where a.id = ?', [autorId]);
}

const create = ({ nombre, email, imagen }) => {
    return executeQuery('insert into autores (nombre, email, imagen) values (?, ?, ?)', [ nombre, email, imagen ]);
}

const deleteById = (autorId) => {
    return executeQuery('delete from blog.autores where id = ?', [autorId]);
}

const update = (autorId, {nombre, email, imagen}) => {
    return executeQuery('update blog.autores set nombre = ?, email = ?, imagen = ? where id = ?',[nombre, email, imagen, autorId]);
}


module.exports = {
    getAll, getById, getByPage, create, deleteById, update
} 