import {z} from "zod";

export const usernameValidation = z.string()
                                    .min(3, {message: "username must be atleast 3 letters"})
                                    .max(10, {message: " username cant be longer than 10 digits"}) ;

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "invalid email"}),
    password: z.string().min(3, {message: "password must be atleast 3 characters"})
}) ;