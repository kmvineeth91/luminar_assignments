class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }

    session={}

    validateAccountNumber(acno){
        return acno in this.accounts?true:false
    }

    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
            let pswd=this.accounts[acno].password
            if(pswd==password){
                console.log('acess granted');
                this.session['user']=acno

            }else{
                console.log('invalid password');
            }

        }else{
            console.log('Invalid account number');
        }

    }

    getBalance(acno){
        return this.accounts[acno].balance

    }

    balanceEnquiry(){
        if('user' in this.session){
            let loggedUser=this.session['user']
            console.log(this.getBalance(loggedUser));
        }else{
            console.log('invalid session');
        }
    }

    loginRequired(){
        return 'user' in this.session?true:false
    }

    loggedUser(){
        if(this.loginRequired()){
            return this.session['user']
        }
    }

    fundTransfer(to_acno,amount){
      if(this.loginRequired())  {
          let loggedUser=this.session['user']
         if(this.validateAccountNumber(to_acno)){
            let curBalance=this.getBalance(loggedUser)
            if(amount>curBalance){
                console.log("Insufficient balance");
  
            }else{
                console.log("Transactions completed");
                
            }

         }else{
             console.log("Invalid to account number");
         }

      }else{
          console.log('invalid session');
      }

    }
    
    getDebitTransaction(){
        let user=this.loginRequired()
        this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))

    }

    getCreditTransaction(){
        let user=this.loginRequired()
        this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))

    }

    getTransactionHistory(){

    }
}

var bank=new Bank()
console.log(bank.validateAccountNumber(1001));  
bank.authenticate(1000,"userone")
bank.balanceEnquiry()
bank.fundTransfer(1002,1000)
bank.getCreditTransaction()

