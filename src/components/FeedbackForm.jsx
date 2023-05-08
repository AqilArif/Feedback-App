import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ handleAdd }) => {

  const [text, setText] = useState('');

  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true); // send button is disabled until the length is not meet 
  
  const [message, setMessage] = useState(''); 

  const handleTextChange = (event) => {

    if (text === '') {

        setBtnDisabled(true);
        
        setMessage(null);
    
    } else if (text !== '' && text.trim().length <= 10) {

        setMessage('Text must be atleast 10 characters');
        
        setBtnDisabled(true);
    
    } else {
        
        // So if there is atleast 10 characters and something types in then we wil....

        setBtnDisabled(false);
        
        setMessage(null);
    }

    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim().length > 10) {
        
        const newFeedback = {
            text: text, // in short form you can also write only text like this (text)
            rating: rating
        }

        handleAdd(newFeedback);

        setText(''); // After add the feedback set it to it's initial state
    }
  }
  
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would rate your service with us?</h2>

            <RatingSelect select={(rating) => setRating(rating)} />

            <div className="input-group">
                <input 
                    type="text"
                    value={text}
                    onChange={handleTextChange} 
                    placeholder="Write a review" 
                />
                
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {
                message && <div className='message'> {message} </div>
            }
        </form>
    </Card>
  )
}

export default FeedbackForm