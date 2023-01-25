import express, { Application, Request, Response } from 'express'
import {routes} from './routes';
import cors from 'cors';
import { route } from './routes/users.routes';

const app = express()
const port = 3000;
app.use(cors()); // cors config

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})
app.use(routes);
app.use(route);
app.use(express.urlencoded({ extended: true }));
try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}