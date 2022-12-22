import express from 'express'
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/userController.js'
import { sendMail } from '../controller/portfolioController.js'

const route = express.Router()
route.get('/', getUsers)
route.post('/add', addUser)
route.get('/:id', getUserById)
route.put('/:id', editUser)
route.delete('/:id', deleteUser)


//this is for my portfolio work

route.post('/portfolio', sendMail)

/*route.get('/all', getUsers)
route.get('/add', addUser)
route.get('/:id', getUserById)
route.put('/:id', editUser)
route.delete('/:id', deleteUser)*/

export default route