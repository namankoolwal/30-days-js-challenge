// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #mainBalance = 0;
    
    deposit(amt){
        this.#mainBalance += amt;
        console.log(`Deposited ₹${amt}. Balance is now ₹${this.#mainBalance}`);
    }

    withdraw(amt){
        if(this.#mainBalance < amt){
            console.log(`Insufficient balance. you can only withdraw ₹${this.#mainBalance}`);
        }
        else{
            this.#mainBalance -= amt;
            console.log(`Withdrawn ₹${amt}. Balance is now ₹${this.#mainBalance}`);
        }
    }
    getBalance() {
        console.log(`Your current balane is ₹${this.#mainBalance}`);
    }
}



// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const namanAccount = new Account();

namanAccount.deposit(100);
namanAccount.withdraw(50);
namanAccount.withdraw(100);
namanAccount.deposit(200);
namanAccount.getBalance()