function createWallet(){
    let balance =0;
    return{
        addMoney:function(amount){
            balance+=amount;
            console.log(`Added ${amount}`);
        },
        checkBlannce:function(){
            console.log(`current balance:${balance}`);
            return balance;
        }
    };
}
let myWallet = createWallet();
myWallet.addMoney(5000);
myWallet.addMoney(2100);
myWallet.checkBlannce(); 
