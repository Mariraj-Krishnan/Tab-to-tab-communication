const form = document.querySelector("form");
const input = document.querySelector("input");
const listContainer = document.querySelector("ol");
input.value = "";
function renderer(values) {
  listContainer.innerHTML = "";
  values.forEach((value) => {
    const list = document.createElement("li");
    list.textContent = value;
    listContainer.append(list);
  });
}
renderer(JSON.parse(localStorage.values || "[]"));
form.onsubmit = (e) => {
  e.preventDefault();
  if (input.value == "") return;
  const values = JSON.parse(localStorage.getItem("values") || "[]");
  values.push(input.value);
  input.value = "";
  renderer(values);
  localStorage.setItem("values", JSON.stringify(values));
};
window.onstorage = ({ key }) => {
  if (key == "values") renderer(JSON.parse(localStorage.values));
};
