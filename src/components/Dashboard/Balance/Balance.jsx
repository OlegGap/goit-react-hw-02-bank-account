import React from 'react';
import PropTypes from 'prop-types';
import styles from './balance.module.scss';

const Balance = ({ withdrawals, enterd, balance }) => {
  return (
    <section className={styles.balance}>
      <span>⬆{withdrawals}$</span>
      <span>⬇{enterd}$</span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

Balance.defaultProps = {
  withdrawals: 0,
  enterd: 0,
  balance: 0,
};

Balance.propTypes = {
  withdrawals: PropTypes.number,
  enterd: PropTypes.number,
  balance: PropTypes.number,
};

export default Balance;
