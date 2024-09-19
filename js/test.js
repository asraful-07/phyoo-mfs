document.getElementById('btn-add').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('btn-add');
    const inputAddMoney = document.getElementById('input-add-money').value; 
    const addNumber = parseFloat(inputAddMoney);
    const inputPin = document.getElementById('input-pin').value; 
    // console.log(inputAddMoney, inputPin);
    if(inputPin === '9211'){
        // console.log(true)
        const accountBalance = document.getElementById('account-balance').innerText;
        // console.log(accountBalance);
        const addBalance = parseFloat(accountBalance);
        const newBalance = addBalance + addNumber;
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('failed to mony ! please try agin')
    }
});