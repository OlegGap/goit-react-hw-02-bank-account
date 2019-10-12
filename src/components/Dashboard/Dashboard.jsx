import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import checkCorrectInput from '../../utils/checkCorrectInput.js';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      balance: 0,
      currentInput: 0,
      currentEntered: 0,
      currentWithdrawals: 0,
    };
  }

  addTransaction = ({ target }) => {
    const { currentInput } = this.state;

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
        this.setState(prevState => ({
          currentWithdrawals: prevState.currentWithdrawals + currentInput,
          balance: prevState.balance - currentInput,
        }));
        toast.success(`Успешно виведено ${currentInput}$!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        this.setState(prevState => ({
          currentEntered: prevState.currentEntered + currentInput,
          balance: prevState.balance + currentInput,
        }));
        toast.success(`Депозит успешно добавден!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    }
    this.setState({ currentInput: 0 });
  };

  handleChange = ({ target }) => {
    const value = Number(target.value);
    this.setState({ currentInput: value });
  };

  render() {
    const {
      transactions,
      balance,
      currentWithdrawals,
      currentEntered,
      currentInput,
    } = this.state;
    return (
      <>
        <Controls
          addTransaction={this.addTransaction}
          handleChange={this.handleChange}
          value={currentInput}
        />
        <Balance
          withdrawals={currentWithdrawals}
          enterd={currentEntered}
          balance={balance}
        />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </>
    );
  }
}
export default Dashboard;
