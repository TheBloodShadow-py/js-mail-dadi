const emailDomInput = document.getElementById("emailDomInput");
const emailDomQuery = document.getElementById("emailDomQuery");
const domResult = document.getElementById("domResult");

const adminEmails = ["fabio@gmail.com", "vincenzo@gmail.com", "gabriele@gmail.com", "eugenio@gmail.com"];

emailDomQuery.addEventListener("click", checkEmail);

function checkEmail() {
  const emailInput = emailDomInput.value;

  if (!emailInput) {
    domResult.innerHTML = "You can't do that!";
    return;
  }

  for (let i = 0; i < adminEmails.length; i++) {
    if (emailInput === adminEmails[i]) {
      domResult.innerHTML = "Welcome back admin!";
      return;
    }
    domResult.innerHTML = "You're not an admin.";
  }
  return;
}
