document.addEventListener("DOMContentLoaded", () => {
  let utilisateursData = [];
  let triAsc = { id: true, nom: true, email: true };

  async function fetchUtilisateurs() {
    try {
      const response = await fetch('https://2f0969ab-666b-47d3-bc80-f2471b857bda-00-1usr6dq06aoec.janeway.replit.dev/api/utilisateurs');
      const data = await response.json();
      utilisateursData = data;
      afficherTableau(utilisateursData);
    } catch (error) {
      console.error('Erreur API', error);
    }
  }

  function afficherTableau(data) {
    const utilisateursDiv = document.getElementById('utilisateurs');
    if (!utilisateursDiv) return;

    let tableHTML = `
      <table>
        <thead>
          <tr>
            <th onclick="trierPar('id')">ID 🔁</th>
            <th onclick="trierPar('nom')">Nom 🔁</th>
            <th onclick="trierPar('email')">Email 🔁</th>
            <th onclick="trierPar('job')">Email 🔁</th>

          </tr>
        </thead>
        <tbody>
    `;

    data.forEach(utilisateur => {
      tableHTML += `
        <tr>
          <td>${utilisateur.id}</td>
          <td>${utilisateur.nom}</td>
          <td>${utilisateur.email}</td>
          <td>${utilisateur.job}</td>

        </tr>
      `;
    });

    tableHTML += '</tbody></table>';
    utilisateursDiv.innerHTML = tableHTML;
  }

  window.trierPar = function (champ) {
    const ordre = triAsc[champ] ? 1 : -1;
    utilisateursData.sort((a, b) => {
      if (a[champ] < b[champ]) return -1 * ordre;
      if (a[champ] > b[champ]) return 1 * ordre;
      return 0;
    });
    triAsc[champ] = !triAsc[champ];
    afficherTableau(utilisateursData);
  };

  window.filtrerUtilisateurs = function () {
    const recherche = document.getElementById('rechercheNom').value.toLowerCase();
    const filtres = utilisateursData.filter(u => u.nom.toLowerCase().includes(recherche));
    afficherTableau(filtres);
  };

  fetchUtilisateurs();
});


//console.log("JS chargé !");
//
//// Vérifie si on est sur la page api.html ou index.html
//if (window.location.pathname.includes("api.html")) {
//    // Code pour la recherche dans le tableau et autres fonctionnalités liées à l'API
//    let utilisateursData = []; // Stocke les données d'origine
//    let triAsc = { id: true, nom: true, email: true }; // Ordre du tri
//
//    async function fetchUtilisateurs() {
//        try {
//            const response = await fetch('https://2f0969ab-666b-47d3-bc80-f2471b857bda-00-1usr6dq06aoec.janeway.replit.dev/api/utilisateurs');
//            const data = await response.json();
//            utilisateursData = data;
//            afficherTableau(utilisateursData);
//        } catch (error) {
//            console.error('Erreur API', error);
//        }
//    }
//
//    function afficherTableau(data) {
//        const utilisateursDiv = document.getElementById('utilisateurs');
//        let tableHTML = `
//            <table>
//                <thead>
//                    <tr>
//                        <th onclick="trierPar('id')">ID 🔁</th>
//                        <th onclick="trierPar('nom')">Nom 🔁</th>
//                        <th onclick="trierPar('email')">Email 🔁</th>
//                    </tr>
//                </thead>
//                <tbody>
//        `;
//        data.forEach(utilisateur => {
//            tableHTML += `
//                <tr>
//                    <td>${utilisateur.id}</td>
//                    <td>${utilisateur.nom}</td>
//                    <td>${utilisateur.email}</td>
//                </tr>
//            `;
//        });
//
//        tableHTML += `</tbody></table>`;
//        utilisateursDiv.innerHTML = tableHTML;
//    }
//
//    function filtrerUtilisateurs() {
//        const recherche = document.getElementById('rechercheNom').value.toLowerCase();
//        const filtres = utilisateursData.filter(u => u.nom.toLowerCase().includes(recherche));
//        afficherTableau(filtres);
//    }
//
//    function trierPar(champ) {
//        const ordre = triAsc[champ] ? 1 : -1;
//        utilisateursData.sort((a, b) => {
//            if (a[champ] < b[champ]) return -1 * ordre;
//            if (a[champ] > b[champ]) return 1 * ordre;
//            return 0;
//        });
//        triAsc[champ] = !triAsc[champ];
//        afficherTableau(utilisateursData);
//    }
//
//    fetchUtilisateurs();
//
//    document.addEventListener("DOMContentLoaded", function () {
//
//} else {
//    // Code pour la validation du formulaire
//    document.getElementById("submitBtn").addEventListener("click", function (event) {
//        let valid = true;
//
//        // Réinitialiser les alertes
//        document.querySelectorAll(".alert").forEach(alert => alert.classList.add("hidden"));
//
//        // Validation du nom d'utilisateur
//        const username = document.getElementById("username").value;
//        if (!username) {
//            document.getElementById("usernameAlert").classList.remove("hidden");
//            valid = false;
//        }
//
//        // Validation de l'email
//        const email = document.getElementById("email").value;
//        if (!email || !email.includes('@')) {
//            document.getElementById("emailAlert").classList.remove("hidden");
//            valid = false;
//        }
//
//        // Validation des options radio
//        const radioButtons = document.getElementsByName("preference");
//        let radioChecked = false;
//        for (let i = 0; i < radioButtons.length; i++) {
//            if (radioButtons[i].checked) {
//                radioChecked = true;
//                break;
//            }
//        }
//        if (!radioChecked) {
//            document.getElementById("radioAlert").classList.remove("hidden");
//            valid = false;
//        }
//
//        // Validation du fichier
//        const fileInput = document.getElementById("fileUpload");
//        const file = fileInput.files[0];
//        if (file) {
//            const fileType = file.type;
//            const fileSize = file.size / 1024 / 1024; // Taille en Mo
//            if (fileType !== "application/pdf") {
//                document.getElementById("fileAlert").innerText = "Seuls les fichiers PDF sont acceptés.";
//                document.getElementById("fileAlert").classList.remove("hidden");
//                valid = false;
//            } else if (fileSize > 10) {
//                document.getElementById("fileAlert").innerText = "Le fichier doit être inférieur à 10 Mo.";
//                document.getElementById("fileAlert").classList.remove("hidden");
//                valid = false;
//            }
//        } else {
//            document.getElementById("fileAlert").innerText = "Veuillez sélectionner un fichier.";
//            document.getElementById("fileAlert").classList.remove("hidden");
//            valid = false;
//        }
//
//        // Si tout est valide, afficher le message de succès
//        if (valid) {
//            document.getElementById("success").classList.remove("hidden");
//        } else {
//            event.preventDefault(); // Empêche l'envoi du formulaire si une validation échoue
//        }
//    });
//}
