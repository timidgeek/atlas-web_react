import React from 'react';
import CourseListRow from "./CourseListRow";
import { CourseShape } from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// NOTE - APHRODITE WON'T ALLOW ME TO ADD STYLES TO CUSTOM `CourseListRow` MODULE. 
// ALL STYLING OF ROWS WILL HAVE TO HAPPEN IN  `CourseListRow.js` 

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow 
          isHeader={true} 
          textFirstCell="Available courses"
        />
        <CourseListRow 
          isHeader={true} 
          textFirstCell="Course name" 
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow 
          isHeader={false} 
          textFirstCell="No course available yet" 
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
              />
          ))
        )}
      </tbody>
    </table>
  );
};

// PROP TYPES:

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

// APHRODITE STYLES:

const styles = StyleSheet.create({

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
    border: '3px solid #6A7AC0',
  },

  tableBorder: {
    border: '1px solid #6A7AC0',
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


export default CourseList;