const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    document.body.classList.add("informal-mode");
  } else {
    document.body.classList.remove("informal-mode");
  }
});
