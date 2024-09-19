// cash out button
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('cash-add-from').classList.add('hidden');
})

// cash add button
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-add-from').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
});