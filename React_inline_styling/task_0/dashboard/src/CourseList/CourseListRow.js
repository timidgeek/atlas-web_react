import React from 'react';
import './CourseListRow.css';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan="2" style={{ backgroundColor: '#deb5b545'}}>{textFirstCell}</th>
        ) : (
          <>
            <th style={{ backgroundColor: '#f5f5f5ab' }}>{textFirstCell}</th>
            <th style={{ backgroundColor: '#f5f5f5ab' }}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    )
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CourseListRow;