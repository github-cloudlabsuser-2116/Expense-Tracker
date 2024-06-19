class ExpenseTracker {
    constructor() {
        this.expenses = [];
        this.init();
    }

    init() {
        this.render();
    }

    addExpense(name, amount) {
        this.expenses.push({ name, amount });
        this.render();
    }

    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <h2>Total Expenses: $${this.getTotalExpenses()}</h2>
            <div>
                <input type="text" id="name" placeholder="Expense Name">
                <input type="number" id="amount" placeholder="Amount">
                <button onclick="expenseTracker.addExpense(document.getElementById('name').value, document.getElementById('amount').value)">Add Expense</button>
            </div>
            <div>
                ${this.expenses.map(expense => `<div class="expense-item"><span>${expense.name}</span><span>$${expense.amount}</span></div>`).join('')}
            </div>
        `;
    }
}

const expenseTracker = new ExpenseTracker();