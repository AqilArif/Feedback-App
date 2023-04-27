import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'

const FeedbackList = ( { feedback } ) => {
  return (
    <div className='feedback-list'>
      {
        feedback.map((item) => {
          return <FeedbackItem item={item} key={item.id} />
        })
      }
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      rating: propTypes.number.isRequired,
    })
  )
}

export default FeedbackList