const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const adicaoNum1 = document.querySelector("#adicao__num1");
const adicaoNum2 = document.querySelector("#adicao__num2");
const adicaoBtn = document.querySelector("#adicao__btn");
const outAdicao = document.querySelector("#adicao__result");

const subNum1 = document.querySelector("#sub__num1");
const subNum2 = document.querySelector("#sub__num2");
const subBtn = document.querySelector("#sub__btn");
const outSub = document.querySelector("#sub__result");

const multNum1 = document.querySelector("#mult__num1");
const multNum2 = document.querySelector("#mult__num2");
const multBtn = document.querySelector("#mult__btn");
const outMult = document.querySelector("#mult__result");

const divNum1 = document.querySelector("#div__num1");
const divNum2 = document.querySelector("#div__num2");
const divBtn = document.querySelector("#div__btn");
const outDiv = document.querySelector("#div__result");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const section4 = document.querySelector("#section--4");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");


// Ao reiniciar a página, voltar para o começo
window.addEventListener('load', function(e) {
  header.scrollIntoView({ behavior: "smooth" });
})

// Modal window
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

// Page navigation
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (
    e.target.classList.contains("nav__link") &&
    !e.target.classList.contains("btn--show-modal")
  ) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Operações básicas

const operacoesBasicas = function (num1, num2, saida, oper) {
  switch (oper) {
    case "+":
      saida.textContent = Number(num1.value) + Number(num2.value);
      break;
    case "-":
      saida.textContent = Number(num1.value) - Number(num2.value);
      break;
    case "*":
      saida.textContent = Number(num1.value) * Number(num2.value);
      break;
    case "/":
      saida.textContent = Number(num1.value) / Number(num2.value);
      break;
  }
  num1.value = num2.value = "";
  num1.focus();
};

const adicaoCalc = () =>
  operacoesBasicas(adicaoNum1, adicaoNum2, outAdicao, "+");
const subCalc = () => operacoesBasicas(subNum1, subNum2, outSub, "-");
const multCalc = () => operacoesBasicas(multNum1, multNum2, outMult, "*");
const divCalc = () => operacoesBasicas(divNum1, divNum2, outDiv, "/");

adicaoBtn.addEventListener("click", adicaoCalc);
subBtn.addEventListener("click", subCalc);
multBtn.addEventListener("click", multCalc);
divBtn.addEventListener("click", divCalc);

// Tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activate content area

  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation

const handleHover = function (e, opacity, scale, textDecoration) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    link.style.scale = scale;
    link.style.textDecoration = textDecoration;
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {

  handleHover(e, 0.5, 1.05, "underline");
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1, 1, "none");
});

// Sticky navigation

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `+${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

allSections.forEach(sec => sec.classList.add('section--hidden'))

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
