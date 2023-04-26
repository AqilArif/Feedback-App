import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

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

FeedbackList.PropTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      text: PropTypes.isRequired.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList