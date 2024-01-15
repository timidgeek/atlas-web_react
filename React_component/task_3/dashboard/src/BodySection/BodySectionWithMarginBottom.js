import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySection">
    <BodySection {...props} />
  </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default BodySectionWithMarginBottom;