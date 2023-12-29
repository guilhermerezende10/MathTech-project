const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

const potNum = document.querySelector("#pot__num");
const potBtn = document.querySelector("#pot__btn");
const outPot = document.querySelector("#pot__result");

const radNum = document.querySelector("#rad__num");
const radBtn = document.querySelector("#rad__btn");
const outRad = document.querySelector("#rad__result");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const section4 = document.querySelector("#section--4");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const tabsPotRad = document.querySelectorAll(".pot--rad__tab");
const tabsContainerPotRad = document.querySelector(".pot--rad-container");
const tabsContentPotRad = document.querySelectorAll(".pot--rad__content");

const logoLink = document.querySelector(".nav__logo");

// logo link to header
logoLink.addEventListener("click", function (e) {
  if (header) {
    header.scrollIntoView({ behavior: "smooth" });
  }
});

// Ao reiniciar a página, voltar para o começo
window.addEventListener("load", function (e) {
  header.scrollIntoView({ behavior: "smooth" });
});

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
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

// Info button hover

const active = document.querySelector('.pot--rad__content--active')
const data = active.querySelector('.pot--rad__data')
const explicacao = document.querySelector('.infoExplicacao')
const number = data.querySelector('input')
const result = data.querySelector('pre')


const infoButtonContent = function() {
  const nums = explicacao.querySelectorAll('#num')
  nums.forEach(num => num.textContent = number.value)
  const res = explicacao.querySelector('#infoResult')
  console.log(res, result)
  res.textContent = result.textContent


  const infoIcon = document.querySelector('.info-icon')

  infoIcon.addEventListener('mouseenter', function(e) {
    explicacao.style.display = 'flex'
  
})

  infoIcon.addEventListener('mouseleave', function(e) {
    explicacao.style.display = 'none'
  
})


}

const infoButtonHoverCreate = function(num, oper) {
  explicacao.insertAdjacentHTML( 'beforebegin','<svg xmlns="http://www.w3.org/2000/svg" class="info-icon" height="16" width="16" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119.1 8 256c0 137 111 248 248 248s248-111 248-248C504 119.1 393 8 256 8zm0 110c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm56 254c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h12v-64h-12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v100h12c6.6 0 12 5.4 12 12v24z"/></svg>')

  infoButtonContent()
}

// Potenciação e Radiciação

const potenciacaoRadiciacao = function (num, saida, oper) {
  saida.textContent = oper === "**" ? num.value * num.value : Math.sqrt(num.value);
  infoButtonHoverCreate(num, oper)
  // num.value = "";
  // num.focus();
};

const potenciacaoCalc = () => potenciacaoRadiciacao(potNum, outPot, '**')
const radiciacaoCalc = () => potenciacaoRadiciacao(radNum, outRad, '//')

potBtn.addEventListener('click', potenciacaoCalc)
radBtn.addEventListener('click', radiciacaoCalc)

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

// Tabbed component Radiciação e Potenciação

tabsContainerPotRad.addEventListener("click", function (e) {
  const clicked = e.target.closest(".pot--rad__tab");
  if (!clicked) return;

  tabsPotRad.forEach((t) => t.classList.remove("pot--rad__tab--active"));
  clicked.classList.add("pot--rad__tab--active");

  // Activate content area

  tabsContentPotRad.forEach((t) =>
    t.classList.remove("pot--rad__content--active")
  );
  document
    .querySelector(`.pot--rad__content--${clicked.dataset.tab}`)
    .classList.add("pot--rad__content--active");
});

// Menu fade animation

const handleHover = function (e, opacity, scale, textDecoration) {
  if (
    e.target.classList.contains("nav__link") &&
    !e.target.classList.contains("btn--show-modal")
  ) {
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
const allSections = document.querySelectorAll(".section");

allSections.forEach((sec) => sec.classList.add("section--hidden"));

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
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

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]"); // Selecting all images that has the attribute data-src

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function (e) {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});
imgTargets.forEach((img) => imgObserver.observe(img));
