const toggle = document.getElementById("searchToggle");
const overlay = document.getElementById("overlay");
const searchBox = document.getElementById("searchBox");
const loginButton = document.getElementById("loginButton");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".header-logo");

function openSearch() {
  document.body.classList.add("search-open");
  overlay.classList.remove("hidden");
  searchBox.classList.remove("hidden");
  searchBox.classList.add("flex");

  loginButton?.classList.add("hidden");
  logo?.classList.add("ml-auto");
}

function closeSearch() {
  document.body.classList.remove("search-open");
  overlay.classList.add("hidden");
  searchBox.classList.add("hidden");
  searchBox.classList.remove("flex");

  loginButton?.classList.remove("hidden");
  logo?.classList.remove("ml-auto");
}

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  const isHidden = searchBox.classList.contains("hidden");
  if (isHidden) {
    openSearch();
  } else {
    closeSearch();
  }
});

overlay.addEventListener("click", () => {
  closeSearch();
});
