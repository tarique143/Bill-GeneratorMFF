 let totalAmount = 0;
let srNoCounter = 1;

function addItem() {
    const productName = document.getElementById('product-name').value;
    const sqFeetLength = parseFloat(document.getElementById('sq-feet-length').value);
    const sqFeetWidth = parseFloat(document.getElementById('sq-feet-width').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (productName && rate > 0) {
        let totalSqFeet = 1;  // Default to 1 if dimensions are not provided
        if (!isNaN(sqFeetLength) && !isNaN(sqFeetWidth)) {
            totalSqFeet = sqFeetLength * sqFeetWidth;
        }

        const totalAmountForItem = totalSqFeet * rate;
        totalAmount += totalAmountForItem;

        const billTableBody = document.querySelector('#bill-table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${srNoCounter}</td>
            <td>${productName}</td>
            <td>${!isNaN(sqFeetLength) ? sqFeetLength.toFixed(2) : 'N/A'}</td>
            <td>${!isNaN(sqFeetWidth) ? sqFeetWidth.toFixed(2) : 'N/A'}</td>
            <td>${totalSqFeet.toFixed(2)}</td>
            <td>₹${rate.toFixed(2)}</td>
            <td>₹${totalAmountForItem.toFixed(2)}</td>
        `;

        billTableBody.appendChild(newRow);
        document.getElementById('total-amount').textContent = `${totalAmount.toFixed(2)}`;

        srNoCounter++;
        document.getElementById('bill-form').reset();
    } else {
        alert('Please enter valid item details.');
    }
}

function calculateBalance() {
    const paidAmount = parseFloat(document.getElementById('paid-amount').value) || 0;
    const remainingAmount = totalAmount - paidAmount;
    document.getElementById('display-paid-amount').textContent = paidAmount.toFixed(2);
    document.getElementById('remaining-amount').textContent = remainingAmount.toFixed(2);
}

function printBill() {
    window.print();
}
