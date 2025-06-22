import {z} from "zod";

export const messageSchema = z.object({
    content: z.string()
                .min(3, {message: "message should be atleast 3 lettters long"})
                .max(300, {message: "message cant be longer than 300 letters"})
});