/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default transactions =>
  transactions.reduce(
    (balance, transaction) =>
      (balance +=
        transaction.type === 'deposit'
          ? transaction.amount
          : -transaction.amount),
    0,
  );
