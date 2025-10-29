document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      alert("El nombre solo puede contener letras y espacios.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }
    if (!email || !message) {
      alert("Completa todos los campos.");
      return;
    }

    const lang = window.language || "es";

    const confirmation = document.createElement("div");
    confirmation.className = "confirmacion";
    confirmation.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2196F3;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        font-size: 16px;
        z-index: 1000;
      `;
    confirmation.textContent =
      lang === "es" ? "📨 Enviando mensaje..." : "📨 Send message...";
    document.body.appendChild(confirmation);

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, lang }),
      });
      const result = await response.json();

      if (result.success) {
        confirmation.textContent =
          lang === "es"
            ? "✅ Mensaje enviado con éxito!"
            : "✅ Message sent successfully!";
        confirmation.style.backgroundColor = "#4CAF50";
        form.reset();
      } else {
        confirmation.textContent =
          lang === "es"
            ? "❌ Error al enviar el mensaje."
            : "❌ Error sending the message.";
        confirmation.style.backgroundColor = "#f44336";
      }
    } catch (err) {
      console.error(err);
      confirmation.textContent =
        lang === "es"
          ? "❌ Error al enviar el mensaje."
          : "❌ Error sending the message.";
      confirmation.style.backgroundColor = "#f44336";
    }

    setTimeout(() => confirmation.remove(), 3000);
    window.scrollTo(0, 0);
  });
});
