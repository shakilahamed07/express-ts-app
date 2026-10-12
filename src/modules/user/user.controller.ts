
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import status from "http-status";
import userService from "./user.service.js";

const getUser = catchAsync(async (req, res, next) => {
    const result = await userService.getUser();

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'user fetched successfully',
        data: result
    });
});

const createUser = catchAsync(async (req, res, next) => {
    const newData = req.body;
    const result = await userService.createUser(newData);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'user fetched successfully',
        data: result
    });
});

const getSingleUser = catchAsync(async(req, res, next) =>{
    const id = await req.params.id;
    console.log(id)
    const result = await userService.getSingleUser(id)

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'user fetched successfully',
        data: result
    });
})

const userController = {
    getUser,
    createUser,
    getSingleUser
}

export default userController;