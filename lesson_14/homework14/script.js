let bankAccount = {
  accountNumber: "10000",
  accountHolderName: "",
  balance: 0
}

// this.balance += sum
bankAccount.deposit = function(sum) {
  sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") // this.balance = this.balance + sum
}

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function(sum) {
  sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}

// Просмотр баланса
bankAccount.checkBalance = function() {
  console.log(`Баланс аккаунта № ${this.accountNumber} клиента:${this.accountHolderName}  равен: ${this.balance}`);
}

const bank = [];

function createAccount() {
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();

  // falsy null, '', 0, undefined, NaN
  if (name) {
      bank.push({
          ...bankAccount,
          accountNumber: bank.length + 1,
          accountHolderName: name
      })
      alert('Account created successfully')
  } else {
      alert('Please, enter a valid name')
  }

  nameInput.value = '';
  console.log(bank);
}

function showAccounts() {
  // HW
}


//Добавляем обработчики событий навешивая функции на кнопки и поле дисплей.

//Депозит

const depositButton = document.querySelector(".deposit");

depositButton.addEventListener("click", (event) => {
  event.preventDefault(); //чтобы страница не перезагружалась убиваем базовую функцию кнопки

  //получение значений
  const accountNumber = document.querySelector("#account").value; //ищем поле куда пользователь пишет номер счета
  const depositAmount = parseFloat(document.querySelector("#deposit").value); //ищем поле куда пользователь пишет сумму на депозит
  //parseFloat(...): превращает введенную строку в число с плавающей запятой. Это важно, чтобы работать с числами, а не с текстом.

  //находим акк по номеру.Если такой аккаунт найден, переменная account будет ссылаться на объект этого аккаунта.
  const account = bankAccounts.find(
    (acc) => acc.accountNumber === accountNumber
  );

  account.deposit(depositAmount); //закидываем на счет
});

// Снятие. Почти также как с депозитом
const withdrawButton = document.querySelector(".withdraw");
withdrawButton.addEventListener("click", (event) => {
  event.preventDefault();

  const accountNumber = document.querySelector("#account").value;
  const withdrawAmount = parseFloat(document.querySelector("#withdraw").value);

  const account = bankAccounts.find(
    (acc) => acc.accountNumber === accountNumber
  );
  account.withdraw(withdrawAmount);
});

//Выводим баланс в поле дисплей
const checkButton = document.querySelector(".check");
const displayDiv = document.querySelector(".display"); // Находим div для отображения результата

checkButton.addEventListener("click", (event) => {
  event.preventDefault();

  const accountNumber = document.querySelector("#account").value;

  const account = bankAccounts.find(
    (acc) => acc.accountNumber === accountNumber
  );

  account.checkBalance(displayDiv); //вызываем метод чекбаланс для выбранного аккаунта и выводим в дисплей див(наш дисплей)
});

//Работа кнопки Reset
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    
    document.querySelector("#account").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#deposit").value = "";
    document.querySelector("#withdraw").value = "";

    
    displayDiv.textContent = "";
});
