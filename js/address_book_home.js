function loadContacts(){
  const list = JSON.parse(localStorage.getItem("AddressBookList")) || [];
  const tbody = document.getElementById("listBody");
  document.getElementById("count").textContent = `(${list.length})`;
  tbody.innerHTML = "";

  list.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${c.name}</td><td>${c.phone}</td><td>${c.address}, ${c.city} ${c.zip}</td>`;
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", loadContacts);
