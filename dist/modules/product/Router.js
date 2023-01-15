import { getUserList } from '@src/controllers/user.controller';
import { Router } from 'express';
const router = Router();
router.get('/', (request, response) => {
    response.json({
        _id: 'ABC123',
        name: 'Product Name',
        price: 28.90
    });
});
router.get('/getUser', (request, response) => {
    getUserList(request, response);
    response.send({ message: 'FOI' });
});
router.post('/create', (req, res) => {
});
export default router;
//# sourceMappingURL=Router.js.map