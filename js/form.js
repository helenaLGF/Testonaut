document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const fileUpload = document.getElementById("fileUpload");
  const radios = document.querySelectorAll("input[name='preference']");
  const checkboxes = document.querySelectorAll("input[name='checkbox']");

  const usernameAlert = document.getElementById("usernameAlert");
  const emailAlert = document.getElementById("emailAlert");
  const radioAlert = document.getElementById("radioAlert");
  const checkboxAlert = document.getElementById("checkboxAlert");
  const fileAlert = document.getElementById("fileAlert");
  const successMessage = document.getElementById("success");

  function hideAlertOnInteraction(element, alertElement) {
    if (!element || !alertElement) return;
    element.addEventListener("input", () => alertElement.classList.add("hidden"));
    element.addEventListener("change", () => alertElement.classList.add("hidden"));
  }

  hideAlertOnInteraction(username, usernameAlert);
  hideAlertOnInteraction(email, emailAlert);
  hideAlertOnInteraction(fileUpload, fileAlert);

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      radioAlert.classList.add("hidden");
    });
  });

  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      checkboxAlert.classList.add("hidden");
    });
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let valid = true;
    successMessage.classList.add("hidden");

    // Username
    if (!username.value.trim()) {
      usernameAlert.classList.remove("hidden");
      valid = false;
    }

    // Email
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      emailAlert.classList.remove("hidden");
      valid = false;
    }

    // Radio
    if (![...radios].some(r => r.checked)) {
      radioAlert.classList.remove("hidden");
      valid = false;
    }

    // Checkbox
    if (![...checkboxes].some(c => c.checked)) {
      checkboxAlert.classList.remove("hidden");
      valid = false;
    }

    // Fichier
    const file = fileUpload.files[0];
    if (!file || file.type !== "application/pdf" || file.size > 10 * 1024 * 1024) {
      fileAlert.classList.remove("hidden");
      valid = false;
    }

    if (valid) {
      successMessage.classList.remove("hidden");
    }
  });
});
