
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

const userController = {
    getUser,
}

export default userController;