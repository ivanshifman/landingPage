import nodemailer from "nodemailer";
import { getEmailTemplate } from "../templates/emailTemplates.js";

export const sendContactEmail = async (req, res) => {
  const { name, email, message, lang } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAILER_USERNAME,
      subject:
        lang === "es" ? "Nuevo mensaje de contacto" : "New contact message",
      html: getEmailTemplate(name, email, message, lang),
    });

    return res.json({ success: true, message: "Correo enviado" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error al enviar el correo" });
  }
};
