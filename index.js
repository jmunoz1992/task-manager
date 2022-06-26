let currentText = "";
let isUrgentCheckboxChecked = false;
let isImportantCheckboxChecked = false;

const urgentAndImportantTasks = [];
const onlyUrgentTasks = [];
const onlyImportantTasks = [];
const notUrgentAndImportantTasks = [];

updateLists = (currentText) => {
  if (isUrgentCheckboxChecked && isImportantCheckboxChecked) {
    urgentAndImportantTasks.push(currentText);
  } else if (isUrgentCheckboxChecked) {
    onlyUrgentTasks.push(currentText);
  } else if (isImportantCheckboxChecked) {
    onlyImportantTasks.push(currentText);
  } else {
    notUrgentAndImportantTasks.push(currentText);
  }
}

createListElementFromList = (priorityList, priorityStr) => {
  priorityList.forEach((task => {
    const ul = document.getElementById("current-tasks");
    const li = document.createElement("li");
    let listElementText = task + priorityStr;
    li.appendChild(document.createTextNode(listElementText));
    ul.appendChild(li);
  }));
}

createList = () => {
  updateLists(currentText);

  document.getElementById("current-tasks").innerHTML = ''

  createListElementFromList(urgentAndImportantTasks, "  [URGENT]  " + "[IMPORTANT]");
  createListElementFromList(onlyUrgentTasks, "  [URGENT]  ");
  createListElementFromList(onlyImportantTasks, "  [IMPORTANT]");
  createListElementFromList(notUrgentAndImportantTasks, "");
};

clearInputText = () => {
  document.getElementById("input-text").value = "";
  currentText = "";
};

const inputText = document.getElementById("input-text");
inputText.addEventListener("change", (e) => {
  currentText = e.target.value;
});

const urgentCheckbox = document.getElementById("urgent-check");
urgentCheckbox.addEventListener('change', (e) => {
    isUrgentCheckboxChecked = e.target.checked ? true : false;
});

const importantCheckbox = document.getElementById("important-check");
importantCheckbox.addEventListener('change', (e) => {
  isImportantCheckboxChecked = e.target.checked ? true : false;
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  createList();
  clearInputText();
});
