import { getMachineList, getInativeMachineList } from './controllers/product.controller';
import { createUser, getUserById } from './controllers/user.controller';
import {getUserList} from '../src/controllers/user.controller';
import { Router, request, response } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
    response.json({
        _id: 'ABC123',
        name: 'Product Name',
        price: 28.90
    });
});

routes.get('/getUser', (request, response) => {

    getUserList(request, response);
})

routes.post('/create', (req,res) => {
    createUser(req, res);    
})

routes.get('/getById:/{id}', (req: any, res)=> {
    getUserById(req.params.id, res);
}) 

routes.get('/getMachines', (req,res) => {
    getMachineList(req, res);
})
routes.get('/getinativemachines', (req,res) => {
    getInativeMachineList(req, res);
})
export { routes };