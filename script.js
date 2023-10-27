let dropdownIcon = document.getElementById("dropdownMenuToggleIcon");
let backdrop = document.getElementById("backdrop");
let defaultMenu = document.getElementById("rightNavSect");
let smNavBar = document.getElementById("smallScreenNavBar");

dropdownIcon.addEventListener("click", () => {
  //   if (defaultMenu.classList.contains("hidden"))
  defaultMenu.classList.add("hidden");
  backdrop.classList.remove("hidden");
  smNavBar.classList.remove("hidden")
});
