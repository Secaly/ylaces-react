import React from 'react';
import PropTypes from 'prop-types';
import "./inlineError.css";

const InlineError = ({ text }) => (
  <div className="InlineError">
    { text }
  </div>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
