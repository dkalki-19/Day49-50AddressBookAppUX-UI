import AddressBook from './AddressBook.js';

// document.getElementById("cancelIcon").addEventListener("click", () => {
//   // confirm optional
//   if (confirm("Discard and go back to home?")) window.location.href = "address_book_home.html";
// });
document.getElementById("cancelBtn").addEventListener("click", () => {
    window.location.href = "address_book_home.html";
});


document.querySelector("button[type='reset']").addEventListener("click", () => {
  document.getElementById("nameError").textContent = "";
  document.getElementById("addressError").textContent = "";
  document.getElementById("phoneError").textContent = "";
});


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
  if (!nameValid(fullName.value) || !addressValid(address.value) || !phoneValid(phone.value)) return;

  const raw = {
    id: Date.now().toString(),
    name: fullName.value.trim(),
    address: address.value.trim(),
    phone: phone.value.trim(),
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value
  };

  try {
    const ab = new AddressBook(raw);   // will validate in setters
    const list = JSON.parse(localStorage.getItem("AddressBookList")) || [];
    list.push(ab.toJSON());
    localStorage.setItem("AddressBookList", JSON.stringify(list));
    window.location.href = "address_book_home.html";
  } catch (err) {
    alert("Validation error: " + err);
  }
});
