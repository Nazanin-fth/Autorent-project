const toggle = document.getElementById("searchToggle");
const overlay = document.getElementById("overlay");
const searchBox = document.getElementById("searchBox");
const loginButton = document.getElementById("loginButton");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".header-logo");
//Desktop Search funcs
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
    "#only-time-picker, #only-time-picker-2, #mobile-time-picker, #mobile-time-picker-2"
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
// Reapply datepicker styles on navigation buttons click
$(document).on(
  "click",
  ".pwt-btn-next, .pwt-btn-prev, .pwt-btn-today",
  function () {
    setTimeout(setDatepickerFont, 50);
  }
);
// Swiper Initialization
var swiper = new Swiper(".myBrandSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Car styles desktop

document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".orange-bar").forEach((bar) => {
      bar.style.height = "8px";
    });
    const bar = this.parentElement.querySelector(".orange-bar");
    bar.style.height = "39px";
  });
});
// Car styles mobile
document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".orange-bar-mobile").forEach((bar) => {
      bar.style.height = "5px";
    });
    const bar = this.parentElement.querySelector(".orange-bar-mobile");
    bar.style.height = "14px";
  });
});
// Comment Section
document.querySelectorAll(".comment-item").forEach((btn, idx) => {
  // Default: the first comment is selected
  if (idx === 0) {
    btn.classList.add("comment-selected");
    btn.classList.add("!bg-[#FDB713]");
  } else {
    btn.classList.remove("!bg-[#FDB713]");
  }
  btn.addEventListener("click", function () {
    document.querySelectorAll(".comment-item").forEach((b) => {
      b.classList.remove("comment-selected");
      b.classList.remove("!bg-[#FDB713]");
    });
    // Add selected class and yellow background to the clicked comment
    this.classList.add("comment-selected");
    this.classList.add("!bg-[#FDB713]");
    // Data for main comment
    document.getElementById("main-avatar").src = this.dataset.avatar;
    document.getElementById("main-name").textContent = this.dataset.name;
    // Stars
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `<img src="${
        i <= this.dataset.stars
          ? "./public/img/icon/star.svg"
          : "./public/img/icon/empty-star.svg"
      }" class="w-6 h-6" />`;
    }
    document.getElementById("main-stars").innerHTML = stars;
    document.getElementById("main-text").textContent = this.dataset.text;
  });
});
// Newsletter email validation
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("newsletter-email");
  const errorBox = document.getElementById("email-error");
  const emailWrapper = document.getElementById("email-wrapper");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Remove previous error messages
    emailWrapper.classList.remove("border-[#FDB713]");
    emailWrapper.classList.add("border-[#868686]");

    if (email === "") {
      errorBox.innerText = "لطفاً ایمیل را وارد کنید";
      errorBox.classList.remove("hidden");
      emailWrapper.classList.add("border-[#FDB713]");
      return;
    }

    if (!emailRegex.test(email)) {
      errorBox.innerText = "ایمیل وارد شده معتبر نیست";
      errorBox.classList.remove("hidden");
      emailWrapper.classList.add("border-[#FDB713]");
      console.log("email is invalid!");
      return;
    }

    // Success case
    errorBox.innerText = "ایمیل شما با موفقیت ثبت شد";
    emailWrapper.classList.remove("border-[#FDB713]");
    console.log("ایمیل معتبر است:", email);
    form.reset();
  });
});
