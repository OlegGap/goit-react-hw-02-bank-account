import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import checkCorrectInput from '../../utils/checkCorrectInput.js';

class Dashboard extends Component {
  state = {
    transactions: [],
  };

  addTransaction = ({ target }) => {
    const currentInput = Number(target.parentNode.querySelector('input').value);
    target.parentNode.reset();
    if (checkCorrectInput(currentInput, target.name, this.state.balance)) {
      const transaction = {
        id: uuidv4(),
        type: target.name,
        amount: currentInput,
        date: new Date().toLocaleString(),
      };
      this.setState(prevState => ({
        transactions: [...prevState.transactions, transaction],
      }));

      if (transaction.type === 'withdraw') {
        toast.success(`Успешно виведено ${currentInput}$!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        toast.success(`Депозит успешно добавден!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    }
  };

  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Controls addTransaction={this.addTransaction} />
        <Balance transactions={transactions} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}
export default Dashboard;
