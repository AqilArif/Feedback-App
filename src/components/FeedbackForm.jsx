import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

const FeedbackForm = () => {

  const [text, setText] = useState('');

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
  
  return (
    <Card>
        <form action="">
            <h2>How would rate your service with us?</h2>

            {/* todo - rating select component */}

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