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

const experience= z.object({
    name :z.string(),
    href: z.string(),
    title:z.string(),
    logo:z.string(),
    start:z.string(),
    end:z.string(),
    description:z.array(z.string().optional()),
    links:z.array(iconsLinks).optional()
})

const project=z.object({
    name :z.string(),
    description:z.string(),
    href:z.string().url().optional(),
    image:z.string().optional(),
    tags:z.array(z.string()),
    links:z.array(iconsLinks).optional()
})
export type Experience = z.infer<typeof experience>;

export const projectSchema=z.object({projects: z.array(project)})
export const careerSchema = z.object({ career: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
export const socialSchema = z.object({ socials: z.array(iconsLinks) });