import { UserService } from "../services/user-service";

const userService = new UserService();

export const signUp = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        const loggedInUser =await userService.loginUser({
            email: user.email,
            password: req.body.password,
        });
        return res.status(200).json({
            message: 'Success!',
             data:loggedInUser
        });
    }
    catch (error) {
        console.error(error);
       throw new Error("Error creating user!");
    }
}