const db = require("../db") //SQL запросы в БД

class UserController { //создаем класс и описываем методы что умеет делать приложение
    async createUser(req,res) {
            const {name, surname} = req.body
            //console.log(name, surname)
            //res.json("ok")
            const newPerson = await db.query(`INSERT INTO PERSON (name, surname) values ($1, $2) RETURNING *`, [name,surname])
            res.json(newPerson.rows[0]) //массив в котором будет всегда 1 элемент возращаем именно его 
    }
    async getUsers(req,res) {
        const users = await db.query("SELECT * FROM person")
        res.json(users.rows)
    }
    async getOneUser(req,res) {
        const id = req.params.id
        const users = await db.query(`SELECT * FROM person where id=$1`, [id])
        res.json(users.rows)
    }
    async updateUser(req,res) {
        const {id, name, surname} = req.body
        const user = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id])
        res.json(user.rows[0])
    }
    async deleteUser(req,res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM person where id=$1`, [id])
        res.json(user.rows[0])
    }
}


module.exports = new UserController()