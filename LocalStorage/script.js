// localStorage.setItem("token","abc123")
// localStorage.setItem("username","abc")
// localStorage.setItem("password","abc123")
class Bank{
    createAccount(){
        let accountNumber=bk_acno.value;
        let personName=bk_pname.value;
        let accountType=bk_actype.value;
        let password=bk_pwd.value;
        let balance=2000;
        let account={
            accountNumber,personName,accountType,password,balance
        }
        localStorage.setItem(account.accountNumber,JSON.stringify(account))
        alert("Account Created")
    }
}

var obj=new Bank()