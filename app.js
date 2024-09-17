document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const depositButton = document.getElementById('deposit-button');
    const withdrawButton = document.getElementById('withdraw-button');

    depositButton.addEventListener('click', () => {
        const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            let currentBalance = parseFloat(balanceElement.textContent.replace('$', ''));
            currentBalance += depositAmount;
            balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
            document.getElementById('deposit-amount').value = '';
        } else {
            alert('Please enter a valid deposit amount.');
        }
    });

    withdrawButton.addEventListener('click', () => {
        const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            let currentBalance = parseFloat(balanceElement.textContent.replace('$', ''));
            if (withdrawAmount <= currentBalance) {
                currentBalance -= withdrawAmount;
                balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
                document.getElementById('withdraw-amount').value = '';
            } else {
                alert('Insufficient balance.');
            }
        } else {
            alert('Please enter a valid withdrawal amount.');
        }
    });
});
