import db from '../db'
import {Request, Response} from "express";


class UserController {
    async createUser(req:Request, res:Response) {
        try {
            const {name, surname} = req.body
            const newPerson = await db.query(`INSERT INTO person (name,surname) values ($1, $2) RETURNING *`, [name, surname])
            res.json(newPerson.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getUser(req:Request, res:Response) {
        try {
            const users = await db.query(`SELECT * FROM person`)
            res.json(users.rows)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOneUser(req:Request, res:Response) {
        try {
            const id = req.params.id
            if (!id) {
                res.status(400).json({message:"Id не найден"})
            }
            const user = await db.query(`SELECT * FROM person where id = $1`, [id])
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updateUser(req:Request, res:Response) {
        try {
            const {id, name, surname} = req.body
            const user = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id])
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deleteUser(req:Request, res:Response) {
        try {
            const id = req.params.id
            if (!id) {
                res.status(400).json({message:"Id не найден"})
            }
            const user = await db.query(`DELETE FROM person where id = $1`, [id])
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new UserController()
