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
    response.send({message: 'FOI'})
})

routes.post('/create', (req,res) => {
    
    
})

export { routes };