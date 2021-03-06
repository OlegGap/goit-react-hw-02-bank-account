import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.scss';

const Controls = ({ addTransaction }) => (
  <section className={styles.controls}>
    <form className="form" onSubmit={evt => evt.preventDefault()}>
      <input type="number" placeholder="Enter your amount" />
      <button type="button" name="deposit" onClick={addTransaction}>
        Deposit
      </button>
      <button type="button" name="withdraw" onClick={addTransaction}>
        Withdraw
      </button>
    </form>
  </section>
);

Controls.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default Controls;
