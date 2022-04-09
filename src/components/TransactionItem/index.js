// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onDeleteTransaction} = props
  const {id, title, amount, type} = details

  const deleteTransaction = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="table-cell">{title}</p>
      <p className="table-cell">{amount}</p>
      <p className="table-cell">{type}</p>
      <button
        type="button"
        testid="delete"
        className="delete-btn"
        onClick={deleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
