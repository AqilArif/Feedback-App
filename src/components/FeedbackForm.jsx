import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

const FeedbackForm = () => {

  const [text, setText] = useState(''); 

  const handleTextChange = (event) => {
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
                
                <Button type="submit">Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm