const activeClass = "active";

function initTab() {
  // conteudo aparecendo por tabs
  //ao clicar na imagem, aparece o conteudo daquilo, e por default vem o primeiro conteudo

  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      for (section of tabContent) {
        section.classList.remove(activeClass);
      }
      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
}

function initScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function initAnimaAoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;

    sections[0].classList.add(activeClass);

    function animaAoScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - metadeTela;
        const isSectionVisible = sectionTop - metadeTela < 0;
        if (isSectionVisible) {
          section.classList.add(activeClass);
        }
      });
    }

    window.addEventListener("scroll", animaAoScroll);
  }
}

initTab();
initAccordion();
initScroll();
initAnimaAoScroll();
