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
    title.innerText = "Это уже хамство!";

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

                const buttons = [btn5a, btn5b, btn5c];

                buttons.forEach((btn) => {
                  // делаем цикл, чтобы не прописывать для 3 кнопок одно и тоже
                  btn.addEventListener("click", () => {
                    btn5a.remove();
                    btn5b.remove();
                    btn5c.remove();
                    title.innerText =
                      "Эээээ... а ну попробуй выбрать треугольную кнопку.";

                    let btn6a = document.createElement("button");
                    btn6a.id = "button6a";
                    document.querySelector(".button-container").append(btn6a);

                    let btn6b = document.createElement("button");
                    btn6b.id = "button6b";
                    document.querySelector(".button-container").append(btn6b);

                    let btn6c = document.createElement("button");
                    btn6c.id = "button6c";
                    document.querySelector(".button-container").append(btn6c);

                    const buttons = [btn6a, btn6b, btn6c];

                    buttons.forEach((btn) => {
                      btn.addEventListener("click", () => {
                        btn6a.remove();
                        btn6b.remove();
                        btn6c.remove();
                        title.innerText =
                          "Молодец, все верно! Осталось последнее испытание.";

                        let btn7 = document.createElement("button");

                        btn7.id = "button7";

                        document
                          .querySelector(".button-container")
                          .append(btn7);

                        btn7.addEventListener("click", () => {
                          btn7.remove();
                          title.innerText =
                            "Итак, финал. Какой кнопки не было?";
                          // запускаем цикл ведущий на фейсспалм все варианты кроме одного
                          const buttonContainer =
                            document.querySelector(".button-container");
                          const buttonIds = [
                            "button8a",
                            "button8b",
                            "button8c",
                            "button8d",
                            "button8e",
                            "button8f",
                          ];

                          buttonIds.forEach((id) => {
                            let button = document.createElement("button");
                            button.id = id;
                            buttonContainer.append(button);
                            button.addEventListener("click", () => {
                              button8a.remove();
                              button8b.remove();
                              button8c.remove();
                              button8d.remove();
                              button8f.remove();
                              button8e.remove();
                              if (id === "button8d") {
                                title.innerText =
                                  "Сongratulations! Ты дошел до конца!";

                                const div = document.createElement("div");
                                div.className = "foto";
                                div.textContent = "creator";
                                document
                                  .querySelector(".button-container")
                                  .append(div);

                                const link = document.createElement("a");
                                link.href =
                                  "https://lutsdm.github.io/frontEnd/";
                                link.textContent = "creator";
                                link.style.display = "block";

                                document
                                  .querySelector(".button-container")
                                  .append(link);
                              } else {
                                title.innerText = "Спробуй ще. F5.";

                                const div = document.createElement("div");
                                div.className = "facespalm";

                                document
                                  .querySelector(".button-container")
                                  .append(div);
                              }
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
