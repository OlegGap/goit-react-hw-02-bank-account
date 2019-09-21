import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Article = styled.article`
  padding: 24px;
  height: 400px;
  border: 1px none #e6ecf1;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 6px 28px 0 rgba(24, 52, 117, 0.2);
`;
const ArcticleH1 = styled.h1`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;
const ArcticleP = styled.p`
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0;
`;

const Publication = ({ items, page }) => {
  const currentContent = items[page];
  return (
    <Article className="publication">
      <ArcticleH1>{currentContent.title}</ArcticleH1>
      <ArcticleP>{currentContent.text}</ArcticleP>
    </Article>
  );
};

Publication.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};

export default Publication;
