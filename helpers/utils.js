const executeQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if(err) return reject(err);        
            resolve(result);
        });
    });
}

const executeQueryOne = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if(err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        });
    });
}

const executeQueryMany = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if(err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result);
        });
    });
}

module.exports = {executeQuery, executeQueryOne,executeQueryMany};