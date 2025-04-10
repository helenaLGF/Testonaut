document.getElementById("submitBtn").addEventListener("click", function (event) {
  let valid = true;

  // Réinitialiser les alertes
  document.querySelectorAll(".alert").forEach(alert => alert.classList.add("hidden"));

  // Validation du nom d'utilisateur
  const username = document.getElementById("username").value;
  if (!username) {
    document.getElementById("usernameAlert").classList.remove("hidden");
    valid = false;
  }

  // Validation de l'email
  const email = document.getElementById("email").value;
  if (!email || !email.includes('@')) {
    document.getElementById("emailAlert").classList.remove("hidden");
    valid = false;
  }

  // Validation des options radio
  const radioButtons = document.getElementsByName("preference");
  let radioChecked = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioChecked = true;
      break;
    }
  }
  if (!radioChecked) {
    document.getElementById("radioAlert").classList.remove("hidden");
    valid = false;
  }

  // Validation du fichier
  const fileInput = document.getElementById("fileUpload");
  const file = fileInput.files[0];
  if (file) {
    const fileType = file.type;
    const fileSize = file.size / 1024 / 1024; // Taille en Mo
    if (fileType !== "application/pdf") {
      document.getElementById("fileAlert").innerText = "Seuls les fichiers PDF sont acceptés.";
      document.getElementById("fileAlert").classList.remove("hidden");
      valid = false;
    } else if (fileSize > 10) {
      document.getElementById("fileAlert").innerText = "Le fichier doit être inférieur à 10 Mo.";
      document.getElementById("fileAlert").classList.remove("hidden");
      valid = false;
    }
  } else {
    document.getElementById("fileAlert").innerText = "Veuillez sélectionner un fichier.";
    document.getElementById("fileAlert").classList.remove("hidden");
    valid = false;
  }

  // Si tout est valide, afficher le message de succès
  if (valid) {
    document.getElementById("success").classList.remove("hidden");
  } else {
    event.preventDefault(); // Empêche l'envoi du formulaire si une validation échoue
  }
});
