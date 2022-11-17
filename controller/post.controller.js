const db = require("../db") //SQL запросы в БД

class PostController { 
    async createPost(req,res) {
            const {title, content, userId} = req.body
            const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId])
            res.json(newPost.rows[0])  
    }

    // { postman 
    //     "title": "AAAA",
    //     "content": "About me",
    //     "userId": "3"
    // }

    async getPostsByUser(req,res) { //http://localhost:8080/api/post?id=1
        const id = req.query.id //получаем из query, т е это не часть строки запроса а отдельный query параметр из вопросительного знака 
        const posts = await db.query(`select * from post where user_id = $1`, [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()
