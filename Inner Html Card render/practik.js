let magicItems = [
  {
    "name": "Адамантова зброя (Adamantine armor)",
    "source": "Dungeon master's guide",
    "quality": "Незвичайний",
    "description": "<p>Це зброя посилена адамантомдддддд   дмжвжвмць  добро переможе зло ( хай так буде ) моя любов завжди буде до тебе ддддддддддддсссссссссссссссссссссссссссссссссссссссссссссссссссссььмдьмждьмвьз в  звлзщл взлзслз лзилз",
    "type": "Зброя (Середній або важкий, але не з важкого металу ",
    "id": "7e1de9611a921ee5687d76f785c7785c77558d15c",
  },
  {
    "name": "Алхімічний посуд  (Alchimy Jug)",
    "source": "Dungeon master's guide",
    "quality": "Незвичайний",
    "description": "<p>Це керамічний кавун, але здається як справжній       дмжвжвмць  добро переможе зло ( хай так буде ) моя любов завжди буде до тебе ддддддддддддсссссссссссссссссссссссссссссссссссссссссссссссссссссььмдьмждьмвьз в  звлзщл взлзслз лзилз",
    "type": "Чудова зброя  ",
    "id": "9nkshoh5o3h5l3booo3n5pnpn",
  },
  {
    "name": "Амулет здоров'я  (Amulet of health )",
    "source": "Dungeon master's guide",
    "quality": "Незвичайний",
    "description": "<p>Це зброя посилена адамантомдддддд   дмжвжвмць  добро переможе зло ( хай так буде ) моя любов завжди буде до тебе ддддддддддддсссссссссссссссссссссссссссссссссссссссссссссссссссссььмдьмждьмвьз в  звлзщл взлзслз лзилз",
    "type": "Зброя (Середній або важкий, ",
    "id": "k1jk1k2b31314d76f785c7785c77558d15c",
  },
  {
    "name": "Амулет планів (Amulet of planes)",
    "source": "Dungeon master's guide",
    "quality": "Дуже рідкіснмй",
    "description": "<p>Поки що ви носите цей амулет,    дмжвжвмць  добро переможе зло ( хай так буде ) моя любов завжди буде до тебе ддддддддддддсссссссссссссссссссссссссссссссссссссссссссссссссссссььмдьмждьмвьз в  звлзщл взлзслз лзилз",
    "type": "Зброя чудова важкий ",
    "id": "23nn,bkvbicuhiqbh34u35b785c7785c77558d15c",
  },
  {
    "name": "Чарівна палочка (Wand of fear )",
    "source": "Dungeon master's guide",
    "quality": "Дуже рідкіснмй",
    "description": "<p>Поки що ви носите цей амулет,    дмжвжвмць  добро переможе зло ( хай так буде ) моя любов завжди буде до тебе ддддддддддддсссссссссссссссссссссссссссссссссссссссссссссссссссссььмдьмждьмвьз в  звлзщл взлзслз лзилз",
    "type": " Чарівна палочка",
    "id": "1poipoi5oj3oi004u35b785c7785c77558d15c",
  },
  {
    "name": "Чарівна палочка чудес (Wand of wondder",
    "source": "Dungeon master's guide",
    "quality": "Дуже рідкіснмй",
    "description": "<p>Поки що ви носите цей амулет,    дмжвжвмць  добро переможе зло ( хай так буде ) моя любов завжди буде до тебе ддддддддддддсссссссссссссссссссссссссссссссссссссссссссссссссссссььмдьмждьмвьз в  звлзщл взлзслз лзилз",
    "type": "Зброя (любий меч) ",
    "id": "i092ok43lnl242233cedcwefegtc77558d15c",
  },
];

const innerDiv = document.querySelector(".item-container");
const search = document.getElementById("search")

function renderMargicitems(magicItems) {
  innerDiv.innerHTML = "";


magicItems.forEach(item => {
  const div = document.createElement("div");
  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("div");
  const type  = document.createElement("p");
  const quality = document.createElement("p");

  div.classList.add("card");
  divRight.classList.add("card-right");

  title.innerText = item.name;
  description.innerHTML = item.description;
  type.innerHTML = `<b>Type:</b> <br /> ${item.type}`;
  quality.innerHTML = `<b>Quality:</b> <br /> ${item.quality}`;

  divRight.append(type);
  divRight.append(quality);

  divLeft.append(title); 
  divLeft.append(description); 

  div.append(divLeft);
  div.append(divRight);
 
  innerDiv.append(div);
})
}
search.addEventListener("input", () => {
  const searchValue = search.value;

  const filterMagicItems = magicItems
  .filter(item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
      

   renderMargicitems(filterMagicItems);
});

renderMargicitems(magicItems);
