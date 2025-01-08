const element = document.getElementById("nav-bar__elements");
const elementDropdown = document.getElementById("dropdown-element");
element.addEventListener("mouseenter", () => {
  const item = document.getElementById("dropdown-element");
  if (item) {
    item.style.visibility = "visible";
    item.style.opacity = 100;
  }
});

element.addEventListener("mouseleave", () => {
  const item = document.getElementById("dropdown-element");
  if (item) {
    item.style.visibility = "hidden";
    item.style.opacity = 0;
  }
});

elementDropdown.addEventListener("mouseenter", () => {
  const item = document.getElementById("dropdown-element");
  if (item) {
    item.style.visibility = "visible";
    item.style.opacity = 100;
  }
});

elementDropdown.addEventListener("mouseleave", () => {
  const item = document.getElementById("dropdown-element");
  if (item) {
    item.style.visibility = "hidden";
    item.style.opacity = 0;
  }
});

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
  // Kiểm tra nếu click xảy ra bên ngoài input và container
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
