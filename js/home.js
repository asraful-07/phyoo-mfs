document.getElementById('btn-money').addEventListener('click', function(event){
  event.preventDefault()
  // console.log('btn-money');
  const addMoneyNumber = document.getElementById('input-money-add').value;
  const addNumber = parseFloat(addMoneyNumber);
  const inputPin = document.getElementById('input-pin').value;
  // console.log(addMoneyNumber, inputPin);
  
  if(inputPin === '1234'){
      const balance = document.getElementById('account-balance').innerText;
      const addBalance = parseFloat(balance);
      const newBalance = addNumber + addBalance;
      document.getElementById('account-balance').innerText = newBalance;
  }
  else{
      alert('failed to mony ! please try agin')
  
  }
  });