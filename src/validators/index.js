import Joi from "joi";


export const registerSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
    password: Joi.string()
})



export const loginSchema = Joi.object({
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
    password: Joi.string()
})

export const addTodoSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string()
})

