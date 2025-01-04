import profileData from "./profile.json";

window.onload = function () {
  const user = profileData.user;

  document.title = `Links de ${user.name}`;

  // Preenche informações do perfil
  document.querySelector(".image").src = user.avatar;
  document.querySelector(".image").alt = `Imagem de perfil de ${user.name}`;
  document.querySelector(".name").textContent = user.name;
  document.querySelector(".description").textContent = user.description;


  user.links.forEach((link) => {
    const linkElement = document.querySelector(`.${link.class}`);
    if (linkElement) {
      linkElement.innerHTML = "";
  
      const a = document.createElement("a");
      a.href = link.href;
      a.target = "_blank";
  
      const img = document.createElement("img");
      img.src = link.icon;
      img.alt = `${link.text} icon`;
      img.style.width = "20px";
      img.style.marginRight = "8px";

      a.appendChild(img);
      a.appendChild(document.createTextNode(link.text));
  
      linkElement.appendChild(a);
    }
  });
};
