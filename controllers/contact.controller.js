const db = require('../db')


class ContactController {
    async createContactinfo(req, res) {
        try {
            const {email, phone, userId} = req.body
            if(!userId) {
                res.status(400).json({message:"Id не найден"})
            }
            const newPost = await db.query(`INSERT INTO contact (email, phone, user_id) values ($1, $2, $3) RETURNING *`, [email, phone, userId])
            res.json(newPost.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getContactInfoByUser(req, res) {
        try {
            const id = req.query.id
            if (!id) {
                res.status(400).json({message:"Id не найден"})
            }
            const contacts = await db.query(`select * from contact where user_id = $1`, [id])
            res.json(contacts.rows)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new ContactController()
