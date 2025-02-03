let expenses = [];
let totalAmount = 0;

const categorySection = document.querySelector('#category-select');
const addButton = document.querySelector('#add-btn');
const amountInput = document.querySelector('#amount-input');
const dateInput = document.querySelector('#date-input');
const expenseTableBody = document.querySelector('#expnese-table-body');
const totalAmountCall = document.querySelector('#total-amount');

addButton.addEventListener('click', function () {
    const category = categorySection.value.trim();
    const amount = Number(amountInput.value);
    const date = dateInput.value.trim();

    if (category === "" || date === "" || amount <= 0 || isNaN(amount)) {
        alert('Please enter all fields correctly');
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);
    totalAmount += amount;
    totalAmountCall.textContent = totalAmount;

    addExpenseToTable(expense);
    amountInput.value = ""; // Clear input fields after adding
    dateInput.value = "";
});

function addExpenseToTable(expense) {
    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        removeExpense(expense, newRow);
    });

    deleteCell.appendChild(deleteBtn);
}

function removeExpense(expense, row) {
    const index = expenses.indexOf(expense);
    if (index !== -1) {
        expenses.splice(index, 1);
        totalAmount -= expense.amount;
        totalAmountCall.textContent = totalAmount;
        row.remove();
    }
}
