// создание объекта а именно аккаунта
let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance += sum)
    : alert("Некорректная сумма пополнения");
};

bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Некорректная сумма списания");
};

bankAccount.checkBalance = function () {
  console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

//создание массива объектов/аккаунтов
const bank = [];

//функция создания новых аккаунтов
function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  const emoji = String.fromCodePoint(128512 + Math.floor(Math.random() * 80));

  if (name) {
    bank.push({
      emoji,
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }
  nameInput.value = "";
}

// дисплей банка
function showAccounts() {
  const accountList = document.getElementById("accountList");

  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    //конструктор строки дисплея
    const li = document.createElement("li");

    const spanId = document.createElement("span");
    spanId.id = "id";
    spanId.textContent = `${account.emoji}ID: ${account.accountNumber}, `;

    const spanName = document.createElement("span");
    spanName.id = "name";
    spanName.textContent = `Name: ${account.accountHolderName}, `;

    const spanBalance = document.createElement("span");
    spanBalance.id = "balance";
    spanBalance.textContent = `Balance: ${account.balance}`;

    li.append(spanId, spanName, spanBalance); // добавляем в строку

    const deleteBtn = document.createElement("button"); // создаем del
    deleteBtn.textContent = "Delete"; // подписываем

    const editBtn = document.createElement("button"); // создаем edit
    editBtn.textContent = "Edit"; // подписываем

    li.append(deleteBtn); // добавляем в строку кнопку удалить
    li.append(editBtn); // добавляем в строку кнопку редактировать
    accountList.append(li); // добавляем саму строку в блок дисплея бянка

    deleteBtn.onclick = function () {
      // функция удаления
      const answer = bank.splice(index, 1);
      li.remove();
      showAccounts();
    };

    if (account.balance > 10000) {
      //функция фичи Голд кард
      const spanGoldCard = document.createElement("span"); //создаем
      spanGoldCard.id = "goldCard"; //назначаем id
      spanGoldCard.textContent = "$ Gold Card $"; //подписываем
      li.append(spanGoldCard); //добавляем в строку
    }

    editBtn.onclick = function () {
      //функция редактирования
      spanBalance.remove(); //подчищаем лишние кнопки
      deleteBtn.remove();
      editBtn.remove();

      const goldCardElement = li.querySelector("#goldCard"); //подчищаем голд кард так как он нам мешает в едит
      if (goldCardElement) goldCardElement.remove();

      const editInput = document.createElement("input"); //меняем импут чтобы там остался только то, что нужно
      editInput.type = "text";
      editInput.value = spanName.textContent
        .replace("Name: ", "")
        .replace(", ", "");

      spanBalance.remove;

      spanName.appendChild(editInput); //добавляем новый вид инпута

      const saveBtn = document.createElement("button"); //создаем кнопку сейв
      saveBtn.textContent = "Save"; //подписываем

      spanName.appendChild(editInput); //добавляем новый инпут
      spanName.appendChild(saveBtn); //добовляем кнопку сейв

      saveBtn.onclick = function () {
        //переназначаем новое значения имени пользователя аккаунтом в массиве аккаунтов и выводим в дисплей
        account.accountHolderName = editInput.value;
        showAccounts();
      };
    };
  });
}

// сортировка
const sortBtn = document.createElement("button"); //создаем кнопку сортировки
sortBtn.textContent = "A"; //подписываем
show.append(sortBtn); //добавляем в блок, чтобы разместить его в углу дисплея
sortBtn.classList.add("sort-button"); //прописываем кнопке класс sort-button
let isAlphabetical = true; //устанавливаем флаг по умолчанию кнопке указывать на алфавитную сортировку (сортировки пока нет)
sortBtn.onclick = function () {
  //функция сортировки

  if (isAlphabetical) {
    bank.sort((a, b) => {
      //сортировка по алфавиту
      const nameA = a.accountHolderName.toLowerCase(); //приводим к нижнему регистру
      const nameB = b.accountHolderName.toLowerCase();
      return nameA.localeCompare(nameB); //возвращаем сравнение
    });

    sortBtn.textContent = "123"; //переназываем кнопку
  } else {
    bank.sort((a, b) => b.balance - a.balance); //сортировка по балансу
    sortBtn.textContent = "A"; //переназываем кнопку
  }

  isAlphabetical = !isAlphabetical; //меняем флаг
  showAccounts(); //выводим в дисплей
};

const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");

deposit.onclick = function () {
  operation("deposit");
};

withdraw.onclick = function () {
  operation("withdraw");
};

function operation(operator) {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");
  const accountId = accountIdInput.value.trim();
  const amount = +amountInput.value.trim();

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId
  );

  if (accountFind) {
    if (operator === "deposit") {
      accountFind.deposit(amount);
      accountIdInput.value = "";
      amountInput.value = "";
      showAccounts();
    } else {
      accountFind.withdraw(amount);
      accountIdInput.value = "";
      amountInput.value = "";
      showAccounts();
    }
  } else {
    alert("Account not found");
  }
}
