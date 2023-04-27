import propTypes from "prop-types"

const FeedbackStats = ({ feedback }) => {

  // Calculate Ratings Average

  // We want to loop through all the ratings together with REDUCE() method and then we will multiply by the length of the 

  // Feedback items That should give us the average

  let average = feedback.reduce((accumulator, currentValue) => {

    return accumulator + currentValue.rating // This line will give you the sum of all ratings like 27

  }, 0) / feedback.length

  // This line will restrict the average to only one decimail not 0.00255....
  
  average = average.toFixed(1).replace(/[.,]0$/, '')
  
  // Regular Expression (Regex) So it's basically saying If it's 0 then replace it with nothing

  return (
    <div className='feedback-stats'>
        <h4>
            {feedback.length} Reviews
        </h4>

        <h4>
            Average Rating: {isNaN(average) ? 0 : average}
        </h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: propTypes.array.isRequired,
}

export default FeedbackStats