document.getElementById('btn-cash-out').addEventListener('click', function(){
    // console.log('btn-cash-out')
    // show cash out button click
    document.getElementById('cash-out-from').classList.remove('hidden');

    // hide the add money from
    document.getElementById('cash-add-from').classList.add('hidden');
});

// show add money from and hide the cash out from
document.getElementById('btn-cash-add').addEventListener('click', function(){
     document.getElementById('cash-add-from').classList.remove('hidden');
     document.getElementById('cash-out-from').classList.add('hidden');
});