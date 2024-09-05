function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const boxesContainer = document.getElementById("boxes");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");

  createButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ""; // Input alanını temizler
    }
  });

  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // Önceki kutuları temizler
    const boxesFragment = document.createDocumentFragment();
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("div_class");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = "10px";
      boxesFragment.appendChild(box);
      boxSize += 10; // Her bir sonraki kutunun boyutunu 10px artır
    }

    boxesContainer.appendChild(boxesFragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ""; // Mevcut tüm kutuları temizler
  }
});
