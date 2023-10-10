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

  if (adminEmails.includes(emailInput)) {
    domResult.innerHTML = "Welcome back admin!";
  } else {
    domResult.innerHTML = "You're not an admin.";
  }
  return;
}
