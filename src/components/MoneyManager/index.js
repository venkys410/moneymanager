import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionType: transactionTypeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionsList: updatedList})
  }

  onTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  onOptionChange = event => {
    this.setState({optionType: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionType} = this.state
    const option = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionType,
    )
    const {displayText} = option
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionType: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    let incomeAmount = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    let expensesAmount = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    let incomeAmount = 0
    let expensesAmount = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    const balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const balance = this.getBalance()
    const income = this.getIncome()
    const expense = this.getExpenses()
    const {transactionsList, titleInput, amountInput, optionType} = this.state

    return (
      <div className="app-container">
        <div className="moneyManager-page">
          <div className="header">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="header-para">
              Welcome back to your{' '}
              <span className="app-name">Money Manager</span>
            </p>
          </div>
          <div className="detail-cards-container">
            <MoneyDetails balance={balance} income={income} expense={expense} />
          </div>
          <div className="addTransaction-history-container">
            <form className="form" onSubmit={this.onClickAdd}>
              <h1 className="form-heading">Add Transaction</h1>
              <div className="form-element">
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input-bar"
                  placeholder="TITLE"
                  onChange={this.onTitleChange}
                  value={titleInput}
                />
              </div>
              <div className="form-element">
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input-bar"
                  placeholder="AMOUNT"
                  onChange={this.onAmountChange}
                  value={amountInput}
                />
              </div>
              <div className="form-element">
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  className="input-bar"
                  id="type"
                  onChange={this.onOptionChange}
                  value={optionType}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div className="transactionHistory-container">
              <h1 className="table-heading">History</h1>
              <div className="transactions-table-container">
                <ul className="transaction-table">
                  <li className="table-header">
                    <p className="header-cell">Title</p>
                    <p className="header-cell">Amount</p>
                    <p className="header-cell">Type</p>
                  </li>
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      details={eachTransaction}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
