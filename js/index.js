// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step - 1 set prevent default behavior
    event.preventDefault();
    console.log('step - 1 set')
    // step-3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})