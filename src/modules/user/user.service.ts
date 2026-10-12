
import httpStatus from "http-status"
import AppError from "../../middleware/AppError.js"
import type { Prisma } from "@prisma/client"
import prisma from "../../utils/prisma.js"


const createUser = async(payload: Prisma.UserCreateInput)=>{
    const newUser = await prisma.user.create({
        
        data: payload
    
    })

    if(!newUser){
        throw new AppError(httpStatus.BAD_GATEWAY, "user creation failed!")
    }

    return newUser
}

const getSingleUser = async (id:any)=>{
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        }
    })

    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "user not found")
    }

    return user;
}



const getUser = async()=>{
    const data = await prisma.user.findMany();

    if (!data){
        throw new AppError(httpStatus.NOT_FOUND, "User Data Not found")
    }
    return data
}


const userService ={
    getUser,
    createUser,
    getSingleUser
}

export default userService