const btnAddElement = document.getElementById("formBtn");
//   Добавляем обработчик события на кнопку
btnAddElement.addEventListener("click", addTask);

function addTask() {
  const inputElement = document.getElementById("formInput");
  const listTasks = document.getElementById("formListTask");
  const newElement = document.createElement("li");

  const taskText = inputElement.value;

  newElement.textContent = taskText;

  listTasks.append(newElement);

  inputElement.value = "";
}
addTask();
