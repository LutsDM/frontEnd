
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
  if (name) {
    bank.push({
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

  for (const account of bank) {
    
    emoji = String.fromCodePoint(128512 + Math.floor(Math.random() * 80));

     const li = document.createElement('li');
     li.textContent = `${emoji} ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
     accountList.append(li);     
     
     
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     li.appendChild(deleteButton); 
    
     deleteButton.onclick = function () {
      const index = bank.findIndex(e => e.accountNumber === account.accountNumber);
      if (index !== -1) {
        bank.splice(index, 1); 
        showAccounts(); 
      }
      
   
    };     
 }
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
      showAccounts()
    } else {
      accountFind.withdraw(amount);
      showAccounts()
    }
  } else {
    alert("Account not found");
  }

  accountIdInput.value = "";
  amountInput.value = "";
}
