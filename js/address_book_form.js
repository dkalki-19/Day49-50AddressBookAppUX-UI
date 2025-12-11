// Validation rules and listeners
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const phone = document.getElementById("phone");

function nameValid(v){
  return /^[A-Z][a-zA-Z ]{2,}$/.test(v.trim());
}
// address must be multiple words, each >=3 letters
function addressValid(v){
  return /^([A-Za-z]{3,})(\s+[A-Za-z]{3,})+/.test(v.trim());
}
// phone: 10 digits OR 12 digits (country code) OR + followed by 12 digits (13 with +)
function phoneValid(v){
  return /^(\+\d{12}|\d{12}|\d{10})$/.test(v.trim());
}

fullName.addEventListener("input", () => {
  document.getElementById("nameError").textContent = nameValid(fullName.value) ? "" : "Name must start with capital and be min 3 chars.";
});
address.addEventListener("input", () => {
  document.getElementById("addressError").textContent = addressValid(address.value) ? "" : "Address must have multiple words and each word min 3 chars.";
});
phone.addEventListener("input", () => {
  document.getElementById("phoneError").textContent = phoneValid(phone.value) ? "" : "Phone must be 10 digits or 12 digits (country code) or +12 digits.";
});

const form = document.getElementById("addressForm");

form.addEventListener("reset", () => {
  // Clear errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("addressError").textContent = "";
  document.getElementById("phoneError").textContent = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // perform validation before creating object
  if (!nameValid(fullName.value)) { fullName.focus(); return; }
  if (!addressValid(address.value)) { address.focus(); return; }
  if (!phoneValid(phone.value)) { phone.focus(); return; }

  // In UC6 we will create the object and save
  // For now just console.log to verify:
  console.log("Form validated. Ready to create object.");
});
