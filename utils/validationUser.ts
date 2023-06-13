import Joi from "joi";

const USERNAME_REGEX = /^(?=.{4,32}$)[a-zA-Z0-9._@]+$/;
const PASSWORD_REGEX = /^[A-Za-z\d@$!%*#?&]{6,}$/;

const userSchema = Joi.object({
    username: Joi.string().required().pattern(USERNAME_REGEX),
    password: Joi.string().required().pattern(PASSWORD_REGEX),
});

export default userSchema;