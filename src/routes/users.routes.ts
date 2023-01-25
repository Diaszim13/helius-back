// TODO separar as rotas aqui
import { getMachineById } from '../controllers/product.controller';
import {Router} from 'express'

const route = Router();

route.get('/getMachinePk/:id', (req,res) => {
    getMachineById(req, res);
})

export {route};