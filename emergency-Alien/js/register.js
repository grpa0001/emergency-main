const form = document.querySelector("#webform");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const tlfOutput = document.querySelector("#tlf_output");
const incidentDateOutput = document.querySelector("#incident_date_Output");
const vegetablesOutput = document.querySelector("#vegetables_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const incident_date = formData.get("incident_date");
  const vegetables = formData.getAll("vegetables");

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  tlfOutput.textContent = phone;
  incidentDateOutput.textContent = incident_date;

  //
  vegetablesOutput.textContent = vegetables.length
    ? vegetables.join(", ")
    : "—";

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
