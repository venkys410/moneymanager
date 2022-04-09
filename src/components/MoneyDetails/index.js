// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <>
      <div className="balance-bg details-card">
        <img
          className="card-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="card-text">
          <p className="card-heading">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-bg details-card">
        <img
          className="card-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="card-text">
          <p className="card-heading">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-bg details-card">
        <img
          className="card-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="card-text">
          <p className="card-heading">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
