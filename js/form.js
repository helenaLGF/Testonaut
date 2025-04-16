document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");

  if (!submitBtn) return;

  const hideAlertOnInput = (selector, alertId) => {
    const el = document.querySelector(selector);
    if (el) {
      el.addEventListener("input", () => {
        document.getElementById(alertId)?.classList.add("hidden");
      });
      el.addEventListener("change", () => {
        document.getElementById(alertId)?.classList.add("hidden");
      });
    }
  };

  // Lier les événements pour masquer les alertes à la saisie
  hideAlertOnInput("#username", "usernameAlert");
  hideAlertOnInput("#email", "emailAlert");
  hideAlertOnInput("#fileUpload", "fileAlert");

  // Pour les boutons radios
  const radios = document.querySelectorAll("input[name='preference']");
  radios.forEach(r => {
    r.addEventListener("change", () => {
      document.getElementById("radioAlert")?.classList.add("hidden");
    });
  });

  submitBtn.addEventListener("click", function (event) {
    let valid = true;

    // Réinitialiser les alertes
    document.querySelectorAll(".alert").forEach(alert => alert.classList.add("hidden"));
    document.getElementById("success").classList.add("hidden");

    // Validation du nom d'utilisateur
    const username = document.getElementById("username").value.trim();
    if (!username) {
      document.getElementById("usernameAlert").classList.remove("hidden");
      valid = false;
    }

    // Validation de l'email
    const email = document.getElementById("email").value.trim();
    if (!email || !email.includes('@')) {
      document.getElementById("emailAlert").classList.remove("hidden");
      valid = false;
    }

    // Validation des options radio
    const radioButtons = document.getElementsByName("preference");
    const radioChecked = Array.from(radioButtons).some(r => r.checked);
    if (!radioChecked) {
      document.getElementById("radioAlert").classList.remove("hidden");
      valid = false;
    }

    // Validation du fichier
    const fileInput = document.getElementById("fileUpload");
    const file = fileInput.files[0];
    const fileAlert = document.getElementById("fileAlert");

    if (file) {
      const fileType = file.type;
      const fileSize = file.size / 1024 / 1024; // en Mo
      if (fileType !== "application/pdf") {
        fileAlert.textContent = "Seuls les fichiers PDF sont acceptés.";
        fileAlert.classList.remove("hidden");
        valid = false;
      } else if (fileSize > 10) {
        fileAlert.textContent = "Le fichier doit être inférieur à 10 Mo.";
        fileAlert.classList.remove("hidden");
        valid = false;
      }
    } else {
      fileAlert.textContent = "Veuillez sélectionner un fichier.";
      fileAlert.classList.remove("hidden");
      valid = false;
    }

    if (valid) {
      document.getElementById("success").classList.remove("hidden");
    } else {
      event.preventDefault(); // empêcher la soumission si erreur
    }
  });
});
