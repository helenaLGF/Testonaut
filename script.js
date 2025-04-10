document.getElementById("resetPasswordBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  if (email) {
    alert("Un lien de réinitialisation a été envoyé à : " + email);
  } else {
    alert("Veuillez entrer un email pour réinitialiser.");
  }
});

function submitForm() {
  let valid = true;

  // Validation du champ username
  const username = document.getElementById("username").value;
  if (!username) {
    document.getElementById("usernameAlert").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("usernameAlert").classList.add("hidden");
  }

  // Validation de l'email
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/;
  if (!email || !emailPattern.test(email)) {
    document.getElementById("emailAlert").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("emailAlert").classList.add("hidden");
  }

  // Validation du rôle
  const role = document.getElementById("role").value;
  if (!role) {
    document.getElementById("roleAlert").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("roleAlert").classList.add("hidden");
  }

  // Validation de l'upload (limite PDF)
  const fileUpload = document.getElementById("fileUpload").files[0];
  if (fileUpload) {
    const fileType = fileUpload.type;
    if (fileType !== "application/pdf") {
      document.getElementById("fileAlert").classList.remove("hidden");
      valid = false;
    } else {
      document.getElementById("fileAlert").classList.add("hidden");
    }
  }

  // Validation des radios
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById("genderAlert").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("genderAlert").classList.add("hidden");
  }

  // Affichage du message de succès
  if (valid) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("success").style.display = "none";
  }
}
