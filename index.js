let currentText = "";

const inputText = document.getElementById("input-text");
inputText.addEventListener("change", (e) => {
  currentText = e.target.value;
});

createListElement = () => {
  const ul = document.getElementById("current-tasks");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(currentText));
  ul.appendChild(li);
};

clearInputText = () => {
  document.getElementById("input-text").value = "";
  currentText = "";
};

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  createListElement();
  clearInputText();
});
