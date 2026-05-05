import { useState } from "react";
import "./App.css";

function App() {
  const [transactionInput, setTransactionInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [allTransactions, setAllTransactions] = useState([]);

  return (
    <section>
      <div className="header">
        <h1>Monthly Budget Tracker</h1>
      </div>
      <div className="summary">
        <div className="balance-card">
          <h2>Total income:</h2>
        </div>
        <div className="balance-card">
          <h2>Total Expenses:</h2>
        </div>
      </div>
      <form className="input-form">
        <div>
          <label>Transaction:</label>
          <input
            placeholder="Enter transaction here..."
            type="text"
            value={transactionInput}
            onChange={(e) => setTransactionInput(e.target.value)}
          ></input>
        </div>
        <div className="amount-container">
          <label>Amount:</label>
          <input
            placeholder="Enter amount here..."
            type="number"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          ></input>
        </div>
        <div className="transaction-button">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const newObject = {
                name: transactionInput,
                amount: amountInput,
              };
              setAllTransactions([...allTransactions, newObject]);
              setTransactionInput("");
              setAmountInput("");
            }}
          >
            Enter transaction
          </button>
        </div>
      </form>
      <div>
        <h2 className="transaction-details">Transaction Details</h2>
        <div>
          <ul className="transaction-list">
            {allTransactions.map((item, index) => (
              <li className="transaction-item" key={index}>
                <span>{item.name}</span>
                <span>{item.amount}</span>
                <button className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <h3>Total sum of Expenses:</h3>
      </div>
    </section>
  );
}

export default App;
