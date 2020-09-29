// conteudo aparecendo por tabs

//ao clicar na imagem, aparece o conteudo daquilo, e por default vem o primeiro conteudo

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("active");

  function activeTab(index) {
    for (section of tabContent) {
      section.classList.remove("active");
    }
    tabContent[index].classList.add("active");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => activeTab(index));
  });
}


