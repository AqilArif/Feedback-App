import FeedbackItem from './FeedbackItem'

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

export default FeedbackList