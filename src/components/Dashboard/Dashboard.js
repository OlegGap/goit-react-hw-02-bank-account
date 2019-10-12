import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

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

  componentDidMount() {
    const persistedTransactions = localStorage.getItem('transactions');

    if (persistedTransactions) {
      this.setState({
        transactions: JSON.parse(persistedTransactions),
        balance: JSON.parse(localStorage.getItem('balance')),
        currentEntered: JSON.parse(localStorage.getItem('entered')),
        currentWithdrawals: JSON.parse(localStorage.getItem('withdrawals')),
      });
    }
  }

  componentDidUpdate() {
    const {
      transactions,
      balance,
      currentEntered,
      currentWithdrawals,
    } = this.state;
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('balance', JSON.stringify(balance));
    localStorage.setItem('entered', JSON.stringify(currentEntered));
    localStorage.setItem('withdrawals', JSON.stringify(currentWithdrawals));
  }

  addTransaction = ({ target }) => {
    const { currentInput } = this.state;
    if (currentInput === 0) {
      toast.warn('Введите сумму для проведения операции!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else if (
      currentInput > this.state.balance &&
      target.name === 'withdraw'
    ) {
      toast.error('На счету недостаточно средств для проведения операции!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
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
