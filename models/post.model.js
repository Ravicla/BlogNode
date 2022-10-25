const {executeQuery, executeQueryOne} = require ('../helpers/utils');

const getAll = () => {
    return executeQuery ('select * from posts', []);
}

const getByPage = (page, limit) => {
    return executeQuery ('select * from posts limit ? offset ?', [limit, (page -1) * limit]);
}

const getById = (postId) => {
    return executeQueryOne ('select * from blog.posts as p inner join blog.autores as a on p.autores_id = a.id where p.id = ?', [postId]);
}

const create = ({ titulo, descripcion, fecha_creacion, categoria, autores_id}) => {
    return executeQuery('insert into posts ( titulo, descripcion, fecha_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)', [ titulo, descripcion, fecha_creacion, categoria, autores_id]);
}

module.exports = {
    getAll, getByPage, getById, create
} 