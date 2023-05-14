const db = require('../db')


class ContactController {
    async createContactinfo(req, res) {
        const {email, phone, userId} = req.body
        const newPost = await db.query(`INSERT INTO contact (email, phone, user_id) values ($1, $2, $3) RETURNING *`, [email, phone, userId])
        res.json(newPost.rows[0])
    }

    async getContactInfoByUser(req, res) {
        const id = req.query.id
        const contacts = await db.query(`select * from contact where user_id = $1`, [id])
        res.json(contacts.rows)
    }
}

module.exports = new ContactController()
