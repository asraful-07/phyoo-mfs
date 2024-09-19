document.getElementById('btn-money-out').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('btn-money-out')
    const inputMoneyOut = document.getElementById('input-money-out').value;
    const moneyOut = parseFloat(inputMoneyOut);
    const inputPinOut = document.getElementById('input-pin-out').value;
    // console.log(inputMoneyOut, inputPinOut);
    // this is wrong way
    if(inputPinOut === '1234'){
        // console.log('true');
        const accountBalance = document.getElementById('account-balance').innerText;
        // console.log(accountBalance);
        const outBalance = parseFloat(accountBalance)
        const newBalance = outBalance - moneyOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{

      alert('failed to mony ! please try agin')

    }
});