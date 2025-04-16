document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");

  if (!submitBtn) return;

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
