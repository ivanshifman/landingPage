import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-ZÀ-ÿ\s]+$/)
    .required()
    .messages({
      "string.pattern.base": "El nombre solo puede contener letras y espacios",
      "string.empty": "El nombre es obligatorio",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "Correo electrónico inválido",
    "string.empty": "El email es obligatorio",
  }),
  message: Joi.string().required().messages({
    "string.empty": "El mensaje es obligatorio",
  }),
  lang: Joi.string().valid("es", "en").required(),
});

export const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }
  next();
};
