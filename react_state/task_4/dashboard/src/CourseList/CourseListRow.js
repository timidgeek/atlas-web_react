import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan="2" 
              style={{ backgroundColor: '#deb5b545'}}  
              className={css(styles.firstRow, styles.header, styles.headerBorder, styles.cellSpacing)}>
                {textFirstCell}
          </th>
        ) : (
          <>
            <th style={{ backgroundColor: '#f5f5f5ab' }}
              className={css(styles.header, styles.secondRow, styles.headerBorder, styles.cellSpacing)}>
                {textFirstCell}
            </th>
            <th style={{ backgroundColor: '#f5f5f5ab' }}
            className={css(styles.header, styles.secondRow, styles.headerBorder, styles.cellSpacing)}>
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td className={css(styles.tableBorder, styles.cellSpacing)}>{textFirstCell}</td>
        <td className={css(styles.tableBorder, styles.cellSpacing)}>{textSecondCell}</td>
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
// APHRODITE STYLES:

const styles = StyleSheet.create({

  rowChecked: {
    backgroundColor: '#e6e4e4',
  },

  table: {
    marginTop: '20px',
    width: '100%',
    marginBottom: '20px',
    borderCollapse: 'collapse'
  },
  
  header: {
    padding: '12px',
    textAlign: 'left',
  },

  headerBorder: {
    border: '2px solid #6A7AC0',
  },

  tableBorder: {
    border: '2px solid #6A7AC0',
  },

  centerText: {
    textAlign: 'center',
  },
  
  leftText: {
    textAlign: 'left',
  },
  
  firstRow: {
    ':first-child': {
      textAlign: 'center',
    },
  },

  secondRow: {
    ':nth-child(2)': {
      textAlign: 'left',
    },
  },

  cellSpacing: {
    padding: '15px',
  },
});

export default CourseListRow;