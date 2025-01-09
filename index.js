const onClickSearch = () => {
  const element = document.getElementById("search-component");
  const elementInput = document.getElementById("search-component__input");
  const isOpen = element.classList.contains("search-component__open");
  if (!isOpen) {
    element.classList.add("search-component__open");
    elementInput.classList.add("search-component__input--open");
  }
};

const toggleMenu = (event) => {
  event.stopPropagation();

  const menuItem = event.target.closest(".menu-item");
  const submenu = menuItem.querySelector(".sub_menu");
  const isOpen = submenu.classList.contains("open");
  if (isOpen) {
    submenu.classList.remove("open");
    menuItem.classList.remove("open");
  } else {
    submenu.classList.add("open");
    menuItem.classList.add("open");
  }
};

const toggleNavBarMB = () => {
  const element = document.getElementById("navbar-sm");
  if (element) {
    const isOpen = element.classList.contains("open");
    if (isOpen) {
      element.classList.remove("open");
    } else {
      element.classList.add("open");
    }
  }
};

const onBlurInput = () => {
  console.log("blur");
};

document.addEventListener("click", function (event) {
  const input = document.getElementById("search-component__input");
  const icon = document.getElementById("search-component__icon");
  if (!input.contains(event.target) && !icon.contains(event.target)) {
    const element = document.getElementById("search-component");
    const isOpen = element.classList.contains("search-component__open");
    console.log(isOpen);
    if (isOpen) {
      element.classList.remove("search-component__open");
      input.classList.remove("search-component__input--open");
    }
  }
});

const header = document.getElementById("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});

const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const halfScreenHeight = window.innerHeight / 2;

  if (scrollY > halfScreenHeight) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
