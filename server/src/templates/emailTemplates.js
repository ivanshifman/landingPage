export const getEmailTemplate = (name, email, message, lang) => {
  if (lang === "es") {
    return `
      <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
        <table style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px;">
          <tr>
            <td style="text-align: center;">
              <h2>📬 Nuevo mensaje de contacto</h2>
              <p>Has recibido un mensaje desde tu portfolio.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><strong>👤 Nombre:</strong> ${name}</p>
              <p><strong>📧 Correo:</strong> ${email}</p>
              <p><strong>💬 Mensaje:</strong></p>
              <p style="background: #f0f0f0; padding: 10px; border-radius: 5px;">${message}</p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-top: 20px;">
              <hr />
              <small>Enviado automáticamente desde tu sitio web</small>
            </td>
          </tr>
        </table>
      </body>
    `;
  } else {
    return `
      <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
        <table style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px;">
          <tr>
            <td style="text-align: center;">
              <h2>📬 New contact message</h2>
              <p>You have received a message from your portfolio.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><strong>👤 Name:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p><strong>💬 Message:</strong></p>
              <p style="background: #f0f0f0; padding: 10px; border-radius: 5px;">${message}</p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-top: 20px;">
              <hr />
              <small>Automatically sent from your website</small>
            </td>
          </tr>
        </table>
      </body>
    `;
  }
};
