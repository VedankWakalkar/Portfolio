import { z} from 'zod';
import dynamicIconImports from "lucide-react/dynamicIconImports";

export const ContactFormSchema = z.object({
    name:z
    .string()
    .min(2,{message:"Name is required"}),
    email:z
    .string()
    .min(1,{message:"Email is requires"})
    .email('Invalid email'),
    message:z.string().min(1,{message:"Message is required"})
}) 

const iconsLinks= z.object({
    name:z.string(),
    href:z.string(),
    icons: z.custom<keyof typeof dynamicIconImports>()
})


export const socialSchema = z.object({ socials: z.array(iconsLinks) });