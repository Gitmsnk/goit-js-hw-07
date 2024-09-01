const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function () {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
