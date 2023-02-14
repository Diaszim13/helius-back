import UserModel from "../db/models/user";
import { User } from "@src/interfaces/user";

export const getUserList = async (req: any, res: any) => {
    console.error(req.body)

    const userList = await UserModel.findAll();

    console.log(userList);
    return res.send({users: userList}).status(200)
    
}

export const createUser = async (req: any,res: any) => {
    console.error(req.body)
    const user = await UserModel.create(req.body);

    if(user) {
        res.send({user}).status(200)
    }
}

export const getUserById = async (req: any, res: any) => {
    const user = await UserModel.findByPk(req.params.id);

    if(user) {
        res.send({user}).status(200)
    }
}