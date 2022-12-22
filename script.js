const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".header-nav");
const allLinks = document.querySelectorAll("a:link");

openMenu.addEventListener("click", function () {
  menu.style.visibility = "visible";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
  menu.style.visibility = "hidden";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    var x = window.matchMedia("(max-width: 59em)");
    if (x.matches) {
      menu.style.visibility = "hidden";
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
  });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
