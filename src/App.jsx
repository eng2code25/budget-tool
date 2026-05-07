import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [transactionInput, setTransactionInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [allTransactions, setAllTransactions] = useState(() => {
    const saved = localStorage.getItem("budget-app");
    return saved ? JSON.parse(saved) : [];
  });
  const [typeInput, setTypeInput] = useState("Expenses");

  const deleteTransaction = (deleteIndex) => {
    const updateTransaction = allTransactions.filter(
      (_, index) => index !== deleteIndex,
    );
    setAllTransactions(updateTransaction);
  };

  const editTransaction = (editIndex) => {
    if (amountInput.trim() !== "") {
      alert("Please save your transactions!");
      return;
    }

    if (transactionInput.trim() !== "") {
      alert("Please save your transactions!");
      return;
    }

    const savedTransaction = allTransactions[editIndex];
    setTransactionInput(savedTransaction.name);
    setAmountInput(savedTransaction.amount);
    setTypeInput(savedTransaction.type);
    deleteTransaction(editIndex);
  };

  useEffect(() => {
    localStorage.setItem("budget-app", JSON.stringify(allTransactions));
  }, [allTransactions]);

  {
    /*Math section*/
  }
  const totalExpenses = allTransactions
    .filter((item) => item.type === "Expenses")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const totalIncome = allTransactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <section>
      <div className="header">
        <h1>Monthly Budget Tracker</h1>
      </div>
      <div className="summary">
        <div className="balance-card">
          <h2>Total income: ${totalIncome}</h2>
        </div>
        <div className="balance-card">
          <h2>Total Expenses: ${totalExpenses}</h2>
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
          <select
            value={typeInput}
            onChange={(e) => setTypeInput(e.target.value)}
          >
            <option value="Expense">Expenses</option>
            <option value="Income">Income</option>
          </select>
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

              if (transactionInput.trim() == "" || amountInput == "") {
                alert("Please fill out the inputs before saving!");
                return;
              }

              const newObject = {
                name: transactionInput,
                amount: amountInput,
                type: typeInput,
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
                <span>{item.type}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(index)}
                >
                  Delete
                </button>
                <button
                  className="edit-btn"
                  onClick={() => {
                    editTransaction(index);
                  }}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
