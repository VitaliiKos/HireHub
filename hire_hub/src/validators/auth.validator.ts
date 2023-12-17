import Joi from 'joi';

export const authValidator = Joi.object({
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).messages({
        'string.empty': 'Password is required',
        'string.pattern.base': 'Password must consists from 1 uppercase, 1 lowercase, 1 number, 1 non-alphanumeric. Length min 8 max 20 chs'
    }).required(),
    email: Joi.string().regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/).messages({
        'string.empty': 'Email is required',
        'string.pattern.base': 'The email should look like this: testmail@gmail.com or testmail@gmail.com.de'
    }).required(),
});

export const SinUpValidator = Joi.object({
    first_name: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.empty': '"First name": can\'t be empty',
        'string.pattern.base': 'First name must consists only letters. Length min 2 max 20 characters'
    }),
    last_name: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.empty': '"Last name": can\'t be empty',
        'string.pattern.base': 'Last name must consists only letters. Length min 2 max 20 characters'
    }),

    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).messages({
        'string.empty': 'Password is required',
        'string.pattern.base': 'Password must consists from 1 uppercase, 1 lowercase, 1 number, 1 non-alphanumeric. Length min 8 max 20 chs'
    }).required(),
    email: Joi.string().regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/).messages({
        'string.empty': 'Email is required',
        'string.pattern.base': 'The email should look like this: testmail@gmail.com or testmail@gmail.com.de'
    }).required(),
    re_password: Joi.string()
        .valid(Joi.ref('password'))
        .messages({
            'any.only': 'Confirm Password does not match',
            'any.required': 'Confirm Password is required'
        })
        .required(),
});