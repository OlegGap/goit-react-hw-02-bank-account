import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CounterP = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 16px;
`;

const Counter = ({ items, page }) => {
  return (
    <CounterP className="counter">
      {page + 1}/{items.length}
    </CounterP>
  );
};
Counter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};

export default Counter;
