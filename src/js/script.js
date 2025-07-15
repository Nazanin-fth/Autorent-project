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
// Mobile Menu Overlay
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
});

overlay.addEventListener("click", () => {
  menuToggle.checked = false;
  overlay.classList.add("hidden");
});
// Datepicker Font Setting
function setDatepickerFont() {
  setTimeout(function () {
    document
      .querySelectorAll(
        ".pwt-datepicker, .pwt-datepicker *, .datepicker-plot-area"
      )
      .forEach(function (el) {
        el.style.fontFamily =
          "estedad-regular, estedad-medium, estedad-bold, sans-serif";
        el.style.borderRadius = "12px";
      });

    //Hide switch calendar button
    document.querySelectorAll(".pwt-btn-calendar").forEach(function (el) {
      el.style.display = "none";
    });
  }, 100);
}
//my Datepicker script
$(document).ready(function () {
  $("#my-datepicker, #my-datepicker-2, #mobile-datepicker").persianDatepicker({
    format: "YYYY/MM/DD",
    initialValue: true,
    responsive: true,
    autoClose: true,
    navigator: {
      scroll: {
        enabled: false,
      },
    },
    onShow: setDatepickerFont,
  });
});
// Time Picker script
$(document).ready(function () {
  $(
    "#only-time-picker, #only-time-picker-2, #mobile-time-picker"
  ).persianDatepicker({
    format: "HH:mm",
    initialValue: true,
    responsive: true,
    autoClose: true,
    onlyTimePicker: true,
    timePicker: {
      enabled: true,
      second: {
        enabled: false,
      },
    },
    navigator: {
      scroll: {
        enabled: false,
      },
    },
    onShow: setDatepickerFont,
  });
});
// Reapply datepicker font on navigation buttons click
$(document).on("click", ".pwt-btn-next, .pwt-btn-prev", function () {
  setTimeout(setDatepickerFont, 50);
});
