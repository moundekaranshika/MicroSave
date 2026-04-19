import { useEffect, useState } from 'react';

const API = "http://localhost:5001/api";

function App() {
  const [amount, setAmount] = useState('');
  const [summary, setSummary] = useState({ totalSaved: 0, count: 0, last5: [] });

  const fetchSummary = async () => {
    const res = await fetch(API + '/summary');
    const data = await res.json();
    setSummary(data);
  };

  const addTxn = async () => {
    if (!amount) return;

    await fetch(API + '/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount) })
    });

    setAmount('');
    fetchSummary();
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <div>
      <h1>💰 MicroSave</h1>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={addTxn}>Add</button>

      <h2>Total Saved: ₹{summary.totalSaved.toFixed(2)}</h2>
      <h3>Transactions: {summary.count}</h3>

      <h3>Recent Transactions</h3>
      <ul>
        {summary.last5.map((t) => (
          <li key={t._id}>
            ₹{t.amount} → Saved ₹{t.saved}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
