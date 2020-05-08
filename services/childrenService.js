const db = require('../config/database');

const childrenService = {

    getAll: async () => {

        let sql = 'SELECT * from children';
        const [results, fields] = await db.promise().execute(sql);

        return results;

    },

    getById: async (id) => {

        let sql = 'SELECT * from children where id = ?';
        const [results, fields] = await db.promise().execute(sql, [id]);

        return results;
    },

    add: async (data) => {

        let sql = 'Insert into children (first_name, last_name, age) values (?, ?, ?)';
        const [results, fields] = await db.promise().execute(sql,
            [
                data.first_name,
                data.last_name,
                data.age
            ])

        return results;
    },

    update: async (data, id) => {

        let sql = 'Update children SET first_name = ?, last_name = ?, age = ? where id = ?';
        const [results, fields] = await db.promise().execute(sql,
            [
                data.first_name,
                data.last_name,
                data.age,
                id
            ]);

        return results;
    },

    delete: async (id) => {

        const sql = 'Delete from children where id = ?';
        const [results] = await db.promise().execute(sql, [id]);

        return results;
    }

}

module.exports = childrenService;