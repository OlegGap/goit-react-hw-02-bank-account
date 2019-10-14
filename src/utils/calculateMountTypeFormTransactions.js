/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default (transactions, type) =>
  transactions.reduce(
    (balance, transaction) =>
      (balance += transaction.type === type ? transaction.amount : 0),
    0,
  );
