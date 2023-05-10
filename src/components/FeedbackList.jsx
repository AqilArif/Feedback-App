import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'

const FeedbackList = ( { feedback, handleDelete } ) => {

  if (!feedback || feedback.length === 0) {
    return <p className='text-center'>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {
        feedback.map((item) => {
          return (
            <motion.div 
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <FeedbackItem 
                item={item} 
                key={item.id}  
                handleDelete={handleDelete} 
              />
            </motion.div>
          )
        })
      }
      </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: propTypes.arrayOf(
    propTypes.shape({
      // id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      rating: propTypes.number.isRequired,
    })
  )
}

export default FeedbackList