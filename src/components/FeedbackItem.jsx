import {FaTimes} from 'react-icons/fa'
import propTypes from 'prop-types'
import Card from "./shared/Card"

const FeedbackItem = ( { item, handleDelete } ) => {

  // Note: When we call a function with any argument then we will call the function like {()=> handleDelete(parameter)}
 
  return (
    <Card reverse={false}>
      <div className='num-display'>
        {item.rating}
      </div>

      <button className="close" onClick={()=> handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>

      <div className="text-display">
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
}

export default FeedbackItem