import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ControlsSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const ControlsButton = styled.button`
  display: inline-block;
  min-width: 240px;
  border: 0
  padding: 8px 16px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  background-color: #3884ff;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &[disabled] {
    pointer-events: none;
    background-color: #bdbdbd;
  }
  &:hover,
  &:focus {
    background-color: #1f65d6;
  }
`;

const Controls = ({ items, page, handleNextPage, handlePrevPage }) => {
  const isDisabledButtonNext = page === items.length - 1;
  const isDisabledButtonPrev = page === 0;
  return (
    <ControlsSection className="controls">
      <ControlsButton
        type="button"
        onClick={handlePrevPage}
        className="button"
        disabled={isDisabledButtonPrev}
      >
        Назад
      </ControlsButton>
      <ControlsButton
        type="button"
        onClick={handleNextPage}
        className="button"
        disabled={isDisabledButtonNext}
      >
        Вперед
      </ControlsButton>
    </ControlsSection>
  );
};

Controls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
};

export default Controls;
