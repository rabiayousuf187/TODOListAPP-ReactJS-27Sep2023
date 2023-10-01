// Heading.js
import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, text }) => {
  console.log('')
  // Validate the heading level to prevent invalid values
  const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const TagName = validLevels.includes(level) ? level : 'h1';

  return <TagName>{text}</TagName>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
