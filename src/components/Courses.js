import React from 'react'
import courses from '../data/courses'

import CourseInfoDisplay from './CourseInfoDisplay'

export default () => (
  <>
    {courses.map(({ dept, number, title, prereqs, description }) => (
      <CourseInfoDisplay
        dept={dept}
        number={number}
        title={title}
        prereqs={prereqs}
        description={description} />
    ))}
  </>
)
