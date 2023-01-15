import UserModel from "../db/models/user";
import { User } from "@src/interfaces/user";

export const getUserList = async (req: any, res: any) => {
    const userList = await UserModel.findAll();

    console.log(userList);
    return res.send({message: 'FOI'})
    
}