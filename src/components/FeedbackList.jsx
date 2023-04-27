import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'

const FeedbackList = ( { feedback, handleDelete } ) => {

  if (!feedback || feedback.length === 0) {
    return <p className='text-center'>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {
        feedback.map((item) => {
          return (
            <FeedbackItem 
              item={item} 
              key={item.id}  
              handleDelete={handleDelete} 
            />
          )
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