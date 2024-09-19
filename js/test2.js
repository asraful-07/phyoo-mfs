document.getElementById('btn-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputCashOut = document.getElementById('input-cash-out').value;
    const outNumber = parseFloat(inputCashOut);
    const inputPin = document.getElementById('input-pin-out').value;
    if(inputPin === '9211'){
        const accountBalance = document.getElementById('account-balance').innerText;
        const addBalance =parseFloat(accountBalance);
        const newBalance = addBalance - outNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to mony ! please try agin')
    }
});