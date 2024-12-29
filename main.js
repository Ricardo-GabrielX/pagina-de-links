import profileData from "./profile.json";

window.onload = function () {
  const user = profileData.user;

  // Atualiza o título da página
  document.title = `Links de ${user.name}`;

  // Preenche informações do perfil
  document.querySelector(".image").src = user.avatar;
  document.querySelector(".image").alt = `Imagem de perfil de ${user.name}`;
  document.querySelector(".name").textContent = user.name;
  document.querySelector(".description").textContent = user.description;

  // Preenche os links
  user.links.forEach((link) => {
    const linkElement = document.querySelector(`.${link.class}`);
    if (linkElement) {
      // Limpa o conteúdo existente no elemento
      linkElement.innerHTML = "";
  
      const a = document.createElement("a");
      a.href = link.href;
      a.target = "_blank";
  
      // Cria o elemento de imagem para o ícone
      const img = document.createElement("img");
      img.src = link.icon; // Define o caminho do ícone
      img.alt = `${link.text} icon`; // Texto alternativo
      img.style.width = "20px"; // Ajusta o tamanho do ícone (opcional)
      img.style.marginRight = "8px"; // Espaço entre o ícone e o texto (opcional)
  
      // Adiciona o ícone e o texto ao link
      a.appendChild(img);
      a.appendChild(document.createTextNode(link.text));
  
      // Adiciona o link ao elemento correspondente
      linkElement.appendChild(a);
    }
  });
};
