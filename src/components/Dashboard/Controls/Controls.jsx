import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.scss';

const Controls = ({ addTransaction, handleChange, value }) => {
  return (
    <section className={styles.controls}>
      <form className="form" onSubmit={evt => evt.preventDefault()}>
        <input
          type="number"
          value={value === 0 ? '' : value}
          onChange={handleChange}
          placeholder="Enter your amount"
        />
        <button type="button" name="deposit" onClick={addTransaction}>
          Deposit
        </button>
        <button type="button" name="withdraw" onClick={addTransaction}>
          Withdraw
        </button>
      </form>
    </section>
  );
};

Controls.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Controls;
