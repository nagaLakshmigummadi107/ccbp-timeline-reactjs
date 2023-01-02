// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div className="course-description">{description}</div>
      <ul className="course-tags-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="course-tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
