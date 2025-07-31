// Rent.html Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const toggle2 = document.getElementById("searchToggle2");
  const overlay2 = document.getElementById("overlay2");
  const searchBox2 = document.getElementById("searchBox2");
  const loginButton2 = document.getElementById("loginButton2");
  const logo2 = document.querySelector(".header-logo");

  function openSearch2() {
    document.body.classList.add("search-open");
    overlay2.classList.remove("hidden");
    searchBox2.classList.remove("hidden");
    searchBox2.classList.add("flex");
    loginButton2?.classList.add("hidden");
    logo2?.classList.add("ml-auto");
  }

  function closeSearch2() {
    document.body.classList.remove("search-open");
    overlay2.classList.add("hidden");
    searchBox2.classList.add("hidden");
    searchBox2.classList.remove("flex");
    loginButton2?.classList.remove("hidden");
    logo2?.classList.remove("ml-auto");
  }

  toggle2.addEventListener("click", (e) => {
    e.preventDefault();
    const isHidden = searchBox2.classList.contains("hidden");
    isHidden ? openSearch2() : closeSearch2();
  });

  overlay2.addEventListener("click", () => {
    closeSearch2();
  });
});

// Mobile Menu Overlay
const menuToggle = document.getElementById("menu-toggle");
if (menuToggle && overlay2) {
  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      overlay2.classList.remove("hidden");
    } else {
      overlay2.classList.add("hidden");
    }
  });

  overlay2.addEventListener("click", () => {
    menuToggle.checked = false;
    overlay2.classList.add("hidden");
  });
}

// Range slider functionality

const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const priceMin = document.getElementById("price-min");
const priceMax = document.getElementById("price-max");
const rangeTrack = document.getElementById("range-track");

function formatToman(value) {
  return parseInt(value).toLocaleString("fa-IR") + " تومان";
}

function updateSlider() {
  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

  priceMin.innerText = formatToman(minVal);
  priceMax.innerText = formatToman(maxVal);

  const percent1 = ((minVal - 6000000) / (60000000 - 6000000)) * 100;
  const percent2 = ((maxVal - 6000000) / (60000000 - 6000000)) * 100;

  rangeTrack.style.right = percent1 + "%";
  rangeTrack.style.width = percent2 - percent1 + "%";
}

rangeMin.addEventListener("input", updateSlider);
rangeMax.addEventListener("input", updateSlider);

updateSlider();

// Range slider functionality for second range

const rangeMin2 = document.getElementById("rangeMin2");
const rangeMax2 = document.getElementById("rangeMax2");
const priceMin2 = document.getElementById("price-min-2");
const priceMax2 = document.getElementById("price-max-2");
const rangeTrack2 = document.getElementById("range-track-2");

function formatToman(value) {
  return parseInt(value).toLocaleString("fa-IR") + " تومان";
}

function updateSlider2() {
  let minVal2 = parseInt(rangeMin2.value);
  let maxVal2 = parseInt(rangeMax2.value);

  if (minVal2 > maxVal2) [minVal2, maxVal2] = [maxVal2, minVal2];

  priceMin2.innerText = formatToman(minVal2);
  priceMax2.innerText = formatToman(maxVal2);

  const percent1 = ((minVal2 - 6000000) / (60000000 - 6000000)) * 100;
  const percent2 = ((maxVal2 - 6000000) / (60000000 - 6000000)) * 100;

  rangeTrack2.style.right = percent1 + "%";
  rangeTrack2.style.width = percent2 - percent1 + "%";
}

rangeMin2.addEventListener("input", updateSlider2);
rangeMax2.addEventListener("input", updateSlider2);

updateSlider2();

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
