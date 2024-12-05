const redBtn = document.querySelector("#red-button");
const btn1 = document.querySelector("#button1");
const title = document.querySelector(".title");

redBtn.addEventListener("click", () => {
  redBtn.remove(); //удаляем предыдущую кнопку

  title.innerText = 'Мне кажется, там было понятно написано "Не нажимать.".'; //меняем лейбл подпись над кнопкой

  let btn1 = document.createElement("button"); //создаем новую кнопку

  btn1.id = "button1"; //назначаем ей заготовленный стиль из css

  document.querySelector(".button-container").append(btn1); // помещаем в контейнер для кнопок

  btn1.addEventListener("click", () => {
    //повторяем
    btn1.remove();
    title.innerText = "Это уже хамство";

    let btn2 = document.createElement("button");

    btn2.id = "button2";

    document.querySelector(".button-container").append(btn2);

    btn2.addEventListener("click", () => {
      btn2.addEventListener("click", () => {
        btn2.addEventListener("click", () => {
          btn2.addEventListener("click", () => {
            btn2.remove();
            title.innerText = "А ты настойчивый!";

            let btn3 = document.createElement("button");

            btn3.id = "button3";

            document.querySelector(".button-container").append(btn3);

            btn3.addEventListener("click", () => {
                btn3.remove();
                title.innerText = "А если так?";
    
                let btn4 = document.createElement("button");
    
                btn4.id = "button4";
    
                document.querySelector(".button-container").append(btn4);

                btn4.addEventListener("click", () => {
                    btn4.remove();
                    title.innerText = "Раз ты такой умный, нажми зеленую кнопку.";
        
                    let btn5a = document.createElement("button");        
                    btn5a.id = "button5a";        
                    document.querySelector(".button-container").append(btn5a);

                    let btn5b = document.createElement("button");        
                    btn5b.id = "button5b";        
                    document.querySelector(".button-container").append(btn5b);

                    let btn5c = document.createElement("button");        
                    btn5c.id = "button5c";        
                    document.querySelector(".button-container").append(btn5c);

                })



            })
          });
        });
      });
    });
  });
});
