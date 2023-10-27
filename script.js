document.getElementById("dropdownMenuToggle").addEventListener("click", function () {
  var menu = document.getElementById("rightNavSect");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});