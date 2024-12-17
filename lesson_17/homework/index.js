const gallery = document.querySelector(".character-gallery");


fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(data => {data.results.map(character => {
    const characterItem = document.createElement("div");
    characterItem.className = "character-item";

      // Изображение
      const img = document.createElement("img");
      img.id = "avatar";
      img.src = character.image;
      img.alt = character.name;
      characterItem.appendChild(img);

      // Имя персонажа
      const nameCharacter = document.createElement("h3");
      nameCharacter.id = "name";
      nameCharacter.textContent = `Name: ${character.name}`;
      characterItem.appendChild(nameCharacter);

      // Статус персонажа
      const statusCharacter = document.createElement("h3");
      statusCharacter.id = "status";
      statusCharacter.textContent = `Status: ${character.status}`;
      characterItem.appendChild(statusCharacter);

      // Место происхождения
      const originNameCharacter = document.createElement("h3");
      originNameCharacter.id = "originName";
      originNameCharacter.textContent = `Origin: ${character.originName}`;
      characterItem.appendChild(originNameCharacter);

      gallery.appendChild(characterItem);
  })});
    
    
