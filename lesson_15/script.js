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

const bank = [];

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

function showAccounts() {
  const accountList = document.getElementById("accountList");

  accountList.innerHTML = "";

  bank.forEach((account, index) => {
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

    li.append(spanId, spanName, spanBalance);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    li.append(deleteBtn);
    li.append(editBtn);
    accountList.append(li);

    deleteBtn.onclick = function () {
      const answer = bank.splice(index, 1);
      li.remove();
      showAccounts();
    };

    if (account.balance > 10000) {
      const spanGoldCard = document.createElement("span");
      spanGoldCard.id = "goldCard";
      spanGoldCard.textContent = "$ Gold Card $";
      li.append(spanGoldCard);
    }

    editBtn.onclick = function () {
      spanBalance.remove();
      deleteBtn.remove();
      editBtn.remove();

      const goldCardElement = li.querySelector("#goldCard");
      if (goldCardElement) goldCardElement.remove();
      
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = spanName.textContent
        .replace("Name: ", "")
        .replace(", ", "");

      spanBalance.remove;

      spanName.appendChild(editInput);

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";

      spanName.appendChild(editInput);
      spanName.appendChild(saveBtn);

      saveBtn.onclick = function () {
        account.accountHolderName = editInput.value;
        showAccounts(); 
      };
    };
    
  });
}
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
