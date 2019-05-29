let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    
  }
  
  get balance(){
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    };
    return balance;
  }

  addTransaction(transaction){
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account
  }
  commit() {
    this.time = new Date();
    this.account.addTransaction(this);  
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

}



const myAccount = new Account("snow-patrol");

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
// console.log('Starting balance:', myAccount.balance);

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(120.00, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Final Balance:', myAccount.balance);


const billBo = new Account('billybob');
console.log('starting Balance:', billBo.balance);

const t1 = new Deposit(120.00, billBo);
t1.commit();

const t2 = new Withdrawal(50.00, billBo);
t2.commit();

console.log('Final Balance:', billBo.balance);
console.log(billBo);



