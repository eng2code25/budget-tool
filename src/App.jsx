import "./App.css";

function App() {
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
          <input placeholder="Enter transaction here..." type="text"></input>
        </div>
        <div className="amount-container">
          <label>Amount:</label>
          <input placeholder="Enter amount here..." type="number"></input>
        </div>
        <div className="transaction-button">
          <button type="submit">Enter transaction</button>
        </div>
      </form>
      <div>
        <h2 className="transaction-details">Transaction Details</h2>
        <div>
          {/*Dummy transaction to simulate the outline*/}
          <ul className="transaction-list">
            <li className="transaction-item">
              <span>Coffee</span>
              <span>$5.00</span>
              <button className="delete-btn">Delete</button>
            </li>
          </ul>
        </div>
        <h3>Total sum of Expenses:</h3>
      </div>
    </section>
  );
}

export default App;
