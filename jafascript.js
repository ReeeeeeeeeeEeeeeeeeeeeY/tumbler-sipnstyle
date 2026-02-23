const yesRow = document.querySelectorAll("#category li");
const categoryCol = document.querySelector("#category");

categoryCol.addEventListener("click", (e) => {
  yesRow.forEach((bob) => {
    if (bob.contains(e.target)) {
      bob.classList.add("active");
    } else {
      bob.classList.remove("active");
    }
  });
});
