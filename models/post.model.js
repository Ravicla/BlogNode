const {executeQuery, executeQueryOne} = require ('../helpers/utils');

const getAll = () => {
    return executeQuery ('select * from posts', []);
}

const getByPage = (page, limit) => {
    return executeQuery ('select * from posts limit ? offset ?', [limit, (page -1) * limit]);
}

const getById = (postId) => {
    return executeQueryOne ('select * from blog.posts where id = ?', [postId]);
}

const create = ({ titulo, descripcion, fecha_creacion, categoria, autores_id}) => {
    return executeQuery('insert into posts ( titulo, descripcion, fecha_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)', [ titulo, descripcion, fecha_creacion, categoria, autores_id]);
}

const deleteById = (postId) => {
    return executeQuery('delete from blog.posts where id = ?', [postId]);
}

const update = (postId, {titulo, descripcion, fecha_creacion, categoria, autores_id}) => {
    return executeQuery('update posts set titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autores_id = ? where id = ?',[titulo, descripcion, fecha_creacion, categoria, autores_id, postId]);
}


module.exports = {
    getAll, getByPage, getById, create, deleteById, update
} 