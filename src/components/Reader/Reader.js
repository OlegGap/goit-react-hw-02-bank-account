import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';

const ReaderDiv = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  handleNextPage = () => {
    this.setState(prevState => (prevState.page += 1));
  };

  handlePrevPage = () => {
    this.setState(prevState => (prevState.page -= 1));
  };

  render() {
    return (
      <ReaderDiv className="reader">
        <Publication items={this.props.items} page={this.state.page} />
        <Counter items={this.props.items} page={this.state.page} />
        <Controls
          items={this.props.items}
          page={this.state.page}
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
        />
      </ReaderDiv>
    );
  }
}
Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
