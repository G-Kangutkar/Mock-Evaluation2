
function counter(){
    let count=0;
    return {
        increment: function(){
            count++;
            console.log(count)
        }
    }
}
const c = counter();
c.increment(); 
c.increment(); 
c.increment(); 

function createWallet(){
    let balance =0
    return{
        addMoney:function(amount){
            balance=balance+amount;

        },
        checkBalance: function(){
            console.log(balance)
        }

    }
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 

